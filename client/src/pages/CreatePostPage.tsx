import React, {useContext, useEffect} from 'react'
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {useForm} from "react-hook-form";
import {CreatePostInputs} from "../types";

export const CreatePostPage = () => {

    const {callPopup, token} = useContext(AuthContext)

    const { loading, error, request, clearError } = useHttp()
    const { register, handleSubmit, formState: { errors } } = useForm<CreatePostInputs>()

    useEffect(() => {
        if (error != null) {
            callPopup(error, 'error')
            clearError()
        }
    }, [error, clearError, callPopup])

    const onSubmit = async (data: CreatePostInputs) => {
        try {
            const formData = new FormData()

            formData.append('title', data.title)
            if (data.img[0]){
                formData.append('img', data.img[0])
            }
            if (data.text){
                formData.append('text', data.text)
            }
            const res = await fetch('/api/post/create', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(
                (res) => {
                    callPopup(res.status.toString(), 'success')
                }
            )
        } catch (e: any) {
            alert(e.message)
            callPopup('Data was not saved. ' + e.message, 'error')
        }
    }

    return (
        <div className='flex-1 relative h-full'>
            <div className='grid grid-cols-4'>
                <div className='col-span-2 col-end-4 justify-items-stretch'>
                    <h1 className='mt-10 mb-6 font-logo text-black justify-self-center text-2xl'>Create post</h1>
                    <form className='edit-form font-logo' encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col'>
                            <div>
                                <label htmlFor='title'>Title:</label>
                                <input type='title' id='title' placeholder='Title ...' {...register('title', {required: true, maxLength: 255})} />
                                {errors.title && <span>This field is required and max. length is 255 symbols</span>}
                            </div>
                            <div>
                                <label htmlFor='text'>Text:</label>
                                <textarea
                                    className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'
                                    id='text'
                                    rows={10}
                                    placeholder='Text ...' {...register('text', {required: true})} />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor='img'>Attachment:</label>
                                <input type='file' id='img' placeholder='Choose an image' {...register('img')} />
                            </div>
                        </div>
                        <div className='flex flex-row gap-12 px-12'>
                            <button type='submit' disabled={loading}>Create a post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
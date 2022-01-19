import React, {useContext} from 'react'
import {AuthContext} from "../context/AuthContext"
import {useForm} from "react-hook-form"
import {QaFormProps, QaInputs} from "../types"

export const QAForm = ({ add }: QaFormProps) => {

    const {callPopup, token} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm<QaInputs>()

    const onSubmit = async (data: QaInputs) => {
        try {
            const formData = new FormData()

            formData.append('title', data.title)
            if (data.img[0]){
                formData.append('img', data.img[0])
            }
            if (data.text){
                formData.append('text', data.text)
            }
            await fetch('/api/qa/create', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => response.json()).then(data => {
                add(data.qa)
                reset()
                callPopup('Question was successfully added.', 'success')
            })
        } catch (e: any) {
            callPopup('Question was not saved. ' + e.message, 'error')
        }
    }

    return (
        <form className='flex-col flex qa-form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title'>Your question:</label>
                <input id='title' {...register('title', { required: true })}/>
            </div>
            <div>
                <label htmlFor='text'>Description:</label>
                <textarea id='text' {...register('text', { required: true })}/>
            </div>
            <div>
                <input type='file' className='h-full w-full' id='img' {...register('img')} />
            </div>
            <div className='flex justify-end'>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}
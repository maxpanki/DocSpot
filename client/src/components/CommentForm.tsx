import React, {useContext, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useHttp} from "../hooks/http.hook";
import {CommentFormProps, CreateCommentInputs} from "../types";
import {AuthContext} from "../context/AuthContext";

import sendComment from '../img/send-comment.png';

const CommentForm = ({post, refreshComments}: CommentFormProps) => {
    const { callPopup, token } = useContext(AuthContext)
    const { error, request, clearError } = useHttp()
    const { register, handleSubmit, reset } = useForm<CreateCommentInputs>();

    useEffect(() => {
        if (error != null) {
            callPopup(error, 'error')
            clearError()
        }
    }, [error, clearError, callPopup])

    const onSubmit: SubmitHandler<CreateCommentInputs> = async (data) => {
        try {
            await request('/api/comments/create', 'POST', {
                text: data.text,
                post: post
            }, {
                Authorization: `Bearer ${token}`
            })
            await refreshComments()
            reset()
            callPopup('Comment was added', 'success')
        } catch (e) {}
    };

    return (
        <div className='col-span-11'>
            <form className='font-logo' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='border font-light text-xs rounded border-gray-400 px-3 py-2.5 w-full hover:shadow-inner'
                    type='text' id='text' placeholder='Write your comment... '
                    {...register('text', { required: true })}/>
                <button type='submit' className='absolute -ml-7 mt-2'>
                    <img alt='Attachment file' className='h-5' src={sendComment}/>
                </button>
            </form>
        </div>
    );
}

export default CommentForm
import React, {useContext} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {AddMessageInputs} from "../types";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export const Messages = ({conversationData, messages, refreshMessages}: any) => {

    const { token, callPopup, userId, avatar } = useContext(AuthContext)
    const { user, conversation } = conversationData
    const { request } = useHttp()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddMessageInputs>();

    const onSubmit: SubmitHandler<AddMessageInputs> = async (data) => {
        try {
            const res = await request('/api/messenger/addMessage', 'POST', {
                text: data.text,
                conversationId: conversation._id
            }, {
                Authorization: `Bearer ${token}`
            })
            refreshMessages(res.savedMessage)
            reset()
        } catch (e: any) {
            callPopup(e.message, 'error')
        }
    };

    const getName = () => {
        if (conversation.type === 'Basic') {
            if (user.personName) {
                return <a href={'/profile/'+ user._id} className="text-gray-700 mr-3">{user.personName + ' ' + user.personSecondName}</a>
            }
            if (user.companyName) {
                return <a href={'/profile/'+ user._id} className="text-gray-700 mr-3">{user.companyName}</a>
            }
        } else {
            return <span className="text-gray-700 mr-3">{conversation.secretName}</span>
        }
    }

    const elements = messages.map((message: any) => {
        if (message.owner === userId) {
            return(
                <div key={message._id} className="chat-message">
                    <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                {message.text}
                            </span>
                            </div>
                        </div>
                        <img
                            src={'/uploads/' + avatar}
                            alt="avatar" className="w-6 h-6 rounded-full order-2"/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                {message.text}
                            </span>
                            </div>
                        </div>
                        <img
                            src={'/uploads/' + (conversation.type === 'Basic' ? user.avatar : 'defaultAvatar.bmp')}
                            alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="flex justify-between flex-col col-span-3 h-full max-h-screen">
            <div className="flex sm:items-center justify-between py-1 border-b-2 border-gray-200">
                <div className="flex items-center space-x-4">
                    <img
                        src={'/uploads/' + (conversation.type === 'Basic' ? user.avatar : 'defaultAvatar.bmp')}
                        alt="" className="w-10 sm:w-12 h-10 sm:h-12 ml-5 rounded-full"/>
                    <div className="flex flex-col leading-tight">
                        <div className="text-xl mt-1 flex items-center">
                            {getName()}
                        </div>
                        <span className="text-base text-gray-600">
                                    {user.role}
                                </span>
                    </div>
                </div>
            </div>
            <div id="messages"
                 className="flex flex-col space-y-4 p-3 h-screen overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {elements}
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <div className="relative mb-3 flex">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Write a message ..."
                               className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-full py-3"
                               {...register('text', { required: true })}
                        />
                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                            <button type="submit"
                                    className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="h-6 w-6 transform rotate-90">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
import React, {useEffect} from 'react'
import avatar from "../img/mocup_avatar.png";
import {lock} from "../img/svg/svg";

export const ChatPage = () => {

    useEffect(() => {
        const el = document.getElementById('messages')
        if(el){
            el.scrollTop = el.scrollHeight
        }
    }, [])

    return(
        <div className='flex-1 relative max-h-screen h-full'>
            <div className='flex h-full flex-row grid grid-cols-4'>
                <div className='border-r-2 border-gray-200'>
                    <h1 className='font-logo font-xl py-5 px-3 text-slate-500'>Active chats:</h1>
                    <div className='flex h-16 border-t-2 border-b-2 border-gray-200 bg-blue-100'>
                        <div className="flex items-center max-w-full space-x-3">
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="" className="w-10 absolute sm:w-10 h-10 sm:h-10 ml-5 rounded-full"/>
                            <div className="flex flex-col max-w-full pl-14 pr-2 leading-tight">
                                <div className="flex flex-col py-1 items-left">
                                    <div className='text-gray-700 self-start'>
                                        <span>Anderson Vanhron</span>
                                    </div>
                                    <div className='flex-1 text-gray-500 text-sm max-h-5 mr-3 truncate'>
                                        <span>Everything is done. Will wait for you at 5 p.m. this friday.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex h-16 border-b-2 border-gray-200'>
                        <div className="flex items-center max-w-full space-x-3">
                            <img
                                src={avatar}
                                alt="" className="w-10 absolute sm:w-10 h-10 sm:h-10 ml-5 rounded-full"/>
                            <div className="flex flex-col max-w-full pl-14 pr-2 leading-tight">
                                <div className="flex flex-col py-1 items-left">
                                    <div className='text-gray-700 self-start'>
                                        <span className='flex flex-row'>{lock} Question #32</span>
                                    </div>
                                    <div className='flex-1 text-gray-500 text-sm max-h-5 mr-3 truncate'>
                                        <span>I assume that your right leg might be damaged</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col col-span-3 h-full max-h-screen">
                    <div className="flex sm:items-center justify-between py-1 border-b-2 border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="" className="w-10 sm:w-12 h-10 sm:h-12 ml-5 rounded-full"/>
                            <div className="flex flex-col leading-tight">
                                <div className="text-xl mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">Anderson Vanhron</span>
                                </div>
                                <span className="text-base text-gray-600">
                                    Doctor
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="messages"
                         className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        Good morning, Mr.Anderson. I want to know about results of my researches.
                                    </span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Good morning Nick.</span>
                                    </div>
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I will write you back as soon as I will get it.</span>
                                    </div>
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Have a nice day.</span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        Ok, waiting for your reply.
                                    </span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I'm back with the results. Looks like you are healthy. However, I will recommend you make a last research in our hospital to be 100% confident. </span>
                                    </div>
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Would you like to make an appointment?</span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        Yes, sure. Should I call to make it?
                                    </span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Don't worry no need. I will write you down on my list.</span>
                                    </div>
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">What about 3 p.m. this friday?</span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        I will be busy at that time, can we met at 5 p.m.?
                                    </span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Yes, sure.</span>
                                    </div>
                                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I will write you back as soon as I got a confirmation from assistant.</span>
                                    </div>
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Everything is done. Will wait for you at 5 p.m. this friday.</span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                            </div>
                        </div>


                    </div>
                    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                        <div className="relative mb-3 flex">
                            <input type="text" placeholder="Write Something"
                                   className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-full py-3"/>
                            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                <button type="button"
                                        className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="h-6 w-6 transform rotate-90">
                                        <path
                                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
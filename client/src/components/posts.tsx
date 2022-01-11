import React from "react";

import avatar from '../img/mocup_avatar.png'

export const Posts = ({posts, user, comments}: any) => {

    console.log(posts)
    console.log(user)
    const texo = "<div> Is is clear? <div/>"

    const getName = () => {
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    const elements = posts.map((post: any) => {
            return (
                <div key={post._id} className='shadow rounded-b w-full h-auto px-5 py-4'>
                    <div className='mb-2 grid grid-cols-12'>
                        <div className='col-span-1 pt-0.5'>
                            <img className="block pl-4 h-12 rounded-full"
                                 src={'/uploads/' + user.avatar}
                                 alt="Avatar"/>
                        </div>
                        <div className='col-span-10 pl-4'>
                            <p className='font-light text-sm'>{getName()}</p>
                            <p className='font-light mt-0.5 text-xs text-gray-400'>{user.role}</p>
                            <p className='font-light text-xs text-gray-500'>{post.date.slice(0,10)}</p>
                        </div>
                    </div>
                    <div className='py-2 px-3'>
                        <p className='text-sm font-light text-gray-800'>
                            {post.text}
                        </p>
                        <img className='w-full border rounded-xl mt-5'
                            src={'/uploads/posts/' + post.img}
                            alt='Attached image'/>
                    </div>
                    <div className='flex justify-end grid grid-cols-8 mt-4'>
                        <div className='col-start-9 grid grid-cols-2 gap-x-2'>
                            <div className='cursor-pointer'>
                                <svg className='w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className='col-span-1'>
                                <p className='font-bold text-xs'>{post.likes}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 py-5 grid grid-cols-12 border-gray-200 border-t'>
                        <div className='col-span-1 pt-0.5'>
                            <img className="block ml-5 h-8 rounded-full"
                                 src={avatar}
                                 alt="Avatar"/>
                        </div>
                        <div className='col-span-11 text-xs'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className='grid grid-cols-12'>
                                <div className='flex justify-end col-start-12 mr-4 gap-x-2'>
                                    <svg className='w-3 cursor-pointer fill-current text-gray-500 hover:fill-current hover:text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <path
                                                    d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className='text-xs text-gray-700 ml-0.5'>23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-1 pt-0.5 mr-2 flex justify-end'>
                            <img className="block h-8 rounded-full"
                                 src={avatar}
                                 alt="Woman's Face"/>
                        </div>
                        <div className='col-span-11'>
                            <input className='border font-light text-xs rounded border-gray-400 px-3 py-2.5 w-full hover:shadow-inner' type='text' placeholder='Write your comment...'/>
                        </div>
                    </div>
                </div>
            )
        })

    return (
        <div className="mx-3 mb-10 col-span-6">
            {elements}
        </div>
    )
}
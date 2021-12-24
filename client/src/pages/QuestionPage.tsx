import React from 'react'
import avatar from "../img/mocup_avatar.png";
import leg from '../img/leg.jpg'

export const QuestionPage = () => {

    return (
        <div className='flex-1 relative h-full grid grid-cols-5'>
            <div className="mx-3 col-start-2 my-5 col-span-3">
                <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
                    <div className='mb-2 grid grid-cols-12'>
                        <div className='col-span-1 pt-0.5'>
                            <img className="block h-12 rounded-full"
                                 src={avatar}
                                 alt="Woman's Face"/>
                        </div>
                        <div className='col-span-10 pl-4'>
                            <p className='font-light text-sm'>Question #32</p>
                            <p className='font-light text-xs text-gray-400'>Patient</p>
                            <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                        </div>
                    </div>
                    <div className='py-2 px-3 flex flex-col'>
                        <p className='text-sm font-light text-gray-800'>
                            My doctor says that he can't do an operation on my leg as I have very bad results after researches. I wonder if anybody could help me with my case. I've got all needed results of researches, please contact me in order to get them, Thank you.
                        </p>
                        <img className='w-56' src={leg} />
                    </div>

                    <div className='flex justify-end'>
                        <button className='px-3 py-1 text-sm mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-indigo-200 focus:outline-none' onClick={()=>{}}>Start a secret chat with author</button>
                    </div>

                    <div className='mt-5 py-5 grid grid-cols-12 border-gray-200 border-t'>
                        <div className='col-span-1 pt-0.5 justify-center flex'>
                            <img className="block h-8 rounded-full"
                                 src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                 alt="Woman's Face"/>
                        </div>
                        <div className='col-span-11 text-xs'>
                            <p>
                                Hello, I will need more information about your case. I've started a secret conversation, please check your messages.
                            </p>
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
            </div>
        </div>
    )
}
import React from 'react'
import avatar from "../img/mocup_avatar.png";

export const QAPage = () => {
    const elements = (
        <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
            <div className='mb-2 grid grid-cols-12'>
                <div className='col-span-1 pt-0.5'>
                    <img className="block h-12 rounded-full"
                         src={avatar}
                         alt="Woman's Face"/>
                </div>
                <div className='col-span-10 pl-4'>
                    <p className='font-light text-sm'>MocupName</p>
                    <p className='font-light text-xs text-gray-400'>MocupRole</p>
                    <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                </div>
            </div>
            <div className='py-2 px-3'>
                <p className='text-sm font-light text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='flex justify-end'>
                <button className='px-3 py-1 text-sm mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-indigo-200 focus:outline-none' onClick={()=>{}}>Show more</button>
            </div>
        </div>
    )


    return (
        <div className='grid grid-cols-4'>
            <div className="mx-3 col-start-2 my-5 col-span-2">
                <div className='shadow rounded-b w-full h-auto px-5 py-4'>
                    <form className='flex-col flex qa-form'>
                        <div>
                            <label htmlFor='title'>Your question:</label>
                            <input id='title'/>
                        </div>
                        <div>
                            <label htmlFor=''>Description:</label>
                            <textarea id='text'/>
                        </div>
                        <div>
                            <div
                                className="relative h-32 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                <div className="absolute">
                                    <div className="flex flex-col items-center ">
                                        <i className="fa fa-cloud-upload fa-3x text-gray-200">

                                        </i>
                                        <span className="block text-gray-400 font-normal">
                                            Attach you files here
                                        </span>
                                        <span className="block text-gray-400 font-normal">
                                            or
                                        </span>
                                        <span className="block text-blue-400 font-normal">
                                            Browse files
                                        </span>
                                    </div>
                                </div>
                                <input type="file" className="h-full w-full opacity-0" name="" multiple/>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
                {elements}
                {elements}
            </div>
        </div>
    )
}
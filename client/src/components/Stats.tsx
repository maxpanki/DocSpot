import React from "react";
import avatar from "../img/mocup_avatar.png";

const Stats = () => {

    const button = (
        <div className='w-full mt-3 flex justify-center'>
        <button className='py-4 px-5 text-xl border border-blue-400 text-blue-400 rounded-xl hover:text-white hover:bg-blue-400'>
            Create Post
    </button>
    </div>
)

    const element = (
        <div className='rounded shadow w-full'>
        <div className='border-b pb-3 border-gray-300'>
        <div>
            <div className='flex justify-center'>
                <img className="block h-16 rounded-full my-5"
                     src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                     alt="Woman's Face"/>
            </div>
        <div className='flex justify-center'>
        <p>Nick Jhonson</p>
    </div>
    </div>
    </div>
    <div className='text-gray-500 font-light text-sm pl-8 py-8 leading-loose'>
    <div className='grid grid-cols-2 justify-items-stretch'>
    <div className='justify-self-end pr-2'>Profile Views:</div>
    <div>200</div>
    </div>
    <div className='grid grid-cols-2 justify-items-stretch'>
    <div className='justify-self-end pr-2'>Your Activity:</div>
    <div>1500</div>
    </div>
    <div className='grid grid-cols-2 justify-items-stretch'>
    <div className='justify-self-end pr-2'>Your Posts Activity:</div>
    <div>56.7k</div>
    </div>
    </div>
    </div>
)

    return (
        <div className="mt-10 mx-3 col-span-3">
            {element}
    {button}
    </div>
)
}

export default Stats;
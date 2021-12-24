import React from "react";

const RecommendedHashtags = () => {

    const element = (
        <div className='rounded shadow w-full py-3 px-3'>
            <p className='font-bold'>
                Most popular Hashtags:
            </p>
            <div className='text-gray-700 my-3 mx-3'>
                <p className='flex cursor-pointer'>
                    <svg className='h-4 fill-current mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                    </svg>
                    doctors
                </p>
                <p className='flex cursor-pointer'>
                    <svg className='h-4 fill-current mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                    </svg>
                    oncology
                </p>
                <p className='flex cursor-pointer'>
                    <svg className='h-4 fill-current mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                    </svg>
                    leg
                </p>
                <p className='flex cursor-pointer'>
                    <svg className='h-4 fill-current mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                    </svg>
                    heart
                </p>
                <p className='flex cursor-pointer'>
                    <svg className='h-4 fill-current mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                    </svg>
                    DocSpot.
                </p>
            </div>
            <p className='mt-1 flex text-sm text-gray-500 hover:text-blue-400 cursor-pointer'>
                View all recommended
                <svg className='h-2 ml-1 mt-1.5 fill-current stroke-current stroke-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 42.67">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path d="M63.22,19.57,44.5.78a2.67,2.67,0,0,0-3.78,3.77L54.79,18.67H2.67a2.67,2.67,0,1,0,0,5.33H55L40.73,38.11a2.67,2.67,0,1,0,3.76,3.78L63.21,23.35a2.67,2.67,0,0,0,0-3.78Z"/>
                        </g>
                    </g>
                </svg>
            </p>
        </div>
    )

    return (
        <div className="mt-10 mx-3 col-span-3">
            {element}
        </div>
    )
}

export default RecommendedHashtags;
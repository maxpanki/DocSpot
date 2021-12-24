import React, {useState} from "react";
import {MainMenuToggleElemProps} from "../types";
import notification_bell from '../img/notification-bell.png'
import notification_qa from '../img/message.png'

const MainMenuToggleElem = ({message, svg}:MainMenuToggleElemProps) => {

    const [notification, setNotification] =useState('hidden')

    const toggleNotification = () => {
        if (notification === 'hidden'){
            setNotification('block')
        } else {
            setNotification('hidden')
        }
    }

    return(
        <div className='grid relative'>
            <div
                className='cursor-pointer pt-1 grid justify-items-center border-l
                border-gray-200 hover:text-blue-400 hover:shadow-inner'
                onClick={toggleNotification}>
                {svg}
                <p>{message}</p>
            </div>
            <div
                className={"z-50 absolute top-[100%] mt-16 inset-x-0 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none " + notification}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-2 flex flex-row py-2 bg-green-100 hover:bg-green-200 text-xs" role="menuitem"
                       id="menu-item-0">
                        <div>
                            <img className='h-7' src={notification_bell} />
                        </div>
                        <div className='py-1 px-1 flex-1 truncate'>
                            <span>You have 1 comment under your post</span>
                        </div>
                    </a>
                    <a href="#" className="text-gray-700 block px-2 flex flex-row py-2 bg-blue-100 hover:bg-blue-200 text-xs" role="menuitem"
                       id="menu-item-0">
                        <div>
                            <img className='h-7' src={notification_qa} />
                        </div>
                        <div className='py-1 px-1 flex-1 truncate'>
                            <span>You have new messages</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainMenuToggleElem
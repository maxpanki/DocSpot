import React from "react";
import { Link } from "react-router-dom";
import {StatsProps} from "../types";

const Stats = ({data}: StatsProps) => {

    const user = data.user

    const getName = () => {
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    const redirectToCreatePostPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (user.isVerified === false) {
            e.preventDefault()
        }
    }

    const buttonStyle = user.isVerified ?
        'py-4 px-5 text-xl border border-blue-400 text-blue-400 rounded-xl hover:text-white hover:bg-blue-400'
        :
        'py-4 px-5 text-xl border border-grey-400 text-gray-400 rounded-xl'

    const button = (
        <div className='w-full mt-3 flex justify-center'>
            <Link onClick={redirectToCreatePostPage} to='/create-post' className={buttonStyle}>
                Create Post
            </Link>
        </div>
    )

    const element = (
        <div className='rounded shadow w-full'>
            <div className='border-b pb-3 border-gray-300'>
                <div>
                    <div className='flex justify-center'>
                        <img className="block h-16 rounded-full my-5"
                             src={"/uploads/" + user.avatar}
                             alt="Avatar"/>
                    </div>
                    <div className='flex justify-center'>
                        <p>{getName()}</p>
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
            {(user.role === 'Company' || user.role === 'Doctor') && button}
            {!user.isVerified &&
                <p className='text-xs text-gray-400 text-center mt-1'>
                    You have to be verified in order to create post
                </p>
            }
        </div>
    )
}

export default Stats;
import React, {useContext, useEffect, useState} from "react";

import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "./Loader";
import {lock} from "../img/svg/svg";
import {ConversationProps, UserType} from "../types";

export const Conversation = ({ conversation, setActiveConversationData }: ConversationProps) => {

    const {userId, token, callPopup} = useContext(AuthContext)
    const {request} = useHttp()
    const [secondUser, setSecondUser] = useState<UserType | null>(null)

    const getSecondUser = async (secondUserId: string) => {
        try {
            const res = await request('/api/profile/', 'POST', {
                id: secondUserId
            }, {
                Authorization: `Bearer ${token}`
            })
            setSecondUser(res.user)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }

    const changeActiveConversation = () => {
        if (secondUser) {
            setActiveConversationData({
                user: secondUser,
                conversation: conversation
            })
        }
    }

    useEffect(() => {
        const secondUserId = conversation.members.find((m: string) => m !== userId)
        if (secondUserId) {
            getSecondUser(secondUserId)
        }
    }, [])

    const getName = (user: UserType) => {
        if (conversation.type === 'Basic') {
            if (user.personName) {
                return user.personName + ' ' + user.personSecondName
            }
            if (user.companyName) {
                return user.companyName
            }
        } else {
            return conversation.secretName
        }
    }

    if (secondUser) {
        return(
            <div onClick={() => {
                changeActiveConversation()
            }} className={'flex h-16 border-b-2 border-gray-200 cursor-pointer hover:bg-blue-50'}>
                <div className="flex items-center max-w-full space-x-3">
                    <img
                        src={'/uploads/' + (conversation.type === 'Basic' ? secondUser.avatar : 'defaultAvatar.bmp')}
                        alt="Avatar" className="w-10 absolute sm:w-10 h-10 sm:h-10 ml-5 rounded-full"/>
                    <div className="flex flex-col max-w-full pl-14 pr-2 leading-tight">
                        <div className="flex flex-col py-1 items-left">
                            <div className='text-gray-700 self-start'>
                                <div className='text-gray-700 self-start'>
                                    <span className='flex flex-row'>{conversation.type !== 'Basic' ? lock : ''} {getName(secondUser)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <Loader />
}
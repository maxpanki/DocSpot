import React, {useContext, useEffect, useRef, useState} from 'react'
import {io} from "socket.io-client"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {Conversation} from "../components/Conversation";
import {Loader} from "../components/Loader";
import {Messages} from "../components/Messages";

export const ChatPage = () => {

    const { token, callPopup, userId } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [conversations, setConversations] = useState([])
    const socket = useRef(io("ws://localhost:8900"))
    const [activeConversationData, setActiveConversationData] = useState<any>(null)
    const [messages, setMessages] = useState([])

    const getConversations = async () => {
        try {
        const res = await request('/api/messenger/getUsersConversations', 'POST', null, {
            Authorization: `Bearer ${token}`
        })
            setConversations(res.conversations)
        } catch (e: any) {
            callPopup(e.message, 'error')
        }
    }

    const refreshMessages = (savedMessage: any) => {
        // @ts-ignore
        setMessages([...messages, savedMessage])
    }

    const getMessages = async () => {
        if (activeConversationData){
            try {
                const res = await request('/api/messenger/getMessages', 'POST', {
                    conversationId: activeConversationData.conversation._id
                }, {
                    Authorization: `Bearer ${token}`
                })
                setMessages(res.messages)
            } catch (e: any) {
                callPopup(e.message, 'error')
            }
        }
    }

    let conversationElements
    if(conversations) {
        conversationElements = conversations.map((conversation: any) => {
            return(
                <Conversation key={conversation._id} conversation={conversation} setActiveConversationData={setActiveConversationData} />
            )
        })
    }

    useEffect( () => {
        socket.current.emit('addUser', userId)
        socket.current.on('getUsers', users=>{
            console.log(users)
        })
    },[userId])

    useEffect(() => {
        getMessages()
    }, [activeConversationData])

    useEffect(() => {
        getConversations()

        const el = document.getElementById('messages')
        if(el){
            el.scrollTop = el.scrollHeight
        }
    }, [])

    if (loading) {
        return <Loader />
    }

    return(
        <div className='flex-1 relative max-h-screen h-full'>
            <div className='flex h-full flex-row grid grid-cols-4'>
                <div className='border-r-2 border-gray-200'>
                    <h1 className='font-logo font-xl py-5 px-3 text-slate-500'>Active chats:</h1>
                    {conversationElements}
                </div>
                {
                    activeConversationData && messages ? <Messages conversationData={activeConversationData} messages={messages} refreshMessages={refreshMessages}/> : <span>Open a conversation to see messages</span>
                }
            </div>
        </div>
    )

}
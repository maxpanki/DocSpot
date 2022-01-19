import React, {useContext, useEffect, useRef, useState} from 'react'
import {io, Socket} from "socket.io-client"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {Conversation} from "../components/Conversation"
import {Loader} from "../components/Loader"
import {Messages} from "../components/Messages"
import {ArrivalMessageType, ConversationDataType, ConversationType, MessageType,} from "../types"

export const ChatPage = () => {

    const { token, callPopup, userId } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [conversations, setConversations] = useState<ConversationType[]>([])
    const socket = useRef<Socket>()
    const [activeConversationData, setActiveConversationData] = useState<ConversationDataType | null>(null)
    const [messages, setMessages] = useState<MessageType[]>([])
    const [arrivalMessage, setArrivalMessage] = useState<ArrivalMessageType | null>(null)

    const getConversations = async () => {
        try {
        const res = await request('/api/messenger/getUsersConversations', 'POST', null, {
            Authorization: `Bearer ${token}`
        })
            setConversations(res.conversations)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }

    const refreshMessages = (savedMessage: MessageType) => {
        socket.current?.emit('sendMessage', {
            senderId: userId,
            receiverId: activeConversationData?.user._id,
            text: savedMessage.text,
            messageId: savedMessage._id
        })
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
            } catch (e) {
                callPopup((e as Error).message, 'error')
            }
        }
    }

    let conversationElements
    if(conversations) {
        conversationElements = conversations.map((conversation: ConversationType) => {
            return(
                <Conversation key={conversation._id} conversation={conversation} setActiveConversationData={setActiveConversationData} />
            )
        })
    }

    useEffect(() => {
        getMessages()
    }, [activeConversationData])

    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current?.on('getMessage', data => {
            setArrivalMessage({
                owner: data.senderId,
                text: data.text,
                _id: data.messageId
            })
        })
        getConversations()

        const el = document.getElementById('messages')
        if(el){
            el.scrollTop = el.scrollHeight
        }
    }, [])

    useEffect( () => {
        arrivalMessage && activeConversationData?.user._id === arrivalMessage.owner &&
            setMessages((prev: any) => [...prev, arrivalMessage])
    }, [arrivalMessage, activeConversationData])

    useEffect( () => {
        if(socket.current) {
            socket.current.emit('addUser', userId)
        }
    },[userId])

    if (loading) {
        return <Loader />
    }

    return(
        <div className='flex-1 relative max-h-screen h-full'>
            <div className='flex h-full flex-row grid grid-cols-4'>
                <div className='border-r-2 border-gray-200'>
                    <h1 className='border-b-2 border-gray-200 font-logo font-xl py-5 px-3 text-slate-500'>Active chats:</h1>
                    {conversationElements}
                </div>
                {
                    activeConversationData && messages ?
                        <Messages
                            conversationData={activeConversationData}
                            messages={messages}
                            refreshMessages={refreshMessages}/>
                        :
                        <div className='col-span-3'>
                            <p className='text-6xl flex justify-center mt-32 text-gray-400 opacity-40'>
                                Open a conversation to see messages
                            </p>
                        </div>
                }
            </div>
        </div>
    )

}
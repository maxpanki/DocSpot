import React, {useCallback, useContext, useEffect, useState} from 'react'
import {QAForm} from "../components/QAForm"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {QaType} from "../types";

export const QAPage = () => {

    const { token, callPopup } = useContext(AuthContext)
    const navigate = useNavigate()
    const { request } = useHttp()
    const [qas, setQas] = useState<QaType[]>([])
    const [numberOfQas, setNumberOfQas] = useState(5)

    useEffect( () => {
        getQas()
    }, [])

    const getQas = useCallback( async () => {
        try {
            const fetched = await request(`/api/qa/getQas`, 'POST', null, {
                Authorization: `Bearer ${token}`
            })
            setQas(fetched.qas.reverse())
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, setQas, callPopup])

    const addQa = (qa: QaType) => {
        setQas([qa,...qas])
    }

    const startConversation = async (owner:string, title: string) => {
        try {
            await request(`/api/messenger/newConversation`, 'POST', {
                receiverId: owner,
                secretName: title
            }, {
                Authorization: `Bearer ${token}`
            })
            navigate('/chat')
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }


    const elements = qas.map( (qa: QaType) => {
        return (
            <div className='shadow rounded-b w-full h-auto mt-5 px-5 py-4'>
                <div className='pl-4'>
                    <h2 className='font-semibold'>{qa.title}</h2>
                    <p className='font-light text-xs text-gray-500'>10.10.2010</p>
                </div>
                <div className='py-2 px-3'>
                    <p className='text-sm font-light text-gray-800'>
                        {qa.text}
                    </p>
                    { qa.img &&
                        <img className='w-full border rounded-xl mt-5'
                             src={'/uploads/qa/' + qa.img}
                             alt='Attached file'/>
                    }
                </div>
                <div className='flex justify-end'>
                    <button
                        className='px-3 py-1 text-sm mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-indigo-200 focus:outline-none'
                        onClick={()=>{
                            startConversation(qa.owner, qa.title)
                        }}>
                        Start a conversation
                    </button>
                </div>
            </div>
        )
    })


    return (
        <div className='flex-1 relative h-full grid grid-cols-4'>
            <div className="mx-3 col-start-2 my-5 col-span-2">
                <div className='shadow rounded-b w-full h-auto px-5 py-4'>
                    <QAForm add={addQa} />
                </div>
                {elements.slice(0, numberOfQas)}
                { elements && elements.length > numberOfQas &&
                    <button className='text-sm text-blue-500 bg-opacity-50 w-full' type='button' onClick={() => {
                        let value = 5
                        if (elements.length){
                            value = numberOfQas + 5 <= elements.length ? numberOfQas + 5 : elements.length
                        }
                        setNumberOfQas(value)
                    }}>Show more</button>
                }
            </div>
        </div>
    )
}
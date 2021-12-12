import React, {useRef, useState} from 'react'
import AuthForm from '../components/AuthForm'
import RegForm from "../components/RegForm";
import {Alerts} from "../elements/Alerts";



export const AuthPage = () => {

    //User data information object creation
    const [message, setMessage ] = useState('')
    const [type, setType] = useState('')

    //change popup data
    const callPopup = (message: string, type: string) => {
        setMessage(message)
        setType(type)
        if (snackbarRef.current){
            snackbarRef.current.show()
        }
    }

    const snackbarRef = useRef<{show: ()=> void}>(null)

    return(
        <div className='flex-1 my-auto h-full diagonal-split-background justify-items-center content-center
        grid grid-cols-6'>
            <div className='col-span-2'>
                <AuthForm callPopup={callPopup}/>
            </div>
            <div className='col-start-5 col-span-2'>
                <RegForm callPopup={callPopup}/>
            </div>
            <Alerts
                ref={snackbarRef}
                message={message}
                type={type} />
        </div>
    )
}
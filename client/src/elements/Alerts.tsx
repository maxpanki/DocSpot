import React, {useState, forwardRef, useImperativeHandle} from "react"
import {AlertsProps} from "../types"

export const Alerts = forwardRef(({type, message}: AlertsProps, ref) => {

    const [showSnackbar, setShowSnackbar] = useState(false)

    useImperativeHandle(ref, () => ({
        show(message: string, type: string){
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000)
        }
    }))
    let style: string

    switch (type) {
        case 'success':
            style = 'bg-green-300'
            break
        case 'error':
            style = 'bg-red-500'
            break
        case 'message':
            style = 'bg-blue-300'
            break
        default:
            style = 'bg-red-500'
    }

    return (
        <div
            className={`
            flex fixed bottom-16 font-logo right-6 w-60 min-h-40 h-auto px-4 py-3 rounded
            ${showSnackbar ? 'visible animate-fade-in' : 'invisible'}
            ${style}
            `}
        >
            <div>
                {message}
            </div>
        </div>
    )
})
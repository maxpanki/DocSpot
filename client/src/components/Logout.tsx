import React, {useContext, useEffect} from "react"
import {AuthContext} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"

export const Logout = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.logout()
        navigate('/')
    }, [])

    return (
        <div>
            <p>Logging out...</p>
        </div>
    )
}
import {useState, useCallback, useEffect} from 'react'
import {set} from "react-hook-form";

const storageName = 'userData'

export const useAuth = () => {
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [avatar, setAvatar] = useState('defaultAvatar.bmp')

    const login = useCallback((jwtToken, id, avatar) => {
        setToken(jwtToken)
        setUserId(id)
        setAvatar(avatar)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName) || '{}')

        if (data && data.token) {
            login(data.token, data.userId, data.avatar)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, ready, avatar }
}
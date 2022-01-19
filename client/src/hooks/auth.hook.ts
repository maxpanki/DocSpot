import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [avatar, setAvatar] = useState('defaultAvatar.bmp')
    const [isVerified, setIsVerified] = useState(false)

    const login = useCallback((jwtToken, id, avatar, isVerified) => {
        setToken(jwtToken)
        setUserId(id)
        setAvatar(avatar)
        setIsVerified(isVerified)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, avatar: avatar, isVerified: isVerified
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
            login(data.token, data.userId, data.avatar, data.isVerified)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, ready, avatar, isVerified }
}
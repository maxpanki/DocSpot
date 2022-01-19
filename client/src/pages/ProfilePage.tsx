import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {Loader} from "../components/Loader"
import {UserCard} from "../components/UserCard"
import EditUserCard from "../components/EditUserCard"
import {PostType, UserType} from "../types";

export const ProfilePage = () => {
    const {token, callPopup} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [mode, setMode] = useState('view')
    const [user, setUser] = useState<UserType | null>(null)
    const [posts, setPosts] = useState<PostType[]>([])

    const userId = useParams().id

    const getUser = useCallback( async () => {
        try {
            const fetched = await request(`/api/profile/`, 'POST', {
                id: userId
            }, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched.user)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, userId, request, callPopup])

    const getPosts = useCallback( async () => {
        try {
            const fetched = await request(`/api/post/getUsersPosts/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setPosts(fetched.post)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, userId, request, callPopup])

    useEffect(() => {
        getPosts()
        getUser()
    }, [getUser, getPosts])

    const changeMode = (stateValue: string) => {
        setMode(stateValue)
    }

    if (loading) {
        return <Loader />
    }

    return(
        <div className='flex-1 relative h-full'>
            { !loading && mode === 'view' && user && posts && <UserCard user={user} posts={posts} changeMode={changeMode} />}
            { !loading && mode === 'edit' && user && <EditUserCard user={user} changeMode={changeMode} />}
        </div>
    )
}
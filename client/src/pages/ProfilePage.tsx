import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {UserCard} from "../components/UserCard";
import EditUserCard from "../components/EditUserCard";

export const ProfilePage = () => {
    const {token, callPopup} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [mode, setMode] = useState('view')
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    const userId = useParams().id

    const getUser = useCallback( async () => {
        try {
            const fetched = await request(`/api/profile/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched)
        } catch (e: any) {
            callPopup(e.message, 'error')
        }
    }, [token, userId, request])

    const getPosts = useCallback( async () => {
        try {
            const fetched = await request(`/api/post/getUsersPosts/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setPosts(fetched.post)
        } catch (e: any) {
            callPopup(e.message, 'error')
        }
    }, [token, userId, request])

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
            { !loading && mode === 'view' && user && posts && <UserCard data={user} posts={posts} changeMode={changeMode} />}
            { !loading && mode === 'edit' && user && <EditUserCard data={user} changeMode={changeMode} />}
        </div>
    )
}
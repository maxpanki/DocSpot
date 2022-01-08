import React, {useCallback, useContext, useEffect, useState} from 'react'
import Post from "../components/posts";
import Stats from "../components/Stats";
import RecommendedHashtags from "../components/RecommendedHashtags";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";

export const FeedPage = () => {

    const {token, userId} = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const {request, loading} = useHttp()

    console.log('Userid', userId)
    console.log('Token', token)

    const getUser = useCallback( async () => {
        try {
            const fetched = await request(`/api/profile/${userId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched)
        } catch (e: any) {
            console.log(e.message)
        }
    }, [token, userId, request])

    useEffect(() => {
        getUser()
    }, [getUser])

    if (loading) {
        return <Loader />
    }

    return(
        <div>
            <div className='grid grid-cols-12 bg-gray-50'>
                {!loading && user && <Stats data={user} />}
                <Post />
                <RecommendedHashtags />
            </div>
        </div>
    )
}
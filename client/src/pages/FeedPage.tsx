import React, {useCallback, useContext, useEffect, useState} from 'react'
import Stats from "../components/Stats";
import RecommendedHashtags from "../components/RecommendedHashtags";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";
import {Posts} from "../components/Posts";
import {useParams} from "react-router-dom";

export const FeedPage = () => {

    const {token, userId} = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)
    const [postsActivity, setPostsActivity] = useState('')
    const [tags, setTags] = useState(null)
    const {request, loading} = useHttp()
    const hashtag = useParams().hashtag

    const getUser = useCallback( async () => {
        try {
            const fetched = await request(`/api/profile/`, 'POST', {
                id: userId
            }, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setUser(fetched)

            const activity = await request(`/api/profile/getPostActivity`, 'POST', {
                userId: fetched.user._id
            }, {
                Authorization: `Bearer ${token}`
            })
            console.log(activity)
            setPostsActivity(String(activity.postsActivity))
        } catch (e: any) {
            console.log(e.message)
        }
    }, [token, userId, request])

    const getTags = useCallback( async () => {
        try {
            const fetched = await request(`/api/hashtags/getPopular`, 'POST', null, {
                    Authorization: `Bearer ${token}`
                })
            setTags(fetched.tags)
        } catch (e: any) {
            console.log(e.message)
        }
    }, [token, request])

    const getPosts = useCallback( async () => {
        try {
            const fetched = hashtag ?
                await request(`/api/post/getFeedPosts/${hashtag}`, 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                :
                await request(`/api/post/getFeedPosts`, 'POST', null, {
                    Authorization: `Bearer ${token}`
                })
            setPosts(fetched.posts)
        } catch (e: any) {
            console.log(e.message)
        }
    }, [token, userId, request])

    useEffect(() => {
        getTags()
        getUser()
        getPosts()
    }, [useParams().hashtag])

    if (loading) {
        return <Loader />
    }

    return(
        <div>
            <div className='grid grid-cols-12 bg-gray-50 pt-10'>
                {!loading && user && postsActivity && <Stats data={user} postsActivity={postsActivity} />}
                {!loading && posts && <Posts posts={posts}/>}
                {!loading && tags && <RecommendedHashtags tags={tags}/>}
            </div>
        </div>
    )
}
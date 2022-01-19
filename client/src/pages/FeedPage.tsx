import React, {useCallback, useContext, useEffect, useState} from 'react'
import Stats from "../components/Stats"
import RecommendedHashtags from "../components/RecommendedHashtags"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {Loader} from "../components/Loader"
import {Posts} from "../components/Posts"
import {useParams} from "react-router-dom"
import {ExtendedPostType, TagType, UserType} from "../types"

export const FeedPage = () => {

    const {token, userId, callPopup} = useContext(AuthContext)
    const [user, setUser] = useState<UserType | null>(null)
    const [posts, setPosts] = useState<ExtendedPostType[]>([])
    const [postsActivity, setPostsActivity] = useState('')
    const [tags, setTags] = useState<TagType[]>([])
    const {request, loading} = useHttp()
    const hashtag = useParams().hashtag

    const getUser = useCallback( async () => {
        try {
            const fetched = await request(`/api/profile/`, 'POST', {
                id: userId
            }, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched.user)

            const activity = await request(`/api/profile/getPostActivity`, 'POST', {
                userId: fetched.user._id
            }, {
                Authorization: `Bearer ${token}`
            })
            setPostsActivity(String(activity.postsActivity))
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, userId, request, callPopup])

    const getTags = useCallback( async () => {
        try {
            const fetched = await request(`/api/hashtags/getPopular`, 'POST', null, {
                    Authorization: `Bearer ${token}`
                })
            setTags(fetched.tags)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, callPopup])

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
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, callPopup, hashtag])

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
                {!loading && user && postsActivity && <Stats user={user} postsActivity={postsActivity} />}
                {!loading && posts && <Posts posts={posts}/>}
                {!loading && tags && <RecommendedHashtags tags={tags}/>}
            </div>
        </div>
    )
}
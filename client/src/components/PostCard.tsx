import React, {useCallback, useContext, useEffect, useState} from "react"

import {Comments} from "./Comments"
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {Link} from "react-router-dom"
import {PostCardProps} from "../types";

export const PostCard = ({post, user}: PostCardProps) => {

    const {token, callPopup} = useContext(AuthContext)
    const {request} = useHttp()
    const [isLiked, setIsLiked] = useState(false)
    const [likeNumber, setLikeNumber] = useState(0)

    const checkIsLiked = useCallback( async (postId: string) => {
        try {
            const res = await request(`/api/post/isLiked`, 'POST', {
                postId: postId
            }, {
                Authorization: `Bearer ${token}`
            })

            setIsLiked(res.message)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, setIsLiked, callPopup])

    useEffect(() => {
        checkIsLiked(post._id)
        setLikeNumber(post.likes)
    }, [])

    const getName = () => {
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    const highlightHashtags = (text: string) => {
        return text.replace(/#(\w+)/g, '<a class="text-blue-500 font-semibold" href="/feed/$1">#$1</a>');
    }

    const toggleLike = useCallback( async (postId: string) => {
        try {
            if (!isLiked) {
                await request(`/api/post/like`, 'POST', {
                    postId: postId
                }, {
                    Authorization: `Bearer ${token}`
                })

                setIsLiked(true)
                setLikeNumber(likeNumber + 1)
            } else {
                await request(`/api/post/dislike`, 'POST', {
                    postId: postId
                }, {
                    Authorization: `Bearer ${token}`
                })

                setIsLiked(false)
                setLikeNumber(likeNumber -1)
            }

        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, likeNumber, isLiked, setIsLiked, setLikeNumber, callPopup])

    return(
        <React.Fragment>
            <div className='shadow rounded-b w-full h-auto px-5 py-4 mb-10'>
                <div className='mb-2 grid grid-cols-12'>
                    <div className='col-span-1 pt-0.5'>
                        <img className="block pl-4 h-12 rounded-full"
                             src={'/uploads/' + user.avatar}
                             alt="Avatar"/>
                    </div>
                    <div className='col-span-10 pl-4'>
                        <p className='font-light text-sm'><Link to={'/profile/' + user._id}>{getName()}</Link></p>
                        <p className='font-light mt-0.5 text-xs text-gray-400'>{user.role}</p>
                        <p className='font-light text-xs text-gray-500'>{post.date.slice(0,10)}</p>
                    </div>
                </div>
                <div className='py-1 px-3'>
                    <h2 className='mb-2'>{post.title}</h2>
                    <div className='text-sm font-light text-gray-800' dangerouslySetInnerHTML={{ __html: highlightHashtags(post.text) }} />
                    { post.img &&
                        <img className='w-full border rounded-xl mt-5'
                             src={'/uploads/posts/' + post.img}
                             alt='Attached file'/>
                    }
                </div>
                <div className='flex justify-end grid grid-cols-8 mt-4'>
                    <div className='col-start-9 grid grid-cols-2 gap-x-2'>
                        <div className='cursor-pointer' onClick={() => {
                            toggleLike(post._id)
                        }}>
                            <svg className={isLiked ?
                                'w-5 mx-auto fill-current text-red-500'
                                :
                                'w-5 mx-auto fill-current text-gray-500 hover:fill-current hover:text-red-500'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='col-span-1'>
                            <p className='font-bold text-xs'>{likeNumber}</p>
                        </div>
                    </div>
                </div>
                <Comments postId={post._id} />
            </div>
        </React.Fragment>
    )
}
import React, {useCallback, useContext, useEffect, useState} from "react"

import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {Link} from "react-router-dom"
import {CommentCardProps, UserType} from "../types";

export const CommentCard = ({ comment }: CommentCardProps) => {

    const {token, callPopup} = useContext(AuthContext)
    const {request} = useHttp()
    const [isLiked, setIsLiked] = useState(false)
    const [likeNumber, setLikeNumber] = useState(0)

    const checkIsLiked = useCallback( async (commentId: string) => {
        try {
            const res = await request(`/api/comments/isLiked`, 'POST', {
                commentId: commentId
            }, {
                Authorization: `Bearer ${token}`
            })

            setIsLiked(res.message)
        } catch (e) {
            callPopup((e as Error).message, 'error')
        }
    }, [token, request, setIsLiked, callPopup])

    useEffect(() => {
        checkIsLiked(comment._id)
        setLikeNumber(comment.likes)
    }, [])

    const getName = (user: UserType) => {
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    const toggleLike = useCallback( async (commentId: string) => {
        try {
            if (!isLiked) {
                await request(`/api/comments/like`, 'POST', {
                    commentId: commentId
                }, {
                    Authorization: `Bearer ${token}`
                })

                setIsLiked(true)
                setLikeNumber(likeNumber + 1)
            } else {
                await request(`/api/comments/dislike`, 'POST', {
                    commentId: commentId
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
            <div className='mt-5 pt-5 grid grid-cols-12 border-gray-200 border-t'>
                <div className='col-span-1 pt-0.5'>
                    <img className="block mt-1 ml-5 h-8 rounded-full"
                         src={'/uploads/' + comment.owner[0].avatar}
                         alt="Avatar"/>
                </div>
                <div className='col-span-11 text-sm'>
                    <p className='text-black text-sm font-semibold mb-1'>
                        <Link to={'/profile/' + comment.owner[0]._id}>
                            {getName(comment.owner[0])}
                        </Link>
                    </p>
                    <p>
                        {comment.text}
                    </p>
                    <p className='text-xs text-gray-400 absolute mt-1'>
                        {comment.date.slice(0,10)}
                    </p>
                    <div className='grid grid-cols-12'>
                        <div className='flex justify-end col-start-12 mr-4 gap-x-2'>
                            <svg onClick={() => {
                                toggleLike(comment._id)
                            }} className={ isLiked ?
                                'w-3 cursor-pointer fill-current text-red-500'
                                :
                                'w-3 cursor-pointer fill-current text-gray-500 hover:fill-current hover:text-red-500'}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.89">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path
                                            d="M32,58.89a2.47,2.47,0,0,1-1.74-.72L5.77,33.68A19.74,19.74,0,0,1,32,4.28a19.73,19.73,0,0,1,26.22,29.4L33.74,58.17A2.47,2.47,0,0,1,32,58.89Zm-12.29-54A14.8,14.8,0,0,0,9.25,30.2L32,53,54.75,30.2h0a14.81,14.81,0,0,0-21-20.95A3,3,0,0,1,32,10a2.48,2.48,0,0,1-1.78-.7A14.83,14.83,0,0,0,19.71,4.93Z"/>
                                    </g>
                                </g>
                            </svg>
                            <p className='text-xs text-gray-700 ml-0.5'>{likeNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
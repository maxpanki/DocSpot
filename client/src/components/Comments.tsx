import React, {useCallback, useContext, useEffect, useState} from "react";

import avatar from '../img/mocup_avatar.png'
import CommentForm from "./CommentForm";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "./Loader";
import {AuthContext} from "../context/AuthContext";
import {CommentCard} from "./CommentCard";

export const Comments = ({ postId }: any) => {

    const {token, userId, avatar, callPopup} = useContext(AuthContext)
    const { request } = useHttp()
    const [comments, setComments] = useState(null)
    const [numberOfComments, setNumberOfComments] = useState(3)

    const getComments = useCallback( async () => {
        try {
            const fetched = await request(`/api/comments/get`, 'POST', {
                post: postId
            }, {
                Authorization: `Bearer ${token}`
            })
            setComments(fetched.comments)
        } catch (e: any) {
            callPopup(e.message, 'error')
        }
    }, [token, userId, request])

    useEffect(() => {
        getComments()
    }, [getComments])

    let elements
    if (comments) {
        // @ts-ignore
        elements = comments.map((comment: any) => {
            return (
                <CommentCard key={comment._id} comment={comment} />
            )
        })
    }

    if (elements) {
        return (
            <React.Fragment>
                { elements && elements.length > numberOfComments &&
                    <button className='text-sm text-blue-500 bg-opacity-50 w-full' type='button' onClick={() => {
                        let value = 3
                        if (elements.length){
                            value = numberOfComments + 3 <= elements.length ? numberOfComments + 3 : elements.length
                        }
                        setNumberOfComments(value)
                    }}>Show more comments</button>
                }
                {elements.slice(elements.length - numberOfComments, elements.length)}
                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-1 pt-0.5 mr-2 flex justify-end'>
                        <img className="block h-8 rounded-full"
                             src={'/uploads/' + avatar}
                             alt="Avatar"/>
                    </div>
                    <CommentForm post={postId} refreshComments={getComments} />
                </div>
            </React.Fragment>
        )
    }

    return(
        <Loader />
    )
}
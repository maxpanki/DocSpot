import React, {useState} from "react"

import {PostCard} from "./PostCard"
import {ExtendedPostType, PostsProps, PostType, UserType} from "../types"

export const Posts = ({posts, user}: PostsProps) => {

    const [numberOfPosts, setNumberOfPosts] = useState(3)

    const elements = posts.reverse().map((post: ExtendedPostType | PostType) => {
        let userData: UserType
        if (!user && typeof(post.owner[0]) === 'object' ) {
            userData = post.owner[0]
        } else {
            userData = (user as UserType)
        }
        return (
            <PostCard key={post._id} post={post} user={userData} />
        )
    })

    return (
        <div className="mx-3 mb-10 col-span-6">
            {elements.slice(0, numberOfPosts)}
            { elements && elements.length > numberOfPosts &&
                <button className='text-sm text-blue-500 bg-opacity-50 w-full' type='button' onClick={() => {
                    let value = 3
                    if (elements.length){
                        value = numberOfPosts + 3 <= elements.length ? numberOfPosts + 3 : elements.length
                    }
                    setNumberOfPosts(value)
                }}>Show more</button>
            }
        </div>
    )
}
import React from "react"
import {UserInfo} from "./UserInfo"
import {Posts} from "./Posts"
import {UserCardProps} from "../types";

export const UserCard = ({user, posts, changeMode}: UserCardProps) => {

    return(
        <div>
            <div className='grid grid-cols-12'>
                <UserInfo user={user} changeMode={changeMode}/>
                <div className="mx-3 mt-10 col-span-9">
                    {
                        posts.length === 0 &&
                        <div className='w-full h-full'>
                            <p className='text-6xl flex justify-center mt-32 text-gray-400 opacity-40'>
                                No posts
                            </p>
                        </div>
                    }
                    {
                        posts.length !== 0 && <Posts posts={posts} user={user} />
                    }
                </div>
            </div>
        </div>
    )
}
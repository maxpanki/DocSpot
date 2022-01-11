import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {UserInfo} from "./UserInfo";
import {Posts} from "./Posts";

export const UserCard = ({data, posts, changeMode}: any) => {

    const auth = useContext(AuthContext)
    const {user} = data
    const comments = null

    return(
        <div>
            <div className='grid grid-cols-12 bg-gray-50'>
                <UserInfo user={user} changeMode={changeMode}/>
                <div className="mx-3 mt-10 col-span-9">
                    {
                        posts.length === 0 &&
                        <div>
                            no posts
                        </div>
                    }
                    {
                        posts.length !== 0 && <Posts posts={posts} user={user} comments={comments} />
                    }
                </div>
            </div>
        </div>
    )
}
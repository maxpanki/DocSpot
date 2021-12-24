import React from 'react'
import Post from "../components/posts";
import Stats from "../components/Stats";
import RecommendedHashtags from "../components/RecommendedHashtags";

export const FeedPage = () => {
    return(
        <div>
            <div className='grid grid-cols-12 bg-gray-50'>
                <Stats />
                <Post />
                <RecommendedHashtags />
            </div>
        </div>
    )
}
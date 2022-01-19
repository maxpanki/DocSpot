import React from "react";
import {RecommendedHashtagsProps, TagType} from "../types";

const RecommendedHashtags = ({tags}: RecommendedHashtagsProps) => {

    const element = tags.map((tag: TagType) => {
        return (
            <a key={tag._id} href={'/feed/' + tag.tag.substring(1)} className='flex cursor-pointer'>
                {tag.tag}
            </a>
        )
    })

    return (
        <div className="mx-3 col-span-3">
            <div className='rounded shadow w-full py-3 px-3'>
                <p className='font-bold'>
                    Most popular Hashtags:
                </p>
                <div className='text-gray-700 my-3 mx-3'>
                    {element}
                </div>
            </div>
        </div>
    )
}

export default RecommendedHashtags;
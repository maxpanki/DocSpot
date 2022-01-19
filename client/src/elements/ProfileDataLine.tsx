import React from "react"
import {ProfileDataLineProps} from "../types"

const ProfileDataLine = ({label, text}: ProfileDataLineProps) => {
    return(
        <div className='flex-rows justify-items-stretch text-sm pb-2'>
            <div>{label}:</div>
            <div className='text-gray-500 font-light '>{text}</div>
        </div>
    )
}

export default ProfileDataLine
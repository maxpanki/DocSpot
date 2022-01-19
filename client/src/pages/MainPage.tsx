import React from 'react'
import doctorImg from "../img/doctor-main.png"

export const MainPage = () => {
    return(
        <div className='flex-1 relative h-full diagonal-split-background'>
            <div className='h-full'>
                <h1 className='text-white font-logo text-4xl absolute right-64 top-1/2'>
                    Social network <br/> That connects patients and doctors.
                </h1>
                <img alt='Main page background' className='h-full absolute left-32 bottom-0' src={doctorImg} />
            </div>
        </div>
    )
}
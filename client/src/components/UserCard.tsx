import React from "react";
import ProfileDataLine from "../elements/ProfileDataLine";

export const UserCard = ({data, changeMode}: any) => {

    const user = data.user

    const getName = () => {
        console.log(user)
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    return(
        <div>
            <div className='grid grid-cols-12 bg-gray-50'>
                <div className="mt-10 mx-3 col-span-3">
                    <div className='rounded shadow w-full'>
                        <div className='border-b pb-3 border-gray-300'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className="block max-h-40 rounded-full mb-5"
                                         src={'/uploads/' + user.avatar}
                                         alt="Avatar"/>
                                </div>
                                <div className='flex justify-center'>
                                    <p>{getName()}</p>
                                </div>
                            </div>
                        </div>
                        <div className='pl-8 py-8 leading-loose'>
                            <ProfileDataLine label='Role' text={user.role || 'Company'}/>
                            {user.companySize && <ProfileDataLine label='Company size' text={user.companySize} />}
                            {user.position && <ProfileDataLine label='Position' text={user.position}/>}
                            {user.phoneNumber && <ProfileDataLine label='Phone number' text={user.phoneNumber} />}
                            {user.address && <ProfileDataLine label='Address' text={user.address} />}

                        </div>
                    </div>
                    <div className='w-full mt-3 flex justify-center'>
                        <button
                            className='py-2 w-1/2 text-xl rounded-xl text-white bg-blue-500 hover:bg-blue-600'
                            onClick={() => {
                                changeMode('edit')}
                            }>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="mx-3 my-5 col-span-6">

                </div>
                <div className="mt-10 mx-3 col-span-3">

                </div>
            </div>
        </div>
    )
}
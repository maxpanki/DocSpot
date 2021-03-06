import React, {useContext} from "react"
import ProfileDataLine from "../elements/ProfileDataLine"
import Map from "../elements/Map"
import {AuthContext} from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"
import {useNavigate} from "react-router-dom"

export const UserInfo = ({user, changeMode}: any) => {

    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()
    const {request} = useHttp()

    let coordinates
    if (user.location) {
        const array = user.location.split(':')
        coordinates = {
            lat: +array[0],
            lng: +array[1]
        }
    }

    const createConversation = async () => {
        try {
            await request(`/api/messenger/newConversation`, 'POST', {
                receiverId: user._id
            }, {
                Authorization: `Bearer ${token}`
            })
            navigate('/chat')
        } catch (e: any) {
            console.log(e.message)
        }
    }

    const getName = () => {
        if (user.personName) {
            return user.personName + ' ' + user.personSecondName
        }
        if (user.companyName) {
            return user.companyName
        }
    }

    return (
        <div className="mt-10 mx-3 col-span-3">
            <div className='rounded shadow w-full'>
                <div className='border-b pb-3 border-gray-300'>
                    <div>
                        <div className='flex justify-center'>
                            <img className="block max-h-40 rounded-full mt-2 mb-5"
                                 src={'/uploads/' + user.avatar}
                                 alt="Avatar"/>
                        </div>
                        <div className='flex justify-center'>
                            <p>{getName()}</p>
                        </div>
                    </div>
                </div>
                <div className='pl-8 py-8 leading-loose'>
                    <ProfileDataLine label='Role' text={user.role}/>
                    {user.companySize && <ProfileDataLine label='Company size' text={user.companySize} />}
                    {user.position && <ProfileDataLine label='Position' text={user.position}/>}
                    {user.phoneNumber && <ProfileDataLine label='Phone number' text={user.phoneNumber} />}
                    {user.address && <ProfileDataLine label='Address' text={user.address} />}

                </div>
            </div>
            {coordinates &&
                <div className='mt-5 rounded rounded-2xl'>
                    <Map lat={coordinates.lat} lng={coordinates.lng} />
                </div>
            }
            <div className='w-full mt-3 flex justify-center'>
                { user._id === userId &&
                    <button
                        className='py-2 w-1/2 text-xl rounded-xl text-white bg-blue-500 hover:bg-blue-600'
                        onClick={() => {
                            changeMode('edit')
                        }}>
                        Edit
                    </button>
                }
                { user._id !== userId &&
                    <button
                        className='py-2 w-1/2 text-xl rounded-xl text-white bg-blue-500 hover:bg-blue-600'
                        onClick={() => {
                            createConversation()
                        }}>
                        Send a message
                    </button>
                }
            </div>
        </div>
    )
}
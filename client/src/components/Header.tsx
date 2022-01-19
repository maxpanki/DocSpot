import React, {useContext, useEffect, useState} from "react"
import MainMenuNavElem from "../elements/MainMenuNavElem"
import { listSVG, logout, messageSVG, portraitSVG, questionSVG } from "../img/svg/svg"
import {HeaderProps} from "../types"
import {Link} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"

const Header = ({isAuthenticated}: HeaderProps) => {
    const auth = useContext(AuthContext)
    const [avatar, setAvatar] = useState(auth.avatar)
    useEffect(() => {
        setAvatar(auth.avatar)
    }, [auth.avatar])

    const menuElements = () => {
        if (isAuthenticated) {
            return(
                <div className="text-xs h-14 col-end-13 col-span-5 grid grid-cols-6">
                    <MainMenuNavElem message='My Profile' svg={portraitSVG} actionLink={'/profile/' + auth.userId} />
                    <MainMenuNavElem message='Feed' svg={listSVG} actionLink='/feed' />
                    <MainMenuNavElem message='Q&A' svg={questionSVG} actionLink='/qa' />
                    <MainMenuNavElem message='Messages' svg={messageSVG} actionLink='/chat' />
                    <MainMenuNavElem message='Log out' svg={logout} actionLink='/logout' />
                    <div className='pt-1 grid justify-items-center'>
                        <img className="block h-11 rounded-full"
                             src={"/uploads/" + avatar}
                             alt="Avatar"/>
                    </div>
                </div>
                )
        } else {
            return (
                <div className="text-xs h-14 col-end-13 grid grid-cols-1">
                    <MainMenuNavElem message='Login/Register' svg={portraitSVG} actionLink='/Auth'/>
                </div>
            )
        }
    }

    return (
        <div className="mx-auto border-b border-gray-300 w-full h-14">
            <div className="grid grid-cols-12 content-center">
                <Link to='/' className="col-span-2 pt-2.5 ml-5 font-logo text-2xl font-bold text-blue-500 cursor-default">
                    DocSpot.
                </Link>
                {menuElements()}
            </div>
        </div>
    )
}

export default Header
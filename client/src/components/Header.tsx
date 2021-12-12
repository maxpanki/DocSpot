import React from "react";
import avatar from "../img/mocup_avatar.png";
import MainMenuNavElem from "../elements/MainMenuNavElem";
import {bellSVG, listSVG, messageSVG, portraitSVG} from "../img/svg/svg";
import {HeaderProps} from "../types";
import {Link} from "react-router-dom";

const Header = ({isAuthenticated}: HeaderProps) => {

    const menuElements = () => {
        if (isAuthenticated) {
            return(
                <div className="text-xs h-14 col-end-13 col-span-4 grid grid-cols-5">
                    <MainMenuNavElem message='My Profile' svg={portraitSVG} actionType={'nav-button'} actionLink='/profile'/>
                    <MainMenuNavElem message='Feed' svg={listSVG} actionType={'nav-button'} actionLink='/feed' />
                    <MainMenuNavElem message='Q&A' svg={messageSVG} actionType={'nav-button'} actionLink='/qa' />
                    <MainMenuNavElem message='Notifications' svg={bellSVG} actionType={'nav-popup'} />
                    <div className='pt-1 grid justify-items-center'>
                        <img className="block h-11 rounded-full"
                             src={avatar}
                             alt="Woman's Face"/>
                    </div>
                </div>
                )
        } else {
            return (
                <div className="text-xs h-14 col-end-13 grid grid-cols-1">
                    <MainMenuNavElem message='Login/Register' svg={portraitSVG} actionType={'nav-button'} actionLink='/Auth'/>
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

export default Header;
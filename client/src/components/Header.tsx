import React from "react";
import MainMenuNavElem from "../elements/MainMenuNavElem";
import {bellSVG, listSVG, messageSVG, portraitSVG, questionSVG} from "../img/svg/svg";
import {HeaderProps} from "../types";
import {Link} from "react-router-dom";
import MainMenuToggleElem from "../elements/MainMenuToggleElem";

const Header = ({isAuthenticated}: HeaderProps) => {

    const menuElements = () => {
        if (isAuthenticated) {
            return(
                <div className="text-xs h-14 col-end-13 col-span-5 grid grid-cols-6">
                    <MainMenuNavElem message='My Profile' svg={portraitSVG} actionLink='/profile'/>
                    <MainMenuNavElem message='Feed' svg={listSVG} actionLink='/feed' />
                    <MainMenuNavElem message='Q&A' svg={questionSVG} actionLink='/qa' />
                    <MainMenuNavElem message='Messages' svg={messageSVG} actionLink='/chat' />
                    <MainMenuToggleElem message='Notifications' svg={bellSVG} />
                    <div className='pt-1 grid justify-items-center'>
                        <img className="block h-11 rounded-full"
                             src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                             alt="Woman's Face"/>
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

export default Header;
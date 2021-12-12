import React from "react";
import {MainMenuNavElemProps} from "../types";
import {Link} from "react-router-dom";

const MainMenuNavElem = ({message, actionType, actionLink, svg}:MainMenuNavElemProps) => {

    if (actionLink) {
        return(
            <Link to={actionLink} className='cursor-pointer pt-1 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                {svg}
                <p>{message}</p>
            </Link>
        )
    } else {
        return(
            <div className='cursor-pointer pt-1 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                {svg}
                <p>{message}</p>
            </div>
        )
    }
}

export default MainMenuNavElem
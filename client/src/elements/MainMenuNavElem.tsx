import React from "react";
import {MainMenuNavElemProps} from "../types";
import {Link} from "react-router-dom";

const MainMenuNavElem = ({message, actionLink, svg}:MainMenuNavElemProps) => {
    return(
        <Link to={actionLink} className='cursor-pointer pt-1 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
            {svg}
            <p>{message}</p>
        </Link>
    )
}

export default MainMenuNavElem
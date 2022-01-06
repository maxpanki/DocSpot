import React from "react";

export const EditUserCard = ({data, changeMode}: any) => {

    const user = data.user

    return(
        <div>
            Edit user
            <button onClick={() => {
                changeMode('view')
            }}>revert</button>
        </div>
    )
}
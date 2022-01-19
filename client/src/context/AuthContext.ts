import {createContext} from "react"

function logoutFunc() {}
function loginFunc(jwtToken:any, id: any, avatar: string, isVerified: boolean) {}
function callPopupFunc(message: string, type: string) {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    avatar: 'defaultAvatar.bmp',
    login: loginFunc,
    logout: logoutFunc,
    isAuthenticated: false,
    callPopup: callPopupFunc,
    isVerified: false
})
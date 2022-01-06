import {createContext} from "react";

function logoutFunc() {}
function loginFunc(jwtToken:any, id: any) {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: loginFunc,
    logout: logoutFunc,
    isAuthenticated: false
})
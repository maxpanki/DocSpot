import {ReactElement} from "react";

export type MainMenuNavElemProps = {
    message: string,
    svg: ReactElement,
    actionType: string,
    actionLink?: string
}

export type HeaderProps = {
    isAuthenticated: boolean
}

export type RegFormInputs = {
    email: string,
    password: string,
    passwordConfirm: string,
    name: string,
    secondName: string,
    role: string,
    companySize: string
}

export type AuthFormInputs = {
    email: string,
    password: string
}

export type AlertsProps = {
    type: string,
    message: string
}

export type RegFormProps = {
    callPopup: (message: string, type: string) => void
}

export type AuthFormProps = {
    callPopup: (message: string, type: string) => void
}
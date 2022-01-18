import {ReactElement} from "react";
import exp from "constants";

export type MainMenuNavElemProps = {
    message: string,
    svg: ReactElement,
    actionLink: string,
}

export type MainMenuToggleElemProps = {
    message: string,
    svg: ReactElement,
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

export type ProfileDataLineProps = {
    label: string,
    text: string
}

export type EditUserCardProps = {
    data: any,
    changeMode: (stateValue: string) => void,
}

export type StatsProps = {
    data: any,
    postsActivity: string
}

export type RecommendedHashtagsProps = {
    tags: any
}

export type EditUserCardFormInputs = {
    companySize: string,
    email: string,
    password: string,
    confirmPassword: string,
    location: string,
    address: string,
    phoneNumber: string,
    avatar: string,
    position: string
}

export type CreatePostInputs = {
    title: string,
    text: string,
    img: string
}

export type QaInputs = {
    title: string,
    text: string,
    img: string
}

export type CreateCommentInputs = {
    text: string,
}

export type AddMessageInputs = {
    text: string,
}

export type CommentFormProps = {
    post: string,
    refreshComments: () => Promise<void>
}

export type PostsProps = {
    posts: any,
    user?: any
}

export type MapProps = {
    lat: number,
    lng: number
}
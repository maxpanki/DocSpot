import {ReactElement} from "react"

export type MainMenuNavElemProps = {
    message: string,
    svg: ReactElement,
    actionLink: string,
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
    user: UserType,
    changeMode: (stateValue: string) => void,
}

export type StatsProps = {
    user: UserType,
    postsActivity: string
}

export type RecommendedHashtagsProps = {
    tags: TagType[]
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
    posts: ExtendedPostType[] | PostType[],
    user?: UserType
}

export type PostCardProps = {
    post: ExtendedPostType | PostType,
    user: UserType
}

export type MapProps = {
    lat: number,
    lng: number
}

export type MessageType = {
    _id: string
    conversationId: string,
    owner: string,
    text: string
}

export type ArrivalMessageType = {
    _id: string,
    owner: string,
    text: string
}

export type ConversationType = {
    _id: string
    members: string[],
    type: string,
    secretName?: string
}

export type UserType = {
    _id: string,
    email: string,
    password: string,
    role: string,
    isVerified: boolean,
    companyName?: string,
    companySize?: string,
    personName?: string,
    personSecondName?: string,
    position?: string,
    phoneNumber?: string,
    address?: string,
    location?: string,
    avatar: string,
    activities: number
}

export type UserCardProps = {
    user: UserType,
    posts: PostType[],
    changeMode: (stateValue: string) => void
}

export type ConversationProps = {
    conversation: ConversationType,
    setActiveConversationData: (value: ConversationDataType) => void
}

export type QaFormProps = {
    add: (qa: QaType) => void
}

export type ConversationDataType = {
    user: UserType,
    conversation: ConversationType
}

export type MessagesProps = {
    conversationData: ConversationDataType,
    messages:MessageType[],
    refreshMessages: (savedMessage: MessageType) => void
}

export type PostType = {
    _id: string,
    title: string,
    text: string,
    img?: string,
    likes: number,
    activity: number,
    date: string,
    owner: string
}

export type ExtendedPostType = {
    _id: string,
    title: string,
    text: string,
    img?: string,
    likes: number,
    activity: number,
    date: string,
    owner: UserType[]
}

export type TagType = {
    _id: string
    tag: string,
    activity: number
}

export type QaType = {
    _id: string
    title: string,
    text: string,
    img?: string,
    date: string,
    owner: string
}

export type CommentsProps = {
    postId: string
}

export type CommentCardProps = {
    comment: ExtendedCommentType
}

export type ExtendedCommentType = {
    _id: string,
    text: string,
    likes: number,
    date: string,
    post: string,
    owner: UserType[]
}
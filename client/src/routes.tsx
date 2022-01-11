import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {FeedPage} from './pages/FeedPage'
import {ProfilePage} from './pages/ProfilePage'
import {AuthPage} from './pages/AuthPage'
import {MainPage} from "./pages/MainPage";
import {PageNotFound} from "./pages/PageNotFound";
import {QAPage} from "./pages/QAPage";
import {ChatPage} from "./pages/ChatPage";
import {QuestionPage} from "./pages/QuestionPage";
import {Logout} from "./components/Logout";
import {CreatePostPage} from "./pages/CreatePostPage";


export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/feed' element={<FeedPage/>} />
                <Route path='/qa' element={<QAPage/>} />
                <Route path='/question' element={<QuestionPage />} />
                <Route path='/profile/:id' element={<ProfilePage/>} />
                <Route path='/' element={<MainPage />} />
                <Route path='/chat' element={<ChatPage/>} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/create-post' element={<CreatePostPage />} />
                <Route path='*' element={<Navigate to='/feed' />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/auth' element={<AuthPage/>} />
            <Route path='/' element={<MainPage />} />
            <Route path='/page-not-found' element={<PageNotFound />} />
            <Route path='*' element={<Navigate to='/page-not-found' />} />
        </Routes>
    )
}
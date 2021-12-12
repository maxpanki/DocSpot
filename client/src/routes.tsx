import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {FeedPage} from './pages/FeedPage'
import {ProfilePage} from './pages/ProfilePage'
import {AuthPage} from './pages/AuthPage'
import {MainPage} from "./pages/MainPage";
import {PageNotFound} from "./pages/PageNotFound";
import {QAPage} from "./pages/QAPage";

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/feed' element={<FeedPage/>} />
                <Route path='/qa' element={<QAPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<Navigate to='/profile' />} />
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
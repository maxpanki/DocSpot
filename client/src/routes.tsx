import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {FeedPage} from './pages/FeedPage'
import {ProfilePage} from './pages/ProfilePage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/feed' element={<FeedPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/' element={<Navigate to='/feed' />} />
                <Route path='*' element={<Navigate to='/profile' />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/Auth' element={<AuthPage/>} />
            <Route path='*' element={<Navigate to='/Auth' />} />
        </Routes>
    )
}
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {useAuth} from "./hooks/auth.hook";
import { AuthContext } from './context/AuthContext';
import {Loader} from "./components/Loader";

function App() {

    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
                token, userId, login, logout, isAuthenticated
        }}>
            <div className='min-h-screen flex flex-col'>
                <Router>
                  <Header isAuthenticated={isAuthenticated}/>
                  {routes}
                  <Footer />
                </Router>
            </div>
        </AuthContext.Provider>
    )
}

export default App

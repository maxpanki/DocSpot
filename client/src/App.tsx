import React, {useRef, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {useAuth} from "./hooks/auth.hook";
import { AuthContext } from './context/AuthContext';
import {Loader} from "./components/Loader";
import {Alerts} from "./elements/Alerts";

function App() {

    const {token, login, logout, userId, ready, avatar} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    //User data information object creation
    const [message, setMessage ] = useState('')
    const [type, setType] = useState('')

    //change popup data
    const callPopup = (message: string, type: string) => {
        setMessage(message)
        setType(type)
        if (snackbarRef.current){
            snackbarRef.current.show()
        }
    }

    const snackbarRef = useRef<{show: ()=> void}>(null)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
                token, userId, avatar, login, logout, isAuthenticated, callPopup
        }}>
            <div className='min-h-screen flex flex-col'>
                <Router>
                  <Header isAuthenticated={isAuthenticated}/>
                  {routes}
                  <Footer />
                </Router>
            </div>
            <Alerts
                ref={snackbarRef}
                message={message}
                type={type} />
        </AuthContext.Provider>
    )
}

export default App

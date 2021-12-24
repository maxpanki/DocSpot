import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import Header from "./components/Header";
import {Footer} from "./components/Footer";

function App() {

    const routes = useRoutes(true)

    return (
        <div className='min-h-screen flex flex-col'>
            <Router>
              <Header isAuthenticated={true}/>
              {routes}
              <Footer />
            </Router>
        </div>
    )
}

export default App

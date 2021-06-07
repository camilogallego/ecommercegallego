import React from 'react'
import NavBar from '../NavBar'
import {
    BrowserRouter,
    Switch,
    Route,

} from 'react-router-dom';
import Offers from '../pages/Offers'
import Home from '../pages/Home'
import Contact from '../pages/Contact'



function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/Offers">
                        <Offers/>
                    </Route>
                    <Route path="/Contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default Router

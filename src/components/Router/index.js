import React from 'react'
import NavBar from '../NavBar'
import {
    BrowserRouter,
    Switch,
    Route,

} from 'react-router-dom';
import Products from '../pages/Products/Products'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'



function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Products" component={Products}/>
                    <Route path="/Contact" component={Contact}/>
                    
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default Router

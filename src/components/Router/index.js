import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route,

} from 'react-router-dom';
import Products from '../pages/Products/Products'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import ProductsDetail from '../pages/ProductsDetail/ProductsDetail'



function Router({children}) {
    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Products" component={Products} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Detail/:id" component={ProductsDetail} />
            </Switch>
        </BrowserRouter>

    )
}

export default Router

import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../pages/Home/Home'
import Tecno from '../pages/ProductTecno/ProductTecno'
import Indumentary from '../pages/ProductIndumen/ProductIndum'
import ProductsDetail from '../pages/ProductsDetail/ProductsDetail'
import CartProduct from '../pages/Cart/CartProduct';
import FormShip from '../pages/FormShip/FormShip'

function Router({children}) {
    return (
        <BrowserRouter >
        {children}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Tecno" component={Tecno} />
                <Route path="/Indumentary" component={Indumentary} />
                <Route path="/Detail/:id" component={ProductsDetail} />
                <Route path="/Cart" component={CartProduct} /> 
                <Route path="/FormShip" component={FormShip} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router

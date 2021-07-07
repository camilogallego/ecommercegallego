import React from 'react'
import { Link } from 'react-router-dom'

function BtnBuy() {
    return (
        <div>
            <h2>Tu carrito está vacío</h2>
            <p>¡Miles de productos te esperan!</p>
            <Link to={"/Products"}>
                <button className="btnAdd">Ir a comprar</button>
            </Link>
        </div>
    )
}

export default BtnBuy

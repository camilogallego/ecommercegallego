import React from 'react'
import { Link } from 'react-router-dom'
import './BtnEnd.css'

function BtnEnd() {
    return (
        <div>
            <Link to={"/Cart"}>
            <button className="BtnEnd">Finalizar Compra</button>
            </Link>
        </div>
    )
}

export default BtnEnd

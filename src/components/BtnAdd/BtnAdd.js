import React from 'react'
import { Link } from 'react-router-dom'

function BtnAdd() {
    return (
        <div>
            <Link to={"/Cart"}>
            <button className="btnAdd">Finalizar Compra</button>
            </Link>
        </div>
    )
}

export default BtnAdd

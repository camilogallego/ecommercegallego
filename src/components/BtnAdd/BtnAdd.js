import React from 'react'
import { Link } from 'react-router-dom'

function BtnAdd() {
    return (
        <div>
            <Link to={"/"}>
            <button className="btnAdd" onClick>Finalizar Compra</button>
            </Link>
        </div>
    )
}

export default BtnAdd

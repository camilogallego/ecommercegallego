import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Counter.css'


function Counter({ stock }) {
    const [cart, setCart] = useState(0)
    const [disabled, setDisabled] = useState()


    const handleUP = () => {
        if (cart === stock ? setDisabled(false) : setDisabled)
            setCart(cart + 1)
    }
    const handleDown = () => {
        if (cart <= 0 ? setDisabled(false) : setDisabled)
            setCart(cart - 1)
    }
    return (
        <div >
            <div className="contentAdd">
                <button
                    className="btnIcon"
                    onClick={handleDown}
                    disabled={disabled}
                >
                    <RemoveIcon />
                </button>
                <h2>{cart}</h2>
                <button
                    className="btnIcon"
                    onClick={handleUP}>
                    <AddIcon />
                </button>
            </div>
            <div>
                <button className="btnAdd">agregar</button>
            </div>

        </div>
    )
}

export default Counter

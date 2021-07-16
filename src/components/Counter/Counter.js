import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Counter.css'


function Counter({ stock, addProduct, defaultValue }) {
    const [cart, setCart] = useState(0)
    const [disabled, setDisabled] = useState()


    const handleUP = () => {
        if (cart === stock ? setDisabled(false) : setDisabled)
            setCart(cart + 1)
    }
    const handleDown = () => {
        if (cart === 1 ? setDisabled(false) : setDisabled)
            if (cart <= 0 ? setDisabled(false) : setDisabled)
                setCart(cart - 1)
    }

    useEffect(() => {
        setCart(defaultValue === undefined ? 0 : defaultValue)
    }, [])

    return (
        <div className="counter">
            <div className="contentAdd">
                <button
                    className="btnIcon"
                    onClick={handleDown}
                    disabled={disabled}
                >
                    <RemoveIcon />
                </button>
                <h5>{cart}</h5>
                <button
                    className="btnIcon"
                    onClick={handleUP}>
                    <AddIcon />
                </button>
            </div>
            <button
                className="btnAdd"
                onClick={() => { addProduct(cart) }}
                disabled={!cart}
            >
                Agregar
                </button>


        </div>
    )
}

export default Counter

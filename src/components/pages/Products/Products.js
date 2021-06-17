import React from 'react'

function Offers() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(prods => console.log(prods))
    return (
        <div>
            <h2>Productos</h2>
            
        </div>
    )
}

export default Offers

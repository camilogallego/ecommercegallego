import React from 'react'
import Counter from '../Counter'
import './Card.css'

function Card({ title, imageUrl, price, stock }) {


    return (
        <div className="card" >
            <img src={imageUrl} alt="imagenprod" className="cardImg" />
            <div className="card-body">
                <h5 className="card-title aline-tex-center">{title}</h5>
            </div>
            <div className="containerCounter">
            <h4 className="card-text ">${price}</h4>
            <Counter stock={stock} />
            </div>
        </div>
    )
}

export default Card

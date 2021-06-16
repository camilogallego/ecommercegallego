import React from 'react'
import Counter from '../Counter'
import './Card.css'

function Card({ tittle, imageUrl, description, stock }) {


    return (
        <div className="card" >
            <img src={imageUrl} alt="imagenprod" className="containerImg" />
            <div className="card-body">
                <h3 className="card-title aline-tex-center">{tittle}</h3>
                 <p className="card-text text-secondary">{description}</p>
            </div>

            <Counter 
            stock={stock} />

        </div>
    )
}

export default Card

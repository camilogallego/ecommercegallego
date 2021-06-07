import React from 'react'
import './Card.css'

function Card({tittle,imageUrl,description}) {
    return (
        <div className="card" >
            <img src={imageUrl} alt="imagenprod" className="containerImg" />
            <div className="card-body">
                <h3  className="card-title aline-tex-center">{tittle}</h3>
                <p className="card-text text-secondary">{description}
            </p>
            </div>

        </div>
    )
}

export default Card

import React from 'react'
import './Card.css'
import {Link }from 'react-router-dom'

function Card({ title, imageUrl, price,id }) {


    return (
        <Link to={`/detail/${id}`} className="cardLink">
        <div className="card cardProducts" >
                <img src={imageUrl} alt="imagenprod" className="cardImg cardProductImg" />
            <div className="card-body">
                <h5 className="card-title aline-tex-center">{title}</h5>
            </div>
            <h4 className="card-text ">${price}</h4>
        </div>
        </Link>
    )
}

export default Card

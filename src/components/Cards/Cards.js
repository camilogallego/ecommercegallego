import React from 'react'
import Card from '../Card/Card'
import './Cards.css'


function Cards({ cards = [] }) {
    return (
        <div className="container">
            <div className="row">
                {cards.map(card => (
                    <div className="col-md-3 cards" key={card.id}>
                        <Card
                            title={card.title}
                            imageUrl={card.image}
                            price={card.price}
                            stock={card.stock}
                            id={card.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards

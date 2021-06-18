import React from 'react'
import Card from '../Card'
import './Cards.css'


function Cards({ cards = [] }) {
    return (
        <div className="container">
            <div className="row">
                {cards.map(card => (
                    <div className="col-md-4 cards" key={card.id}>
                        <Card
                            title={card.title}
                            imageUrl={card.image}
                            price={card.price}
                            stock={card.stock}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards

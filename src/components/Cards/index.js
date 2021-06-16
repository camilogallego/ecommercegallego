import React from 'react'
import Card from '../Card'
import { cards } from './contanst'
import './Cards.css'



function Cards() {
    return (
        <div className="container">
            <div className="row">
                {cards.map(card => (
                    <div className="col-md-4 cards" key={card.id}>
                        <Card
                            tittle={card.tittle}
                            imageUrl={card.image}
                            description={card.description} 
                            stock={card.stock}/>
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default Cards

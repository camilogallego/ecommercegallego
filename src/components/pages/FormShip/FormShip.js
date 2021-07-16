import React, { useState, useContext } from 'react';
import { db } from '../../../Api/Firebase';
import Form from '../../Form/Form';
import './FormShip.css'
import { ItemsContext } from '../../../ItemsContext/ItemsContext'


export default function FormShip() {
    const [loading, setloading] = useState(true)
    const [items, setItems] = useContext(ItemsContext)

    const addOrEdit = async (object) => {
        try {
            const { id } = await db.collection('pedidos').add(object);
            alert(`tu pedido fue enviado id:${id}`);
            setloading(false);
            setItems([])
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            {!loading ? <div className='Thanks'><h1>Gracias Por comprar</h1></div> :
                <div>
                    <Form addOrEdit={addOrEdit} ></Form>
                </div>
            }
        </div>

    );
}
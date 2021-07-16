import React, { useEffect, useState } from 'react'
import Cards from '../../Cards/Cards'
import Spinner from '../../Spinner/Spinner'
import { db } from '../../../Api/Firebase';

function IndumentaryProducts() {
    const [state, setState] = useState()
    const [loading, setloading] = useState(true)

    const getProductsTE = () => {
        const docs = [];
        db.collection('highlights').where("category", "==", 'indumentaria')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setState(docs);
            })
        setTimeout(() => {
            setloading(false)
        }, 1000);
    };

    useEffect(() => {
        getProductsTE();
    }, []);

    return (
        <div>
            {loading && <Spinner></Spinner>}
            <div className="home">
                <h2>Productos destacados</h2>
                <Cards cards={state} />
            </div>
        </div>
    )
}

export default IndumentaryProducts
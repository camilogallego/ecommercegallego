import React, { useEffect, useState } from 'react'
import Spinner from '../../Spinner/Spinner'
import Cards from '../../Cards/Cards'
import './Home.css'
import { db } from '../../../Api/Firebase';


function Home() {
    const [state, setState] = useState()
    const [loading, setloading] = useState(true)

    const getProducts = () => {
        db.collection('highlights').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setState(docs);
            setloading(false)

        });

    };
    useEffect(() => {
        getProducts();

    }, []);
    return (
        <div>
            {loading ? <Spinner></Spinner> :
                <div className="home">
                    <h2>Productos destacados</h2>
                    <Cards
                        cards={state}
                    />
                </div>
            }


        </div>
    )
}

export default Home


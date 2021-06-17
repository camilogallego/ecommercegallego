import React, { useEffect, useState } from 'react'
import getCards from '../../../mock'
import Cards from '../../Cards'
import './Home.css'

function Home() {
     const [state, setState] = useState()

    const getApi = async()=>{
        const response = await getCards()
        setState(response)
        console.log(response);
    }

    useEffect(()=> {
        getApi()
    },[])
    return (
        <div>
            <h2>Productos destacados</h2>
           <Cards
           cards={state}
           />
        </div>
    )
}

export default Home


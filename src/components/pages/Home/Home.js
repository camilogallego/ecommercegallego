import React, { useEffect, useState, useContext } from 'react'
import {getCards} from '../../../mock'
import Cards from '../../Cards/Cards'
import './Home.css'


function Home() {
     const [state, setState] = useState()

    const getApi = async()=>{
        const response = await getCards()
        setState(response)
        
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


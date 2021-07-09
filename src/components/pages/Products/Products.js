import React, { useEffect, useState } from 'react'
import Api from '../../../Api'
import Cards from '../../Cards/Cards'
import Spinner from '../../Spinner/Spinner'

function Products() {
    const [state, setState] = useState()
    const [loading, setloading] = useState(true)

    const getApi = async () => {
        const response = await Api('products')
        setState(response)
        setloading(false)
        
    }
    useEffect(() => {
        getApi()
    }, [])
    return (
        <div>
            {loading ? <Spinner></Spinner> :
                <div>
                    <h2>Productos </h2>
                    <Cards
                        cards={state}
                    />
                </div>
            }
            
        </div>
    )
}

export default Products

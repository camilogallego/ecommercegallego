import React, { useEffect, useState } from 'react'
import Api from '../../../Api'
import Cards from '../../Cards'

function Products() {
    const [state, setState] = useState()

    const getApi = async () => {
        const response = await Api('products')
        setState(response)
        
    }

    useEffect(() => {
        getApi()
    }, [])
    return (
        <div>
            <h2>Productos </h2>
            <Cards
                cards={state}
            />
        </div>
    )
}

export default Products

import React, { useState, useEffect } from 'react'
import './ProductsDetail.css'
import Api from '../../../Api'
import Counter from '../../Counter'
import { getCardsId } from '../../../mock'
import BtnAdd from '../../BtnAdd/BtnAdd'


function ProductsDetail({ match } ) {

    let productId = match.params.id

    const [produt, setProdut] = useState([])
    const [add, setAdd] = useState(false)
    const [amount, setAmount] = useState()

    const addProduct = (cart) => {
        setAmount(cart)
        setAdd(true)
    }

    const getApi = async () => {
        let response = await Api(`products/${productId}`)
        if (response === null) {
            response = await getCardsId(productId)

        }
        setProdut(response)

    }
    useEffect(() => {
        getApi()
    }, [])



    return (
        <div key={produt.id} className="containerCard">
            <div className="title">
                <h2> {produt.title}</h2>
            </div>
            <div className=" cardDetail">
                <img
                    src={produt.image}
                    alt="imagenprod"
                    className=" cardDetailImg"
                />
                <div className="desciptionDetail" >
                    <p >
                        {produt.description}
                    </p>
                    <h5 className="card-text ">${produt.price}</h5>
                    <div className="containerCounter">
                        {add === false ? (<Counter stock={produt.stock} addProduct={addProduct} />) : (<BtnAdd></BtnAdd>) }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductsDetail

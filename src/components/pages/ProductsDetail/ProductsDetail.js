import React, { useState, useEffect, useContext } from 'react'
import './ProductsDetail.css'
import Api from '../../../Api'
import Counter from '../../Counter/Counter'
import { getCardsId } from '../../../mock'
import BtnAdd from '../../BtnAdd/BtnAdd'
import { ItemsContext } from '../../../ItemsContext/ItemsContext'


function ProductsDetail({ match }) {

    let productId = match.params.id

    const [product, setProdut] = useState({})
    const [add, setAdd] = useState(false)
    const [items, setItems] = useContext(ItemsContext)

    const addProduct = (cart) => {
        let newItems =
        {
            id: product.id,
            amount: cart,
            price: product.price,
            title: product.title,
            image: product.image,
            stock: product.stock
        }
        setItems(items.concat([newItems]))
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
        <div key={product.id} className="containerCard">
            <div className="title">
                <h2> {product.title}</h2>
            </div>
            <div className=" cardDetail">
                <img
                    src={product.image}
                    alt="imagenprod"
                    className=" cardDetailImg"
                />
                <div className="desciptionDetail" >
                    <p >
                        {product.description}
                    </p>
                    <h5 className="card-text ">${product.price}</h5>
                    <div className="containerCounter">
                        {add === false ? (<Counter stock={product.stock} addProduct={addProduct} />) : (<BtnAdd></BtnAdd>)}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductsDetail

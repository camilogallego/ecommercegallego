import React, { useContext } from 'react'
import { ItemsContext } from '../../../ItemsContext/ItemsContext'
import './CartProduct.css'
import Counter from '../../Counter/Counter'


function CartProduct() {
    const [items, setItems] = useContext(ItemsContext)

    let totalP = 0
    items.map((item) => {
        return totalP = totalP + (item.price * item.amount)
    })

    const addProduct = (amount, id) => {
        let moreProduct = items.map((addMore) => {
            if (addMore.id === id) {
                addMore.amount = amount
            }
            return addMore
        })
        setItems(moreProduct)
    }

    const deleteAll = () => {
        setItems([])
    }

    return (
        <div className="items">
            <div className="itemsDetail">
                <h4>Carrito({items.length})</h4>
                <button className="btn btn-outline-secondary btnClean" onClick={deleteAll}>vaciar</button>
            </div>
            <hr></hr>
            {items.map((product) => {
                return (
                    <div key={product.id}>
                        <div className="itemsProduct">
                            <img src={product.image}
                                alt="itemsprodu"
                                className="itemsImg"
                            />
                            <div className="itemsTitle">
                                <h6> {product.title}</h6>
                                <h5> ${product.price}</h5>
                            </div>
                            <div className="itemstotal">
                                <div className="counterItems">
                                    <Counter
                                        addProduct={(amount) => addProduct(amount, product.id)}
                                        defaultValue={product.amount}
                                        stock={product.stock}>
                                    </Counter>
                                </div>
                                <h5>${product.price * product.amount}</h5>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
            <div className="totalProduct">
            <h2>Total ${totalP}</h2>
            </div>

        </div>

    )
}

export default CartProduct

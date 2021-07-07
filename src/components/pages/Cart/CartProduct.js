import React, { useContext } from 'react'
import { ItemsContext } from '../../../ItemsContext/ItemsContext'
import './CartProduct.css'
import Counter from '../../Counter/Counter'
import BtnBuy from '../../BtnBuy/BtnBuy'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';



function CartProduct() {
    const [items, setItems] = useContext(ItemsContext)

    const sumaPrecios = items.reduce((prev, next) => prev + (next.price * next.amount), 0);

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
    const deleteItems = (id) => {
        let deleteItems = items.filter((item)=>{
            return item.id !== id
        }) 
       
        setItems(deleteItems)
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
                            <Link to={`/detail/${product.id}`}>
                                <img src={product.image}
                                    alt="itemsprodu"
                                    className="itemsImg"
                                />
                            </Link>
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
                                <div>
                                    <h5>${product.price * product.amount}</h5>
                                    <button type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => {deleteItems(product.id)} }>
                                        <DeleteIcon />Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>


                        <hr></hr>
                    </div>
                )
            })}
            <div className={sumaPrecios === 0 ? "btnBuy" : "totalProduct"}>
                {sumaPrecios === 0 ? <BtnBuy></BtnBuy> : <h2>Total ${sumaPrecios}</h2>}

            </div>

        </div>

    )
}

export default CartProduct

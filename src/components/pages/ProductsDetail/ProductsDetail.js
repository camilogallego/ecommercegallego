import React, { useState, useEffect, useContext } from 'react'
import './ProductsDetail.css'
import Api from '../../../Api'
import Counter from '../../Counter/Counter'

import BtnAdd from '../../BtnFinish/BtnEnd'
import { ItemsContext } from '../../../ItemsContext/ItemsContext'
import Spinner from '../../Spinner/Spinner'
import { db } from '../../../Api/Firebase';


function ProductsDetail({ match }) {

	let productId = match.params.id

	const [product, setProdut] = useState({})
	const [add, setAdd] = useState(false)
	const [items, setItems] = useContext(ItemsContext)
	const [loading, setloading] = useState(true)

	const addProduct = (cart) => {
		let groupProduct = items.filter(item => {
			return item.id === product.id
		})
		let newItem;
		if (groupProduct.length > 0) {
			newItem = groupProduct[0]
			newItem.amount += cart
		}
		else {
			newItem =
			{
				id: product.id,
				amount: cart,
				price: product.price,
				title: product.title,
				image: product.image,
				stock: product.stock
			}
		}
		let newItems = items.filter(item => {
			return item.id !== product.id
		})
		setItems(newItems.concat([newItem]))
		setAdd(true)
	}

	const getApi = async () => {
		let response = await Api(`products/${productId}`)
		setProdut(response)
		setTimeout(() => {
			setloading(false)
		}, 2000)
	}

	const getProducts = async () => {
		const itemCollection = db.collection('highlights')
		const itemDocument = itemCollection.doc(productId)
		let responesFirebase = await itemDocument.get()
		setProdut(
			{ ...responesFirebase.data(), id: responesFirebase.id }
		)
		setloading(false)
	}


	useEffect(() => {
		getProducts()
		getApi()
	}, [])


	return (
		<div>
			{loading ? <Spinner></Spinner> :
				<div>
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
									{add === false ? (<Counter stock={product.stock} addProduct={addProduct} />) : (<BtnAdd />)}

								</div>
							</div>

						</div>
					</div>
				</div>
			}

		</div>

	)
}

export default ProductsDetail

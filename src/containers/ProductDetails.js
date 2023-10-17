import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { image, category, price, title, description } = product
    //console.log(product)
    const { productId } = useParams()
    //console.log(productId)
    const dispatch = useDispatch()

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("error", err)
            })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            {Object.keys(product).length === 0 ? (
                <div className="text-3xl font-bold">Loading...</div>
            ) : (
                <div className="max-w-2xl w-full mx-8 bg-white p-8 rounded-lg shadow-lg text-black flex">
                    <div className="w-1/2">
                        <img src={image} alt={title} className="max-h-96 max-w-full" />
                    </div>
                    <div className="w-1/2 pl-8">
                        <div className="text-2xl font-bold mb-4">{title}</div>
                        <div className="text-xl mb-4">{category}</div>
                        <div className="text-3xl font-bold text-red-600 mb-6">${price}</div>
                        <div className="text-lg mb-8">{description}</div>
                    </div>
                </div>
            )}
        </div>
         
    )
}

export default ProductDetails

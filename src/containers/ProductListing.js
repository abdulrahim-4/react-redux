import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state)
    //console.log(products)
    const dispatch = useDispatch();

    const fetchProducts=async ()=>{
        const response=await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("err",err)
        })
        //console.log(response.data)
        dispatch(setProducts(response.data))
    }
   // console.log(products)

    useEffect(()=>{
        fetchProducts() 
    },[])
    console.log("products : ", products)
    return (
        <div className=' grid-cols-4 '> 
            <ProductComponent />
        </div>
    )
}

export default ProductListing

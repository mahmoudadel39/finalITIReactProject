import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export  function ProductDetails() {
  
  let {id} = useParams();
  let[product,setProduct]= useState({})

  useEffect(()=>{
    axios.get(`http://localhost:3005/products/${id}`).then(
      (response)=>{
        setProduct(response.data)
      }
    ).catch((error)=>{
console.log(error)
    })

  },[])
 
  return (
    <div className='bg-dark p-5  '>
     <div className="container d-flex justify-content-between align-items-center">
     <div className=" text-white p-5">
        <h1 className='text-warning text-center p-3'>Product Details</h1>
        <p className='lead mt-5'>Product id: {id}</p>
        <p className='lead'>Product Name: {product.name} </p>
        <p className='lead'>Product price: {product.price}</p>
        <p className='lead'>Product Quantity: {product.quantity}</p>
        <p className='lead'>Rate: <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i></p>
        <Link to='/products'><button className='btn btn-warning'>back</button></Link>
      </div>
      <div className="img">
        <img src={product.src} width={400} alt="#" />
      </div>

     </div>
      

    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Form ,Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
 
export  function ProductForm() {
 let {id}= useParams()
  let navigate =useNavigate();
  let[product,setProduct]=useState({})
  useEffect(()=>{
   if(id != 0){
    axios.get(`http://localhost:3005/products/${id}`).then(
      (response)=>{
        setProduct(response.data)
      }
    ).catch((error)=>{
console.log(error)
    })
   }

  },[])
  let getInputData =(e)=>{
    setProduct({
      ...product,
      [e.target.name ]: e.target.value
    })

  }
  let productHandler=(e)=>{
    e.preventDefault();
  if(id==0){
    axios.post("http://localhost:3005/products",product).then(
      ()=>{
        navigate('/products')
      }
    )
  }else{
    axios.put(`http://localhost:3005/products/${id}`,product).then(
      ()=>{
        navigate('/products')
      }
    )
  }

  }
  return (
 <div className="p-5">
     <div className="container">
        <h1  className='text-center '>{id==0 ? 'Add New Product' :'Edit Product'}</h1>
      <Form onSubmit={productHandler} className='p-3'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Product Name</Form.Label>
      <Form.Control value={product.name}

      onInput={getInputData} name='name' type="text" placeholder="Enter Product Name" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Product Price</Form.Label>
      <Form.Control value={product.price} onInput={getInputData} name='price' type="text" placeholder="Enter Product Price" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Product Quantity</Form.Label>
      <Form.Control value={product.quantity} onInput={getInputData} name='quantity' type="text" placeholder="Enter Product Quantity" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Product link image</Form.Label>
      <Form.Control value={product.src} onInput={getInputData} name='src' type="link" placeholder="Enter Product image" />
    </Form.Group>
   
   
    <Button variant="warning" type="submit">
      {id==0? 'Add New Product' : 'Edit Product'}
    </Button>
  </Form>
  </div>
 </div>
  )
}

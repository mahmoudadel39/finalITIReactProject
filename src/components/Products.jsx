import React, { useEffect, useState } from 'react'
import {Table,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export  function Products() {
  let[products,setProducts]=useState([])
  let getAllProducts = async()=>{
   try {
    let data =await axios.get("http://localhost:3005/products")
    setProducts (data.data)
   } catch (error) {
    console.log(error)
   }
  }
  useEffect(()=>{ 
    getAllProducts()

  }, [])
  let deleteProduct=(productsId)=>{
axios.delete(`http://localhost:3005/products/${productsId}`).then((response)=>{
  let filteredList =products.filter(product=>product.id != productsId)
  setProducts(filteredList)
})
  }
  return (
    <div className='products p-5 m-3'> 
    <div className="container">
        <div className="product-header d-flex justify-content-around align-items-center p-5">
        <h1 className='text-center text-muted'>Our Products</h1>
        <Link to='/products/0/edit'><i className="bi bi-plus-square-fill fs-1 text-success"></i></Link>
        </div>
       
 <div className="container">
 <div className="row">
     
      {products.map((product,index)=>{
         return <div key={product.id}  className="col-sm-12  col-lg-3">
          <div className="card  text-center bg-dark text-white p-3 ">
            <div className='d-flex'>
            <img className='img-fluid' src={product.src} alt="#" />
            <Link><i onClick={()=> deleteProduct(product.id)} className="bi bi-trash-fill text-danger ms-2 fs-5"></i></Link>

            </div>
         
         <div className="card-body">
           <h2>{product.name}</h2>
           <p className="lead">ID : {index+1}</p>
           <p className="lead">Price :{product.price}</p>
           <p className="lead">Quantity :{product.quantity>1?product.quantity : 'only One'}</p>
           <Link to={`/products/${product.id}/edit`}> <i className="bi bi-pencil-square text-info mx-3 fs-5"></i></Link>
           <Link to={`/products/${product.id}`}><i className="bi bi-eye-fill text-warning me-3 fs-5"></i></Link>
         </div>


        </div>
         </div>

      })}

      </div>
    </div>

 </div>
    
    </div>

   
  )
}

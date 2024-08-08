import { Link } from "react-router-dom";

import React from 'react'

export  function back() {
  return (
    <div>
        <div className="container text-white p-5">
<h1 className='text-warning text-center p-3'>Product Details</h1>
<p className='lead mt-5'>Product id: </p>
<p className='lead'>Product Name:  </p>
<p className='lead'>Product price: </p>
<p className='lead'>Product Quantity:</p>
<p className='lead'>Rate: <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i></p>
<Link to='/products'><button className='btn btn-warning'>back</button></Link>
</div>
    </div>
  )
}

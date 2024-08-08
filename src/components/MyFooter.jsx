import React from 'react'

export  function MyFooter() {
  return (
    <footer className="text-center bg-warning  p-2">
   
    <div className="container ">
        <a href="#"><i className="bi bi-facebook fs-2 mx-3"></i></a>
        <a href="#"><i className="bi bi-instagram fs-2 mx-3 text-danger"></i></a>
        <a href="#"><i className="bi bi-whatsapp fs-2 mx-3 text-success"></i></a>
        <a href="#"><i className="bi bi-twitter fs-2 mx-3 text-info"></i></a>

        </div>
    
    <div className="text-center ">
      © 2020 Copyright:
      <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
   {/* Copyright */}
  </footer>
  )
}

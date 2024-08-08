import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export  function MyNav() {
  return (
    <Navbar expand="lg" className="bg-warning">
    <Container>
      <Navbar.Brand href="#home" className='fs-3 fw-bolder text-white'><span className='text-dark'>Eg</span>y<span className='text-danger'>pt</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className={({isActive})=>{return isActive?'bg-dark nav-link text-white rounded':'nav-link'}} to='/' >Home</NavLink>
          <NavLink className={({isActive})=>{return isActive?'bg-dark nav-link text-white rounded':'nav-link'}} to='/products'>Products</NavLink>
          <NavLink className={({isActive})=>{return isActive?'bg-dark nav-link text-white rounded':'nav-link'}} to='/login'>Login</NavLink>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

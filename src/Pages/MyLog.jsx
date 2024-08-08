import React from 'react'
import { Form,Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


export  function MyLog() {
  return (
  <div className="container p-5 mt-5">
      <Form className='p-5 mb-5' >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   
    <NavLink to='/'> <Button className='mb-5' variant="warning" type="login">
      Submit
    </Button>
    </NavLink> 
  </Form>
  </div>
  )
}

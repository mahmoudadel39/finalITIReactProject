import React from 'react'
import { MyNav } from '../components/MyNav'
import { MyFooter } from '../components/MyFooter'
import { Outlet } from 'react-router-dom'

export  function SharedLatyout() {
  return (
   <>
   <MyNav></MyNav>
   <Outlet></Outlet>
   <MyFooter></MyFooter>
   </>
  )
}

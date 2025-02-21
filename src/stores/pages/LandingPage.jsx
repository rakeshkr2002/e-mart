import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <div>
    <Navbar></Navbar>

    </div>
    
     
     <Outlet></Outlet>
    </>
  )
}

export default LandingPage

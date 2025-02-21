import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Watches from './Watches'
import MenFashion from './MenFashion'
import WomenDressing from './WomenDressing'
import Furniture from './Furniture'
import AirCondition from './AirCondition'
import Kitchen from './Kitchen'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='productPage'>
      <Link to="/mobiles"> <Mobiles></Mobiles></Link>  
      <Link to="/computers"> <Computers></Computers></Link>  
      <Link to="/watches"><Watches></Watches>  </Link>
      <Link to="/mens">  <MenFashion></MenFashion></Link>
      <Link to="/womens"> <WomenDressing></WomenDressing></Link>
     
      <Link to="/furniture"><Furniture></Furniture></Link>
      
      <Link to="/ac"> <AirCondition></AirCondition>
      </Link>
    <Link to="/kitchen"> <Kitchen></Kitchen></Link>
    
    </div>
  )
}

export default Products

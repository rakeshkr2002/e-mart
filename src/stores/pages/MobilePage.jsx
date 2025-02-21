import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  const [selctedProduct,setSelectedProduct] = useState([])

  const companyhandle =(product)=>{
if(selctedProduct.includes(product)){
  setSelectedProduct(selctedProduct.filter(item=> item !== product))
}else{
  setSelectedProduct([...selctedProduct,product])
}
  }

  const filteredProduct = selctedProduct.length==0 ?
   mobileData: mobileData.filter((selpro)=> selctedProduct.includes(selpro.company))

  return (
   <>
   <div className="fullpage">
    
<div className="pro-selected">
  {
    mobileData.map((phone)=>{
      return (
        <div key={phone.id} className='pro-input'>
            <label htmlFor="">
              <input type="checkbox" 
              checked={selctedProduct.includes(phone.company)}
              onChange={()=>companyhandle(phone.company)}
              />
  {phone.company}
            </label>
        </div>
      )
    })
  }
</div>

    <div className='pageSection'>
      {
        filteredProduct.map((item)=>{
            return (
                <div key={item.id}>

                  <Link to={`/mobiles/${item.id}`}>
                  <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                  </Link>
                    
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })
      }
    </div>
   </div>
   </>
  )
}

export default MobilePage

import React, { useState } from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom';

const WatchesPage = () => {
     const [selectedProduct, setSelectedProduct] = useState([]);
    
      const companyHandle = (product) => {
        if (selectedProduct.includes(product)) {
          setSelectedProduct(selectedProduct.filter(item => item !== product));
        } else {
          setSelectedProduct([...selectedProduct, product]);
        }
      };
    
      const filteredProduct = selectedProduct.length === 0
        ? watchData
        : watchData.filter(selpro => selectedProduct.includes(selpro.brand));
    
    return (
        <>
<div className="fullpage">
   <div className="pro-selected">
          {
            watchData.map((phone)=>{
              return (
                <div key={phone.id} className='pro-input'>
                    <label htmlFor="">
                      <input type="checkbox" 
                      checked={selectedProduct.includes(phone.brand)}
                      onChange={()=>companyHandle(phone.brand)}
                      />
          {phone.brand}
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
                        <Link to={`/watches/${item.id}`}>
                        <div className="pageImg">
                             <img src={item.image} alt="" />
                         </div>
                        </Link>
                         
                         <div className="proModel">
                             {item.brand},{item.model}
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

export default WatchesPage

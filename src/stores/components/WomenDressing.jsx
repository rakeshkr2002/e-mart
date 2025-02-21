import React from 'react'
import {womanData} from "../data/woman"
const WomenDressing = () => {
     const firstFiveWomen = womanData.slice(0,5)
   return (
     <>
     <div className="proTitle">

     <h2>Women Dressing</h2>
</div>
     <div className='proSection'>
        {
         firstFiveWomen.map((item)=>{
               
             return (
                     <div className='imgBox' key={item.id}>
                         <img className='proImage' src={item.image} alt="" />
                     </div>
             )
         })
       }
     </div>
     </>
   )
}

export default WomenDressing

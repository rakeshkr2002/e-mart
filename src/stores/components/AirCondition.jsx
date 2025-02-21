import React from 'react'
import {acData} from "../data/ac"
const AirCondition = () => {
  const firstFiveAc = acData.slice(0,5)
     return (
       <>
        <div className="proTitle">

       <h2>Air Condition</h2>
</div>
       <div className='proSection'>
          {
           firstFiveAc.map((item)=>{
                 
               return (
                       <div className='imgBox'  key={item.id}>
                           <img className='proImage' src={item.image} alt="" />
                       </div>
               )
           })
         }
       </div>
       </>
     )
}

export default AirCondition

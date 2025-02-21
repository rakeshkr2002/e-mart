import React from 'react'
import {kitchenData} from "../data/kitchen"
const Kitchen = () => {
      const firstFivekit = kitchenData.slice(0,5)
    
    return (
        <>
         <div className="proTitle">

        <h2>Kitchen</h2>
</div>
        <div className='proSection'>
           {
            firstFivekit.map((item)=>{
                  
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

export default Kitchen

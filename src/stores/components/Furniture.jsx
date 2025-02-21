import React from 'react'
import {furnitureData} from "../data/furniture"
const Furniture = () => {
  const firstFivefurniture = furnitureData.slice(0,5)
    return (
      <>
      <div className="proTitle">
      <h2>Furniture</h2>

</div>
      <div className='proSection'>
         {
          firstFivefurniture.map((item)=>{
                
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

export default Furniture

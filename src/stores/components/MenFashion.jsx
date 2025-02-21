import React from 'react'
import {menData} from "../data/men"
const MenFashion = () => {

    const firstFiveMen = menData.slice(0,5)
  return (
    <>
    <div className="proTitle">

    <h2>Men Fashion</h2>
</div>
    <div className='proSection'>
       {
        firstFiveMen.map((item)=>{
              
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

export default MenFashion

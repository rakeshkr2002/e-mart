import React from 'react'
import {watchData} from "../data/watch"

const Watches = () => {

    const firstFiveWatches = watchData.slice(0,5)
  return (
    <>
    <div className="proTitle">

    <h2>Watches</h2>
</div>
    <div className='proSection'>
       {
        firstFiveWatches.map((item)=>{
              
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

export default Watches

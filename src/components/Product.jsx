import React, { useState } from 'react'
import { motion } from "framer-motion"
const Product = (props) => {
  const {available,image,name,popular,price,votes,rating} = props
  const [imageLoad,setImageLoad] = useState(true)
  return (
    <motion.div
      variants={{
        hidden:{opacity:0,y:30},
        visible:{opacity:1,y:0}
      }}
      className='relative'
     >
    
       <div className={`w-[260px] h-[160px] rounded-lg bg-gray-500 ${imageLoad ? 'block' : 'hidden'} `}/>
     
       <img src={image} alt={name} className={`rounded-lg shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] product_img ${imageLoad ? 'hidden' : 'block'}`} onLoad={()=>setImageLoad(false)} />  
      
     { popular &&  <span className='absolute top-1.5 p-3 left-2 py-1 bg-[#ED735D] font-semibold text-white rounded-lg' >Popular</span>}
      <div className="flex_row mt-4 mb-1 justify-between">
        <h2 className='text-white font-semibold text-md' >{name}</h2>
        <span className='p-2 py-[3px] font-bold text-[#1B1D1F] bg-[#BEE3CC] rounded-lg'>{price}</span>
      </div>
      <div className="flex_row text-sm">
      { votes > 0  && <>
        <img src="/images/Star_fill.svg" alt="rating" className='rating transition-all' />
        <span className='ml-1 text-white font-bold '>{rating}</span>
        <span className='ml-0.5 text-[#6F757C] font-bold'>({votes} votes)</span>
      </> }
      {votes==0 && <>
        <img src="/images/Star.svg" alt="rating" />
        <span className='ml-1 text-[#6F757C] font-bold'>No ratings</span>
      </> }
      {!available && <span className='ml-auto font-bold text-[#ED735D] '>Sold Out</span> }
      </div>
    </motion.div>
  )
}

export default Product

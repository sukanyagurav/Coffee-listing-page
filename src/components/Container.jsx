import React, { useEffect, useState } from 'react'
import Tabs from './Tabs'
import Product from './Product'
import useProduct from '../useProduct'
import { motion } from 'framer-motion'
const Container = () => {
  const {products,isLoading,isActiveType,setIsActiveType,error} = useProduct()
  let filteredType
  if(isLoading){
    return <img src="/images/loader.svg" alt="Loading..." className='mx-auto my-5http://localhost:5173/http://localhost:5173/' />
  }
  if(error){
    return <p className='text-[#ED735D] text-center'>Sorry Couldn't find the coffee. Please try again after some time</p>
  }
  if(isActiveType != 'all'){
     filteredType = [...products].filter(product => product.available == true)
  }
  else{
    filteredType=[...products]
  }
  return (
  <section>
    <Tabs  isActiveType={isActiveType} setIsActiveType={setIsActiveType}/>
    <motion.div className="flex flex-wrap justify-center gap-10 items-center" 
      variants={{
        visible:{transition:{staggerChildren:0.08}}
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
       {filteredType?.map((product)=>{
        return <Product {...product} key={product.id} />
       })}
    </motion.div>
  </section>
  )
}

export default Container

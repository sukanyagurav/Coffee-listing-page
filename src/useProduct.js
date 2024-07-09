import React, { useEffect, useState } from 'react'

const useProduct = () => {
  const [isLoading,setIsLoading]= useState(false)

  const [isActiveType,setIsActiveType] = useState('all')
  const [products,setProducts] = useState([])
  const [error,setError] = useState(false)
  useEffect(()=>{
    const getProducts = async () => {
      try{
        setIsLoading(true)
        let res = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
        let products = await res.json();
        if(res.ok){
          setProducts(products)
        }
      }catch(err){
        setError(true)
      }finally{
        setIsLoading(false)
        }
      }
      getProducts();
  },[])

 
  return {
    error,
    isLoading,
    products,
    isActiveType,
    setIsActiveType
  }
}

export default useProduct

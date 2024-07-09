import React from 'react'
const types = [{
  id:'all',
  title:'All products'
  },{
   id:'available_now',
   title:'Available now'
}]
const Tabs = ({isActiveType,setIsActiveType}) => {

  return (
    <div className='flex_row items-center my-6
     justify-center gap-5'>
      {types.map(type=>(
        <button onClick={()=>setIsActiveType(type.id)} key={type.id} className={`text-white p-4 py-1 rounded-lg ${isActiveType == type.id ? 'bg-[#6F757C]' : ''} `}>
          {type.title}
        </button>
      ))}
    </div>
  )
}

export default Tabs

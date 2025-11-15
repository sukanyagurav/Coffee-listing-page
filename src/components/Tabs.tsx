interface Tabs{
  id:string,
  title:string
}

const types:Tabs[] = [{
  id:'all',
  title:'All products'
  },{
   id:'available_now',
   title:'Available now'
}]

interface tabsProps{
  isActiveType:string,
  setIsActiveType:(id:string)=>{}
}
const Tabs = ({isActiveType,setIsActiveType}:tabsProps) => {

  return (
    <div className='flex_row items-center my-6
     justify-center gap-5' id="tabs">
      {types.map(type=>(
        <button aria-label={type.id} onClick={()=>setIsActiveType(type.id)} key={type.id} className={`text-white p-4 py-1 rounded-lg ${isActiveType == type.id ? 'activeBtn' : ''} `}>
          {type.title}
        </button>
      ))}
    </div>
  )
}

export default Tabs

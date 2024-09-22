import React, { useEffect, useState } from 'react'

import Item from '../items/item'

const NewCollections = () => {

  const[newCollection, setNewCollection] = useState([]);
  
  useEffect(() => {
   fetch('http://localhost:4000/newcollection')
   .then((res) => res.json())
   .then((data) => setNewCollection(data));
   console.log("newcollection is fetched")
  },[])
  
  
  return (
    <div className='new-collections popular flex flex-col items-center gap-2.5 mb-[100px]'>
      <h1 className='text-[#171717] text-[50px] font-medium'>New Collections</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-10">
        {newCollection.map((item, i)=>{
            return <Item 
            key={i} 
            id={item.id}
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
            /> 
        })}
      </div>
    </div>
  )
}

export default NewCollections

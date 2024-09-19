import React from 'react'
import data_product from '../../Assets/Frontend_Assets/data'
import Item from '../../components/items/item'

const Popular = () => {
  return (
    <div  className='popular flex flex-col items-center gap-2.5'  >
      <h1 className='text-[#171717] text-[50px] font-medium' >POPULAR IN WOMEN</h1>
      <hr  className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />

      <div className="popular-item mt-[50px] flex gap-7" >
        {data_product.map((item, i) =>{
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

export default Popular
//
// 
//
// 
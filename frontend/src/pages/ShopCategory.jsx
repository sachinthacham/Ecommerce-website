import React, {useContext} from 'react'
import {ShopContext}  from '../context/ShopContext'
import dropdown_icon from '../Assets/Frontend_Assets/dropdown_icon.png'
import Item from '../components/items/item'

const ShopCategory = (props) => {
  const {all_product = []} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="block my-[30px] mx-auto w-[82%]" src={props.banner} alt=""/>
      <div className="shop-category-indexsort flex my-[0px] mx-[170px] justify-between items-center">
        <p className='font-medium'>
          <span className='font-medium'>Showing 1 - 12</span>Out of 36 products
        </p>
        <div className="shopcategory-sort py-[10px] px-[20px] rounded-[40px] border border-#888">
          Sort by <img src ={dropdown_icon} alt="dropdown"/>
        </div>
      </div>

      <div className="shopcategory-product mx-[170px] my-5 grid grid-cols-4 gap-y-20">
        {all_product.map((item, i) => {
            if(props.category === item.category){
              return <Item 
              key={i} 
              id={item.id}
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
              /> 

            }
            else{
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[60px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory

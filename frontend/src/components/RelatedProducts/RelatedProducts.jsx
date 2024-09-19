import React from 'react'
import data_product from '../../Assets/Frontend_Assets/data'
import Item from '../../components/items/item'
const RelatedProducts = () => {
  return (
    <div>
      <div className='relatedProducts'>
        <h1>related Products</h1>
        <hr/>
        <div className="relatedProducts-item">
            {data_product.map((item, i) => {
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
    </div>
  )
}

export default RelatedProducts

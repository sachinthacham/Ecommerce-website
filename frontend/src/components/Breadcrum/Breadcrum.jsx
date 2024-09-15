import React from 'react'
import arrow_icon from '../../Assets/Frontend_Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum bg-orange-300'>
     HOME 
     <img src={arrow_icon} alt='arrow icon'/>
     SHOP <img src={arrow_icon}/>
     {product.category} 
     <img src={arrow_icon} alt='arrow'/>
     {product.name}
    </div>
  )
}

export default Breadcrum

import React from 'react'
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
  const navigate = useNavigate();
  const GotoProduct = () => {
    window.scrollTo(0,0);
    navigate(`/product/${props.id}`)
  }
  return (
    <div className='item'>
      <img src={props.image} alt='' onClick={GotoProduct}/>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className="item-prices-new">
            ${props.new_price}
        </div>
        <div className="item-prices-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item

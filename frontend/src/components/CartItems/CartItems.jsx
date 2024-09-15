import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../Assets/Frontend_Assets/cart_cross_icon.png'


const CartItems = () => {
    const {getTotalCartAmount,all_product=[], cartItems=[], removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className='cartItems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitems-format">
                    <img src={e.image} alt='' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price * cartItems[e.id]}</p>
                    <img src={remove_icon} alt="" onClick={() => {removeFromCart(e.id)}}/>
                </div>
                <hr/>
              </div> 
                
            }
            return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                   <h3>Total</h3>
                   <h3>${getTotalCartAmount()}</h3>
                </div>

            </div>
            <button>Proceed to checkout</button>
        </div>
        <div className="card_items-promocode">
            <p>If you have a promo code, Enter it here </p>
            <div className="cartItems-promobox">
                <input type='text'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

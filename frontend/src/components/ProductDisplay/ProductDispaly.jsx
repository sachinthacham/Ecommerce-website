import React, { useContext } from 'react'
import star_icon from '../../Assets/Frontend_Assets/star_icon.png'
import star_icon_dull from '../../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';


const ProductDispaly = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    
    <div className='productDisplay bg-amber-400'>
      <div className="prductdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className="productdisply-img">
            <img className='productdisplay-main' src={product.image} alt=''/>
        </div>
      </div>


      <div className="prductdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon_dull} alt=""/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div classname="productdisplay-right-price-old">${product.old_price}</div>
            <div classname="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
            a lightweight, usually ,punkjnkjn nkjnkjnk jnkjnkjn jnkjnkjn knjnk njnkjn jnjnjn.

        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className='productdisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button className='bg-red-600' onClick={() => {addToCart(product.id)}}>Add To Cart</button>
            <p><span>Category:</span> Women, T-shirt, Crop Top</p>
            <p><span>Tags:</span>Modern,Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDispaly

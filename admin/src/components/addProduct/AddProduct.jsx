import React, { useState } from 'react'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails,  setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const productDetailHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }

    const Add_Product = async () => {
            let responseData;
            let product = productDetails;

            let formData = new FormData();
            formData.append('product',image);

            await fetch('http://localhost:4000/upload',{
                method:'POST',
                header:{
                    Accept:'application/json',

                },
                body:formData,
            }).then((res) => res.json()).then((data) =>{
                    responseData = data;
            })

            if(responseData.success){
                product.image = responseData.image_url;
                console.log(responseData);

                await fetch('http://localhost:4000/addproduct',{
                        method:'POST',
                        headers:{
                            Accept:'application/json',
                            'Content-type':'application/json',
                        },
                        body:JSON.stringify(product),
                }).then((res) => res.json()).then((data)=>{
                    data.success? alert("product added"):alert("failed");
                })
            }
    }
  return (
    <div className='add-product'>
      <div className='add-product-item'>
        <p>Product title</p>
        <input value={productDetails.name} onChange={productDetailHandler} type='text' name='name' placeholder='Enter  name'/>
      </div>
      <div className="add-product-price">
      <div className='add-product-itemfield'>
        <p>Price</p>
        <input value={productDetails.old_price} onChange={productDetailHandler} type='text' name='old_price' placeholder='Enter  price'/>
      </div>

      <div className='add-product-price'>
        <p>Offer Price</p>
        <input value={productDetails.new_price} onChange={productDetailHandler} type='text' name='new_price' placeholder='Enter  price'/>
      </div>

      </div>

      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} onChange={productDetailHandler} name='category' className='add-product-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>

        </select>
      </div>

      <div className='addproduct-itemfiled'>
            <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img' width="100px" height="100px"/>
            </label>
            <input type='file' onChange={imageHandler} name='image' id='file-input' hidden/>
      </div>
     <button onClick={Add_Product}className='addProductbtn'>Add</button>
     
    </div>
  )
}

export default AddProduct;

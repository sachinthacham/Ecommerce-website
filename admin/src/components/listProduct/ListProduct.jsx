import React, { useEffect, useState } from 'react'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => {setAllProducts(data)})

        console.log(allProducts);
    }

    useEffect (()=>{
        fetchInfo();
    },[])

    const RemoveProduct = async (id) =>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })

        await fetchInfo();
    }
  return (
    <div>
      <div className='list-product'>
        <h1>All Product List</h1>
        <div className='list-product-format-main'>
            <p className="">Products</p>
            <p className="">Title</p>
            <p className="">Old price</p>
            <p className="">New price</p>
            <p className="">Category</p>
            <p className="">Remove</p>

        </div>
        <div className="list-product-all-product">
            <hr/>
            {allProducts.map((product, index) =>(
               <div key={index} className='list-product-format-main'>
                    <img src={product.image} alt="" className='list-product-image' height="100px" width="100px"/>
                    <p>{product.name}</p>
                    <p>{product.old_price}</p>
                    <p>{product.new_price}</p>
                    <p>{product.category}</p>
                    <img src={cross_icon} alt="" onClick={()=>RemoveProduct(product.id)}/>
               </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ListProduct

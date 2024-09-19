import React,{useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDispaly from '../components/ProductDisplay/ProductDispaly'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDispaly product = {product}/>
      < DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

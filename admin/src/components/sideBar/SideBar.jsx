import React from 'react'
import add_product_icon from '../../assets/Admin_Assets/Product_Cart.svg'
import { useNavigate } from 'react-router-dom'
import list_product_icon from '../../assets/Admin_Assets/Product_list_icon.svg'

const SideBar = () => {
    const navigate  = useNavigate();

    const handleClickAddProduct = () => {
        navigate('/addproduct');
    }

    const handleClicklistProduct = () => {
        navigate('/listproduct');
    }
  return (
    <div className='sidebar' style={{backgroundColor:"green"}}>
      <div className='sidebar-item' onClick={handleClickAddProduct}>
        <img src={add_product_icon} alt="" />
        <p>Add product</p>
      </div>
      <div className='sidebar-item' onClick={handleClicklistProduct}>
        <img src={list_product_icon} alt="" />
        <p> Product list</p>
      </div>
    </div>
  )
}

export default SideBar

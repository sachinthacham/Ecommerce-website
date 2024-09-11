import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import {Routes, Route} from 'react-router-dom'
import ListProduct from '../../components/listProduct/ListProduct'
import AddProduct from '../../components/addProduct/AddProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <SideBar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>

    </div>
  )
}

export default Admin

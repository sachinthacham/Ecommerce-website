import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';
import men_banner from './Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Assets/Frontend_Assets/banner_women.png'
import kids_banner from './Assets/Frontend_Assets/banner_kids.png'

function App() {

  return (
   
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>

        <Route path='/men'   element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids'  element={<ShopCategory banner={kids_banner} category ='kid'/>}/>
        
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        
       <Route path='/cart' element={<Cart/>}/>

       <Route path='/login' element={<LoginSignup/>}/>

       </Routes>


      <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;

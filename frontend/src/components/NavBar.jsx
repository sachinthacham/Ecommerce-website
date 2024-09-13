import {useState, useContext} from 'react';
import logo from '../Assets/Frontend_Assets/logo.png';
import cartIcon from '../Assets/Frontend_Assets/cart_icon.png';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


const NavBar = () => {

    const[menu, setMenu] = useState("shop");
    const navigate = useNavigate();

    const {getTotalCartItems} = useContext(ShopContext);

    const hadleClickshop = () => {
        setMenu("shop");
        navigate('/');
    }

    const hadleClickMen = () => {
        setMenu("men");
        navigate('/men');
    }
    const hadleClickWomen = () => {
        setMenu("women");
        navigate('/women');
    }
    const hadleClickKids = () => {
        setMenu("kids");
        navigate('/kids');
    }
    
    const handleClickCart = () => {
        navigate('/cart');
    }
    const handleClickLogin = () => {
        navigate("/login");
    }

    const handleClickLogOut = () => {
      localStorage.removeItem('auth-token');
      window.location.replace("/");
    }

  return (
    <div className="flex justify-around items-center p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="nav-logo" className="h-10 w-auto" />
        <p className="text-gray-40 text-3xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-black cursor-pointer" onClick={hadleClickshop}>Shop {menu === "shop"? <hr className="border-t-4 border-red-700 w-full mt-1" />: <></>}</li>
        <li className="hover:text-black cursor-pointer" onClick={hadleClickMen}>Men{menu === "men"? <hr className="border-t-4 border-red-700 w-full mt-1" />: <></>}</li>
        <li className="hover:text-black cursor-pointer" onClick={hadleClickWomen}>Women{menu === "women"? <hr className="border-t-4 border-red-700 w-full mt-1" />: <></>}</li>
        <li className="hover:text-black cursor-pointer" onClick={hadleClickKids}>Kids {menu === "kids"? <hr className="border-t-4 border-red-700 w-full mt-1" />: <></>}</li>
      </ul>
      <div className="flex items-center gap-4">
        {localStorage.getItem('auth-token')?
         <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClickLogOut}>
          Log out
         </button>:<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClickLogin}>
          Log in
         </button>}
        
       <img src={cartIcon} alt="cart Icon" className="h-6 w-auto"  onClick={handleClickCart}/>
        <div className="w-[22px] h-[22px] flex items-center justify-center -mt-[35px] -ml-[20px] rounded-full text-[14px] bg-red-600 text-white">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

const [btnName ,setBtnName] = useState('Login')
    return (
      <div className="flex justify-between">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://cdn.logojoy.com/wp-content//2018/05/01105934/1855.png"/>
        </div>
        </div>
        <div className="flex p-4">
        <ul className="flex">
          <li className="px-4">Home</li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className="login" type="submit" 
          onClick={()=>{btnName ==="Login" ? setBtnName('LogOut') : setBtnName('Login')
          }}>{btnName}</button>
        </ul>
        </div>
      </div>
    );
  };

  export default Header;
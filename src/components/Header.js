import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

const [btnName ,setBtnName] = useState('Login')
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://cdn.logojoy.com/wp-content//2018/05/01105934/1855.png"/>
        </div>
        <div className="nav-items">
        <ul>
          <li>Home</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" type="submit" 
          onClick={()=>{btnName ==="Login" ? setBtnName('LogOut') : setBtnName('Login')
          }}>{btnName}</button>
        </ul>
        </div>
      </div>
    );
  };

  export default Header;
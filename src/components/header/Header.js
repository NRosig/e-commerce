import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
    <div className="header__container">
      <div className="logo__container">
        <a href="/home">
          <img src={logo} alt="rsg" className="logo__img"/>
        </a>
      </div>
      <div className="input__container">
        <input type="text" placeholder="Search..." className="input"/>
        <button className="input__button">
          <img src="https://www.freeiconspng.com/uploads/search-icon-png-29.png" alt="" className="input__img"/>
        </button>
      </div>
      <div className="cart__container">
        <AiOutlineShoppingCart className="cart"/>
      </div>
    </div>
  )
};

export default Header;

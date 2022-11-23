import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__main__container">
      <div className="header__container">
        <Link className="link" to="/">
        <div className="logo__container">
          <img
            src="https://www.freeiconspng.com/uploads/palm-tree-png-26.png"
            alt=""
            className="logo__img"
          />
          <div className="logo__title">
            <p>RSG|Shop</p>
          </div>
        </div>
        </Link>
        <form className="input__container">
          <input type="text" placeholder="Search..." className="input" />
          <div>
            <button className="input__button">
              <img
                src="https://www.freeiconspng.com/uploads/search-icon-png-29.png"
                alt=""
                className="input__img"
              />
            </button>
          </div>
        </form>
        <Link to="/carrito">
        <div className="cart__container">
          <AiOutlineShoppingCart className="cart" />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

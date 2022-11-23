import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeOne, sumarContador } from "../../redux/actions";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart);

  if (cartProducts.length >= 1)
    return (
      <div className="shopping_cart_container">
        <div className="shopping_title_container">
          <h1 className="shopping_title">MI CARRITO</h1>
        </div>
        {cartProducts.map((producto) => {
          let subtotal = producto.cantidad * producto.precio;
          return (
            <div key={producto.id} className="shopping_item">
              <div className="cart_img_container">
                <div>
                  <p>{producto.cantidad}</p>
                </div>
                <img
                  src={producto.imagen}
                  alt=""
                  width="150px"
                  height="150px"
                  className="cart_img"
                />
              </div>
              <div className="title_price_container">
                <div className="product_title_container">
                  <h1>{producto.producto}</h1>
                </div>
                <div className="product_price_container">
                  <h2 className="product_price">{producto.precio}</h2>
                </div>
              </div>
              <div className="product_description_container">
                <h3>{producto.descripcion}</h3>
              </div>
              <div>
                <h3>Subtotal: ${subtotal}</h3>
              </div>
              <div className="x_button_container">
                <button
                  onClick={() => dispatch(removeOne(producto.id, producto))}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
        
        <div>
          <button
            onClick={() =>
              cartProducts.forEach((el) => dispatch(clearCart(el)))
            }
          >
            Clear
          </button>
        </div>
      </div>
    );
  else
    return (
      <div>
        <h1>El carrito se encuentra vacio</h1>
      </div>
    );
};

export default ShoppingCart;

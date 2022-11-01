import React from "react";
import {  useSelector } from "react-redux";
import "./ProductCard.css"



const ProductCard = () => {
    const products = useSelector((state) => state.products)
    
    return (
        <div>
            <div>
                <img alt=""/>
            </div>
            <div>
                <h2>
                    Nombre del producto
                </h2>
            </div>
            <div>
                <h3>
                    Precio del Producto
                </h3>
            </div>
        </div>
    )
}

export default ProductCard;
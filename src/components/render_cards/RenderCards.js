import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product__card/ProductCard";
import "./RenderCards.css";

const RenderCards = () => {
    const products = useSelector((state) => state.products)
    
    return (
        <div key={products.id} className="render__container">
            {products.map(producto => {
                return (
                <ProductCard info={producto} />
                
            )})}
                
            
        </div>
    )
                
}

export default RenderCards;
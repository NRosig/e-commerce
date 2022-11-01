import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product__card/ProductCard";

const RenderCards = () => {
    const products = useSelector((state) => state.products)
    for (let i=0; i <= 24; i++)
    
    return (
        <div>
            {products.map(producto => {
                return (
                <ProductCard info={products[i++]}/>
            )})}
                
            
        </div>
    )
                
}

export default RenderCards;
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product__card/ProductCard";

const RenderCards = () => {
    const products = useSelector((state) => state.products)
    return (
        <div>
            {products.map((producto) => {
                return (
                    <ProductCard/>
                )
            })}
        </div>
    )
}

export default RenderCards;
import React from "react";
import "./ProductCard.css";



const ProductCard = ({info}) => {

    return (
        <div>
            <div>
                <img alt="" src={info.imagen} width="150px"/>
            </div>
            <div>
                <h2>
                    {info.producto}
                </h2>
            </div>
            <div>
                <h3>
                    {info.precio}
                </h3>
            </div>
        </div>
    )
}

export default ProductCard;
import React from "react";
import "./ProductCard.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions.js"



const ProductCard = ({info}) => {
    const dispatch = useDispatch();

    console.log(info)

    return (
        <motion.div key={info.id} className="card__container"whileHover={{ scale: 1.05 }}>
            <Link to="/details">
            <div className="img__container">
                <img alt="" src={info.imagen} width="150px" className="card__img"/>
            </div>
            </Link>
            <div>
                <p>{info.categoria}</p>
            </div>
            <div className="title">
                <h2>
                    {info.producto}
                </h2>
            </div>
            <div className="price__main__container">
                <div>
                    <h3>
                        {info.precio}
                    </h3>
                </div>
                <div className="button__container">
                    <button className="button" onClick={() => dispatch(addToCart(info))}>
                        <AiOutlineShoppingCart fontSize="20px"/>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product__card/ProductCard";
import { getCategory } from "../redux/actions";
import "./Category.css";

const Category = () => {
  const dispatch = useDispatch();
  const {category} = useParams()

  useEffect(()=>{
    dispatch(getCategory(category))
  },[dispatch, category]);

  const productos = useSelector((state) => state.category);



  return (
    <div className="render__category">
      {productos.map((item) => {
        return (
          <div>
            <ProductCard info={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;

import './App.css';
import  "../src/components/data.js"
import { data } from '../src/components/data.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../src/redux/actions"
import Header from './components/header/Header.js';
import ProductCard from './components/product__card/ProductCard';
import RenderCards from './components/render_cards/RenderCards';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  },[])

  const products = useSelector((state) => state.products)
  console.log(products)

  return (
    <div className="App">
      <Header />
      <RenderCards />
      
    </div>
  );
}

export default App;

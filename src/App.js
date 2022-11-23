import './App.css';
import  "../src/components/data.js"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../src/redux/actions"
import Header from './components/header/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './components/body/Body';
import Category from './pages/Category';
import RenderButtons from './components/render__buttons/RenderButtons';
import ShoppingCart from './components/shopping_cart/ShoppingCart';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
    
  },)

  
  

  return (
    <div className="App">
      <Router>
        <Header />
        <RenderButtons />
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/:category' element={<Category />} />
          <Route path='/carrito' element={<ShoppingCart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

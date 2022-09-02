import React from 'react';
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import Products from './components/Products';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Registor from "./pages/Registor"
import { Layout } from './pages/Layout';
 import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom"; 

const App = () => {
  // return <Home/>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Layout/>} /> 
      <Route index element={<Home/>} />  
 
    </Routes>
    </BrowserRouter>

  // ) ;
};

export default App 
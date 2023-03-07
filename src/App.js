import logo from './logo.svg';
import './App.css';
import  Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { useState } from 'react';
import Carousel from './Component/Carousel1';
import Home from "./Pages/Home"
import Footer from './Component/Footer';
import Makeup from './Pages/Makeup';


function App() {

  return (
    <div className="App">
       <Navbar />
     <AllRoutes/>
     
    <Footer/>
    </div>
  );
}

export default App;

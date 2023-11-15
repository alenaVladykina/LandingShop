import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Promo} from "./components/promo/Promo";
import {Brands} from "./components/brands/Brands";
import {Arrivals} from "./components/arrivals/Arrivals";
import {Sale} from "./components/sale/Sale";
import {Favourite} from "./components/favourite/Favourite";
import {AppBlock} from "./components/app/AppBlock";
import {Subscription} from "./components/subscription/Subscription";
import {Footer} from "./components/footer/Footer";



export function App() {
  return (
    <div className='App'>
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Sale/>
      <Favourite/>
      <AppBlock/>
      <Subscription/>
      <Footer/>
    </div>
  );
}



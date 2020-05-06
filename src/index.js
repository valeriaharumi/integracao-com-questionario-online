import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';


const elemento = document.getElementById('root')
ReactDOM.render(
  <div>    
    <Header/>
    <Home />
    <Footer/>
  </div>  
  
, elemento);



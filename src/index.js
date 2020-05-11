import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre'
import Login from './components/Login';




const elemento = document.getElementById('root')
ReactDOM.render(
  <div>    
    <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    <Footer/>
  </div>  

, elemento);





 


  


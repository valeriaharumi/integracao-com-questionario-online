import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre'
import Login, {PrivateRoute} from './components/Login';
import Management from './components/Management'




const elemento = document.getElementById('root')
ReactDOM.render(
  <div>    
    <Header/>
      <BrowserRouter>
        
          <Route path="/" exact={true} component={Home}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/logado" component={Management}/>

        
      </BrowserRouter>
    <Footer/>
  </div>  

, elemento);





 


  


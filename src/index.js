import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'


const elemento = document.getElementById('root')
ReactDOM.render(
  <div>    
    <Header/>
      <BrowserRouter>
        <Switch>
          {/*<Route path="/" exact={true} component={Home}/>*/}
          {/*<Route path="/sobre" component={Sobre}/>*/}
          {/*<Route path="/login" component={Login}/>*/}
        </Switch>
      </BrowserRouter>
    <Footer/>
  </div>  
  
, elemento);



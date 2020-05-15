import React, { Component } from 'react'
import Axios from 'axios'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Management from './Management'

import '../css/login.css'
import '../assets/bootstrap/bootstrap.min.css'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            login: '',
            senha: '',
            path: false                         
        }
    }

    capturaValor = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    

       
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        Axios.get( 'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&filterByFormula=(AND({Email}="' + this.state.login + '",{Senha}="' + this.state.senha + '"))')
          .then( res => {
              console.log(res)
               if (res.data.records.length > 0){
                this.setState({ path: true })
                }                      
                else {
                    window.alert("E-mail ou senha incorreto!") 
                }                 
                      
                
            }
              
        )
        
    };



    render (){
        const {login, senha} = this.state
        if (this.state.path){
            return (<BrowserRouter>
                        <Switch>                            
                            <Redirect to="/management" component={Management}/>
                        </Switch>
                    </BrowserRouter>
            )
        } else {
            return(
            
                <div id="page">
                    <div className="login container" >            
                        <div className="login__titulo">
                            <h1>Login</h1>
                            <h2>(Área Restrita)</h2>
                        </div>
    
                        <div className="login__form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="login__email">
                                    <label htmlFor="email">
                                        <i className="far fa-envelope"></i>
                                    </label>
                                    <input type="text" name="login" value={login} onChange={this.capturaValor}/>
                                </div>
                                <div className="login__password">
                                    <label htmlFor="password">
                                        <i className="fas fa-lock"></i>
                                    </label>
                                    <input type="password" name="senha" value={senha} onChange={this.capturaValor}/>
                                </div>
    
                                <div className="login__btn">
                                    <button type="submit">Acessar</button>
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            )
        }
        
            
        
        
    }
}

export default Login
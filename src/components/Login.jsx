import React, { Component } from 'react'
import Axios from 'axios'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Management from './Management'

import '../css/login.css'
import '../assets/bootstrap/bootstrap.min.css'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            login: []
                         
        }
    }

    capturaValorLogin = (event) => {
        this.setState({
            login: event.target.value
        })
    }

    capturaValorSenha = (event) => {
        this.setState({
            senha: event.target.value
        })
    }

    handleSubmit = event => {
        if(res.records.length > 0){
            <BrowserRouter>
                <Switch>
                    <Route path="/Management" component={Management}/>
                </Switch>
            </BrowserRouter>
        } 
        else {
            window.alert("E-mail ou senha incorreto!");
        }
        event.preventDefault()
    }


    componentDidMount(){
        Axios.get('https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&')
        .then(res =>{
            console.log(res)
            this.setState({
                login: {/*filterByFormula=(AND({Email}='academy@cocreare.com.br',{Senha}='123456')) de alguma forma precisa jogar o resultado filtrado numa constante e ver se é um array vazio ou nao*/}
            })
        })
    }

    render (){
        const {login, senha} = this.state
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
                                <input type="text" name="login" value={login} onChange={this.capturaValorLogin}/>
                            </div>
                            <div className="login__password">
                                <label htmlFor="password">
                                    <i className="fas fa-lock"></i>
                                </label>
                                <input type="password" name="passwd" value={senha} onChange={this.capturaValorSenha}/>
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

export default Login
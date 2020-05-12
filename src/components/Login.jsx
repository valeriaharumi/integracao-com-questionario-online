import React, { Component } from 'react'

import '../css/login.css'
import '../assets/bootstrap/bootstrap.min.css'





class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            login: '',
            senha: '',
             
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
        console.log(this.state.login)
        event.preventDefault()
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
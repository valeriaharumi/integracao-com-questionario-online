import React from 'react';

import '../css/home.css';
import '../assets/bootstrap/bootstrap.min.css'
import HomeCadastro from './home-cadastro';
import HomeInformacoes from './home-informacoes';




const home = () => {
    return <div id="page">

        <div className="container">
            <div className="main--content">


                <h2 >Novo Cadastro</h2>
                
                    <div className="message"></div>
                    <div className="message"></div>


                    <form name="form-Index" id="form-Index" >
                    <div className="row">

                        {/* <div id="formSend">
                                    Seu cadastro foi enviado.<br />
                                Obrigado!
                                </div> */}

                        <HomeCadastro></HomeCadastro>

                        <HomeInformacoes></HomeInformacoes>

                        </div>
                    </form>
                

            </div>
        </div>
    </div>

}

export default home


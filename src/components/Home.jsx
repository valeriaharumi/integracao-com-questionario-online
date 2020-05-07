import React from 'react';

import '../css/home.css';
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


                                <div id="formSend">
                                    Seu cadastro foi enviado.<br />
                                Obrigado!
                                </div>


                                <div className="row">
                                <HomeCadastro></HomeCadastro>
                                <HomeInformacoes></HomeInformacoes>
    
                                </div>
                            </form>
                        
                    </div>
                </div>
         </div>

}

export default home


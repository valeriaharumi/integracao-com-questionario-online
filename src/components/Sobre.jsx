import React from 'react'

import '../css/sobre.css';
import '../assets/bootstrap/bootstrap.min.css'

import foto from '../assets/img/foto.png';



function Sobre() {
    return <div id="page">
    <div className="container">
        <div className="content--principal">

            {/* <!-- INICIO SESSÃO-SOBRE --> */}
            <section className="sobre col-sm-12 col-lg-12">
                <div className="content__principal--title">
                    <h1>Sobre</h1>
                </div>
                <div className="content__principal--text text-center">
                    <p>COLOCAR INFORMAÇÕES AQUI
                    </p>

                </div>
            </section>
            {/* <!-- FIM SESSÃO-SOBRE --> */}

            {/* <!-- Team Section --> */}
            <section id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <h2 className="content__principal--title">Nossa Equipe</h2>
                        </div>
                    </div>

                    <div className="row members">

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={foto}
                                    alt=""/>
                                <h4>Benicio</h4>
                                
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={foto}
                                    alt=""/>
                                <h4>Carlos</h4>
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={foto}
                                    alt=" "/>
                                <h4>Fabricio</h4>
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={foto}
                                    alt=""/>
                                <h4>Valeria</h4>
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={foto}
                                    alt=" "/>
                                <h4>Wesley</h4>
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-12 desc-projeto">
                        <p>Este site é resultado do projeto em equipe do curso de Capacitação em Desenvolvimento
                            Front-End
                            da Cocreare Academy.</p>
                    </div>
                </div>
            </section>
            {/* <!-- end Team Section --> */}
        </div>
    </div>
</div>
                            

}

export default Sobre
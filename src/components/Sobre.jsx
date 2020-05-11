import React from 'react'

import '../css/sobre.css';
import '../assets/bootstrap/bootstrap.min.css'



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
                    <p>Somos a 4-Front! Uma equipe composta por cinco integrantes que estão em busca de novos
                        conhecimentos e desafios profissionais.
                    </p>
                    <p> Cada integrante tem suas habilidades e áreas de especialidade, e unidos formamos um time
                        capacitado
                        para desenvolvimento web completo,
                        contemplando desde o design da interface até toda a programação Front-End.
                    </p>
                    <p>
                        Fazemos aplicação de HTML, CSS e JavaScript puros ou
                        com os frameworks Bootstrap, Angular e React
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
                                <img className="mx-auto rounded-circle" src="./assets/img/foto.png"
                                    alt=""/>
                                <h4>Mirela De Giuli</h4>
                                <div className="contact-members">
                                    <a href="mailto:mireladegiuli@gmail.com"> <i className="fas fa-at"></i></a>
                                    <a href="https://github.com/mirelagiuli" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="https://br.linkedin.com/in/mirela-de-giuli" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="../../assets/media/images/team/avatar.png"
                                    alt=""/>
                                <h4>Rafael Rodrigues</h4>
                                <div className="contact-members">
                                    <a href="mailto:rafaelrodrigues_@outlook.com"> <i className="fas fa-at"></i></a>
                                    <a href="https://github.com/rafael-rodrigues-santos" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/rafael-rodrigues-santos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="../../assets/media/images/team/avatar.png"
                                    alt=" "/>
                                <h4>Thiago Dutra</h4>
                                <div className="contact-members">
                                    <a href="#"> <i className="fas fa-at"></i></a>
                                    <a href="https://github.com/thiagosilvadtr" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="../../assets/media/images/team/avatar.png"
                                    alt=""/>
                                <h4>Pedro Henrique</h4>
                                <div className="contact-members">
                                    <a href="mailto:pedrohenriquer77@hotmail.com"> <i className="fas fa-at"></i></a>
                                    <a href="https://github.com/pedrohrb7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/pedrohrb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto col-md-auto">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="../../assets/media/images/team/avatar.png"
                                    alt=" "/>
                                <h4>Renan Motta</h4>
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
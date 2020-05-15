import React from 'react'

import '../css/sobre.css';
import '../assets/bootstrap/bootstrap.min.css'


const team = [
    {nome: "Valéria",
    foto: require("../assets/img/valeria.jpg"),
    email: "haruumi.nishimura@gmail.com",
    github: "https://github.com/valeriaharumi",
    linkedin: "https://www.linkedin.com/in/val%C3%A9ria-harumi-nishimura-1574191a2/",
},
    {nome: "Wesley",
    foto: require("../assets/img/wesley.jpg"),
    email: "wesleycamara@hotmail.com.br",
    github: "https://github.com/WesleyCamara",
    linkedin: "https://www.linkedin.com/in/wesleycamara/",
},
    {nome: "Benicio",
    foto: require("../assets/img/benicio.jpg"),
    email: "",
    github: "https://github.com/ChernoBeni",
    linkedin: "",
},
    {nome: "Carlos",
    foto: require("../assets/img/carlos.jpg"),
    email: "carlinhos.ars@gmail.com",
    github: "https://github.com/ribeiro-carlos/",
    linkedin: "https://www.linkedin.com/in/carlos-ribeirosilva/",
},
    {nome: "Fabricio",
    foto: require("../assets/img/fabricio.jpg"),
    email: "santocardoso370@gmail.com", 
    github: "https://github.com/Fabricio-alt",
    linkedin: "",
}
]


// Gera os cards com as informações dos membros da equipe 
const equipe = team.map(item =>(

    <div key={item.nome} className="col-sm-auto col-md-auto">
        <div className="team-member">
            <img className="mx-auto rounded-circle" src={item.foto}
                
                alt=""/>
            <h4>{item.nome}</h4>
            <p></p>
            <div className="contact-members">
                <a href="mailto:{item.email}"> <i className="fas fa-at"></i></a>
                <a href={item.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href={item.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
        
    </div>

    
    ))

    


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
                            <div className="content__principal--title">
                                <h2 >Nossa Equipe</h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row members">

                        {equipe}

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
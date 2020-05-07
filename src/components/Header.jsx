import React from 'react'
import '../estilos/estiloHeader.css'
import '../assets/bootstrap/bootstrap.min.css'

function Header() {
    return (
        <div className='header'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    {/*Logo da equipe do lado esquerdo*/}
                    {/*link para pag home*/}
                    <a id="link-brand" className="navbar-brand" href="index.js">4-Front</a>

                    {/*Menu de navegação*/}
                    <div className="global-menu">
                        <a href='/'>Home</a>                        
                        <a href='sobre'>Sobre</a>                        
                        <a className='login' href='login'>Login</a>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

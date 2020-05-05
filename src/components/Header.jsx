import React from 'react'

function Header() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    {/*Logo da equipe do lado esquerdo*/}
                    {/*link para pag home*/}
                    <a id="link-brand" className="navbar-brand" href="index.html">4-Front</a>

                    {/*Menu de navegação*/}
                    <div className="global-menu">
                        <a href='#'>Home</a>                        
                        <a href='#'>Sobre</a>                        
                        <a href='#'>Login</a>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

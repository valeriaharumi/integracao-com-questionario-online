import React from 'react'
import '../css/fontes.css'

const footer = {
    marginTop: '25px',
    marginBottom: '0',
    padding: '15px',
    background: 'rgb(255, 255, 255)',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontFamily: 'open sans bold',
    fontSize: '16px'
}

function Footer() {
    return (
        <div style={footer}>            
            <div>Projeto 3 - Integração com Questionário Online</div>
            <div className='footer-copyright text-muted'>© 2020 4-Front - Todos os direitos reservados.</div>

        </div>
    )
}

export default Footer

//por ser um componente simples coloquei o css no mesmo arquivo

import React, { Component } from 'react'
import Axios from 'axios'


import '../assets/bootstrap/bootstrap.min.css'
import '../css/management.css'


export default class Management extends Component {
  state = {
    lista: [],
    listagem: ''
  }



  componentDidMount() {
    this.buscaApi()
  }


  buscaApi = async () => {
    const response = await Axios.get(`https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbl0WBTLYCbmd2Dd6?api_key=keyfV0AwOq2Pctb5Y`)
    this.setState({ lista: response.data.records })
    console.log(this.state.lista)
  }




  render() {
    return (

      <div className="container-management container">
        <div className="title">
          <h3>Gerenciamento de Respostas</h3>
        </div>
        <table className="management" id="management">

          <tbody>

            {this.state.lista.map(item => (<>

              <tr key={item.id} className="management__list" >
                <td className="list__name">
                  {item.fields.Nome}
                </td>
                <td className="list__email">
                  {item.fields.Email}
                </td>
                <td className="list__phone">
                  {item.fields.Telefone}
                </td>
                <td className="list__contact__form">
                  {item.fields['Forma de contato']}
                </td>
                <td className="list__availability__contact">
                  {item.fields['Disponibilidade para contato']}
                </td>
                <td className="list__subject">
                  {item.fields.Assunto}
                </td>
                <td className="list__content">
                  {item.fields['Conteúdo']}
                </td>
              </tr>

            </>
            ))}
          </tbody>
        </table>


      </div>
    );
  }

}

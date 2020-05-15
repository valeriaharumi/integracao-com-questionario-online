import React, { Component } from 'react'
import Axios from 'axios'


import '../assets/bootstrap/bootstrap.min.css'
import '../css/management.css'


export default class Management extends Component {
  state = {
    lista: [],
    listagem: [],
    pagina: 0

  }

  // Faz a busca dos dados quando carrega o componente 
  componentDidMount() {
    this.buscaApi()
  }


  buscaApi = async () => {
    const response = await Axios.get(`https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbl0WBTLYCbmd2Dd6?api_key=keyfV0AwOq2Pctb5Y`)
    await this.setState({ lista: response.data.records })
    await this.separar(response.data.records, 3)
    await this.setState({ lista: this.state.listagem[this.state.pagina + 1] })

  }


  // Divide a Array de resuldados em grupos menores
  separar(base, maximo) {
    var resultado = [[]];
    var grupo = 0;

    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }

      resultado[grupo].push(base[indice]);

      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }

    this.setState({ listagem: resultado })
  }



  nextPage = () => {
    if (this.state.pagina < (this.state.listagem.length - 1)) {
      this.setState({ lista: this.state.listagem[this.state.pagina] })
      this.setState({ pagina: this.state.pagina + 1 })
    }
  }

  previousPage = () => {
    if (this.state.pagina === (this.state.listagem.length - 1)) {
      this.setState({ pagina: (this.state.listagem.length - 2) })
    }

    if (this.state.pagina > 0) {
      this.setState({ pagina: (this.state.pagina - 1) })
      this.setState({ lista: this.state.listagem[this.state.pagina] })


    }
  }


  //  Renderiza os itens da lista 
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
            ))
            }
          </tbody>


          <div className="paginação">
            <div onClick={this.previousPage}>Pagina Anterior</div>
            <p>{this.state.pagina + 1}</p>
            <div onClick={this.nextPage}>Proxima Página</div>
          </div>
        </table>


      </div>
    );
  }

}

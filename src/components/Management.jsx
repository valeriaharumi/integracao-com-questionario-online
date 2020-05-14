import React, {  useState } from 'react'
import Axios from 'axios'

import '../css/management.css'
import '../assets/bootstrap/bootstrap.min.css'

const Management = () => {
    
    const [lista, setLista] = useState([]
    );

    buscaApi()
    
    async function buscaApi () {
         await Axios.get(`https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbl0WBTLYCbmd2Dd6?api_key=keyfV0AwOq2Pctb5Y`)
          .then(res => {
            lista.push(res)
            console.log(lista[0].data.records)
          })
      }
     

    function mostra (){
    const newLista = lista[0].data.records.map(item => {
        console.log(item.fields.Nome)
    })
}



    

     return   <ul>
                <li onClick={mostra}>TESTETESTESTES</li>
                </ul>
        

    }

export default Management

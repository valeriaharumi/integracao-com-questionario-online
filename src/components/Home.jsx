import React from 'react';

const styleHome = {
    display: "flex",
    flexDirection: "column"
}

// -------------------------------------------------------------------------------------
// Informações sobre a forma de contato, teste para separar melhor o conteudo
// -------------------------------------------------------------------------------------
const formaContato = (<div>
    <h3>Forma de contato:</h3>
    <div >
        <input
            type="radio"
            name="conta"
            id="email-contact"
            value="Email">
        </input>
        <label htmlFor="email-contact"> Email </label>
    </div>

    <div >
        <input
            type="radio"
            name="conta"
            id="tel-contact"
            value="Telefone">
        </input>
        <label htmlFor="tel-contact">Telefone</label>
    </div>
</div>)



const home = () => {
    return <div>
        <h1>Novo Cadastro</h1>

        <form action="POST" style={styleHome}>

            <label htmlFor="name">Nome</label>
            <input
                type="text"
                name="name"
                id="name"
                minlength="3"
                placeholder="João da Silva"
                required>
            </input>

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                title="Preencha o campo no seguinte modelo: email@dominio.com"
                required="required"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
            </input>

            <label htmlFor="telefone">Telefone:</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(99) 99999-9999"
                title="Preencha o telefone"
                required="required"
                minlength="10" mask="(00) 00000-0000">
            </input>

            <label htmlFor="assunto">Assunto</label>

            <select name="subject" id="subject" class="form-control">
                <option value="" disabled selected>Selecione um assunto</option>
                <option value="assunto1">Assunto 1</option>
                <option value="assunto2">Assunto 2</option>
            </select>

            <label htmlFor="conteudo">Conteudo</label>
            <textarea
                name="msgContent"
                id="msgContent"
                class="form-control"
                maxlength="500"
                placeholder="Digite aqui sua mensagem">
            </textarea>


            <h2>Informações de Contato</h2>
 {/* -------------------------------------------------------------------------------------
 Aqui entra a constante com as informações preferenciais de contato
 ------------------------------------------------------------------------------------- */}
            {formaContato}

            <h3>Disponibilidade para contato:</h3>

            <div >
                <input
                    type="checkbox"
                    name="disp1"
                    id="input-comercial"
                    value="comercial">
                </input>
                <label htmlFor="input-comercial">
                    Seg. a Sexta - horário comercial
                </label>
            </div>

            <div >
                <input
                    type="checkbox"
                    name="disp1"
                    id="input-comercial"
                    value="comercial">
                </input>
                <label htmlFor="input-comercial">
                    Seg. a Sexta - Período da manhã
                </label>
            </div>

            <div >
                <input
                    type="checkbox"
                    name="disp1"
                    id="input-comercial"
                    value="comercial">
                </input>
                <label htmlFor="input-comercial">
                    Seg. a Sexta - Período da tarde
                </label>
            </div>

            <div >
                <input
                    type="checkbox"
                    name="disp1"
                    id="input-comercial"
                    value="comercial">
                </input>
                <label htmlFor="input-comercial">
                    Seg. a Sexta - Período da noite
                </label>
            </div>

            <div >
                <label htmlFor="text-input" >
                    Outros:
                </label>
                <input
                    type="text"
                    name="disp5"
                    id="text-input">
                </input>
            </div>

            <div id="buttons">
            <button type="reset">
                Cancelar
            </button>
           
            <button type="submit">
                Enviar
            </button>
          </div>


        </form>
    </div>

}

export default home


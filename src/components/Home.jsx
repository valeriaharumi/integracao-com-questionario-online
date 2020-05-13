import React, { useState } from 'react';
import axios from 'axios';

import '../css/Home.css';
import '../assets/bootstrap/bootstrap.min.css'


const Home = () => {

    // Variavel de apoio para mudar o comportamento depois do envio do formulário
    let enviado = false;

    // Faz o chamado post passando como body os dados preenchidos na tabela
    const postData = (body) => {
        axios.post("https://api.airtable.com/v0/appYtQmjCS4p0n2dY/Question%C3%A1rio?api_key=keyfV0AwOq2Pctb5Y", body
        )
    }

    // captura as informações do input
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        msgContent: "",
        contatoTelefone: "",
        contatoEmail: "",
        comercial: "",
        manha: "",
        tarde: "",
        noite: "",
        outros: ""

    });

    // constante com o conteúdo que será enviado pela API 
    const data = {
        "records": [
            {
                "fields": {
                    "Nome": form.name,
                    "Email": form.email,
                    "Telefone": form.phone,
                    "Assunto": form.subject,
                    "Conteúdo": form.msgContent,
                    "Forma de contato": form.contato,
                    "Disponibilidade para contato": form.comercial
                }
            }
        ]
    }


    // Quando detecta mudança no input atualiza automaticamente dados da const form 
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });

    }

    // Auxiliar para preenchimento da funçao data, informações opcionais 
    const auxDisponibilidade = {
        "comercial": form.comercial,
        "manha": form.manha,
        "tarde": form.tarde,
        "noite": form.noite,
        "outros": form.outros
    }

    // Função acionada quando o formulário e enviado, registra as informações de contato e chama as seguintes 
    function cadastrar() {
        let aux = []

        if (auxDisponibilidade["comercial"]) {
            aux.push("comercial")
        }
        if (auxDisponibilidade["manha"]) {
            aux.push("manha")
        }
        if (auxDisponibilidade["tarde"]) {
            aux.push("tarde")
        }
        if (auxDisponibilidade["noite"]) {
            aux.push("noite")
        }
        if (auxDisponibilidade["outros"] !== "") {
            aux.push(auxDisponibilidade["outros"]);
        }

        let disponibilidade = "";

        for (let i = 0; i < aux.length; i++) {
            disponibilidade += aux[i] + " ";
        }

        data.records[0].fields["Disponibilidade para contato"] = disponibilidade;
        enviado = true;
        console.log('DATA:', data.records[0].fields)
    }


    // funcação de apoio para teste, foi criar pra não acionar o submit do form 
    function clicado() {
        console.log("FORM:", form)
        cadastrar()
    }


    // -----------Renderização da página---------------

    return <div id="page">

        <div className="container">
            <div className="main--content">


                <h2 >Novo Cadastro</h2>

                <hr></hr>

                <div className="message"></div>
                <div className="message"></div>


                <form name="form-Index" id="form-Index">
                    <div className="row">
{/* 
                        <div id="formSend" >
                                    Seu cadastro foi enviado.<br />
                                Obrigado!
                                </div> */}

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form--content form-group">

                                {/* <!-- ----------------------------------------------------------------------------------------------------------------
                                    Area do nome
        ---------------------------------------------------------------------------------------------------------------- --> */}

                                <label htmlFor="name">Nome:</label>
                                <input
                                    value={form.nome}
                                    onChange={handleChange}
                                    className="form-control"
                                    type="text"
                                    name="name" id="name"
                                    minLength="3" placeholder="João da Silva" required />


                                {/* <div className="alert alert-danger">



                    <div>
                        Nome é necessário
                                                </div>

                    <div>
                        O nome deve ter no mínimo 3 caracteres.
                                                </div>
                </div> */}
                                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do email
        --------------------------------------------------------------------------------------------------------------- */}

                                <label htmlFor="email">Email:</label>
                                <input
                                    value={form.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="email@email.com"
                                    title="Preencha o campo no seguinte modelo: email@dominio.com" required="required"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />

                                {/* <div className="alert alert-danger">
                    <div >
                        O campo "email" precisa ser preenchido.
                                                        </div>
                    <div >
                        Digite um formato correto para email.
                                                        </div>
                </div> */}

                                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do telefone
        ---------------------------------------------------------------------------------------------------------------- */}

                                <label htmlFor="phone">Telefone:</label>
                                <input
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="(99) 99999-9999"
                                    title="Preencha o telefone"
                                    required="required"
                                    minLength="10" mask="(00) 00000-0000" />



                                {/* <div className="alert alert-danger">
                    O campo "Telefone" precisa ser preenchido.
                                            </div>

                <div className="alert alert-danger">
                    Digite um formato correto para telefone.
                                            </div> */}


                                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do Assunto
        ---------------------------------------------------------------------------------------------------------------- */}

                                <label htmlFor="subject">Assunto</label>
                                <select
                                    value={form.subject}
                                    onChange={handleChange}
                                    name="subject"
                                    id="subject"
                                    className="form-control">

                                    <option value="" disabled selected>Selecione um assunto</option>
                                    <option value="assunto1">Assunto 1</option>
                                    <option value="assunto2">Assunto 2</option>
                                </select>

                                {/* <!-- ----------------------------------------------------------------------------------------------------------------
                                    Area do Contato
        ---------------------------------------------------------------------------------------------------------------- --> */}

                                <label htmlFor="msgContent">Conteúdo:</label>
                                <textarea
                                    value={form.msgContent}
                                    onChange={handleChange}
                                    name="msgContent"
                                    id="msgContent"
                                    rows="8"
                                    className="form-control"
                                    maxLength="500"
                                    placeholder="Digite aqui sua mensagem" />

                            </div>


                        </div>

                        {/* --------------------------------- AREA DE INFORMAÇÕES DE CONTATO----------------------- */}

                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="form--content__contact">
                                <h2>Informações de Contato</h2>
                                <h3>Forma de contato:</h3>


                                {/* -----------------------------------Opções de contato: email e telefone --> */}


                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="conta"
                                        id="contatoEmail"
                                        className="form-check-input"
                                        value="contatoEmail" />
                                    <label
                                        htmlFor="contatoEmail">Email</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="conta"
                                        id="contatoTelefone"
                                        className="form-check-input"
                                        value="contatoTelefone" />
                                    <label
                                        htmlFor="contatoTelefone">Telefone</label>
                                </div>

                                {/* -----------------------------------Disponibilidade, tem caixas checkbox --> */}
                                <h3>Disponibilidade para contato:</h3>

                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        name="disp1"
                                        id="comercial"
                                        value="comercial" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="comercial">
                                        Seg. a Sexta - horário comercial</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        name="disp2"
                                        id="manha"
                                        value="manha" />
                                    <label className="form-check-label"
                                        htmlFor="manha">
                                        Seg. a Sexta - Período da manhã</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        name="disp3"
                                        id="tarde"
                                        value="tarde" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="tarde">
                                        Seg. a Sexta - Período da tarde</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        onChange={handleChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        name="disp4"
                                        id="noite"
                                        value="noite">
                                    </input>
                                    <label
                                        className="form-check-label"
                                        htmlFor="noite">
                                        Seg. a Sexta - Período da noite</label>
                                </div>

                                <div className="form-check">
                                    <div
                                        className="form-others">
                                        <label
                                            htmlFor="text-input"
                                            className="form-check-label">
                                            Outros:</label>
                                        <input
                                            onChange={handleChange}
                                            className="form-control"
                                            type="text"
                                            name="disp5"
                                            id="outros">
                                        </input>
                                    </div>
                                </div>

                            </div>

                            {/* -----------------------------------Botoes para enviar e cancelar --> */}
                            <div id="buttons">

                                <div onClick={clicado}>TESTE</div>

                                <button type="reset"
                                    className="btn cancel--button">Cancelar
                                 </button>

                                <button type="submit"
                                    className="btn send--button" >enviar
                                </button>
                            </div>


                        </div>

                    </div>
                </form>

            </div>
        </div>
    </div>

}

export default Home


import React, { useState } from 'react'

import '../css/home.css';
import '../assets/bootstrap/bootstrap.min.css'


const Home = () => {


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        msgContent: ""
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    }





    return <div id="page">

        <div className="container">
            <div className="main--content">


                <h2 >Novo Cadastro</h2>

                <hr></hr>

                <ul>
                    <li>Nome: {form.name}</li>
                    <li>Email: {form.email}</li>
                    <li>telefone: {form.phone}</li>
                    <li>assunto: {form.subject}</li>
                    <li>msgContent: {form.msgContent}</li>

                </ul>


                <div className="message"></div>
                <div className="message"></div>


                <form name="form-Index" id="form-Index" >
                    <div className="row">

                        {/* <div id="formSend">
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
                                    type="radio"
                                        name="conta"
                                        id="email-contact"
                                        className="form-check-input"
                                        value="Email" />
                                    <label htmlFor="email-contact">Email</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="conta"
                                        id="tel-contact"
                                        className="form-check-input"
                                        value="Telefone" />
                                    <label htmlFor="tel-contact">Telefone</label>
                                </div>

                                {/* -----------------------------------Disponibilidade, tem caixas checkbox --> */}
                                <h3>Disponibilidade para contato:</h3>

                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="disp1"
                                        id="input-comercial"
                                        value="comercial" />
                                    <label className="form-check-label" htmlFor="input-comercial">
                                        Seg. a Sexta - horário comercial</label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="disp2"
                                        id="input-manha"
                                        value="manha" />
                                    <label className="form-check-label"
                                        htmlFor="input-manha">
                                        Seg. a Sexta - Período da manhã</label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="disp3"
                                        id="input-tarde"
                                        value="tarde" />
                                    <label className="form-check-label"
                                        htmlFor="input-tarde">
                                        Seg. a Sexta - Período da tarde</label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="disp4"
                                        id="input-noite" value="noite">
                                    </input>
                                    <label className="form-check-label" htmlFor="input-noite">
                                        Seg. a Sexta - Período da noite</label>
                                </div>

                                <div className="form-check">
                                    <div className="form-others">
                                        <label htmlFor="text-input" className="form-check-label">Outros:</label>
                                        <input className="form-control" type="text" name="disp5"
                                            id="text-input">
                                        </input>
                                    </div>
                                </div>

                            </div>

                            {/* -----------------------------------Botoes para enviar e cancelar --> */}
                            <div id="buttons">
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


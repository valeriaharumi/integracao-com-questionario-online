import React from 'react';
import '../css/home.css';


const HomeCadastro = () => {
    return <div>
        <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="form--content form-group">

                {/* <!-- ----------------------------------------------------------------------------------------------------------------
                                    Area do nome
        ---------------------------------------------------------------------------------------------------------------- --> */}
                <label htmlFor="name">Nome:</label>
                <input className="form-control"
                    type="text"
                    name="name" id="name" minlength="3" placeholder="João da Silva" required>
                </input>

                <div className="alert alert-danger">



                    <div>
                        Nome é necessário
                                                </div>

                    <div>
                        O nome deve ter no mínimo 3 caracteres.
                                                </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do email
        --------------------------------------------------------------------------------------------------------------- */}

                <label htmlFor="email">Email:</label>
                <input className="form-control" type="email"
                    name="email" id="email" placeholder="email@email.com"
                    title="Preencha o campo no seguinte modelo: email@dominio.com" required="required"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </input>


                <div className="alert alert-danger">
                    <div >
                        O campo "email" precisa ser preenchido.
                                                        </div>
                    <div >
                        Digite um formato correto para email.
                                                        </div>
                </div>

                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do telefone
        ---------------------------------------------------------------------------------------------------------------- */}

                <label htmlFor="phone">Telefone:</label>
                <input className="form-control" type="tel"
                    name="phone" id="phone" placeholder="(99) 99999-9999" title="Preencha o telefone" required="required"
                    minlength="10" mask="(00) 00000-0000">
                </input>


                <div className="alert alert-danger">
                    O campo "Telefone" precisa ser preenchido.
                                            </div>

                <div className="alert alert-danger">
                    Digite um formato correto para telefone.
                                            </div>


                {/* ----------------------------------------------------------------------------------------------------------------
                                    Area do Assunto
        ---------------------------------------------------------------------------------------------------------------- */}

                <label htmlFor="subject">Assunto</label>
                <select name="subject" id="subject" className="form-control">
                    <option value="" disabled selected>Selecione um assunto</option>
                    <option value="assunto1">Assunto 1</option>
                    <option value="assunto2">Assunto 2</option>
                </select>

                {/* <!-- ----------------------------------------------------------------------------------------------------------------
                                    Area do Contato
        ---------------------------------------------------------------------------------------------------------------- --> */}

                <label htmlFor="msgContent">Conteúdo:</label>
                <textarea name="msgContent" id="msgContent" rows="8"
                    className="form-control" maxlength="500" placeholder="Digite aqui sua mensagem">
                </textarea>
            </div>
        </div>


    </div>

}


export default HomeCadastro
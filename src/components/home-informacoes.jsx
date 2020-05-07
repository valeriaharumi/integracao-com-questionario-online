import React from 'react';
import '../css/home.css';

const HomeInformacoes = () => {
    return <div className="col-sm-12 col-md-12 col-lg-6">

        <div className="form--content__contact">
            <h2>Informações de Contato</h2>
            <h3>Forma de contato:</h3>


            {/* -----------------------------------Opções de contato: email e telefone --> */}


            <div className="form-check">
                <input type="radio"
                    name="conta"
                    id="email-contact"
                    className="form-check-input"
                    value="Email">
                </input>
                <label htmlFor="email-contact">Email</label>
            </div>

            <div className="form-check">
                <input
                    type="radio"
                    name="conta"
                    id="tel-contact"
                    className="form-check-input"
                    value="Telefone">
                </input>
                <label htmlFor="tel-contact">Telefone</label>
            </div>

            {/* -----------------------------------Disponibilidade, tem caixas checkbox --> */}
            <h3>Disponibilidade para contato:</h3>

            <div className="form-check">
                <input className="form-check-input"
                    type="checkbox"
                    name="disp1"
                    id="input-comercial"
                    value="comercial">
                </input>
                <label className="form-check-label" htmlFor="input-comercial">
                    Seg. a Sexta - horário comercial</label>
            </div>

            <div className="form-check">
                <input className="form-check-input"
                    type="checkbox"
                    name="disp2"
                    id="input-manha"
                    value="manha">
                </input>
                <label className="form-check-label"
                    htmlFor="input-manha">
                    Seg. a Sexta - Período da manhã</label>
            </div>

            <div className="form-check">
                <input className="form-check-input"
                    type="checkbox"
                    name="disp3"
                    id="input-tarde"
                    value="tarde">
                </input>
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
}

export default HomeInformacoes




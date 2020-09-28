import React, { Component } from "react";

import { Container } from "./styles";

class CreateUpdateCalcado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      marca: "",
      preco: "",
      descricao: "",
    };

    this.changeTituloHandler = this.changeTituloHandler.bind(this);
    this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
    this.changePrecoHandler = this.changePrecoHandler.bind(this);
    this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
    this.salvarCalcado = this.salvarCalcado.bind(this);
  }

  componentDidMount() {}

  changeTituloHandler(event) {
    this.setState({ titulo: event.target.value });
  }
  changeMarcaHandler(event) {
    this.setState({ marca: event.target.value });
  }
  changePrecoHandler(event) {
    this.setState({ preco: event.target.value });
  }
  changeDescricaoHandler(event) {
    this.setState({ descricao: event.target.value });
  }

  cancelar() {
    this.props.history.push("/home");
  }

  salvarCalcado() {}

  render() {
    return (
      <Container>
        <div className="bg-contact2">
          <div className="container-contact2">
            <div className="wrap-contact2">
              <form className="contact2-form validate-form">
                <span className="contact2-form-title"> Calçado </span>

                <div
                  className="wrap-input2 validate-input"
                  data-validate="Informe o título do produto"
                >
                  <input
                    className="input2"
                    type="text"
                    value={this.state.titulo}
                    onChange={this.changeTituloHandler}
                  />
                  <span
                    className="focus-input2"
                    data-placeholder="TÍTULO"
                  ></span>
                </div>

                <div
                  className="wrap-input2 validate-input"
                  data-validate="Informe a marca do produto"
                >
                  <input
                    className="input2"
                    type="text"
                    value={this.state.marca}
                    onChange={this.changeMarcaHandler}
                  />
                  <span
                    className="focus-input2"
                    data-placeholder="MARCA"
                  ></span>
                </div>

                <div
                  className="wrap-input2 validate-input"
                  data-validate="Informe o preço do produto"
                >
                  <input
                    className="input2"
                    type="text"
                    value={this.state.preco}
                    onChange={this.changePrecoHandler}
                  />
                  <span
                    className="focus-input2"
                    data-placeholder="PREÇO"
                  ></span>
                </div>

                <div
                  className="wrap-input2 validate-input"
                  data-validate="Informe a descrição do produto"
                >
                  <textarea
                    className="input2"
                    value={this.state.descricao}
                    onChange={this.changeDescricaoHandler}
                  ></textarea>
                  <span
                    className="focus-input2"
                    data-placeholder="DESCRIÇÃO"
                  ></span>
                </div>
                <button
                  className="btn-salvar"
                  onClick={() => this.salvarCalcado}
                  value="salvar"
                  type="button"
                >
                  Salvar
                </button>
                <button
                  className="btn-cancelar"
                  onClick={() => this.cancelar}
                  value="salvar"
                  type="button"
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default CreateUpdateCalcado;

import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { formatPrice } from "../../utils/format";
import api from "../../services/api";

import { ProductList } from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcados: [],
    };

    this.excluir = this.excluir.bind(this);
    this.editar = this.editar.bind(this);
    this.novo = this.novo.bind(this);
  }

  excluir(id) {
    api.deleteCalcado(id).then((response) => {
      alert(response.data);
      this.getCalcados();
    });
  }

  editar(id) {}

  novo() {
    this.props.history.push("/calcado/_add");
  }

  componentDidMount() {
    this.getCalcados();
  }

  getCalcados() {
    api
      .getCalcados()
      .then((response) => this.setState({ calcados: response.data }));
  }

  render() {
    const { calcados } = this.state;

    return (
      <ProductList>
        <h2>Calçados</h2>
        <div className="table-container">
          <div className="cadastro-container">
            {" "}
            <Link to="/cadastro">
              <button
                className="btn-novo"
                onClick={() => this.novo}
                value="novo"
                type="button"
              >
                Cadastrar produto!!
              </button>
            </Link>
          </div>
          <table className="fl-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Marca</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.calcados.map((calcados) => (
                <tr key={calcados.id_Calcados}>
                  <td>{calcados.titulo}</td>
                  <td>{calcados.marca}</td>
                  <td>{calcados.descricao}</td>
                  <td>{calcados.preco}</td>
                  <td>
                    <button
                      className="btn-editar"
                      type="button"
                      value="editar"
                      onClick={() => this.editar(calcados.id_Calcados)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-excluir"
                      onClick={() => this.excluir(calcados.id_Calcados)}
                      value="excluir"
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProductList>
    );
  }
}

export default Home;

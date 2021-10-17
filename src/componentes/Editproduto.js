import React from "react";

class EditProduto extends React.Component {
  //criando configuraçoes
  constructor(props) {
    super(props);
    const { id, Nome_do_produto, Preco, Tamanho, Cor } =
      props.location.state.produto;

    this.state = {
      id: id,
      Nome_do_produto: Nome_do_produto,
      Preco: Preco,
      Tamanho: Tamanho,
      Cor: Cor,
    };
  } 

  update = (e) => {
    e.preventDefault();
    if (this.state.Nome_do_produto === "" || this.state.Preco === "") {
      alert("Os dois primeiros campos são obrigatórios");
      return;
    }
    //mostrar dados organizados quando adicionado
    this.props.updateProduto(this.state);

    //limpando informacoes depois de adicionado
    this.setState({ Nome_do_produto: "", Preco: "", Tamanho: "", Cor: "" });

    //depois de adicionado queremos voltar para a nossa lista
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>Atualizar Produto</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Nome do produto</label>
            <input
              type="text"
              name="name"
              placeholder="Calça Jeans"
              value={this.state.Nome_do_produto}
              onChange={(e) =>
                this.setState({ Nome_do_produto: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label>Preço do Produto</label>
            <input
              type="number"
              name="name"
              placeholder="18.00"
              value={this.state.Preco}
              onChange={(e) => this.setState({ Preco: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Tamanho do Produto</label>
            <input
              type="text"
              name="name"
              placeholder="XML"
              value={this.state.Tamanho}
              onChange={(e) => this.setState({ Tamanho: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Cor do Produto</label>
            <input
              type="text"
              name="name"
              placeholder="Cinza"
              value={this.state.Cor}
              onChange={(e) => this.setState({ Cor: e.target.value })}
            />
          </div>
          <button className="ui button blue">Atualizar</button>
        </form>
      </div>
    );
  }
}

export default EditProduto;

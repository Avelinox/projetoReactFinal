import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import im from "../imagens/produto.png";

const ProdutoCard = ({ handleDeleteById, produto }) => {
  const { id, Nome_do_produto, Preco, Tamanho, Cor } = produto;

  return (
    <tr>
      <td>
        <img width="35px" src={im} alt="produto" />
      </td>
      <td>
        <Link to={{ pathname: `/produto/${id}`, state: { produto: produto } }}>
          <div className="header">{Nome_do_produto}</div>
        </Link>
      </td>
      <td>{Preco}</td>
      <td>{Tamanho}</td>
      <td>{Cor}</td>
      <td>
        <Button variant="danger" onClick={() => handleDeleteById(id)}>
          Delete
        </Button>
        <Link to={{ pathname: `/edit`, state: { produto } }}>
          <Button>Editar</Button>
        </Link>
      </td>
    </tr>
  );
}; 

export default ProdutoCard;

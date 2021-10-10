import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import im from "../imagens/tdpro.jpg";
import Layout from "./Layout";

const ProdutoInfo = (props) => {
  const { Nome_do_produto, Preco, Tamanho, Cor } = props.location.state.produto;

  return (
    <Layout title={Nome_do_produto}>
      <Card>
        <Card.Img variant="top" src={im} />
        <Card.Body>
          <Card.Title>Nome: {Nome_do_produto}</Card.Title>
          <Card.Text>Preço: {Preco}</Card.Text>
          <Card.Text>Tamanho: {Tamanho}</Card.Text>
          <Card.Text>Cor: {Cor}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};
export default ProdutoInfo;

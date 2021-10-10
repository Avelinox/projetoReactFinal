import React from "react";
import ProdutCard from "./ProdutCard";
import { Table } from "react-bootstrap";
import Layout from "./Layout";

const ListProduto = ({ produtos: products, deleteProductById }) => {
  return (
    <Layout title="Lista dos produtos">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th />
            <th>Nome</th>
            <th>Preço</th>
            <th>Tamanho</th>
            <th>Cor</th>
            <th>Metodo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProdutCard
              produto={product}
              handleDeleteById={deleteProductById}
              key={product.id}
            />
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};
export default ListProduto;

import React from "react";
import { Link } from "react-router-dom";
import ProdutCard from "./ProdutCard";

const ListProduto = (props)=>{
    console.log(props)


    //codigo para deletar
    const eliminar =(id)=>{
        props.produtoId(id);
    }

//criando função que vai retornar a lista dos produtos

    
    const renderListProd =  props.produtos.map((produto)=>{
        return(
            <ProdutCard produto={produto} clickBalde = {eliminar} key ={produto.id}></ProdutCard>

        );
    })
    return(
        <div class ="main" style={{marginTop:"50px"}}>
            <Link to="/add"><button className="ui button blue right" > Adicionar Produto</button></Link>
            
            <h2>Lista dos Produtos</h2>
            
            <div className="ui celled list">{renderListProd}</div>

        </div>
    )
}
export default ListProduto;
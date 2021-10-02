import React from "react";

import ProdutCard from "./ProdutCard";

const ListProduto = (props)=>{
    console.log(props)


    //codigo para deletar
    const eliminar =(id)=>{
        props.produtoId(id);
    }

//criando função que vai retornar a lista dos produtos

    const produtos = [{
        id: "1",
        "Nome_do_Produto":"Blusa",
        "Preco":20,
        "Tamanho":"XL",
        "Cor":"Preta"
    }]
    const renderListProd =  produtos.map((produto)=>{
        return(
            <ProdutCard produto={produto} clickBalde = {eliminar} key ={produto.id}></ProdutCard>

        );
    })
    return(
            <div className="ui celled list">{renderListProd}</div>
    )
}
export default ListProduto;
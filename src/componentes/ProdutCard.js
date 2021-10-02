import React from "react";
import im from "../imagens/produto.png"

const ProdutoCard = (props)=>{
    const{id,Nome_do_produto,Preco,Tamanho,Cor} = props.produto;

    return(
        <div className= "item">
            <img className = "ui avatar image" src ={im} alt = "produto"/>
        <div className = "content">
            <div className = "header">{Nome_do_produto}</div>
            <div>{Preco}</div>
            <div>{Tamanho}</div>
            <div>{Cor}</div>
        </div>
        {/* adicionando balde de lixo */}
        <i className = "trash alternate outline icon" style = {{color:"red", marginTop:"10px"}} onClick = {()=>{ props.clickBalde(id)}}></i>
    </div>
    );

}

export default ProdutoCard;

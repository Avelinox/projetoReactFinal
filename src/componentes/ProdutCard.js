import React from "react";
import {Link} from "react-router-dom";
import im from "../imagens/produto.png"

const ProdutoCard = (props)=>{
    const{id,Nome_do_produto,Preco,Tamanho,Cor} = props.produto;

    return(
        <div className= "item" style = {{ marginTop:"5px"}}>
            <img className = "ui avatar image" src ={im} alt = "produto"/>
        <div className = "content" >

            {/* Adicionando link para quando acessar individualmente os produtos */}
            <Link to={{pathname:`/produto/${id}` ,state:{produto:props.produto}}} >
            <div className = "header">{Nome_do_produto}</div>
            <div>{Preco}</div>
            <div>{Tamanho}</div>
            <div>{Cor}</div>
            </Link>
        </div>
        {/* adicionando balde de lixo */}
        <i className = "trash alternate outline icon" style = {{color:"red",marginTop:"10px",marginLeft:"10px"}} onClick = {()=>{ props.clickBalde(id)}}></i>

        <Link to={{pathname:`/edit` ,state:{produto:props.produto}}} >
        {/* icone para atualizar */}
        <i className = "edit alternate outline icon" style = {{color:"blue",marginTop:"10px"}} ></i>
        </Link>
    </div>
    );

}

export default ProdutoCard;

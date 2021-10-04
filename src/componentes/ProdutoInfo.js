import React from "react";
import {Link} from "react-router-dom";
import im from "../imagens/tdpro.jpg"

const ProdutoInfo = (props)=>{
   const {Nome_do_produto,Preco,Tamanho,Cor} = props.location.state.produto;
console.log(props)
    return(
      <div className="main">

        <div className="ui card centered" style={{marginTop:"50px"}}>
            <div className="image">
                <img src ={im} alt="logo"/>
            </div>
            <div className="content">
                <div className ="header">{Nome_do_produto}</div>
                <div className = "description">{Preco}</div>
                <div className = "description">{Tamanho}</div>
                <div className = "description">{Cor}</div>
            </div>
        </div>
        {/* voltando para a lista dos produtos */}
        <div className="center-div">
            <Link to="/">
            <button className ="ui button blue center">Voltar para produtos</button>
            </Link>
        </div>

      </div>
    );

    

}
export default ProdutoInfo;

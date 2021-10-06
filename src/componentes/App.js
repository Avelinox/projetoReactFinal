import React,{ useState, useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import { uuid } from "uuidv4"
import api from "../api/produtos"
import Header from "./header";
import AdicionarProduto from "./Addproduto";
import ListaProdutos from "./ListProduto";
import ProdutoInfo from "./ProdutoInfo";
import EditProduto from "./Editproduto";



function App() {

  //criando uma chave de recuperacao

  const LOCAL_STORAGE_KEY= "produtos";
  const [produtos,configProduto] = useState([]);

  //recuperar produtos da fake api
  const recuperarProduto = async ()=>{
    const resposta = await api.get("/produtos")
    return resposta.data;
  }
//Cadastro de novos produtos
  const novoProduto = async (produto)=>{
    console.log(produto)
    const request ={
      id:uuid(),
      ...produto
    }
    //Cadastrando produto na rota produtos
    const resposta = await api.post("/produtos", request)

    configProduto([...produtos, resposta.data]);
  };

  //Atualizar produto
  const updateProduto = async (produto)=>{
    const resposta =  await api.put(`/produtos/${produto.id}`, produto)

    const{id,Nome_do_produto,Preco,Tamanho,Cor} = resposta.data;

    configProduto(produtos.map(produto =>{
      return produto.id ===id ? {...resposta.data}: produto
    }))

  }

  //codigo para eliminar algo cadastrado

  const deletarProd = async (id)=>{
    await  api.delete(`/produtos/${id}`);

      const nvProduto = produtos.filter((produto)=>{
        return produto.id !== id;
      });
      configProduto(nvProduto);
  }




//criando efeito de como os dados vão ser apresentados
  useEffect(()=>{

    

    const getProdutos = async ()=>{
      const todosProdutos =  await recuperarProduto();
      if(todosProdutos){
        configProduto(todosProdutos);
      }
    }
    getProdutos();
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(produtos));

  },[produtos])
  return (
    <div className = "ui container">

    <Router>

      <Header />

      <Switch>
      
        <Route path ="/" exact render={(props)=>(<ListaProdutos {...props} produtos={produtos} produtoId ={deletarProd}/>)} 
        />
        
        <Route path ="/add" render={(props)=>(<AdicionarProduto {...props} novoProduto ={ novoProduto}/>)}
        />

      <Route path ="/edit" render={(props)=>(<EditProduto {...props} updateProduto ={ updateProduto}/>)}
        />
        <Route path="/produto/:id" component={ProdutoInfo}/>
       
      </Switch>
      
      
      
    </Router>


     
    </div>

  );
}

export default App;

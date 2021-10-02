import React,{ useState, useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import { uuid } from "uuidv4"
import Header from "./header";
import AdicionarProduto from "./Addproduto";
import ListaProdutos from "./ListProduto";

function App() {

  //criando uma chave de recuperacao

  const LOCAL_STORAGE_KEY= "produtos";
  const [produtos,configProduto] = useState([]);

  const novoProduto = (produto)=>{
    console.log(produto)
    configProduto([...produtos,{ id:uuid(), ...produto}]);
  }

  //codigo para eliminar algo cadastrado

  const deletarProd = (id)=>{

      const nvProduto = produtos.filter((produto)=>{
        return produto.id !== id;
      });
      configProduto(nvProduto);
  }




//criando efeito de como os dados vão ser apresentados
  useEffect(()=>{
    const visualizarProdutos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON));

    if(visualizarProdutos){
      configProduto(visualizarProdutos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(produtos));

  },[produtos])
  return (
    <div className = "ui container">

    <Router>

      <Header />
      
      <Switch>
        <Route path ="/add" component ={AdicionarProduto}/>
        <Route path ="/" component ={ListaProdutos}/>
      </Switch>
      
      {/* <AdicionarProduto novoProduto ={ novoProduto}/> */}
      {/* Adicionando minha variavel na lista dos produtos */}
      {/* <ListaProdutos produtos={produtos} produtoId ={deletarProd}/> */}
      
    </Router>


     
    </div>

  );
}

export default App;

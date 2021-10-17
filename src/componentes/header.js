import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light">
      <div className="container">
        <Nav className="justify-content-center">
          <Navbar.Brand href="#home">Gerência da Loja</Navbar.Brand>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Lista dos Produtos</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/add">Adicionar Produto</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
}; 

export default Header;

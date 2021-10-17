import React from "react";
import { Container, Row } from "react-bootstrap";

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Row>
        <h1 className="text-center">{title}</h1>
      </Row>
      <Row>{children}</Row>
    </Container>
  );
}; 

export default Layout;

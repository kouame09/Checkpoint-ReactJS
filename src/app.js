import React from 'react';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';
import NavBar from './navbar'
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Mon Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            { <NavBar /> /*importation du composant navBar */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1>Mon En-tête</h1>
      </Container>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="image1.jpg" />
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Description de la carte 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="image2.jpg" />
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>Description de la carte 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="image3.jpg" />
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>Description de la carte 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

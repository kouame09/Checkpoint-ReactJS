//Créer un composant app et à l'interieur du composant app, créer un fragment react et à l'interieur créer un div avc le nom de la classe"app". Et à l'interieur du div, utilise react-bootstrap pour créer une barre de navigation, un entete et trois cartes
import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Languages" id="basic-nav-dropdown"></NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
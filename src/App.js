import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login'
import Conteudo from './Conteudo'
import Video from './Video'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(
    ''
  );
  const [tituloAula, setTituloAula] = useState(
    ''
  );
  return (
  <Router>  
    <Container fluid>
      <Row>
      <Col xs={12} ls={12} lg={12}>
      <Navbar bg="light">
        <Navbar.Brand href="/">Plataforma EAD</Navbar.Brand>
        <Badge>{user}</Badge>
        <Badge>{tituloAula}</Badge>
      </Navbar>
      </Col> 
        <Switch>
          
          <Route exact path='/login'>
            <Login setUser={setUser} user={user}/>
          </Route>

          <Route exact path='/conteudo'>
            <Conteudo setTituloAula={setTituloAula}
              titulo={"Curso de Álgebra sobre potenciação e radiciação com o nível do 9º ano do Ensino Fundamental II"}
             />
          </Route>

          <Route exact path='/video'>
            <Video />
          </Route>

          <Route path='/'>
          <Login setUser={setUser} user={user}/>
          </Route>
        </Switch>  
      </Row>
    </Container>
  </Router>  
  );
}

export default App;

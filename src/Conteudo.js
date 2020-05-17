import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPersonSquare, BsFolder } from "react-icons/bs";

function Conteudo() {
    return (
        <Col xs={12} md={12} lg={12} style={{float: 'none', display: 'inline-block'}}> 
        <Col xs={12} md={6} lg={4} style={{float: 'none', display: 'inline-block'}}>  
        <Card>
            <Card.Header style={{backgroundColor:'orange'}}>Turma de Exemplo </Card.Header>
            <Card.Body>
                Turma A
            </Card.Body>
            <Card.Footer><BsPersonSquare/> <BsFolder/> </Card.Footer>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={4} style={{float: 'none', display: 'inline-block'}}>
        <Card>
        <Card.Header style={{backgroundColor:'blue'}}>3º Ano M </Card.Header>
        <Card.Body>
            <Card.Text>
            Data de entrega: segunda-feira
            <br></br>
            08:00 - "ALEGRAR!"
            </Card.Text>
        </Card.Body>
        <Card.Footer><BsPersonSquare/> <BsFolder/> </Card.Footer>
         </Card>
         </Col>
         <br></br><br></br>
         <Col xs={12} md={10} lg={10} >
            <Card>
                      
            <Card.Body>
            <Col xs={12} md={3} lg={3} style={{float: 'none', display: 'inline-block'}}>
                <Image src='math1.jfif' fluid />
            </Col>
            <Col xs={12} md={9} lg={9} style={{float: 'none', display: 'inline-block'}}>
                <Card.Title>Matemática para sexto ano de ensino fundamental.</Card.Title>
                <Card.Text>Tiago de Almeida Marchi</Card.Text>
                <Card.Text>8,5 total horas - 92 aulas - todos os níveis</Card.Text>
            </Col>    
                
                   
                
                
                
            </Card.Body>
        
            </Card>
            <Card>
                      
            <Card.Body>
            <Col xs={12} md={3} lg={3} style={{float: 'none', display: 'inline-block'}}>
                <Image src='math2.jfif' fluid />
            </Col>
            <Col xs={12} md={9} lg={9} style={{float: 'none', display: 'inline-block'}}>
                <Card.Title>Matemática do Ensino Fundamental</Card.Title>
                <Card.Text>Aprenda com o passo a passo de exercícios.<br></br>Renata Melo PhD</Card.Text>
                
                <Card.Text>4 total horas - 36 aulas - todos os níveis</Card.Text>
            </Col>    
                
                   
                
                
                
            </Card.Body>
        
            </Card>
            <Card>
                      
            <Card.Body>
            <Col xs={12} md={3} lg={3} style={{float: 'none', display: 'inline-block'}}>
                <Image src='math3.jfif' fluid />
            </Col>
            <Col xs={12} md={9} lg={9} style={{float: 'none', display: 'inline-block'}}>
                <Card.Title>Potenciação e Radiciação | 9º ano | Unidade 1</Card.Title>
                <Card.Text>Curso de Álgebra sobre potenciação e radiciação com o nível do 9º ano do Ensino Fundamental II.
                    <br></br> Matemática Resolvida
                </Card.Text>
                <Card.Text>4,5 total horas - 24 aulas - todos os níveis</Card.Text>
            </Col>    
                
                   
                
                
                
            </Card.Body>
        
            </Card>
         </Col>
         </Col>
    );
  }
  
  export default Conteudo;
  
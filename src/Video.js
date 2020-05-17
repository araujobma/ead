
import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { BsPersonSquare, BsFolder } from "react-icons/bs";

function Video() {
    return (
          
        
            <div>
            <Col xs={12} md={6} lg={6} style={{float: 'none', display: 'inline-block'}}>
            <iframe  src="https://www.youtube.com/embed/1f3vfqV3kvY" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            </Col>
            <Col xs={12} md={6} lg={6} style={{float: 'none', display: 'inline-block',marginLeft: 10}}>
               <Table>
                   <tbody>
                       <tr style={{backgroundColor: 'gray'}}>Introdução</tr>
                       <tr>Parte I</tr>
                       <tr>Parte II</tr>
                       <tr>Exercícios</tr>
                   </tbody> 
               </Table>
            </Col>
            </div>    
                
                   
                
                
                
            
         
    );
  }
  
  export default Video;
  
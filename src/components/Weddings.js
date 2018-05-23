import React, { Component } from 'react';
import TodoList from '../people';
import { Grid, Row, Col } from 'react-bootstrap';


export default class Weddings extends Component{
    render() {
        return (
            
            <section class="bg light">   
        <div class="col-md-5 colTop py-3">
          <h1 class="text-white"> Weddings Invitation Cards</h1>
            <p class="text-white"> We keep adding new touches To keep it a special event (Jim Cooper)</p>
            </div>


<div class="container">
<div class="row">
    <div class="col-md-3">
    
        <div class="col-md-3"><img src="/images/istanbul-burgazada-01.jpg" class="img-fluid"alt="Burgazada01"/><figcaption>Burgazada01</figcaption></div>
        <div class="col-md-3"><img src="/images/istanbul-burgazada-02.jpg" class="img-fluid"alt="Burgazada02"/><figcaption>Burgazada02</figcaption></div>
        <div class="col-md-3"><img src="/images/istanbul-burgazada-03.jpg" class="img-fluid"alt="Burgazada03"/><figcaption>Burgazada03</figcaption></div>
        <div class="col-md-3"><img src="/images/istanbul-burgazada-04.jpg" class="img-fluid"alt="Burgazada04"/><figcaption>Burgazada04</figcaption></div>
    </div>
    </div>
    </div>
           </section>
           
       ) 
     }
 }

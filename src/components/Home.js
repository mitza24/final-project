import React, { Component } from 'react';
import logo from '../logo.svg';
import People from '../people.js';
import AlertDismissable from '../alert'
import {Link} from 'react-router-dom';

import { Button, Grid, Row, Thumbnail, Col, ButtonToolbar, Carousel, CarouselItem, DropdownButton, Dropdown } from 'react-bootstrap';
import { Nav, ButtonGroup, NavItem, Tab, Modal, FormGroup, FormControl, ControlLabel, HelpBlock,Jumbotron } from 'react-bootstrap';



class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
     this.handleChange = this.handleChange.bind(this);
     
    this.state = {
      value: ''
    };
    
  }

 

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome To Online Invitation Cards Website</h2>
          </Jumbotron>
          <link to="/Weddings">
            
          </link>
          <Grid/>
      
        <Row>
          <Col xs={12}>
            <Carousel>
              <Carousel.Item>
                <img alt="900x500" src="/images/wedding.jpg" className="sliderImage" />
                <Carousel.Caption>
                  <h3>Some people are worth melting for.” —Olaf, character from Frozen</h3>
                  <p>“Some people are worth melting for.” —Olaf, character from Frozen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="900x500" src="/images/baptism.jpg" className="sliderImage" />
                <Carousel.Caption style={{ color: 'red' }}>
                  <h3>“You are sealed by the holy spirit in baptism and marked as Christ’s own forever.”</h3>
                  <p>“You are sealed by the holy spirit in baptism and marked as Christ’s own forever.”</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="900x500" src="/images/birthday.jpg" className="sliderImage" />
                <Carousel.Caption> 
                  <h3>I hear today is your birthday. Another year older is another year wiser my friend.</h3>
                  <p>I hear today is your birthday. Another year older is another year wiser my friend.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <AlertDismissable label="Ok">
              <People/>
            </AlertDismissable>
            <AlertDismissable label="Maybe">
              <People/>
            </AlertDismissable>
            <AlertDismissable label="NO">
              <People/>
            </AlertDismissable>

            
          
          </Col>
        </Row>

        <Row className="cardRow"> 
          <Col xs={1} md={3}>
            <ButtonToolbar className="cardsContainer">
                <Link  to="/weddings" className="btn btn-primary">Weddings Cards</Link>
                <Link  to="/baptism" className="btn btn-primary">Baptism Cards</Link>
                <Link  to="/birthdays" className="btn btn-primary">Birthdays Cards</Link>
              </ButtonToolbar>
          </Col>
      </Row>
          <Col xs={8}>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                {/* <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          /> */}


                <FormControl.Feedback />
                {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
              </FormGroup>
            </form>

            {/* <FieldGroup
              id="formControlsText"
              type="text"
              label="We are here to serve you please fill in the information and we will be contacting you as soon as possible"
              placeholder="Enter Your Name"
            /> */}
            {/* <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter Your Email"
            /> */}
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Upload Your Picture:"
            // help="Example block-level help text here."
            />

            <FormGroup controlId="formControlsTextarea" bsSize="large">
              <ControlLabel>Write Your Own Text Invitation</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Write Something..." />
              <Button  block bsStyle="primary" className="buttonsend">Send</Button>
            </FormGroup>
          </Col>
        
      </Grid>
    );
  }
}






const FieldGroup = ({ id, label, help, Carousel, CarouselItem, DropdownButton, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const FormInstance = () => {
  return (<div>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Your Name"
      placeholder="Enter Your Name"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="Upload Something:"
    // help="Example block-level help text here."
    />

    <FormGroup controlId="formControlsTextarea" bsSize="large">
      <ControlLabel>Message</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Write Something..." />
      </FormGroup>

    {/* <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>email@example.com</FormControl.Static>
    </FormGroup> */}

    <Button type="submit">Submit</Button>
  </div>
  )
};

<Grid>
  <Row>
    {/* START OF Carousel Column  */}
    <Col xs={12} md={12}>
      <Carousel>
        <Carousel.Item>
          <div style={{ width: 650, height: 300 }} />
        </Carousel.Item>
      </Carousel>
    </Col>
    {/* END OF Carousel Column  */}
  </Row>
</Grid>
{/* start of dropdown */ }
<div class=" dropdown">

  {/* <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Accept
  <span class="caret"></span></button>
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Maybe
  <span class="caret"></span></button>
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">No
  <span class="caret"></span></button> */}
</div>
{/* end of dropdown */ }
<Grid>
  <Row>
    {/* START OF form Column  */}
    <Col xs={12} md={6}>
      <FormInstance />
      <div style={{ maxWidth: '200px' }}>
        {/* <ButtonToolbar >
          <Button vertical block bsStyle="primary">Weddings Cards</Button>
          <Button vertical block bsStyle="primary">Baptism Cards</Button>
          <Button vertical block bsStyle="primary">Birthdays Cards</Button>
        </ButtonToolbar> */}
      </div>

    </Col>
    {/* END OF form Column  */}
    {/* START OF map Column  */}

    <Col xs={12} md={6}>

    </Col>
    {/* END OF map Column  */}
  </Row>

</Grid>

export default Home;
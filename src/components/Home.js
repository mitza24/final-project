import React from "react";
import People from "../people.js";
import AlertDismissable from "../alert";
import { Link } from "react-router-dom";
import Form from "./Form";
import {
  Button,
  Grid,
  Row,
  Col,
  ButtonToolbar,
  Carousel
} from "react-bootstrap";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Grid>
        <div>
          <Row>
            <Col>
              <h2>Welcome To Online Invitation Cards Website</h2>
              <div>
                <h1>Invitation Cards</h1>
                <p>
                  We keep adding new touches To keep it a special event (Jim Cooper){" "}
                  
                </p>
              </div>
              <link to="/Weddings" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Carousel>
                <Carousel.Item>
                  <img
                    alt="900x500"
                    src="/images/wedding.jpg"
                    className="sliderImage"
                  />
                  <Carousel.Caption>
                    <h3>
                      Some people are worth melting for.” —Olaf, character from
                      Frozen
                    </h3>
                    <p>
                      “Some people are worth melting for.” —Olaf, character from
                      Frozen.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    alt="900x500"
                    src="/images/baptism.jpg"
                    className="sliderImage"
                  />
                  <Carousel.Caption style={{ color: "red" }}>
                    <h3>
                      “You are sealed by the holy spirit in baptism and marked
                      as Christ’s own forever.”
                    </h3>
                    <p>
                      “You are sealed by the holy spirit in baptism and marked
                      as Christ’s own forever.”
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    alt="900x500"
                    src="/images/birthday.jpg"
                    className="sliderImage"
                  />
                  <Carousel.Caption>
                    <h3>
                      I hear today is your birthday. Another year older is
                      another year wiser my friend.
                    </h3>
                    <p>
                      I hear today is your birthday. Another year older is
                      another year wiser my friend.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <AlertDismissable label="Accept with pleasure">
                <People />
              </AlertDismissable>
              <AlertDismissable label="Decline with regret">
                <People />
              </AlertDismissable>
              {/* <AlertDismissable label="NO">
              <People/>
            </AlertDismissable> */}
            </Col>
          </Row>

          <Row className="cardRow">
            <Col xs={1}>
              <ButtonToolbar className="cardsContainer">
                <Link to="/weddings" className="btn btn-primary">
                  Weddings Cards
                </Link>
                <Link to="/baptism" className="btn btn-primary">
                  Baptism Cards
                </Link>
                <Link to="/birthdays" className="btn btn-primary">
                  Birthdays Cards
                </Link>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
          <Col xs={8}>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <FormControl.Feedback />
                {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
              </FormGroup>
            </form>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Upload Your Picture:"
              // help="Example block-level help text here."
            />

            <FormGroup controlId="formControlsTextarea" bsSize="large">
              <ControlLabel>Write Your Own Text Invitation</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Write Something..."
              />
              <Button block bsStyle="primary" className="buttonsend">
                Send
              </Button>
            </FormGroup>
          </Col>
          </Row>
        </div>
        <Form />
      </Grid>
    );
  }
}

const FieldGroup = ({
  id,
  label,
  help,
  Carousel,
  CarouselItem,
  DropdownButton,
  ...props
}) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default Home;

import React from "react";
import { Alert, Button } from 'react-bootstrap';

export default class AlertDismissable extends React.Component {

    state = {
        show: false
    }

    handleDismiss = () => {
        this.setState({ show: false })
    }
  
    handleShow = () => { 
        this.setState({ show: true });
    }
  
    render() {
      if (this.state.show) {
        return (
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <Button onClick={this.handleDismiss}>Hide</Button>
            { this.props.children }
          </Alert>
        );
      }
  
      return <Button bsStyle="primary" onClick={this.handleShow}>{this.props.label}</Button>;
    }
  }
import React from "react";
import People from './people.js';
import App from './App.js';
import { Alert, Button } from 'react-bootstrap';

class AlertDismissable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    whenFormIsSubmit = evt => {
        evt.preventDefault();
        // get the originator of the event
        const form = evt.target;
        // get the fields values
        const username = form.username.value;
        const email = form.email.value;
        const address = form.address.value;
        // create a new person object
        const person = { username, email, address };
        // add the person to the array of people
        const people = [...this.state.people, person];
        // set the state to trigger a re-render of everything
        this.setState({ people });
    }

    render() {
        //const people = this.state.people;
        //const people_rendered = people.map(person => <Person {...person} />);
        return (
            <div>
                <button onClick={(e) => { e.preventDefault(); this.clicked('person'); }} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Accept<span class="caret"></span></button>
                {this.state.List1}
                {/* FORM STARTS */}
                <form onSubmit={this.whenFormIsSubmit}>
                    <span>Name:</span>
                    <input name="username" type="text" />
                    <br />
                    <span>email:</span>
                    <input name="email" type="text" />
                    <br />
                    <span>address:</span>
                    <textarea name="address" />
                    <br />
                    <button>ok</button>
                </form>
                {/* FORM ENDS */}
                
            </div>
        );
    }
}

const Person = ({ username, email, address }) => (
    <li>
        <div>{username}</div>
        <div>email: {email}</div>
        <div>{address}</div>
    </li>

);

export default AlertDismissable
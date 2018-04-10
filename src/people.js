import React from "react";

const Person = ({ username, email, address }) => (
  <li>
    <div>{username}</div>
    <div>email: {email}</div>
    <div>{address}</div>
  </li>
);

export default class TodoList extends React.Component {
  state = {
    people: []
  };
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
  };
  render() {
    const people = this.state.people;
    const people_rendered = people.map(person => <Person {...person} />);
    return (
      <div>
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
        <ul>{people_rendered}</ul>
      </div>
    );
  }
}
// const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
// import React from "react";
// import render from "react-dom";

// import React from "react";
// import { render } from "react-dom";

// export default class TodoList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       // text: "Enter Your Name",
//       list: []
//     };
//   }
//   whenWritingInInput = evt => {
//     const newText = evt.target.value;
//     this.setState({ text: newText });
//   };
//   whenButtonClicked = evt => {
//     const text = this.state.text;
//     const list = this.state.list;
//     list.push(text);
//     this.setState({ text: "", list });
//   };
//   render() {
//     return (
//       <div>
//         {/* <h1>To do list</h1> */}
//         <input
//           type="text"
//           onChange={this.whenWritingInInput}
//           value={this.state.text}
//         />
//         <button onClick={this.whenButtonClicked}>Enter Your Name</button>
//         <ul>{this.state.list.map(element => <li>{element}</li>)}</ul>
//       </div>
//     );
//   }
// }

// render(<TodoList />, document.getElementById("root"));



// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "left"
// };



// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         asdasdasd
//       </div>
//     )
//   }
// }



// const People = () => (
//    <div style={styles}> 

//     {/* <Example/>
//     <h2>Start editing to see some magic happen {"\u2728"}</h2>
//     <h1>To do list</h1> */}
//     <input type="text" />
//     <button>Add Your Name</button>
//   </div>

// )

// export default People;

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

// render(<TodoList />, document.getElementById("root"));

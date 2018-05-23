import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Weddings from './components/Weddings';
import Baptisms from './components/Baptisms';
import Birthdays from './components/Birthdays';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/weddings" component={Weddings} />
          <Route exact path="/baptisms" component={Baptisms} />
          <Route exact path="/birthdays" component={Birthdays} />
        </div>
      </Router>
    );
  }
}

export default App;
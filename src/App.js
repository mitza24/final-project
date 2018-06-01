import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Weddings from './components/Weddings';
import WeddingEditor from './components/WeddingEditor';
import Baptisms from './components/Baptisms';
import Birthdays from './components/Birthdays';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Forms from './components/Form';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/weddings" component={Weddings} />
          <Route exact path="/weddings/:cardImage" component={WeddingEditor} />
          <Route exact path="/baptisms" component={Baptisms} />
          <Route exact path="/birthdays" component={Birthdays} />
          <Route exact path="/forms" component={Forms} />
        </div>
      </Router>
    );
  }
}

export default App;
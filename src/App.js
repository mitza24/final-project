import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Weddings from './components/Weddings';
import Baptisms from './components/Baptisms';
import Birthdays from './components/Birthdays';
import WeddingEditor from './components/WeddingEditor';
import BaptismEditor from './components/BaptismEditor';
import BirthdayEditor from './components/BirthdayEditor';
import Email from './components/Email';

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
          <Route exact path="/baptisms" component={Baptisms} />
          <Route exact path="/birthdays" component={Birthdays} />
          <Route exact path="/weddings/:cardImage" component={WeddingEditor} />
          <Route exact path="/baptisms/:cardImage" component={BaptismEditor} />
          <Route exact path="/birthdays/:cardImage" component={BirthdayEditor} />
          <Route exact path="/email" component={Email}/>
          <Route exact path="/birthdays/:cardImage/:email" component={Email} />
          <Route exact path="/weddings/:cardImage/:email" component={Email} />
          <Route exact path="/baptisms/:cardImage/:email" component={Email} />
        
          
          
          
         
          <Route exact path="/forms" component={Forms} />
        </div>
      </Router>
    );
  }
}

export default App;
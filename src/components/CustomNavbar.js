import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/weddings" to="/weddings">
              Weddings
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/baptisms" to="/baptisms">
              Baptisms
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/birthdays" to="/birthdays">
            Birthdays
          </NavItem>
          <NavItem eventKey={4} componentClass={Link} href="/email" to="/email">
            Email
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
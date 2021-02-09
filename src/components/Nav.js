import React from "react";
import { Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
<div className="nav">
  <Navbar bg="none" expand="lg">
    <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Link to="/">
        <div className="menu-items">Home</div>
      </Link>
      <Link to="/builds">
        <div className="menu-items">Builds</div>
      </Link>
        <Link to="/create">
            <div className="menu-items">Create</div>
        </Link>
        <Link to="/team">
            <div className="menu-items">About the team</div>
        </Link>
        </Navbar.Collapse>
  </Navbar>
    </div>
  );
};

export default Nav;

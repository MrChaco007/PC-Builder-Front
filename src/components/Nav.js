import React from "react";
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import RightNav from './RightNav'
import './nav.css'



const Nav = () => {
  return ( 
 <div className="nav">
    <h1 id="nav-title">PC Builder</h1>
    <div className="menu-bar">
       <RightNav />
    </div>
       <Hamburger />
    </div>
  );
};

export default Nav;

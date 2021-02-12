import React from "react";
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import RightNav from './RightNav'
import './nav.css'



const Nav = () => {
  return ( 
      <div className="_nav">
         <Link to="/"id="nav-title">
            PC Builder
            <div className="underline nav-underline"></div>
         </Link>
         <div className="menu-bar">
            <RightNav />
         </div>
         <Hamburger />
      </div>
  );
};

export default Nav;

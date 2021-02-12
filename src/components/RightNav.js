import React from 'react'
import './rightNav.css'
import { Link } from "react-router-dom"


const RightNav = (props) => {
  
        return (     
        <div className="links-container">
            <Link to="/">
              <li className="links" onClick={props.handleClick}>
                Home
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/builds">
              <li className="links" onClick={props.handleClick}>
                Builds
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/create">
              <li className="links" onClick={props.handleClick}>
                Create
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/team">
              <li className="links" onClick={props.handleClick}>
                About the team
                <div className="underline"></div>
              </li>
            </Link>
        </div>
        )
}


export default RightNav
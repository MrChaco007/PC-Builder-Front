import React from 'react'
import './rightNav.css'
import { Link } from "react-router-dom"


const RightNav = (props) => {
  
        return (     
        <div>
            <Link to="/">
              <li className="links" onClick={props.handleClick}>Home</li>
            </Link>
            <Link to="/builds">
              <li className="links" onClick={props.handleClick}>Builds</li>
            </Link>
            <Link to="/create">
              <li className="links" onClick={props.handleClick}>Create</li>
            </Link>
            <Link to="/team">
              <li className="links" onClick={props.handleClick}>About the team</li>
            </Link>
        </div>
        )
}


export default RightNav
import React from 'react'
import './rightNav.css'
import { Link } from "react-router-dom"


const RightNav = ({ open }) => {
        return (     
        <div className="links-container">
            <Link to="/">
              <li className="links">
                Home
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/builds">
              <li className="links">
                Builds
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/create">
              <li className="links">
                Create
                <div className="underline"></div>
              </li>
            </Link>
            <Link to="/team">
              <li className="links">
                About the team
                <div className="underline"></div>
              </li>
            </Link>
        </div>
        )
}


export default RightNav
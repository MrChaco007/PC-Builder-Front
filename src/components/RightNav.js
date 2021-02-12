import React from 'react'
import './rightNav.css'
import { Link } from "react-router-dom"


const RightNav = ({ open }) => {
        return (     
        <>
            <Link to="/">
              <li className="links">Home</li>
            </Link>
            <Link to="/builds">
              <li className="links">Builds</li>
            </Link>
            <Link to="/create">
              <li className="links">Create</li>
            </Link>
            <Link to="/team">
              <li className="links">About the team</li>
            </Link>
        </>
        )
}


export default RightNav
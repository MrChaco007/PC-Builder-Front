import React from "react"
import { Link } from 'react-router-dom'

const Button = ({ button, handleDelete }) => {
    // HOW IT WORKS
    // Button will receive a prop "button" which will either be "create", "edit" or "delete"
    // the switch statement determines its type and returns either a link to the correct page
    // or trigger a delete callback
    
    switch(button) {
        case "edit":
            return <Link className="button" to="/edit">Edit</Link>
        case "delete":
            return <button className="button" onClick={handleDelete}>Delete</button>
        default:
            return <Link className="button" to="/create">Customize</Link>
    }
}

export default Button
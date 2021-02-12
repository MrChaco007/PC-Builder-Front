import React from "react"
import { Link } from 'react-router-dom'

const Button = ({ button, build, handleDelete, selectBuild }) => {
    // HOW IT WORKS
    // Button will receive a prop "button" which will either be "create", "edit" or "delete"
    // the switch statement determines its type and returns either a link to the correct page
    // or trigger a delete callback

    const buttonStyle = { width: "80px" }
    
    switch(button) {
        case "edit":
            return (
              <button style={buttonStyle}>
                <Link
                  className="button"
                  to="/edit"
                  onClick={() => selectBuild(build)}
                >
                  Edit
                </Link>
              </button>
            );
        case "delete":
            return <button style={buttonStyle} className="button" onClick={()=>handleDelete(build)}>Delete</button>
        default:
            return (
              <button>
                <Link className="button" to="/create">
                  Customize
                </Link>
              </button>
            );
    }
}

export default Button
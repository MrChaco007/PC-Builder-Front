import React from 'react'

import Button from './Button'
import './style.css'

const BuildConfigCard = ({ build, buttons, handleDelete, selectBuild }) => {

    // makes an array of the object properties
    // i.e ["name", "processor", "motherboard", ...]
    let specs = Object.keys(build)
    // gets rid of "name", "_v", and "_id" from "specs" array 
    specs = specs.slice(2, specs.length - 2)

    // function to render specs
    const renderSpecs = () => {
        // maps over the properties and returns a li with the hardware name
        return specs.map((spec, index) => {
            const specObj = build[spec]
            if (spec === "powerSupply") {
                return (
                    <li className="spec" key={index}>
                        <div className="header">Power Supply</div>
                        <div className="name">{specObj.name}</div>
                    </li>
                )
            }
            return (
                <li className="spec" key={index}>
                    <div className="header">{spec}</div>
                    <div className="name">{specObj.name}</div>
                </li>
            )
        })
    }

    // function to create buttons
    const renderButtons = () => {
        // props.buttons = ["create", "edit", "delete"]
        // maps over props.buttons and returns a component with the corresponding functionality 
        return buttons.map((button, index) => {
            switch(button) {
                case "delete":
                    return <Button button={button} key={index} build={build} handleDelete={handleDelete}/>
                case "edit":
                    return <Button button={button} key={index} build={build} selectBuild={selectBuild}/>
                default:
                    return <Button button={button} key={index} />
            }
        })
    }

    const loading = () => <h2>Loading...</h2>
    const loaded = () => {
        return (
            <div className="build-container">
                <div className="name">{build.name}</div>
                <div className="specs">{renderSpecs()}</div>
                <div className="price">${build.price}</div>
                <div className="buttons-container">{renderButtons()}</div>
            </div>
        )
    }

    return build ? loaded() : loading()
};

export default BuildConfigCard;

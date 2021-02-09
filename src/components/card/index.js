import React from 'react'

import Button from './Button'
import './style.css'

const BuildConfigCard = ({ build, buttons, handleDelete }) => {

    const [total, setTotal] = React.useState(0)

    // makes an array of the object properties
    // i.e ["name", "processor", "motherboard", ...]
    let specs = Object.keys(build)
    // gets rid of "name" from "specs" array 
    specs.splice(0, 1)

    React.useEffect(() => {
        const tabulateTotal = () => {
            let totalPrice = 0
            specs.forEach(spec => {
                totalPrice = totalPrice + build[spec].price
            })
            setTotal(totalPrice)
        }
        tabulateTotal()
    }, [total])

    // function to render specs
    const renderSpecs = () => {
        // maps over the properties and returns a li with the hardware name
        return specs.map((spec, index) => {
            const specObj = build[spec]
            return <li className="spec" key={index}>{specObj.name}</li>
        })
    }

    // function to create buttons
    const renderButtons = () => {
        // props.buttons = ["create", "edit", "delete"]
        // maps over props.buttons and returns a component with the corresponding functionality 
        return buttons.map((button, index) => {
            switch(button) {
                case "delete":
                    return <Button button={button} key={index} handleDelete={handleDelete}/>
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
                <div className="price">{`$${total}`}</div>
                <div className="buttons-container">{renderButtons()}</div>
            </div>
        )
    }

    return build ? loaded() : loading()
};

export default BuildConfigCard;

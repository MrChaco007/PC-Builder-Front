import React from "react";

import './buildForm.css'
import Card from '../components/card/index'
import Gpus from "../data/gpus"
import Processors from "../data/processors"
import PowerSupplys from "../data/powerSupplys"
import Memorys from "../data/memorys"
import Motherboards from "../data/motherboards"
import Storages from "../data/storages"

const BuildForm = (props) => {

  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.build);
  
  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/builds");
  };

  const createPrice = (oldPrice, newPrice) => {
    console.log('old price', oldPrice)
    let total = formData.price
    total = total - oldPrice
    total = total + newPrice
    return total;
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    switch(name) {
      case "gpu":
        let val = createPrice(formData[name].price, Gpus[value].price)
        setFormData({...formData, [name]: Gpus[value], "price": val });
        break;
      case "memory":
        let val2 = createPrice(formData[name].price, Memorys[value].price)
        setFormData({...formData, [name]: Memorys[value], "price": val2 });
        break;
      case "motherboard":
        let val3 = createPrice(formData[name].price, Motherboards[value].price)
        setFormData({...formData, [name]: Motherboards[value], "price": val3 });
        break;
      case "powerSupply":
        let val4 = createPrice(formData[name].price, PowerSupplys[value].price)
        setFormData({...formData, [name]: PowerSupplys[value], "price": val4 });
        break;
      case "processor":
        let val5 = createPrice(formData[name].price, Processors[value].price)
        setFormData({...formData, [name]: Processors[value], "price": val5 });
        break;
      case "storage":
        let val6 = createPrice(formData[name].price, Storages[value].price)
        setFormData({...formData, [name]: Storages[value], "price": val6 });
        break;
      default:
        setFormData({...formData, [name]: value})
        break;
    }}

  const renderOptions = (arr) => {
    return arr.map((item, index) => {
      return (
        <option key={index} value={index}>{`${item.name} / ${item.spec} - $${item.price}`}</option>
      )
    })
  }

  const renderForm = () => {
    return (
      <form className="form"onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <label htmlFor="gpu">GPU:</label>
          <select value={formData.gpu.value} onChange={handleChange} name="gpu" price="price" spec="spec">
            {renderOptions(Gpus)}
          </select> 
          <div className="underline"></div> 
        </div>
        <div className="input-container"> 
          <label htmlFor="memory">Memory:</label>             
          <select value={formData.memory.value} onChange={handleChange} name="memory" price="price" spec="spec">
            {renderOptions(Memorys)}
          </select> 
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <label htmlFor="motherboard">Motherboard:</label>    
          <select value={formData.motherboard.value} onChange={handleChange} name="motherboard" price="price" spec="spec">
            {renderOptions(Motherboards)}
          </select>
          <div className="underline"></div> 
        </div>
        <div className="input-container">
          <label>Power Supply:</label>            
          <select value={formData.powerSupply.value} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            {renderOptions(PowerSupplys)}
          </select>
          <div className="underline"></div>   
        </div>
        <div className="input-container">
          <label>Processor:</label>      
          <select value={formData.processor.value} onChange={handleChange} name="processor" price="price" spec="spec">
            {renderOptions(Processors)}
          </select>
          <div className="underline"></div>   
        </div>
        <div className="input-container">
          <label>Storage:</label>     
          <select value={formData.storage.value} onChange={handleChange} name="storage" price="price" spec="spec">
            {renderOptions(Storages)}
          </select>
          <div className="underline"></div> 
        </div>
        <input id="submit" type="submit" value="Submit" />
      </form>
    )
  }

  const renderCompare = () => {
    return props.location.pathname === "/create" ? (
      <Card build={formData}/>
    ) : (
      <>
        <Card build={props.build} />
        <Card build={formData} />
      </>
    )
  }

  const loading = () => {
    console.log('loading')
    return <h2>loading</h2>
  }
  const loaded = () => {
    return (
      <div id="form-page">
        <div className="compare-container">
          {renderCompare()}
        </div>
        {renderForm()}
      </div>
    )
  }

  return formData.gpu ? loaded() : loading();
};


export default BuildForm;

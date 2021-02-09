import React from "react";
import Gpus from "../data/gpus"
import Processors from "../data/processors"
import PowerSupplys from "../data/powerSupplys"
import Memorys from "../data/memorys"
import Motherboards from "../data/motherboards"
import Storages from "../data/storages"

const BuildForm = (props) => {
  const Build = {
    name: "Awesome Build",
    processor: { name: "AMD Ryzen 7 3700", price: 299, spec: "8 core" },
    motherboard: { name: "ASRock x570m pro 4", price: 200, spec: "128GB Max RAM" },
    storage: { name: "WD 1TB SSD", price: 100, spec: "1TB"},
    powerSupply: { name: "EVGA 600", price: 60, spec: "600w"},
    gpu: { name: "ASUS GeForce GTX1070ti", price: 450, spec: "8GB"},
    memory: { name: "Crucial Ballistix 8GB x 2 RGB", price: 100, spec: "16GB"}
  }
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(Build);
  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/create");
  };

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    switch(name) {
      case "gpu":
        setFormData({...formData, [name]: Gpus[value]})
        break
      case "memory":
        setFormData({...formData, [name]: Memorys[value]})
        break
      case "motherboard":
        setFormData({...formData, [name]: Motherboards[value]})
        break
      case "powerSupply":
        setFormData({...formData, [name]: PowerSupplys[value]})
        break
      case "processor":
        setFormData({...formData, [name]: Processors[value]})
        break
      case "storage":
        setFormData({...formData, [name]: Storages[value]})
        break
      default:
        break
    }}

  const renderOptions = (arr) => {
    return arr.map((item, index) => {
      console.log(item)
      return (
        <option key={index} value={index}>{item.name}</option>
      )
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          GPU:
          <select value={formData.gpu.name} onChange={handleChange} name="gpu" price="price" spec="spec">
            {renderOptions(Gpus)}
          </select>  
        </label>
        <br />
        <label>
          Memory:
          <select value={formData.memory.name} onChange={handleChange} name="memory" price="price" spec="spec">
            {renderOptions(Memorys)}
          </select>
        </label>
        <br />
        <label>
          Motherboard:
          <select value={formData.motherboard.name} onChange={handleChange} name="motherboard" price="price" spec="spec">
            {renderOptions(Motherboards)}
          </select>
        </label>
        <br />
        <label>
          Power Supply:
          <select value={formData.powerSupply.name} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            {renderOptions(PowerSupplys)}
          </select>
        </label>
        <br />
        <label>
          Processor:
          <select value={formData.processor.name} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            {renderOptions(Processors)}
          </select>
        </label>
        <br />
        <label>
          Storage:
          <select value={formData.storage.name} onChange={handleChange} name="storage" price="price" spec="spec">
            {renderOptions(Storages)}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default BuildForm;

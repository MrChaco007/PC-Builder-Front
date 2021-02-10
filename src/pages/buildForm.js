import React from "react";
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

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    switch(name) {
      case "gpu":
        setFormData({...formData, [name]: Gpus[value]});
        break;
      case "memory":
        setFormData({...formData, [name]: Memorys[value]});
        break;
      case "motherboard":
        setFormData({...formData, [name]: Motherboards[value]});
        break;
      case "powerSupply":
        setFormData({...formData, [name]: PowerSupplys[value]});
        break;
      case "processor":
        setFormData({...formData, [name]: Processors[value]});
        break;
      case "storage":
        setFormData({...formData, [name]: Storages[value]});
        break;
      default:
        setFormData({...formData, [name]: value})
        break;
    }}

  const renderOptions = (arr) => {
    return arr.map((item, index) => {
      return (
        <option key={index} value={index}>{item.name}</option>
      )
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        type="text"
        className="form-control"
        name="name"
      />
        <br />
        <label>
          GPU:
          <select value={formData.gpu.value} onChange={handleChange} name="gpu" price="price" spec="spec">
            {renderOptions(Gpus)}
          </select>  
        </label>
        <br />
        <label>
          Memory:
          <select value={formData.memory.value} onChange={handleChange} name="memory" price="price" spec="spec">
            {renderOptions(Memorys)}
          </select>
        </label>
        <br />
        <label>
          Motherboard:
          <select value={formData.motherboard.value} onChange={handleChange} name="motherboard" price="price" spec="spec">
            {renderOptions(Motherboards)}
          </select>
        </label>
        <br />
        <label>
          Power Supply:
          <select value={formData.powerSupply.value} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            {renderOptions(PowerSupplys)}
          </select>
        </label>
        <br />
        <label>
          Processor:
          <select value={formData.processor.value} onChange={handleChange} name="processor" price="price" spec="spec">
            {renderOptions(Processors)}
          </select>
        </label>
        <br />
        <label>
          Storage:
          <select value={formData.storage.value} onChange={handleChange} name="storage" price="price" spec="spec">
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

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
        <option key={index} value={index}>{`${item.name} - $${item.price}`}</option>
      )
    })
  }

  const loading = () => {
    console.log('loading')
    return <h2>loading</h2>
  }
  const loaded = () => {
    console.log(formData.gpu.value)
    return (
      <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        type="text"
        className="form-control"
        name="name"
      />
      <div>${formData.price}</div>
        <br />
        <label>
          GPU: {props.build["gpu"].name} ${props.build["gpu"].price}
          <br />
          <select value={formData.gpu.value} onChange={handleChange} name="gpu" price="price" spec="spec">
            {renderOptions(Gpus)}
          </select>  
        </label>
        <br />
        <label>
          Memory: {props.build["memory"].name} ${props.build["memory"].price}
          <br />
          <select value={formData.memory.value} onChange={handleChange} name="memory" price="price" spec="spec">
            {renderOptions(Memorys)}
          </select>
        </label>
        <br />
        <label>
          Motherboard: {props.build["motherboard"].name} ${props.build["motherboard"].price}
          <br />
          <select value={formData.motherboard.value} onChange={handleChange} name="motherboard" price="price" spec="spec">
            {renderOptions(Motherboards)}
          </select>
        </label>
        <br />
        <label>
          Power Supply: {props.build["powerSupply"].name} ${props.build["powerSupply"].price}
          <br />
          <select value={formData.powerSupply.value} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            {renderOptions(PowerSupplys)}
          </select>
        </label>
        <br />
        <label>
          Processor: {props.build["processor"].name} ${props.build["processor"].price}
          <br />
          <select value={formData.processor.value} onChange={handleChange} name="processor" price="price" spec="spec">
            {renderOptions(Processors)}
          </select>
        </label>
        <br />
        <label>
          Storage: {props.build["storage"].name} ${props.build["storage"].price}
          <br />
          <select value={formData.storage.value} onChange={handleChange} name="storage" price="price" spec="spec">
            {renderOptions(Storages)}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }

  return formData.gpu ? loaded() : loading();
};


export default BuildForm;

import React from "react";

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
  
  const gpus = [{}, { name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]  
  setFormData({ ...formData, [name]: gpus[parseInt(value)] });
  
  const memorys = [{}, { name: "Crucial Ballistix 8GB x 2 RGB", price: 100, spec: "16GB" }]
  setFormData({ ...formData, [name]: memorys[parseInt(value)] });
 
  const motherboards = [{}, { name: "ASRock x570m pro 4", price: 200, spec: "128GB Max RAM" }]
  setFormData({ ...formData, [name]: motherboards[parseInt(value)] });
  
  const powerSupplys = [{}, { name: "EVGA 600", price: 60, spec: "600w" }]
  setFormData({ ...formData, [name]: powerSupplys[parseInt(value)] });

  const processors = [{}, { name: "AMD Ryzen 7 3700", price: 299, spec: "8 core" }]
  setFormData({ ...formData, [name]: processors[parseInt(value)] });
  
  const storages = [{}, { name: "WD 1TB SSD", price: 100, spec: "1TB" }]
  setFormData({ ...formData, [name]: storages[parseInt(value)] });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          GPU:
          <select value={formData.gpu.name} onChange={handleChange} name="gpu" price="price" spec="spec">
            <option value="gpu">GPU</option>
            <option value="1">GPU1</option>
            <option value="2">GPU2</option>
            <option value="3">GPU3</option>
            <option value="4">GPU4</option>
            <option value="5">GPU5</option>
          </select>  
        </label>
        <br />
        <label>
          Memory:
          <select value={formData.memory.name} onChange={handleChange} name="memory" price="price" spec="spec">
            <option value="memory">Memory</option>
            <option value="1">Memory1</option>
            <option value="2">Memory2</option>
            <option value="3">Memory3</option>
            <option value="4">Memory4</option>
            <option value="5">Memory5</option>
          </select>
        </label>
        <br />
        <label>
          Motherboard:
          <select value={formData.motherboard.name} onChange={handleChange} name="motherboard" price="price" spec="spec">
            <option value="motherboard">Motherboard</option>
            <option value="1">motherboard1</option>
            <option value="2">Motherboard2</option>
            <option value="3">Motherboard3</option>
            <option value="4">Motherboard4</option>
            <option value="5">Motherboard5</option>
          </select>
        </label>
        <br />
        <label>
          Power Supply:
          <select value={formData.powerSupply.name} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            <option value="powerSupply">Power Supply</option>
            <option value="1">Power Supply1</option>
            <option value="2">Power Supply2</option>
            <option value="3">Power Supply3</option>
            <option value="4">Power Supply4</option>
            <option value="5">Power Supply5</option>
          </select>
        </label>
        <br />
        <label>
          Processor:
          <select value={formData.processor.name} onChange={handleChange} name="powerSupply" price="price" spec="spec">
            <option value="processor">Processor</option>
            <option value="1">Processor1</option>
            <option value="2">Processor2</option>
            <option value="3">Processor3</option>
            <option value="4">Processor4</option>
            <option value="5">Processor5</option>
          </select>
        </label>
        <br />
        <label>
          Storage:
          <select value={formData.storage.name} onChange={handleChange} name="storage" price="price" spec="spec">
            <option value="storage">Storage</option>
            <option value="1">Storage1</option>
            <option value="2">Storage2</option>
            <option value="3">Storage3</option>
            <option value="4">Storage4</option>
            <option value="5">Storage5</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default BuildForm;

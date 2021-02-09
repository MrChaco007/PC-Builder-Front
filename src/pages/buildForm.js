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
    const newGPb = event.target.gpu
    setFormData({ ...formData, [name]: gpus[parseInt(value)] });
    console.log(newGPb)
  }

//   setExampleState({...exampleState,  masterField2: {
//     fieldOne: "c",
//     fieldTwo: {
//        fieldTwoOne: "d",
//        fieldTwoTwo: "e"
//        }
//     },
// }})  
  const gpus = [{}, { name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  const memorys = [{}, { name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  const motherboards = [{ name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  const powerSupplys = [{ name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  const processors = [{ name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  const storages = [{ name: "NEW ASUS GeForce GTX1070ti", price: 100, spec: "NEW 8GB"}]

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          GPU:
          <select value={formData.gpu.name} onChange={handleChange} name="gpu" price="price" spec="spec">
            <option value="gpu">GPU</option>
            <option value="1">GPU1</option>
            <option value="gpu2">GPU2</option>
            <option value="gpu3">GPU3</option>
            <option value="gpu4">GPU4</option>
            <option value="gpu5">GPU5</option>
          </select>  
        </label>
        <br />
        <label>
          Memory:
          <select value={formData} onChange={handleChange}>
            <option value="memory">Memory</option>
            <option value="memory1">Memory1</option>
            <option value="memory2">Memory2</option>
            <option value="memory3">Memory3</option>
            <option value="memory4">Memory4</option>
            <option value="memory5">Memory5</option>
            onChange={handleChange}
          </select>
        </label>
        <br />
        <label>
          Motherboard:
          <select value={formData} onChange={handleChange}>
            <option value="motherboard">Motherboard</option>
            <option value="motherboard1">motherboard1</option>
            <option value="motherboard2">Motherboard2</option>
            <option value="motherboard3">Motherboard3</option>
            <option value="motherboard4">Motherboard4</option>
            <option value="motherboard5">Motherboard5</option>
            onChange={handleChange}
          </select>
        </label>
        <br />
        <label>
          Power Supply:
          <select value={formData} onChange={handleChange}>
            <option value="powerSupply">Power Supply</option>
            <option value="powerSupply1">Power Supply1</option>
            <option value="powerSupply2">Power Supply2</option>
            <option value="powerSupply3">Power Supply3</option>
            <option value="powerSupply4">Power Supply4</option>
            <option value="powerSupply5">Power Supply5</option>
            onChange={handleChange}
          </select>
        </label>
        <br />
        <label>
          Processor:
          <select value={formData} onChange={handleChange}>
            <option value="processor">Processor</option>
            <option value="processor1">Processor1</option>
            <option value="processor2">Processor2</option>
            <option value="processor3">Processor3</option>
            <option value="processor4">Processor4</option>
            <option value="processor5">Processor5</option>
            onChange={handleChange}
          </select>
        </label>
        <br />
        <label>
          Storage:
          <select value={formData} onChange={handleChange}>
            <option value="storage">Storage</option>
            <option value="storage1">Storage1</option>
            <option value="storage2">Storage2</option>
            <option value="storage3">Storage3</option>
            <option value="storage4">Storage4</option>
            <option value="storage5">Storage5</option>
            onChange={handleChange}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default BuildForm;

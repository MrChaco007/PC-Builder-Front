import React from "react";

<<<<<<< HEAD
const ComputerBuilder = () => {
  return <></>;
=======
import Card from '../components/card'

const ComputerBuilder = () => {

  // default build 
  const build = {
    name: "Awesome Build",
    processor: { name: "AMD Ryzen 7 3700", price: 299, spec: "8 core" },
    motherboard: { name: "ASRock x570m pro 4", price: 200, spec: "128GB Max RAM" },
    storage: { name: "WD 1TB SSD", price: 100, spec: "1TB"},
    powerSupply: { name: "EVGA 600", price: 60, spec: "600w"},
    gpu: { name: "ASUS GeForce GTX1070ti", price: 450, spec: "8GB"},
    memory: { name: "Crucial Ballistix 8GB x 2 RGB", price: 100, spec: "16GB"}
  }

  return (
    <div>
      <Card build={build} buttons={["create"]}/>
    </div>
  );
>>>>>>> dev
};

export default ComputerBuilder;

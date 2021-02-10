import React from "react"
import BuildConfigCard from "./card/index"
import gpus from "../data/gpus"
import memorys from "../data/memorys"
import motherboards from "../data/motherboards"
import powerSupplys from "../data/powerSupplys"
import processors from "../data/processors"
import storages from "../data/storages"

const SortFilter = (props) => {
const [showStatus, setShowStatus] = React.useState(false)
const [checkStatus, setCheckStatus] = React.useState(false)
const [checkValue, setCheckValue] = React.useState("")
const [gpuArrowStatus, setGpuArrowStatus] = React.useState(true)
const [gpuStatus, setGpuStatus] = React.useState(false)
const [memoryStatus, setMemoryStatus] = React.useState(false)
const [memoryArrowStatus, setMemoryArrowStatus] = React.useState(true)
const [motherboardStatus, setMotherboardStatus] = React.useState(false);
const [motherboardArrowStatus, setMotherboardArrowStatus] = React.useState(true);
const [powerSupplyStatus, setPowerSupplyStatus] = React.useState(false);
const [powerSupplyArrowStatus, setPowerSupplyArrowStatus] = React.useState(
  true
);
const [processorStatus, setProcessorStatus] = React.useState(false);
const [processorArrowStatus, setProcessorArrowStatus] = React.useState(
  true
);
const [storageStatus, setStorageStatus] = React.useState(false);
const [storageArrowStatus, setStorageArrowStatus] = React.useState(true);
const handleFilter = (event) => { 
if (checkStatus === false) {
  setCheckStatus(true);
  setCheckValue(event.target.value);
} else {
  setCheckStatus(false);
}
}

const sortHigh = (event) => {
  let newArr = [...props.filteredArr];
    newArr.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    props.setFilteredArr(newArr);
  };

const sortLow = (event) => {
  let newArr = [...props.filteredArr];
    newArr.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    props.setFilteredArr(newArr);
  };

const handleGpuArrow = (event) => {
gpuArrowStatus? setGpuArrowStatus(false) : setGpuArrowStatus(true)
}

const handleGpuShow = (event) => {
  gpuStatus? setGpuStatus(false): setGpuStatus(true)
}

const handleMemoryArrow = (event) => {
  memoryArrowStatus ? setMemoryArrowStatus(false) : setMemoryArrowStatus(true);
};

const handleMemoryShow = (event) => {
  memoryStatus ? setMemoryStatus(false) : setMemoryStatus(true);
};

const handleMotherboardArrow = (event) => {
  motherboardArrowStatus ? setMotherboardArrowStatus(false) : setMotherboardArrowStatus(true);
};

const handleMotherboardShow = (event) => {
  motherboardStatus ? setMotherboardStatus(false) : setMotherboardStatus(true);
};

const handlePowerSupplyArrow = (event) => {
  powerSupplyArrowStatus? setPowerSupplyArrowStatus(false)
    : setPowerSupplyArrowStatus(true);
};

const handlePowerSupplyShow = (event) => {
  
  powerSupplyStatus ? setPowerSupplyStatus(false) : setPowerSupplyStatus(true);
};

const handleProcessorArrow = (event) => {
  processorArrowStatus? setProcessorArrowStatus(false)
    : setProcessorArrowStatus(true);
};

const handleProcessorShow = (event) => {
  processorStatus ? setProcessorStatus(false) : setProcessorStatus(true);
};

const handleStorageArrow = (event) => {
  storageArrowStatus
    ? setStorageArrowStatus(false)
    : setStorageArrowStatus(true);
};

const handleStorageShow = (event) => {
  storageStatus ? setStorageStatus(false) : setStorageStatus(true);
};

const gpuContent = () => {
  return(
gpus.map((gpu, index) => {
  return (
    <article key={index}>
      <input onChange={handleFilter} type="checkbox" value={gpu.name} />
      &nbsp;
      <span>{gpu.name}</span>
    </article>
  );
}))
}

const memoryContent = () => {
return (memorys.map((memory, index) => {
  return (
    <article key={index}>
      <input onChange={handleFilter} type="checkbox" value={memory.name} />
      &nbsp;
      <span>{memory.name}</span>
    </article>
  );
}))
}

const motherboardContent = () => {
  return motherboards.map((motherboard, index) => {
    return (
      <article key={index}>
        <input
          onChange={handleFilter}
          type="checkbox"
          value={motherboard.name}
        />
        &nbsp;
        <span>{motherboard.name}</span>
      </article>
    );
  });
}

const powerSupplyContent = () => {
  return powerSupplys.map((powerSupply, index) => {
    return (
      <article key={index}>
        <input
          onChange={handleFilter}
          type="checkbox"
          value={powerSupply.name}
        />
        &nbsp;
        <span>{powerSupply.name}</span>
      </article>
    );
  });
}

const processorContent = () => {
  return processors.map((processor, index) => {
    return (
      <article key={index}>
        <input onChange={handleFilter} type="checkbox" value={processor.name} />
        &nbsp;
        <span>{processor.name}</span>
      </article>
    );
  });
}

const storageContent = () => {
  return storages.map((storage, index) => {
    return (
      <article key={index}>
        <input onChange={handleFilter} type="checkbox" value={storage.name} />
        &nbsp;
        <span>{storage.name}</span>
      </article>
    );
  });
}

const dropdown = () => {
    return (
      <div className="sort-filter-box">
        <div className="sort-filter">
          <div className="filter-box">
            <h3 className="filter-header">
              GPU
              <div className="wrap">
                <span
                  onClick={function () {
                    handleGpuShow();
                    handleGpuArrow();
                  }}
                  className={gpuArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {gpuStatus ? gpuContent() : null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">
              Memory
              <div className="wrap">
                <span
                  onClick={function () {
                    handleMemoryShow();
                    handleMemoryArrow();
                  }}
                  className={memoryArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {memoryStatus ? memoryContent() : null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">
              Motherboard
              <div className="wrap">
                <span
                  onClick={function () {
                    handleMotherboardShow();
                    handleMotherboardArrow();
                  }}
                  className={motherboardArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {motherboardStatus ? motherboardContent() : null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">
              Power Supply
              <div className="wrap">
                <span
                  onClick={function () {
                    handlePowerSupplyShow();
                    handlePowerSupplyArrow();
                  }}
                  className={powerSupplyArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {powerSupplyStatus ? powerSupplyContent() : null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">
              Processor{" "}
              <div className="wrap">
                <span
                  onClick={function () {
                    handleProcessorShow();
                    handleProcessorArrow();
                  }}
                  className={processorArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {processorStatus ? processorContent() : null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">
              Storage
              <div className="wrap">
                <span
                  onClick={function () {
                    handleStorageShow();
                    handleStorageArrow();
                  }}
                  className={storageArrowStatus ? "arrow active" : "arrow"}
                >
                  <span></span>
                  <span></span>
                </span>
              </div>
            </h3>
            {storageStatus? storageContent(): null}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">Price</h3>
            <input onChange={sortLow} type="checkbox" />
            &nbsp;Low to High
            <br />
            <input onChange={sortHigh} type="checkbox" />
            &nbsp;High to Low
          </div>
        </div>
        <div id="go-button-container">
          <button id="go-button" onClick={handleGo} type="submit">
            GO
          </button>
        </div>
      </div>
    );
}


const handleClick = () => {
    showStatus? setShowStatus(false):setShowStatus(true)
    setCheckStatus(false)
    props.setFilteredArr(props.builds);
}

const handleGo = (event) => {
event.preventDefault()
const newArr = props.filteredArr.filter((build) =>  build.gpu.name === checkValue)
 if (checkStatus) {props.setFilteredArr(newArr)} 
 setShowStatus(false)
}


return (
  <div id="sort-filter-component">
    <div id="filter-button-container">
      <button id="filter-button" onClick={handleClick}>
        Filter and Sort Custom Builds
      </button>
    </div>
    {showStatus ? dropdown() : null}
  </div>
);
}

export default SortFilter
import React from "react"
import BuildConfigCard from "./card/index"
import gpus from "../data/gpus"
import memorys from "../data/memorys"
import motherboards from "../data/motherboards"
import powerSupplys from "../data/powerSupplys"
import processors from "../data/processors"
import storages from "../data/storages"
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons"

const SortFilter = (props) => {
const [showStatus, setShowStatus] = React.useState(false)
const [checkStatus, setCheckStatus] = React.useState(false)
const [checkValue, setCheckValue] = React.useState([])
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

//Filter/Sort Checboxes
const [highCheckStatus, setHighCheckStatus] = React.useState(false)
const [lowCheckStatus, setLowCheckStatus] = React.useState(false)
const [oneCheckStatus, setOneCheckStatus] = React.useState(false)
const [twoCheckStatus, setTwoCheckStatus] = React.useState(false);
const [fourCheckStatus, setFourCheckStatus] = React.useState(false);
const [eightCheckStatus, setEightCheckStatus] = React.useState(false);
const [sixteenCheckStatus, setSixteenCheckStatus] = React.useState(false);
const [twentyFourCheckStatus, setTwentyFourCheckStatus] = React.useState(false);
const [me16CheckStatus, setMe16CheckStatus] = React.useState(false)
const [me32CheckStatus, setMe32CheckStatus] = React.useState(false);
const [me64CheckStatus, setMe64CheckStatus] = React.useState(false);
// const [me16CheckStatus, setMe16CheckStatus] = React.useState(false);
// const [me32CheckStatus, setMe32CheckStatus] = React.useState(false);
// const [me64CheckStatus, setMe64CheckStatus] = React.useState(false);
const [gpuArray, setGpuArray] = React.useState([])
const [meArray, setMeArray] = React.useState([]);
const handleFilter = (event) => { 
if (checkStatus === false) {
  setCheckStatus(true);
  setCheckValue(event.target.value);
  console.log(checkValue)
} else {
  setCheckStatus(false);
}
}

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

const handleHigh = () => {
  if (highCheckStatus === false){
    setHighCheckStatus(true)
    console.log("highCheckStatus".highCheckStatus);
} else {
  setHighCheckStatus(false)
  console.log("highCheckStatus".highCheckStatus);
}

} 

const handleLow = () => {
  if (lowCheckStatus === false) {
    setLowCheckStatus(true);
      console.log("lowCheckStatus".lowCheckStatus);
  } else {
    setLowCheckStatus(false);
      console.log("lowCheckStatus".lowCheckStatus);
  }

}; 


const handleOne = (event) => {
 if (oneCheckStatus === false){
  gpuArray.push(event.target.value);
   setGpuArray(gpuArray);
   console.log(gpuArray)
   setOneCheckStatus(true)
 } else {
  let index = gpuArray.indexOf(event.target.value)
  gpuArray.splice(index, 1);
 setGpuArray(gpuArray)
 console.log(gpuArray);
 setOneCheckStatus(false)
 }
}

const handleTwo = (event) => {
  if (twoCheckStatus === false) {
    gpuArray.push(event.target.value);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setTwoCheckStatus(true);
  } else {
    let index = gpuArray.indexOf(event.target.value);
    gpuArray.splice(index, 1);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setTwoCheckStatus(false);
  }
};

const handleFour = (event) => {
  if (fourCheckStatus === false) {
    gpuArray.push(event.target.value);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setFourCheckStatus(true);
  } else {
    let index = gpuArray.indexOf(event.target.value);
    gpuArray.splice(index, 1);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setFourCheckStatus(false);
  }
};

const handleEight = (event) => {
  if (eightCheckStatus === false) {
    gpuArray.push(event.target.value);
    setGpuArray(gpuArray);
    console.log("gpuArray", gpuArray);
    setEightCheckStatus(true);
  } else {
    let index = gpuArray.indexOf(event.target.value);
    gpuArray.splice(index, 1);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setEightCheckStatus(false);
  }
};

const handleSixteen = (event) => {
  if (sixteenCheckStatus === false) {
    gpuArray.push(event.target.value);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setSixteenCheckStatus(true);
  } else {
    let index = gpuArray.indexOf(event.target.value);
    gpuArray.splice(index, 1);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setSixteenCheckStatus(false);
  }
};

const handleTwentyFour = (event) => {
  if (twentyFourCheckStatus === false) {
    gpuArray.push(event.target.value);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setTwentyFourCheckStatus(true);
  } else {
    let index = gpuArray.indexOf(event.target.value);
    gpuArray.splice(index, 1);
    setGpuArray(gpuArray);
    console.log(gpuArray);
    setTwentyFourCheckStatus(false);
  }
};

const handleMe16 = (event) => {
  if (me16CheckStatus === false) {
    meArray.push(event.target.value);
    setMeArray(meArray);
    console.log(meArray);
    setMe16CheckStatus(true);
  } else {
    let index = meArray.indexOf(event.target.value);
    meArray.splice(index, 1);
    setMeArray(meArray);
    setMe16CheckStatus(false);
  }
};

const handleMe32 = (event) => {
  if (me32CheckStatus === false) {
    meArray.push(event.target.value);
    setMeArray(meArray);
     console.log(meArray);
    setMe32CheckStatus(true);
  } else {
    let index = meArray.indexOf(event.target.value);
    meArray.splice(index, 1);
    setMeArray(meArray);
     console.log(meArray);
    setMe32CheckStatus(false);
  }
};

const handleMe64 = (event) => {
  if (me64CheckStatus === false) {
    meArray.push(event.target.value);
    setMeArray(meArray);
     console.log(meArray);
    setMe64CheckStatus(true);
  } else {
    let index = meArray.indexOf(event.target.value);
    meArray.splice(index, 1);
    setMeArray(meArray);
     console.log(meArray);
    setMe64CheckStatus(false);
  }
};
const gpuContent = () => {
  return (
    <>
      <article>
        <input onChange={handleOne} type="checkbox" value="1GB" />
        &nbsp;
        <span>1GB</span>
      </article>
      <article>
        <input onChange={handleTwo} type="checkbox" value="2GB" />
        &nbsp;
        <span>2GB</span>
      </article>
      <article>
        <input onChange={handleFour} type="checkbox" value="4GB" />
        &nbsp;
        <span>4GB</span>
      </article>
      <article>
        <input onChange={handleEight} type="checkbox" value="8GB" />
        &nbsp;
        <span>8GB</span>
      </article>
      <article>
        <input onChange={handleSixteen} type="checkbox" value="16GB" />
        &nbsp;
        <span>16GB</span>
        </article>
        <article>
          <input onChange={handleTwentyFour} type="checkbox" value="24GB" />
          &nbsp;
          <span>24GB</span>
      </article>
    </>
  );
}

const memoryContent = () => {
  return (
    <>
      <article>
        <input onChange={handleMe16} type="checkbox" value="16GB" />
        &nbsp;
        <span>16GB</span>
      </article>
      <article>
        <input onChange={handleMe32} type="checkbox" value="32GB" />
        &nbsp;
        <span>32GB</span>
      </article>
      <article>
        <input onChange={handleMe64} type="checkbox" value="64GB" />
        &nbsp;
        <span>64GB</span>
        </article>
    </>
  );
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
            <input onChange={handleLow} type="checkbox" />
            &nbsp;Low to High
            <br />
            <input onChange={handleHigh} type="checkbox" />
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
    setGpuArray([])
    setMeArray([])
    setHighCheckStatus(false);
    setLowCheckStatus(false);
    setOneCheckStatus(false);
    setTwoCheckStatus(false);
    setFourCheckStatus(false);
    setEightCheckStatus(false);
    setSixteenCheckStatus(false);
    setTwentyFourCheckStatus(false);
    setMe16CheckStatus(false)
    setMe32CheckStatus(false);
    setMe64CheckStatus(false);
    props.setFilteredArr(props.builds);
}

const handleGo = (event) => {
event.preventDefault()
setOneCheckStatus(false)
setTwoCheckStatus(false);
setFourCheckStatus(false);
setEightCheckStatus(false);
setSixteenCheckStatus(false)
setTwentyFourCheckStatus(false)
setMe16CheckStatus(false);
setMe32CheckStatus(false);
setMe64CheckStatus(false);
let newArr = []
for (let i = 0; i < props.builds.length; i++){
  if (gpuArray.includes(props.builds[i].gpu.spec) && meArray.includes(props.builds[i].memory.spec)){
newArr.push(props.builds[i])
console.log(newArr)
  }
}
props.setFilteredArr(newArr)
if(highCheckStatus){
 let sortArr = newArr.sort(
   (a, b) =>
     parseFloat(b.price) -
     parseFloat(a.price)
 );
 props.setFilteredArr(sortArr)}
 if (lowCheckStatus) {
   let sortArr = newArr.sort(
     (a, b) =>
       parseFloat(a.price) -
       parseFloat(b.price)
   );
   props.setFilteredArr(sortArr);
 }
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
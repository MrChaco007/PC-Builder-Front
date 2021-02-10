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
const [gpuArrowStatus, setGpuArrowStatus] = React.useState(false)
const [gpuStatus, setGpuStatus] = React.useState(true)
const [memoryStatus, setMemoryStatus] = React.useState(true)
const [memoryArrowStatus, setMemoryArrowStatus] = React.useState(false)
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

const gpuContent = () => {
  return(
gpus.map((gpu) => {
  return (
    <article>
      <input onChange={handleFilter} type="checkbox" value={gpu.name} />
      &nbsp;
      <span>{gpu.name}</span>
    </article>
  );
}))
}

const memoryContent = () => {
return memorys.map((memory) => {
  return (
    <article>
      <input onChange={handleFilter} type="checkbox" value={memory.name} />
      &nbsp;
      <span>{memory.name}</span>
    </article>
  );
});
}

const dropdown = () => {
    return (
      <>
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
            <h3 className="filter-header">Motherboard</h3>
            {motherboards.map((motherboard) => {
              return (
                <article>
                  <input
                    onChange={handleFilter}
                    type="checkbox"
                    value={motherboard.name}
                  />
                  &nbsp;
                  <span>{motherboard.name}</span>
                </article>
              );
            })}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">Power Supply</h3>
            {powerSupplys.map((powerSupply) => {
              return (
                <article>
                  <input
                    onChange={handleFilter}
                    type="checkbox"
                    value={powerSupply.name}
                  />
                  &nbsp;
                  <span>{powerSupply.name}</span>
                </article>
              );
            })}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">Processor</h3>
            {processors.map((processor) => {
              return (
                <article>
                  <input
                    onChange={handleFilter}
                    type="checkbox"
                    value={processor.name}
                  />
                  &nbsp;
                  <span>{processor.name}</span>
                </article>
              );
            })}
          </div>
          <div className="filter-box">
            <h3 className="filter-header">Storage</h3>
            {storages.map((storage) => {
              return (
                <article>
                  <input
                    onChange={handleFilter}
                    type="checkbox"
                    value={storage.name}
                  />
                  &nbsp;
                  <span>{storage.name}</span>
                </article>
              );
            })}
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
        <div id="go-button">
          <button onClick={handleGo} type="submit">
            GO
          </button>
        </div>
      </>
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
    <div className="sortFilter">
<button onClick={handleClick}>Filter</button>
{showStatus? dropdown(): null}
    </div>
)


}

export default SortFilter
import React from "react";

const SortFilter = (props) => {
  //Show or hide filter boxes and animate arrows
  const [showStatus, setShowStatus] = React.useState(false);
  const [gpuArrowStatus, setGpuArrowStatus] = React.useState(true);
  const [gpuStatus, setGpuStatus] = React.useState(false);
  const [memoryStatus, setMemoryStatus] = React.useState(false);
  const [memoryArrowStatus, setMemoryArrowStatus] = React.useState(true);
  const [motherboardStatus, setMotherboardStatus] = React.useState(false);
  const [motherboardArrowStatus, setMotherboardArrowStatus] = React.useState(
    true
  );
  const [powerSupplyStatus, setPowerSupplyStatus] = React.useState(false);
  const [powerSupplyArrowStatus, setPowerSupplyArrowStatus] = React.useState(
    true
  );
  const [storageStatus, setStorageStatus] = React.useState(false);
  const [storageArrowStatus, setStorageArrowStatus] = React.useState(true);

  //Filter/Sort Checboxes
  const [highCheckStatus, setHighCheckStatus] = React.useState(false);
  const [lowCheckStatus, setLowCheckStatus] = React.useState(false);
  const [oneCheckStatus, setOneCheckStatus] = React.useState(false);
  const [twoCheckStatus, setTwoCheckStatus] = React.useState(false);
  const [fourCheckStatus, setFourCheckStatus] = React.useState(false);
  const [eightCheckStatus, setEightCheckStatus] = React.useState(false);
  const [sixteenCheckStatus, setSixteenCheckStatus] = React.useState(false);
  const [twentyFourCheckStatus, setTwentyFourCheckStatus] = React.useState(
    false
  );
  const [me16CheckStatus, setMe16CheckStatus] = React.useState(false);
  const [me32CheckStatus, setMe32CheckStatus] = React.useState(false);
  const [me64CheckStatus, setMe64CheckStatus] = React.useState(false);
  const [mo32CheckStatus, setMo32CheckStatus] = React.useState(false);
  const [mo64CheckStatus, setMo64CheckStatus] = React.useState(false);
  const [mo128CheckStatus, setMo128CheckStatus] = React.useState(false);
  const [mo256CheckStatus, setMo256CheckStatus] = React.useState(false);
  const [po550CheckStatus, setPo550CheckStatus] = React.useState(false);
  const [po600CheckStatus, setPo600CheckStatus] = React.useState(false);
  const [po650CheckStatus, setPo650CheckStatus] = React.useState(false);
  const [po750CheckStatus, setPo750CheckStatus] = React.useState(false);
  const [po850CheckStatus, setPo850CheckStatus] = React.useState(false);

  const [s500CheckStatus, setS500CheckStatus] = React.useState(false);

  const [s1CheckStatus, setS1CheckStatus] = React.useState(false);

  const [s2CheckStatus, setS2CheckStatus] = React.useState(false);

  //arrays to filter data with
  const [gpuArray, setGpuArray] = React.useState([]);
  const [meArray, setMeArray] = React.useState([]);
  const [moArray, setMoArray] = React.useState([]);
  const [poArray, setPoArray] = React.useState([]);
  const [sArray, setSArray] = React.useState([]);

  const handleGpuArrow = (event) => {
    gpuArrowStatus ? setGpuArrowStatus(false) : setGpuArrowStatus(true);
  };

  const handleGpuShow = (event) => {
    gpuStatus ? setGpuStatus(false) : setGpuStatus(true);
  };

  const handleMemoryArrow = (event) => {
    memoryArrowStatus
      ? setMemoryArrowStatus(false)
      : setMemoryArrowStatus(true);
  };

  const handleMemoryShow = (event) => {
    memoryStatus ? setMemoryStatus(false) : setMemoryStatus(true);
  };

  const handleMotherboardArrow = (event) => {
    motherboardArrowStatus
      ? setMotherboardArrowStatus(false)
      : setMotherboardArrowStatus(true);
  };

  const handleMotherboardShow = (event) => {
    motherboardStatus
      ? setMotherboardStatus(false)
      : setMotherboardStatus(true);
  };

  const handlePowerSupplyArrow = (event) => {
    powerSupplyArrowStatus
      ? setPowerSupplyArrowStatus(false)
      : setPowerSupplyArrowStatus(true);
  };

  const handlePowerSupplyShow = (event) => {
    powerSupplyStatus
      ? setPowerSupplyStatus(false)
      : setPowerSupplyStatus(true);
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
    if (highCheckStatus === false) {
      setHighCheckStatus(true);
      console.log("highCheckStatus".highCheckStatus);
    } else {
      setHighCheckStatus(false);
      console.log("highCheckStatus".highCheckStatus);
    }
  };

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
    if (oneCheckStatus === false) {
      gpuArray.push(event.target.value);
      setGpuArray(gpuArray);
      console.log(gpuArray);
      setOneCheckStatus(true);
    } else {
      let index = gpuArray.indexOf(event.target.value);
      gpuArray.splice(index, 1);
      setGpuArray(gpuArray);
      console.log(gpuArray);
      setOneCheckStatus(false);
    }
  };

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
      console.log(meArray);
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

  const handleMo32 = (event) => {
    if (mo32CheckStatus === false) {
      moArray.push(event.target.value);
      setMoArray(moArray);
      console.log(moArray);
      setMo32CheckStatus(true);
    } else {
      let index = moArray.indexOf(event.target.value);
      moArray.splice(index, 1);
      setMoArray(moArray);
      console.log(moArray);
      setMo32CheckStatus(false);
    }
  };

  const handleMo64 = (event) => {
    if (mo64CheckStatus === false) {
      moArray.push(event.target.value);
      setMoArray(moArray);
      console.log(moArray);
      setMo64CheckStatus(true);
    } else {
      let index = moArray.indexOf(event.target.value);
      moArray.splice(index, 1);
      setMoArray(moArray);
      console.log(moArray);
      setMo64CheckStatus(false);
    }
  };

  const handleMo128 = (event) => {
    if (mo128CheckStatus === false) {
      moArray.push(event.target.value);
      setMoArray(moArray);
      console.log(moArray);
      setMo128CheckStatus(true);
    } else {
      let index = moArray.indexOf(event.target.value);
      moArray.splice(index, 1);
      setMoArray(moArray);
      console.log(moArray);
      setMo128CheckStatus(false);
    }
  };

  const handleMo256 = (event) => {
    if (mo256CheckStatus === false) {
      moArray.push(event.target.value);
      setMoArray(moArray);
      console.log(moArray);
      setMo256CheckStatus(true);
    } else {
      let index = moArray.indexOf(event.target.value);
      moArray.splice(index, 1);
      setMoArray(moArray);
      console.log(moArray);
      setMo256CheckStatus(false);
    }
  };

  const handlePo550 = (event) => {
    if (po550CheckStatus === false) {
      poArray.push(event.target.value);
      setPoArray(poArray);
      console.log(poArray);
      setPo550CheckStatus(true);
    } else {
      let index = poArray.indexOf(event.target.value);
      poArray.splice(index, 1);
      setPoArray(poArray);
      console.log(poArray);
      setPo550CheckStatus(false);
    }
  };

  const handlePo600 = (event) => {
    if (po600CheckStatus === false) {
      poArray.push(event.target.value);
      setPoArray(poArray);
      console.log(poArray);
      setPo600CheckStatus(true);
    } else {
      let index = poArray.indexOf(event.target.value);
      poArray.splice(index, 1);
      setPoArray(poArray);
      console.log(poArray);
      setPo600CheckStatus(false);
    }
  };

  const handlePo650 = (event) => {
    if (po650CheckStatus === false) {
      poArray.push(event.target.value);
      setPoArray(poArray);
      console.log(poArray);
      setPo650CheckStatus(true);
    } else {
      let index = poArray.indexOf(event.target.value);
      poArray.splice(index, 1);
      setPoArray(poArray);
      console.log(poArray);
      setPo650CheckStatus(false);
    }
  };

  const handlePo750 = (event) => {
    if (po750CheckStatus === false) {
      poArray.push(event.target.value);
      setPoArray(poArray);
      console.log(poArray);
      setPo750CheckStatus(true);
    } else {
      let index = poArray.indexOf(event.target.value);
      poArray.splice(index, 1);
      setPoArray(poArray);
      console.log(poArray);
      setPo750CheckStatus(false);
    }
  };

  const handlePo850 = (event) => {
    if (po850CheckStatus === false) {
      poArray.push(event.target.value);
      setPoArray(poArray);
      console.log(poArray);
      setPo850CheckStatus(true);
    } else {
      let index = poArray.indexOf(event.target.value);
      poArray.splice(index, 1);
      setPoArray(poArray);
      console.log(poArray);
      setPo850CheckStatus(false);
    }
  };

  const handleS1 = (event) => {
    if (s1CheckStatus === false) {
      sArray.push(event.target.value);
      setSArray(sArray);
      console.log(sArray);
      setS1CheckStatus(true);
    } else {
      let index = sArray.indexOf(event.target.value);
      sArray.splice(index, 1);
      setSArray(sArray);
      console.log(sArray);
      setS1CheckStatus(false);
    }
  };

  const handleS500 = (event) => {
    if (s500CheckStatus === false) {
      sArray.push(event.target.value);
      setSArray(sArray);
      console.log(sArray);
      setS500CheckStatus(true);
    } else {
      let index = sArray.indexOf(event.target.value);
      sArray.splice(index, 1);
      setSArray(sArray);
      console.log(sArray);
      setS500CheckStatus(false);
    }
  };

  const handleS2 = (event) => {
    if (s2CheckStatus === false) {
      sArray.push(event.target.value);
      setSArray(sArray);
      console.log(sArray);
      setS2CheckStatus(true);
    } else {
      let index = sArray.indexOf(event.target.value);
      sArray.splice(index, 1);
      setSArray(sArray);
      console.log(sArray);
      setS2CheckStatus(false);
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
        <article id="last-item">
          <input onChange={handleTwentyFour} type="checkbox" value="24GB" />
          &nbsp;
          <span>24GB</span>
        </article>
      </>
    );
  };

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
        <article id="last-item">
          <input onChange={handleMe64} type="checkbox" value="64GB" />
          &nbsp;
          <span>64GB</span>
        </article>
      </>
    );
  };

  const motherboardContent = () => {
    return (
      <>
        <article>
          <input onChange={handleMo32} type="checkbox" value="32GB" />
          &nbsp;
          <span>32GB</span>
        </article>
        <article>
          <input onChange={handleMo64} type="checkbox" value="64GB" />
          &nbsp;
          <span>64GB</span>
        </article>
        <article>
          <input onChange={handleMo128} type="checkbox" value="128GB" />
          &nbsp;
          <span>128GB</span>
        </article>
        <article id="last-item">
          <input onChange={handleMo256} type="checkbox" value="256GB" />
          &nbsp;
          <span>256GB</span>
        </article>
      </>
    );
  };

  const powerSupplyContent = () => {
    return (
      <>
        <article>
          <input onChange={handlePo550} type="checkbox" value="550W" />
          &nbsp;
          <span>550W</span>
        </article>
        <article>
          <input onChange={handlePo600} type="checkbox" value="600W" />
          &nbsp;
          <span>600W</span>
        </article>
        <article>
          <input onChange={handlePo650} type="checkbox" value="650W" />
          &nbsp;
          <span>650W</span>
        </article>
        <article>
          <input onChange={handlePo750} type="checkbox" value="750W" />
          &nbsp;
          <span>750W</span>
        </article>
        <article id="last-item">
          <input onChange={handlePo850} type="checkbox" value="850W" />
          &nbsp;
          <span>850W</span>
        </article>
      </>
    );
  };

  const storageContent = () => {
    return (
      <>
        <article>
          <input onChange={handleS500} type="checkbox" value="500GB" />
          &nbsp;
          <span>500GB</span>
        </article>
        <article>
          <input onChange={handleS1} type="checkbox" value="1TB" />
          &nbsp;
          <span>1TB</span>
        </article>
        <article id="last-item">
          <input onChange={handleS2} type="checkbox" value="2TB" />
          &nbsp;
          <span>2TB</span>
        </article>
      </>
    );
  };

  const dropdown = () => {
    return (
      <div className="sort-filter-box">
        <div className="sort-filter">
          <div className="filter-box">
            <h6 className="filter-header">
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
            </h6>
            {gpuStatus ? gpuContent() : null}
          </div>
          <div className="filter-box">
            <h6 className="filter-header">
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
            </h6>
            {memoryStatus ? memoryContent() : null}
          </div>
          <div className="filter-box">
            <h6 className="filter-header">
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
            </h6>
            {motherboardStatus ? motherboardContent() : null}
          </div>
          <div className="filter-box">
            <h6 className="filter-header">
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
            </h6>
            {powerSupplyStatus ? powerSupplyContent() : null}
          </div>
          <div className="filter-box">
            <h6 className="filter-header">
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
            </h6>
            {storageStatus ? storageContent() : null}
          </div>
          <div className="filter-box">
            <h6 className="filter-header">Price</h6>
            <input onChange={handleLow} type="checkbox" />
            &nbsp;Low to High
            <br />
            <input onChange={handleHigh} type="checkbox" />
            &nbsp;High to Low
          </div>
        </div>
        <div id="go-button-container">
          <button id="go-button" onClick={handleGo} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  };

  const handleClick = () => {
    showStatus ? setShowStatus(false) : setShowStatus(true);
    setGpuArray([]);
    setMeArray([]);
    setMoArray([]);
    setPoArray([]);
    setSArray([]);
    setHighCheckStatus(false);
    setLowCheckStatus(false);
    setOneCheckStatus(false);
    setTwoCheckStatus(false);
    setFourCheckStatus(false);
    setEightCheckStatus(false);
    setSixteenCheckStatus(false);
    setTwentyFourCheckStatus(false);
    setMe16CheckStatus(false);
    setMe32CheckStatus(false);
    setMe64CheckStatus(false);
    setMo32CheckStatus(false);
    setMo64CheckStatus(false);
    setMo128CheckStatus(false);
    setMo256CheckStatus(false);
    setPo550CheckStatus(false);
    setPo600CheckStatus(false);
    setPo650CheckStatus(false);
    setPo750CheckStatus(false);
    setPo850CheckStatus(false);
    setS500CheckStatus(false);
    setS1CheckStatus(false);
    setS2CheckStatus(false);
    props.setFilteredArr(props.builds);
  };

  const handleGo = (event) => {
    event.preventDefault();
    setOneCheckStatus(false);
    setTwoCheckStatus(false);
    setFourCheckStatus(false);
    setEightCheckStatus(false);
    setSixteenCheckStatus(false);
    setTwentyFourCheckStatus(false);
    setMe16CheckStatus(false);
    setMe32CheckStatus(false);
    setMe64CheckStatus(false);
    setMo32CheckStatus(false);
    setMo64CheckStatus(false);
    setMo128CheckStatus(false);
    setMo256CheckStatus(false);
    setPo550CheckStatus(false);
    setPo600CheckStatus(false);
    setPo650CheckStatus(false);
    setPo750CheckStatus(false);
    setPo850CheckStatus(false);
    setS500CheckStatus(false);
    setS1CheckStatus(false);
    setS2CheckStatus(false);

    let newArr = [];
    for (let i = 0; i < props.builds.length; i++) {
      if (
        (gpuArray.includes(props.builds[i].gpu.spec) || gpuArray.length === 0) &&
        (meArray.includes(props.builds[i].memory.spec) || meArray.length === 0) &&
        (moArray.includes(props.builds[i].motherboard.spec) ||
          moArray.length === 0) &&
        (poArray.includes(props.builds[i].powerSupply.spec) || poArray.length === 0)&&
        (sArray.includes(props.builds[i].storage.spec) || sArray.length === 0)
      ) {
        newArr.push(props.builds[i]);
        console.log(newArr);
      }
    }
    props.setFilteredArr(newArr);
    if (highCheckStatus) {
      let sortArr = newArr.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      props.setFilteredArr(sortArr);
    }
    if (lowCheckStatus) {
      let sortArr = newArr.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      props.setFilteredArr(sortArr);
    }
    setShowStatus(false);
  };

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
};

export default SortFilter;

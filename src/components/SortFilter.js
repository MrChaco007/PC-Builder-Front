import React from "react"
import BuildConfigCard from "./card/index"

const SortFilter = (props) => {
    const storageData = [
    {name: "AMD 500GB", 
price: 800, spec: "500 GB"},
{name: "AMD 400GB", price: 900, spec: "400 GB"}]
const [showStatus, setShowStatus] = React.useState(false)
const [filteredArr, setFilteredArr] = React.useState(storageData)
const [checkStatus, setCheckStatus] = React.useState(false)
const [checkValue, setCheckValue] = React.useState("")


const handleFilter = (event) => { 
if (checkStatus === false) {
  setCheckStatus(true);
  setCheckValue(event.target.value);
} else {
  setCheckStatus(false);
}
}

const sortHigh = (event) => {
  let newArr = [...filteredArr];
    newArr.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setFilteredArr(newArr);
  };

const sortLow = (event) => {
  let newArr = [...filteredArr];
    newArr.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredArr(newArr);
  };


const dropdown = () => {
    return (
      <form>
        <span>Storage: AMD 500GB</span>
        <input onChange={handleFilter} type="checkbox" value="AMD 500GB" />
        <span>AMD 400GB</span>
        <input onChange={handleFilter} type="checkbox" value="AMD 400GB" />
        <br />
        <span>Price: Low to High</span>
        <input onChange={sortLow} type="checkbox"/>
        <span>Price: High to Low</span>
        <input onChange={sortHigh} type="checkbox" />
        <br />
        <button onClick={handleStorage} type="submit">
          GO
        </button>
      </form>
    );
}


const handleClick = () => {
    showStatus? setShowStatus(false):setShowStatus(true)
    setCheckStatus(false)
    setFilteredArr(storageData);
}

const handleStorage = (event) => {
event.preventDefault()
const newArr = filteredArr.filter((storage) =>  storage.name === checkValue)
 checkStatus? setFilteredArr(newArr) : setFilteredArr(filteredArr)
 setShowStatus(false)
}


return (
    <div className="sortFilter">
<button onClick={handleClick}>Filter</button>
{showStatus? dropdown(): filteredArr.map((data, index) => {
            const {name, price, spec} = data;
            return (
              <li
                key={index}
                className="storages"
              >
                <b>{name}</b>
              </li>
            );
          })}
    </div>
)


}

export default SortFilter
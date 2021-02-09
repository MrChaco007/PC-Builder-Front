import React from "react"
import BuildConfigCard from "./BuildConfigCard"

const SortFilter = (props) => {
    const storageData = [
    {name: "AMD 500GB", 
price: 600, spec: "500 GB"},
{name: "AMD 400GB", price: 700, spec: "400 GB"}]
const [showStatus, setShowStatus] = React.useState(false)
const [filteredArr, setFilteredArr] = React.useState(storageData)
const [checkStatus, setCheckStatus] = React.useState(false)
const [checkValue, setCheckValue] = React.useState("")


const handleCheck = (event) => { 
if (checkStatus === false) {
  setCheckStatus(true);
  setCheckValue(event.target.value);
} else {
  setCheckStatus(false);
}
}



const dropdown = () => {
    return(
    <form>
      <p>AMD 500GB</p><input onChange= {handleCheck} type="checkbox" value="AMD 500GB"/>
      <p>AMD 400GB</p><input onChange= {handleCheck} type="checkbox" value="AMD 400GB"/>
      <button onClick = {handleStorage} type="submit">Filter</button>
    </form>)
}


const handleClick = () => {
    showStatus? setShowStatus(false):setShowStatus(true)
    setCheckStatus(false)
    setFilteredArr(storageData);
}

const handleStorage = (event) => {
event.preventDefault()
const newArr = filteredArr.filter((storage) =>  storage.name === checkValue)
 checkStatus? setFilteredArr(newArr) : setFilteredArr(storageData)
 setShowStatus(false)
}


return (
    <div className="sortFilter">
<button onClick={handleClick}>Filter/Sort</button>
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
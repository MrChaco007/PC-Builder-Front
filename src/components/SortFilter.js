import React from "react"
import BuildConfigCard from "./card/index"
import gpus from "../data/gpus"

const SortFilter = (props) => {
const [showStatus, setShowStatus] = React.useState(false)
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


const dropdown = () => {
    return (
      <form>
        {gpus.map((gpu)=>{
          return(<article>
     <span>{gpu.name}</span>
        <input onChange={handleFilter} type="checkbox" value={gpu.name} />
        </article> 
          )
        } )}
        <span>Price: Low to High</span>
        <input onChange={sortLow} type="checkbox"/>
        <span>Price: High to Low</span>
        <input onChange={sortHigh} type="checkbox" />
        <br />
        <button onClick={handleGo} type="submit">
          GO
        </button>
      </form>
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
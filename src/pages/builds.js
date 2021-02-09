import React from "react";
import SortFilter from "../components/SortFilter"
import Card from "../components/card"
const Builds = (props) => {
  const [filteredArr, setFilteredArr] = React.useState([]);
  React.useEffect(() => {
    if (props.builds) {
      setFilteredArr(props.builds)
    }
  },[props.builds])
  return (
    <div>
      <SortFilter builds={props.builds} filteredArr={filteredArr} setFilteredArr={setFilteredArr}/>
      {filteredArr?.map((build, index)=> {
return <Card key ={index} build={build} handleDelete={props.handleDelete} buttons={["edit","delete"]} />
      })}
    </div>
  );
};
export default Builds;
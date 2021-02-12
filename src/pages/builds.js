import React from "react";
import SortFilter from "../components/SortFilter"
import Card from "../components/card"
import './builds.css'

const Builds = (props) => {
  const [filteredArr, setFilteredArr] = React.useState([]);
  React.useEffect(() => {
    if (props.builds) {
      setFilteredArr(props.builds)
    }
  },[props.builds])
  return (
    <div id="builds-page">
      <SortFilter builds={props.builds} filteredArr={filteredArr} setFilteredArr={setFilteredArr}/>
      <div className="builds-container">
        {filteredArr?.map((build, index)=> {
          return <Card key ={index} 
                    build={build} 
                    handleDelete={props.handleDelete}
                    selectBuild={props.selectBuild} 
                    buttons={["edit","delete"]} 
                  />
        })}
      </div>
    </div>
  );
};
export default Builds;
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";
import ComputerBuilder from "./pages/computerBuilder";
import Builds from "./pages/builds";
import TeamPage from "./pages/teamPage";
import BuildForm from "./pages/buildForm";

function App() {
  const url = "https://pc-builder-back.herokuapp.com";
  const [builds, setBuilds] = React.useState([]);
  const build = {
    name: "Awesome Build",
    price: 1209,
    processor: { name: "AMD Ryzen 7 3700", price: 299, spec: "8 core" },
    motherboard: {
      name: "ASRock x570m pro 4",
      price: 200,
      spec: "128GB Max RAM",
    },
    storage: { name: "WD 1TB SSD", price: 100, spec: "1TB" },
    powerSupply: { name: "EVGA 600", price: 60, spec: "600w" },
    gpu: { name: "ASUS GeForce GTX1070ti", price: 450, spec: "8GB" },
    memory: { name: "Crucial Ballistix 8GB x 2 RGB", price: 100, spec: "16GB" },
  };
  const [selectedBuild, setSelectedBuild] = React.useState(build);
  const getBuilds = () => {
    fetch(url + "/build")
      .then((response) => response.json())
      .then((data) => {
        setBuilds(data);
      });
  };

  const handleCreate = (newBuild) => {
    console.log("mewBuild", newBuild)
    fetch(url + "/build", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBuild),
    }).then(() => {
      getBuilds();
    });
  };

  const handleUpdate = (build) => {
    fetch(url + "/build/updateBuild/" + build._id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(build),
    }).then(() => {
      getBuilds();
    });
  };

  const handleDelete = (build) => {
    console.log("triggered")
    console.log("build",build)
    fetch(url + "/build/" + build._id, { method: "delete" }).then(() => {
      getBuilds();
    });
  }

  const selectBuild = (build) => {
    setSelectedBuild(build)
  }


  React.useEffect(()=> getBuilds(),[])
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <ComputerBuilder build={build}/>
        </Route>
        <Route path="/builds">
          <Builds selectBuild={selectBuild} handleDelete={handleDelete} builds={builds} getBuilds={getBuilds} />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route
          exact
          path="/create"
          render={(rp) => (
            <BuildForm
              {...rp}
              label="Add to Builds"
              handleSubmit={handleCreate}
              build={build}
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={(rp) => (
            <BuildForm
              {...rp}
              label="Update"
              build={selectedBuild}
              handleSubmit={handleUpdate}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

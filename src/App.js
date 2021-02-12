import "./App.css";
import "./components/nav.css"
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
    _id: "",
    name: "Awesome Build",
    processor: { name: "AMD Ryzen 7 3700X", price: 368, spec: "3.6GHz 8 core" },
    motherboard: {name: "ASRock X570 TAICHI AM4 AMD", price: 300, spec: "128GB"},
    storage: { name: "SAMSUNG 860 EVO Series 2.5 500GB SSD", price: 60, spec: "500GB" },
    powerSupply: { name: "EVGA SuperNOVA 650", price: 122, spec: "650W" },
    gpu: { name: "ASUS GeForce GTX1070ti", price: 450, spec: "8GB" },
    memory: { name: "G.SKILL Ripjaws V Series 8GB x 2", price: 79, spec: "16GB" },
    price: 1379,
    _v: 0
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
    delete newBuild["_id"]
    delete newBuild["_v"]
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

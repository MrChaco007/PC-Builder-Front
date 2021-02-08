import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";
import computerBuilder from "./pages/computerBuilder"
import builds from "./pages/builds"
import teamPage from "./pages/teamPage"
import buildForm from "./pages/buildForm"


function App() {
  const url = "https://pc-builder-back.herokuapp.com";
  const [builds, setBuilds] = React.useState([])
  const emptyBuild = {
    name: "",
    processor: { name: "", price: 0, spec: "" },
    motherboard: { name: "", price: 0, spec: "" },
    storage: { name: "", price: 0, spec: "" },
    powerSupply: { name: "", price: 0, spec: "" },
    gpu: { name: "", price: 0, spec: "" },
    memory: { name: "", price: 0, spec: "" }
  };


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <ComputerBuilder />
        </Route>
        <Route path="/builds">
          <Builds/>
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
              build={emptyBuild}
              handleSubmit={handleCreate}
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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Sass/main.scss";
import FoundationLayout from "./Containers/FoundationLayout/FoundationLayout";
import ElementsLayout from "./Containers/ElementsLayout/ElementsLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FoundationLayout />
          </Route>
          <Route exact path="/elements">
            <ElementsLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

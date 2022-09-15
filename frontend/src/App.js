import React from "react";
import Home from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./views/noMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;

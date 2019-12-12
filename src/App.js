import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sample from "./pages/sample";
import GetStarted from "./pages/getStarted";
import AddItUp from "./pages/addItUp";
import Results from "./pages/results";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/search" component={AddItUp} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/sample" component={Sample} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

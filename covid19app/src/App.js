import React from "react";
import './App.css';
import {browserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/CovidAnalyser" exact component={Analyser}/>
          <Route path="/CovidStats" exact component={Stats}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Stats from "./components/pages/Stats";
import Analyser from "./components/pages/Analyser";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Stats' exact component={Stats}/>
        <Route path='/Analyser' exact component={Analyser}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

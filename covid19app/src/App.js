import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Analyser from "./components/pages/Analyser";
import Stats from "./components/pages/Stats";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Stats}/>
        <Route path='/products' exact component={Analyser}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

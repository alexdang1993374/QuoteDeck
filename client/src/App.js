import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Spongebob from "./components/Spongebob/Spongebob.jsx";
import Simpsons from "./components/Simpsons/Simpsons.jsx";
import Sunny from "./components/Sunny/Sunny.jsx";
import Navbar from "./components/Navbar.jsx";
import doIt from "./do.gif";
import useSound from "use-sound";
import doItS from "./do.wav";
import Home from "./components/home/Home";
import ActiveProvider, { useActive } from "./context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ActiveProvider>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spongebob" component={Spongebob} />
            <Route path="/simpsons" component={Simpsons} />
            <Route path="/sunny" component={Sunny} />
          </Switch>
        </ActiveProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// poop

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

function App() {
  const [home, setHome] = useState(true);
  const [play, { stop }] = useSound(doItS);

  return (
    <>
      {/* <h1>Welcome to QuoteDeck! Choose a soundboard!</h1> */}
      <BrowserRouter>
        <div className="navbarDiv">
          <Navbar setHome={setHome} />
        </div>
        <div>
          <Switch>
            <Route path="/Spongebob" render={() => <Spongebob />} />
            <Route path="/Simpsons" render={() => <Simpsons />} />
            <Route path="/Sunny" render={() => <Sunny />} />
          </Switch>
        </div>
      </BrowserRouter>
      {home ? (
        <img
          className="homeGif"
          src={doIt}
          onClick={() => {
            stop();
            play();
          }}
        />
      ) : (
        <> </>
      )}
    </>
  );
}

export default App;

// poop

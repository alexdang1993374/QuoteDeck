import React from "react";
import useSound from "use-sound";
import "./Spongebob.css";
import axios from "axios";

import firm from "./img/firm.jpg";

import ready from "./img/opening.jpg";

import go from "./img/ready.jpg";

import chocolate from "./img/chocolate.jpg";

import wumbo from "./img/wumbo.jpg";

import number from "./img/numberOne.jpg";

import stinks from "./img/stinks.JPG";

import people from "./img/heyPeople.jpg";

import leg from "./img/leg.jpeg";

import claws from "./img/claws.PNG";

import slasher from "./img/slasher.PNG";

import future from "./img/future.gif";

import comb from "./sounds/comb2.wav";

export default function Spongebob() {
  const [play, { stop }] = useSound(comb, {
    sprite: {
      firm: [0, 2013],
      ready: [2196, 1156],
      go: [3511, 1695],
      chocolate: [5439, 2470],
      wumbo: [7990, 7807],
      number: [15959, 2143],
      stinks: [18247, 3472],
      people: [21880, 5906],
      leg: [28039, 1195],
      claws: [29600, 3172],
      slasher: [33126, 7766],
      future: [41078, 2675],
    },
  });

  async function logPressed(id) {
    const res = await axios.get(`/api/spongequotes/${id}`);
    const res2 = await axios.put(`/api/spongequotes/${id}`, {
      completed: (res.data.data.completed += 1),
    });
    console.log(`Pressed ${res.data.data.completed} times`)
    return res2;
  }

  return (
    <>
      <div className="spongeBoard">
        <h1>Spongebob Squarepants</h1>
        <span
          class="container"
          onClick={() => {
            logPressed("6bf3e554-f225-4055-b91a-9fea95b3787b")
            stop();
            play({ id: "firm" });
          }}
        >
          <img src={firm} alt="Firmly grasp it" />
          <span class="text-overlay">Firmly grasp it</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("a22d0d6c-4131-4cd1-a96a-7393e7fbfcf3")
            stop();
            play({ id: "ready" });
          }}
        >
          <img src={ready} alt="Opening Pirate." />
          <span class="text-overlay">Are you Ready?</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("12a8f21b-0aa4-48c0-9949-c2e867c8dabf");
            stop();
            play({ id: "go" });
          }}
        >
          <img src={go} alt="He's ready." />
          <span class="text-overlay">I'm Ready!!</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("b3630c21-d121-4f19-bcba-512155b18aa9")
            stop();
            play({ id: "chocolate" });
          }}
        >
          <img src={chocolate} alt="CHOCOLATE!!" />
          <span class="text-overlay">CHOCOLATE!!!</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("fd5407f7-f7df-452c-8930-a2f380dbc5ee")
            stop();
            play({ id: "wumbo" });
          }}
        >
          <img src={wumbo} alt="Wumbo." />
          <span class="text-overlay">Wumbology</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("ef201de5-bea3-44bd-b398-93e285ca05e2")
            stop();
            play({ id: "number" });
          }}
        >
          <img src={number} alt="He was number one" />
          <span class="text-overlay">He was number 1</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("c50c07d0-ce57-4a45-9f7f-dab09ebb9001")
            stop();
            play({ id: "stinks" });
          }}
        >
          <img src={stinks} alt="Spongebob telling jokes." />
          <span class="text-overlay">This guy stinks</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("8fde0fed-ceb2-4562-80a6-4874fa2aab22")
            stop();
            play({ id: "people" });
          }}
        >
          <img src={people} alt="Hey all you people." />
          <span class="text-overlay">Hey all you people</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("ae6a644a-855d-411c-a10a-82b60b30c7c2")
            stop();
            play({ id: "leg" });
          }}
        >
          <img src={leg} alt="My leg!" />
          <span class="text-overlay">My leg!</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("a5fedf1d-cca3-41ed-9337-537967e1b61e")
            stop();
            play({ id: "claws" });
          }}
        >
          <img src={claws} alt="Big meaty claws." />
          <span class="text-overlay">Big meaty claws</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("131aaa34-7aae-420a-8cf9-2865ca4cee70")
            stop();
            play({ id: "slasher" });
          }}
        >
          <img src={slasher} alt="The Hash Slinging Slasher." />
          <span class="text-overlay">The Hash Slinging Slasher </span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("fb294387-ea87-4f80-bfd7-cd5710c5beba")
            stop();
            play({ id: "future" });
          }}
        >
          <img src={future} alt="Future." />
          <span class="text-overlay">Future</span>
        </span>
      </div>
    </>
  );
}

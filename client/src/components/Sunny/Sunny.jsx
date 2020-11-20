import React, { useState } from "react";
import useSound from "use-sound";
import axios from "axios";

import bird from "./img/bird.gif";

import god from "./img/god.jpg";

import bull from "./img/bull.gif";

import dish from "./img/dish.jpg";

import fat from "./img/fat.jpg";

import gay from "./img/gay.gif";

import gin from "./img/gin.gif";

import mang from "./img/mang.gif";

import milk from "./img/milk.jpg";

import rum from "./img/rum.gif";

import trash from "./img/trash.gif";

import wild from "./img/wild.gif";

import comb from "./sounds/combSunny.wav";

let damn = 0;

export default function Sunny() {
  const [randomQuote, setRandomQuote] = useState("");

  const [play, { stop }] = useSound(comb, {
    sprite: {
      god1: [0, 1147],
      god2: [1191, 981],
      god3: [2240, 1908],
      god4: [4274, 2950],
      god5: [7453, 700],
      god6: [8443, 2542],
      god7: [11390, 1274],
      god8: [12981, 1791],
      god9: [15258, 2535],
      bird: [17980, 3853],
      bull: [22179, 5448],
      dish: [28063, 3467],
      fat: [32112, 3421],
      gay: [36236, 2581],
      gin: [39482, 2472],
      mang: [42562, 2360],
      milk: [45514, 1251],
      rum: [47381, 3170],
      trash: [51351, 1909],
      wild: [54102, 3987],
    },
  });

  function playRandom() {
    let quotes = [
      "god1",
      "god2",
      "god3",
      "god4",
      "god5",
      "god6",
      "god7",
      "god8",
      "god9",
    ];
    // let randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[damn]);
    damn++
    if (damn > 8) damn = 0
  }

  async function logPressed(id) {
    const res = await axios.get(`/api/sunnyquotes/${id}`);
    const res2 = await axios.put(`/api/sunnyquotes/${id}`, {
      completed: (res.data.data.completed += 1),
    });
    console.log(`Pressed ${res.data.data.completed} times`)
    return res2;
  }

  return (
    <>
      <div className="simpBoard">
        <h1>It's Always Sunny in Philadelphia</h1>
        <span
          class="container"
          onMouseEnter={playRandom}
          onClick={() => {
            playRandom();
            logPressed("e448eec3-0b37-4af0-9276-41e9cad400a9")
            stop();
            play({ id: randomQuote });
          }}
        >
          <img src={god} alt="The Gang" />
          <span class="text-overlay">God Dammit</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("f97df26b-2df2-44e7-a176-c4c8a6b49b45")
            stop();
            play({ id: "bird" });
          }}
        >
          <img src={bird} alt="Dee" />
          <span class="text-overlay">Dee is a bird</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("1a50daab-1dc4-42dc-878f-4156ac643a64")
            stop();
            play({ id: "bull" });
          }}
        >
          <img src={bull} alt="Frank at the art gallery" />
          <span class="text-overlay">Art</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("4aeab079-3473-4c31-9cef-87bafa375e2d")
            stop();
            play({ id: "dish" });
          }}
        >
          <img src={dish} alt="Dee doing dishes" />
          <span class="text-overlay">Dee does the dishes</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("98fa5f90-e2c8-4eb7-a3b9-89e516bf9c4e")
            stop();
            play({ id: "fat" });
          }}
        >
          <img src={fat} alt="Dee yelling" />
          <span class="text-overlay">Sweet Dee</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("f8d3d729-1a49-46ae-97a8-a2b72e661a84")
            stop();
            play({ id: "gay" });
          }}
        >
          <img src={gay} alt="Charlie is gay for god" />
          <span class="text-overlay">Gay for God</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("0f1bbf71-80d1-4163-a7aa-d91b9e7ecd72")
            stop();
            play({ id: "gin" });
          }}
        >
          <img src={gin} alt="Denis hates gin" />
          <span class="text-overlay">I hate gin</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("593d35cd-b87f-459c-b5f6-f870a510bc7b")
            stop();
            play({ id: "mang" });
          }}
        >
          <img src={mang} alt="Mac is a racist" />
          <span class="text-overlay">OK mang</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("4dfa8709-5342-4062-88d7-3934632e46d0")
            stop();
            play({ id: "milk" });
          }}
        >
          <img src={milk} alt="Fightmilk" />
          {/* <span class="text-overlay">Fightmilk</span> */}
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("a37ee43d-543e-455b-8c55-9e1593c5215e")
            stop();
            play({ id: "rum" });
          }}
        >
          <img src={rum} alt="Rum Ham" />
          <span class="text-overlay">Rum ham</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("8f423b6a-1565-497e-8e11-6e1f0b1a18c5")
            stop();
            play({ id: "trash" });
          }}
        >
          <img src={trash} alt="Frank" />
          <span class="text-overlay">When I'm dead</span>
        </span>
        <span
          class="container"
          onClick={() => {
            logPressed("4c335114-d3a1-46f1-8ad0-d3ad7d7a9228")
            stop();
            play({ id: "wild" });
          }}
        >
          <img src={wild} alt="Charlie is wild card" />
          <span class="text-overlay">Wildcard!</span>
        </span>
      </div>
    </>
  );
}

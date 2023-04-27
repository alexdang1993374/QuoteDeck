import React from "react";
import useSound from "use-sound";
import "./Simpsons.css";

import zaus from "./img/zaus.jpg";

import mole from "./img/mole.jpg";

import haha from "./img/haha.gif";

import duff from "./img/duff.gif";

import hippo from "./img/hippo.gif";

import dead from "./img/dead.jpg";

import flanders from "./img/flanders.gif";

import hell from "./img/hell.gif";

import rake from "./img/rake.gif";

import blurst from "./img/blurst.gif";

import damn from "./img/damn.jpg";

import carumba from "./img/carumba.jpg";

import comb from "./sounds/comboSimp.wav";

export default function Simpsons() {
  const [play, { stop }] = useSound(comb, {
    sprite: {
      zaus: [0, 3576],
      mole: [3628, 2747],
      haha: [6467, 989],
      duff: [7544, 5324],
      hippo: [13020, 4129],
      dead: [17442, 4718],
      flanders: [22481, 2012],
      hell: [24913, 1266],
      rake: [26558, 3001],
      blurst: [29988, 3819],
      damn: [34341, 2333],
      carumba: [37399, 1085],
    },
  });

  // async function logPressed(id) {
  //   const res = await axios.get(`/api/simpsonsquotes/${id}`);
  //   const res2 = await axios.put(`/api/simpsonsquotes/${id}`, {
  //     completed: (res.data.data.completed += 1),
  //   });

  //   return res2;
  // }

  return (
    <>
      <div className="simpBoard">
        <h1>The Simpsons</h1>
        <span
          class="container"
          onClick={() => {
            // logPressed("8ac96b98-804c-4683-99f1-35342ac33ce2");
            stop();
            play({ id: "zaus" });
          }}
        >
          <img src={zaus} alt="Dr. Zaius" />
          <span class="text-overlay">Dr. Zaius</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("8444f1e6-056f-4620-8974-1699147a3a96");
            stop();
            play({ id: "mole" });
          }}
        >
          <img src={mole} alt="Moleman" />
          <span class="text-overlay">Gay for Moleman</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("f056ec17-1288-4009-9694-bc16ebaf81f6");
            stop();
            play({ id: "haha" });
          }}
        >
          <img src={haha} alt="Haha" />
          <span class="text-overlay">Haha</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("9260607c-e75d-45ec-92cd-299481d651b2");
            stop();
            play({ id: "duff" });
          }}
        >
          <img src={duff} alt="Duffman" />
          <span class="text-overlay">Oh Yeah!!</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("20130a69-ac6c-4865-870d-d6ee710f43b2");
            stop();
            play({ id: "hippo" });
          }}
        >
          <img src={hippo} alt="Mmmmm Hippo" />
          <span class="text-overlay">Mmmmm</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("b4321d8e-a2ef-4bb9-8180-dfce35f59fe6");
            stop();
            play({ id: "dead" });
          }}
        >
          <img src={dead} alt="Stop he's already dead" />
          <span class="text-overlay">Stop he's already dead</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("599d50e2-321d-49f0-aa34-5dff46367f77");
            stop();
            play({ id: "flanders" });
          }}
        >
          <img src={flanders} alt="Stupid sexy Flanders" />
          <span class="text-overlay">Stupid sexy Flanders</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("f6482b95-10f7-4855-8108-4f66ed4f7f7c");
            stop();
            play({ id: "hell" });
          }}
        >
          <img src={hell} alt="Krusty the Clown" />
          <span class="text-overlay">What the hell</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("2b7a883c-2a25-4665-8b98-c351ce8455b7");
            stop();
            play({ id: "rake" });
          }}
        >
          <img src={rake} alt="Sideshow Bob" />
          <span class="text-overlay">Urghhh</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("314caaca-f086-4b95-aeec-912cb4d800af");
            stop();
            play({ id: "blurst" });
          }}
        >
          <img src={blurst} alt="Monkey at a typewriter" />
          <span class="text-overlay">The greatest novel known to man</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("f0327ba8-03c6-4bac-9256-314e9bca1fcc");
            stop();
            play({ id: "damn" });
          }}
        >
          <img src={damn} alt="Todd Flanders" />
          <span class="text-overlay">Vegetables</span>
        </span>
        <span
          class="container"
          onClick={() => {
            // logPressed("b38b9f17-f76b-496d-9d28-0727995e76ef");
            stop();
            play({ id: "carumba" });
          }}
        >
          <img src={carumba} alt="Ay Carumba" />
          <span class="text-overlay">¡Ay, caramba!</span>
        </span>
      </div>
    </>
  );
}

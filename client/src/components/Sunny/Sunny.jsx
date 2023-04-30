import React, { useState } from "react";
import { sunnyCards } from "./sunnyCards";
import comb from "./sounds/combSunny.wav";
import useSound from "use-sound";
import { god } from "./img";

let damn = 0;
const Sunny = () => {
  const [damnQuote, setDamnQuote] = useState("");

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

  function playNext() {
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
    setDamnQuote(quotes[damn]);
    damn++;
    if (damn > 8) damn = 0;
  }

  return (
    <div className="Container">
      <div
        className="Card"
        onClick={() => {
          playNext();
          stop();
          play({ id: damnQuote });
        }}
        style={{
          backgroundImage: `url(${god})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="Text">
          <p>God Dammit</p>
        </div>
      </div>

      {sunnyCards.map((card) => (
        <div
          key={card.id}
          className="Card"
          onClick={() => {
            stop();
            play({ id: card.id });
          }}
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="Text">
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sunny;

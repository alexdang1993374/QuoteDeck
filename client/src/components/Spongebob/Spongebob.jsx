import React from "react";
import { spongebobCards } from "./spongebobCards";
import useSound from "use-sound";
import comb from "./sounds/comb2.wav";

const Spongebob = () => {
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

  return (
    <div className="Container">
      {spongebobCards.map((card) => (
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

export default Spongebob;

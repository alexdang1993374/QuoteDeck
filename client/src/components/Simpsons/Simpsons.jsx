import React from "react";
import { simpsonsCards } from "./simpsonsCards";
import comb from "./sounds/comboSimp.wav";
import useSound from "use-sound";

const Simpsons = () => {
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
  return (
    <div className="Container">
      {simpsonsCards.map((card) => (
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

export default Simpsons;

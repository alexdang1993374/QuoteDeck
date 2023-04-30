import React from "react";
import useSound from "use-sound";
import doItS from "../../do.wav";
import doIt from "../../do.gif";

const Home = () => {
  const [play, { stop }] = useSound(doItS);
  return (
    <div className="Container">
      <div
        className="Home-Card"
        onClick={() => {
          stop();
          play();
        }}
        style={{
          backgroundImage: `url(${doIt})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Home;

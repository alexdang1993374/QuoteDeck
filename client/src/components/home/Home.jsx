import React from "react";
import useSound from "use-sound";
import doItS from "../../do.wav";
import doIt from "../../do.gif";

const Home = () => {
  const [play, { stop }] = useSound(doItS);
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <img
        style={{ width: "500px", height: "500px", cursor: "pointer" }}
        src={doIt}
        alt="doIt"
        onClick={() => {
          stop();
          play();
        }}
      />
    </div>
  );
};

export default Home;

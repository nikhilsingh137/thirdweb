import React, { useState } from "react";
import Style from "./topbar.module.scss";

const Topbar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={Style.topbar}>
          <a href="#/">
            The Onchain Olympics ⛓️🏅 — Mint an NFT on your preferred chain to
            unlock builder perks on thirdweb
          </a>
          <h3 onClick={() => setShow(!show)}>X</h3>
        </div>
      )}
    </>
  );
};

export default Topbar;

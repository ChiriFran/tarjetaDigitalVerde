import React from 'react';
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroMask"></div>
      <div className="heroTextGroup">
        <div className="heroTopText">Llegó el día</div>
        <div className="heroName">María</div>
        <div className="heroBottomText">Mis XV</div>
      </div>
    </div>
  );
}

export default Hero;

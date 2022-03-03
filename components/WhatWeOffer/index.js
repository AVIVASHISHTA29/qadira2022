import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
function WhatWeOffer() {
  return (
    <div className={styles.container}>
      <Marquee speed={100} pauseOnHover={true} gradient={false}>
        <p className={styles.specialText}>
          We don't bleed blue.
          <span className={"stroke"} style={{ color: "var(--red)" }}>
            We don't bleed blue.
          </span>
          We don't bleed blue. We don't bleed blue.
          <span className={"stroke"} style={{ color: "var(--red)" }}>
            We don't bleed blue.
          </span>
        </p>
      </Marquee>
      <div className={styles.wrapper}>
        <h1>What We Offer</h1>
        <p>We offer a range of anion chip disposable sanitary pads.</p>
      </div>
    </div>
  );
}

export default WhatWeOffer;

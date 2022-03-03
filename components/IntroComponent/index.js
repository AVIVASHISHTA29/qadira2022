import React from "react";
import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.upperText}>
        Yes, it's that time of the month. Yes, it's painful.Yes, its mood
        swings. Yes, it's bloody.
        <p className={styles.middleText}>
          Bleed
          <br />
          with
          <br />
          pride.
        </p>
        But No more shame. No more hiding. No more hushing our voices. No more
        stain checks. No more blushing. No more rain checks. No more pretending.
        No more excuses. No more embarrassment.{" "}
        <span style={{ color: "var(--red)" }}>Period for real</span>
      </p>

      <p className={styles.lowerText}></p>
    </div>
  );
}

export default IntroComponent;

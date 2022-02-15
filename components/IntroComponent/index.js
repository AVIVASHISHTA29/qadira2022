import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
function IntroComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={"/assets/images/logo.svg"} height={546.57} width={599.66} />
      <h1>
        BLEED WITH <span style={{ color: "var(--red)" }}>PRIDE</span>
      </h1>
    </div>
  );
}

export default IntroComponent;

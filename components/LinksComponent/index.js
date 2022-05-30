import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Bubble from "./Bubble.js";
function LinksComponent() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Giving back with Qadira</h1>
      <Link href="https://www.projectqadira.in">
        <p
          style={{
            textAlign: "center",
            color: "var(--background-color)",
            cursor: "pointer",
            fontSize: "1.2rem",
            fontFamily: "Spectral",
            textDecoration: "underline",
          }}
        >
          Know More
        </p>
      </Link>
      <div className={styles.bubbleFlex}>
        <Bubble text={"Bubble"} />
        <Bubble text={"Bubble"} />
        <Bubble text={"Bubble"} />
        <Bubble text={"Bubble"} />
        <Bubble text={"Bubble"} />
        <Bubble text={"Bubble"} />
      </div>
    </div>
  );
}

export default LinksComponent;

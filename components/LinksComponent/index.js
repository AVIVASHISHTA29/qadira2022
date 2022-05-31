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
        <Bubble top={"7000+"} bottom={"lives impacted"} />
        <Bubble top={"100+"} bottom={"workshops conducted"} />
        <Bubble top={"2000+"} bottom={"menstruators"} />
        <Bubble top={"1+"} bottom={"years"}/>
      </div>
    </div>
  );
}

export default LinksComponent;

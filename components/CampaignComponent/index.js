import React from "react";
import styles from "./styles.module.css";

function CampaignComponent({ imgSrc, title, desc }) {
  return (
    <div className={styles.wrapper}>
      <img src={"/assets/images/intro3.png"} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default CampaignComponent;

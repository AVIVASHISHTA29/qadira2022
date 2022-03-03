import React from "react";
import styles from "./styles.module.css";

function CampaignComponent({ imgSrc, title, desc }) {
  return (
    <div className={styles.wrapper}>
      <img src={"/assets/images/intro3.png"} />
      <h1>Araico Collection launch</h1>
      <p>
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and more!
      </p>
    </div>
  );
}

export default CampaignComponent;

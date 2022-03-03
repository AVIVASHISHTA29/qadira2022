import React from "react";
import styles from "./styles.module.css";
function WhoWeAre() {
  return (
    <div className={styles.container}>
      <div className={styles.imgFlex}>
        <img src={"/assets/images/carouselImages/carousel3.png"} />
        <img src={"/assets/images/carouselImages/carousel1.png"} />
        <img src={"/assets/images/carouselImages/carousel2.png"} />
      </div>
      <h1>Who We Are</h1>
      <p>
        We are the voice and reflection of an average Indian modern menstruator.
        At qadira comfort, affordability and sustainability work harmoniously to
        create products that menstruators love. We are committed to building an
        intersectional and inclusive period positive society.
      </p>
    </div>
  );
}

export default WhoWeAre;

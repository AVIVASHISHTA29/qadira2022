import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";
function WhoWeAre() {
  return (
    <div className={styles.container} id="aboutus">
      <div className={styles.imgFlex}>
        <motion.img
          src={"/assets/images/carouselImages/carousel3.png"}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
        />
        <motion.img
          src={"/assets/images/carouselImages/carousel1.png"}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
        />
        <motion.img
          src={"/assets/images/carouselImages/carousel2.png"}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
      >
        Who We Are
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
      >
        We are the voice and reflection of an average Indian modern menstruator.
        At qadira comfort, affordability and sustainability work harmoniously to
        create products that menstruators love. We are committed to building an
        intersectional and inclusive period positive society.
      </motion.p>
    </div>
  );
}

export default WhoWeAre;

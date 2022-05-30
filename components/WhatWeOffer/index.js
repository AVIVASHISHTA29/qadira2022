import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
function WhatWeOffer() {
  return (
    <div className={styles.container} id="product">
      <div className={styles.marqueeDiv}>
        <Marquee speed={100} pauseOnHover={true} gradient={false}>
          <p className={styles.specialText}>
            We don&apos;t bleed blue.
            <span className={"stroke"} style={{ color: "#fff", opacity: 0.5 }}>
              We don&apos;t bleed blue.
            </span>
            We don&apos;t bleed blue. We don&apos;t bleed blue.
            <span className={"stroke"} style={{ color: "#fff", opacity: 0.5 }}>
              We don&apos;t bleed blue.
            </span>
          </p>
        </Marquee>
      </div>
      <div className={styles.wrapper}>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          What We Offer
        </motion.h1>
        <p>We offer a range of anion chip disposable sanitary pads.</p>
        <div className={styles.flexDivImage}>
          <div className={styles.leftDiv}>
            <div className={styles.innerDiv}>
              <h1>Kills 99% Bacteria</h1>
              <span
                className={styles.line}
                style={{ width: "50%", right: "-200px" }}
              ></span>
            </div>
            <div className={styles.innerDiv}>
              <h1>Unscented</h1>
              <span
                className={styles.line}
                style={{ width: "100%", right: "-200px" }}
              ></span>
            </div>

            <div className={styles.innerDiv}>
              <h1>Skin Friendly</h1>
              <span
                className={styles.line}
                style={{ width: "80%", right: "-200px" }}
              ></span>
            </div>
          </div>
          <img
            className={styles.productImage}
            src={"/assets/images/product.png"}
          />
          <div className={styles.rightDiv}>
            <div className={styles.innerDiv2}>
              <span
                className={styles.line2}
                style={{ width: "80%", left: "-55%" }}
              ></span>
              <h1>Chemical Free</h1>
            </div>
            <div className={styles.innerDiv2}>
              <span
                className={styles.line2}
                style={{ width: "50%", left: "-55%" }}
              ></span>
              <h1 style={{ left: "-60px" }}>Helps Prevent UTI&apos;s</h1>
            </div>

            <div className={styles.innerDiv2}>
              <span
                className={styles.line2}
                style={{ width: "85%", left: "-60%" }}
              ></span>
              <h1>Biodegradable</h1>
            </div>
          </div>
        </div>
        <div className={styles.pointsDiv}>
          <h1>
            <span>1.</span> Kills 99% Bacteria
          </h1>
          <h1>
            <span>2.</span> Unscented
          </h1>
          <h1>
            <span>3.</span> Skin Friendly
          </h1>
          <h1>
            <span>4.</span> Chemical Free
          </h1>
          <h1>
            <span>5.</span> Prevent UTI&apos;s
          </h1>
          <h1>
            <span>6.</span> Biodegradable
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;

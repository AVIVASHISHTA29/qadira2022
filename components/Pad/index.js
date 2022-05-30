import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";
function Pad() {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        What We Offer
      </motion.h1>
      <img
        src={"/assets/pad.svg"}
        style={{
          width: "90%",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
    </div>
  );
}

export default Pad;

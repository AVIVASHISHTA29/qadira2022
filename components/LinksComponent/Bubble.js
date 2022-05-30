import React from "react";
import styles from "./styles.module.css";
function Bubble({ text }) {
  return <div className={styles.bubbleWrapper}>{text}</div>;
}

export default Bubble;

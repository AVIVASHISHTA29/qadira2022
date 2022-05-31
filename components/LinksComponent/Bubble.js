import React from "react";
import styles from "./styles.module.css";
function Bubble({ top, bottom }) {
  return( <div className={styles.bubbleWrapper}> {top} <br/> {bottom}</div>);
}

export default Bubble;

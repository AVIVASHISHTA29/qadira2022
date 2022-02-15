import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
function IntroComponent3() {
  return (
    <div className={styles.wrapper}>
      <Image src={"/assets/images/intro3.png"} height={900} width={1300} />
    </div>
  );
}

export default IntroComponent3;

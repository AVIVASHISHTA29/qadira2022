import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
function VerticalNavBar() {
  return (
    <div className={styles.verticalNavbar}>
      <Link href="/" passHref={true}>
        <div className={styles.flexDiv}>
          <div className={styles.point}></div>
          <h1>Home</h1>
        </div>
      </Link>
      <Link href="/campaigns" passHref={true}>
        <div className={styles.flexDiv}>
          <div className={styles.point}></div>
          <h1>Campaigns</h1>
        </div>
      </Link>
      <Link href="/creatives" passHref={true}>
        <div className={styles.flexDiv}>
          <div className={styles.point}></div>
          <h1>Creatives</h1>
        </div>
      </Link>
      <Link href="/product" passHref={true}>
        <div className={styles.flexDiv}>
          <div className={styles.point}></div>
          <h1>Product</h1>
        </div>
      </Link>
    </div>
  );
}

export default VerticalNavBar;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import IntroComponent from "../components/IntroComponent";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeOffer from "../components/WhatWeOffer";
import Campaigns from "../components/Campaigns";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.addEventListener("scroll", stickNavbar);

      return () => {
        window.removeEventListener("scroll", stickNavbar);
      };
    }
  }, []);

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      let windowHeight = window.scrollY;
      windowHeight > innerHeight ? setFlag(true) : setFlag(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={styles.parallax}
      ></motion.div>
      <div className={styles.parallax2}>
        <Header fixed={flag} />
        <IntroComponent />
        <WhoWeAre />
        <WhatWeOffer />
        <Campaigns />
        <Footer />
      </div>
    </div>
  );
}

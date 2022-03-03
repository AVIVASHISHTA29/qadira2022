import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import IntroComponent from "../components/IntroComponent";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeOffer from "../components/WhatWeOffer";
import Campaigns from "../components/Campaigns";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <IntroComponent />
      <WhoWeAre />
      <WhatWeOffer />
      <Campaigns />
      <Footer />
    </div>
  );
}

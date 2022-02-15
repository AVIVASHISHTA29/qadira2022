import Head from "next/head";
import Image from "next/image";
import IntroComponent from "../components/IntroComponent";
import IntroComponent2 from "../components/IntroComponent2";
import IntroComponent3 from "../components/IntroComponent3";
import VerticalNavBar from "../components/VerticalNavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mainWrapper">
      <div className="leftContainer">
        <VerticalNavBar />
      </div>
      <div className="rightContainer">
        <IntroComponent />
        <IntroComponent2 />
        <IntroComponent3 />
      </div>
    </div>
  );
}

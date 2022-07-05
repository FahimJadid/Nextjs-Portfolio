import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "./../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jadid | Full-stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

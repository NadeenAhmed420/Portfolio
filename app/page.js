import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Layout/Contact";

const Home = () => {
  return (
    <main >
      <About />
      <Portfolio />
      <Contact/>
    </main>
  );
};

export default Home;

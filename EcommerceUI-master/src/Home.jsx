import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Works />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

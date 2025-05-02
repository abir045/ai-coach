import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Coaching from "./Coaching";
import Courses from "./Courses";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Coaching />
      <Courses />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

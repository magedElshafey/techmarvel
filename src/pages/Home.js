import React from "react";
import Hero from "../components/home/hero/Hero";
import Why from "../components/home/why/Why";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import Contact from "../components/home/contact/Contact";
const Home = ({ why, aboutUs, services, contact }) => {
  return (
    <div className="mt-5 pt-5">
      <Hero />
      <Why data={why} />
      <About data={aboutUs} />
      <Services data={services} />
      <Contact data={contact} />
    </div>
  );
};

export default Home;

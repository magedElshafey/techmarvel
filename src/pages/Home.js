import React from "react";
import Hero from "../components/home/hero/Hero";
import Why from "../components/home/why/Why";

const Home = ({ partners, why }) => {
  return (
    <div className="mt-5 pt-5">
      <Hero data={partners} />
      <Why data={why} />
    </div>
  );
};

export default Home;

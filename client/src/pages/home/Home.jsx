import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/home/Hero";
import Services from "./Services";
import Features from "./Features";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
    </MainLayout>
  );
};

export default Home;

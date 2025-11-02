import React from "react";
import Hero from "../components/Homepage/Hero";
import ServiceGrid from "../components/Homepage/ServiceGrid";
import FeedbackSection from "../components/Homepage/FeedbackSection";
import ServiceCard from "../components/Homepage/ServiceCard";
import services from "../data/services";


const Home = () => {
  return (
    <>
    
      <Hero />
      <ServiceGrid />
      <FeedbackSection />
    </>
  );
};

export default Home;




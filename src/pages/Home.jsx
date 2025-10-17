import React from "react";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import FeedbackSection from "../components/FeedbackSection";
import ServiceCard from "../components/ServiceCard";
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




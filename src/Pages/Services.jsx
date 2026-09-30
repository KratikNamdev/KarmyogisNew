import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import ServicesGrid from "../Components/Services/ServicesGrid";

const Services = () => {
  return (
    <main className="bg-[#020202]">
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
};

export default Services;
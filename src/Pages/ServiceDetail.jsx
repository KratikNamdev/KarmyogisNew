import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import servicesData from "../data/servicesData";
import ServiceDetailHero from "../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverview from "../Components/ServiceDetail/ServiceOverview";
import ServiceCapabilities from "../Components/ServiceDetail/ServiceCapabilities";
import ServiceProcess from "../Components/ServiceDetail/ServiceProcess";
import ServiceCTA from "../Components/ServiceDetail/ServiceCTA";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020202] px-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#FF1638]">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-white">
            Service not found.
          </h1>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF1638] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back To Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#020202]">
      <ServiceDetailHero service={service} />
      <ServiceOverview service={service} />
      <ServiceCapabilities service={service} />
      <ServiceProcess service={service} />
      <ServiceCTA service={service} />
    </main>
  );
};

export default ServiceDetail;
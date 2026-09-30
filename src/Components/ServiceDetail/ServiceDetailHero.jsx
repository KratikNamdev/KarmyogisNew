import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const ServiceDetailHero = ({ service }) => {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#020202] px-5 pt-[140px] sm:px-6 lg:min-h-screen lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#FF1638]/[0.07] blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1450px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.25em] text-[#FF1638]"
        >
          {service.number} / SERVICES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[7rem]"
        >
          {service.title}
          <span className="text-[#FF1638]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
        >
          {service.heroDescription}
        </motion.p>

        <motion.a
          href="#service-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#FF1638] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e91030] hover:shadow-[0_0_35px_rgba(255,22,56,0.25)]"
        >
          Explore Service

          <ArrowDownRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#020202] px-5 pt-[140px] sm:px-6 lg:min-h-screen lg:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[550px] w-[550px] rounded-full bg-[#FF1638]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1450px]">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#FF1638]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF1638]">
              What We Do
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]"
          >
            Technology.
            <br />
            <span className="text-[#FF1638]">Strategy. Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
          >
            We combine technology, creativity, and digital strategy to build
            solutions that help businesses move forward.
          </motion.p>

          <motion.a
            href="#services-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#FF1638]/40 hover:bg-[#FF1638]/10"
          >
            Explore Services

            <ArrowDownRight
              size={17}
              className="text-[#FF1638] transition-transform duration-300 group-hover:translate-y-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
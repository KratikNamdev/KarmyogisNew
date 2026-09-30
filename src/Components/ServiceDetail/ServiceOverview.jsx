import React from "react";
import { motion } from "framer-motion";

const ServiceOverview = ({ service }) => {
  return (
    <section
      id="service-overview"
      className="border-t border-white/[0.07] bg-[#050505] px-5 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#FF1638]">
            Overview
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
          >
            {service.overviewTitle}
          </motion.h2>
        </div>

        <div className="lg:col-span-7 lg:pt-10">
          <p className="max-w-3xl text-base leading-8 text-white/45 sm:text-lg">
            {service.overviewDescription}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <span className="font-mono text-[10px] text-[#FF1638]">
                  0{index + 1}
                </span>

                <p className="mt-3 text-sm font-medium text-white/75">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
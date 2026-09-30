import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCapabilities = ({ service }) => {
  return (
    <section className="bg-[#020202] px-5 py-24 sm:px-6 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#FF1638]">
              What We Do
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Our capabilities
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 lg:text-right">
            A focused set of capabilities designed to solve practical
            business and technology challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {service.capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#070707] p-7 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF1638]"
                />
              </div>

              <h3 className="mt-12 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/40">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
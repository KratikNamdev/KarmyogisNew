import React from "react";
import { motion } from "framer-motion";

const ServiceProcess = ({ service }) => {
  return (
    <section className="border-y border-white/[0.07] bg-[#050505] px-5 py-24 sm:px-6 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1450px]">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#FF1638]">
            How We Work
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            From idea to execution.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/40">
            A structured approach keeps every project focused, transparent,
            and aligned with the outcome we're trying to achieve.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-5">
          {service.process.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative border-l border-white/[0.1] p-6 first:border-l-0 md:min-h-[220px]"
            >
              <span className="font-mono text-3xl font-medium text-[#FF1638]/40">
                0{index + 1}
              </span>

              <h3 className="mt-10 max-w-[180px] text-base font-semibold leading-6 text-white">
                {step}
              </h3>

              {index !== service.process.length - 1 && (
                <span className="absolute right-0 top-8 hidden h-px w-10 bg-[#FF1638]/30 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
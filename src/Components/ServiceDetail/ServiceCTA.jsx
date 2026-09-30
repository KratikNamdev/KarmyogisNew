import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCTA = ({ service }) => {
  return (
    <section className="relative overflow-hidden bg-[#020202] px-5 py-28 sm:px-6 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF1638]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.25em] text-[#FF1638]"
        >
          LET'S BUILD TOGETHER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
        >
          {service.ctaTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
        >
          {service.ctaDescription}
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#FF1638] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e91030] hover:shadow-[0_0_45px_rgba(255,22,56,0.25)]"
        >
          Start A Conversation

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default ServiceCTA;
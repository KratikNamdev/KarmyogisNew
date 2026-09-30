import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const FAQHero = () => {
  return (
    <section
      id="faq"
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#020202] px-5 pt-[140px] sm:px-6 lg:min-h-screen lg:px-10"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#FF1638]/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#8B0018]/[0.06] blur-[130px]" />

      {/* Red Vertical Line */}
      <div className="pointer-events-none absolute right-[12%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#FF1638]/20 to-transparent lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1450px]">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#FF1638]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF1638]">
              Frequently Asked Questions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]"
          >
            Questions?
            <br />
            <span className="text-[#FF1638]">We've got answers.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
          >
            Find answers to some of the most common questions about our
            services, process, technology, and the way we work with businesses.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#faqs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#FF1638]/40 hover:bg-[#FF1638]/10"
          >
            Explore FAQs

            <ArrowDownRight
              size={17}
              className="text-[#FF1638] transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-[-15deg]"
            />
          </motion.a>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-10 left-0 right-0 hidden items-center justify-between border-t border-white/[0.07] pt-5 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            KARMYOGIS / FAQ
          </span>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
            Scroll To Explore
            <ArrowUpRight size={14} className="text-[#FF1638]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQHero;
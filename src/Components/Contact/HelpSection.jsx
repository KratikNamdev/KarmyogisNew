import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Smartphone,
  Megaphone,
  Search,
  Palette,
  Share2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Salesforce",
    description:
      "Build smarter CRM workflows, automate operations, and create better customer experiences with Salesforce.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance websites and digital platforms designed around your business, users, and growth goals.",
    icon: Code2,
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Scalable mobile applications built to turn ideas into reliable and engaging digital experiences.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies designed to improve visibility, engagement, and business growth.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Search-focused strategies that help your business build stronger organic visibility and reach the right audience.",
    icon: Search,
  },
  {
    number: "06",
    title: "Social Media",
    description:
      "Strategic social media management and content that keeps your brand active, relevant, and connected.",
    icon: Share2,
  },
  {
    number: "07",
    title: "Graphics & Design",
    description:
      "Purpose-driven visual design that gives your brand a consistent, recognizable, and premium digital presence.",
    icon: Palette,
  },
];

const HelpSection = () => {
  return (
    <section
      id="what-we-help"
      className="relative overflow-hidden bg-[#020202] px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-600/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#FF1638]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF1638]">
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
            >
              What can we
              <span className="text-[#FF1638]"> help you build?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-sm leading-6 text-white/40 lg:pb-1 lg:text-right"
          >
            From digital products to growth strategies, we bring technology,
            creativity, and execution together around your business goals.
          </motion.p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF1638]/30 sm:p-7"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FF1638]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#FF1638]/10" />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white transition-all duration-500 group-hover:border-[#FF1638]/30 group-hover:bg-[#FF1638]/10 group-hover:text-[#FF1638]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-[#FF1638]/60">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-12">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/40">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-white/45">
                    Explore
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 group-hover:border-[#FF1638]/40 group-hover:bg-[#FF1638] group-hover:text-white">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col gap-5 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/35">
            Don't see exactly what you need?
            <span className="ml-2 text-white/70">
              Tell us what you're trying to achieve.
            </span>
          </p>

          <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF1638]/60">
            KARMYOGIS / 03
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpSection;
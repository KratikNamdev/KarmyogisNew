import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cloud,
  Database,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Intelligent solutions that automate processes and unlock new possibilities.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Scalable software products built around your business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud & Integration",
    description:
      "Connected, secure and scalable cloud solutions for modern businesses.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description:
      "Turn complex data into connected systems, insights and better decisions.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Modernize business operations with technology designed for long-term growth.",
  },
];

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-white lg:px-12 lg:py-40">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[150px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-red-500" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-red-400">
            Beyond Technology
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[76px]">
              Technology is not just
              <span className="text-gray-500"> what we build.</span>
              <br />

              <span className="bg-gradient-to-r from-white via-[#8eb9df] to-white bg-clip-text text-transparent">
                It's what we make possible.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <div>
              <p className="max-w-xl text-base leading-8 text-gray-400 md:text-lg">
                Karmyogis is a technology company focused on turning complex
                business challenges into purposeful digital experiences,
                intelligent systems and scalable software solutions.
              </p>

              <button className="group mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-sm font-medium transition-colors hover:border-red-500">
                Discover our approach

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent lg:my-28" />

        {/* Capability Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/30 hover:bg-white/[0.045]"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-red-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-gray-600">
                    0{index + 1}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                    <Icon
                      size={18}
                      className="text-gray-400 transition-colors duration-300 group-hover:text-red-400"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    Explore
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400"
                  />
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-600 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-6 text-gray-500">
            From strategy to execution, we bring technology, creativity and
            engineering together to build solutions that move businesses
            forward.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Karmyogis
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
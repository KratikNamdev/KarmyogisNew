import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Truck,
  Home,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "Digital platforms and technology solutions designed to improve healthcare operations and experiences.",
    icon: HeartPulse,
    tag: "HEALTHCARE",
  },
  {
    number: "02",
    title: "Finance",
    description:
      "Secure, scalable technology for financial services, workflows, data and customer experiences.",
    icon: Landmark,
    tag: "FINANCE",
  },
  {
    number: "03",
    title: "Education",
    description:
      "Modern digital products that connect institutions, educators and learners.",
    icon: GraduationCap,
    tag: "EDUCATION",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Connected systems and automation that help manufacturing businesses operate smarter.",
    icon: Factory,
    tag: "MANUFACTURING",
  },
  {
    number: "05",
    title: "Retail & E-Commerce",
    description:
      "Digital commerce experiences built to connect brands with customers and accelerate growth.",
    icon: ShoppingBag,
    tag: "RETAIL",
  },
  {
    number: "06",
    title: "Logistics",
    description:
      "Technology solutions that improve visibility, efficiency and operational workflows.",
    icon: Truck,
    tag: "LOGISTICS",
  },
  {
    number: "07",
    title: "Real Estate",
    description:
      "Digital platforms that simplify property operations, discovery and customer engagement.",
    icon: Home,
    tag: "REAL ESTATE",
  },
  {
    number: "08",
    title: "Professional Services",
    description:
      "Purpose-built technology that helps service businesses streamline operations and scale.",
    icon: Building2,
    tag: "SERVICES",
  },
];

const IndustryCard = ({ industry }) => {
  const Icon = industry.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
     className="
  group
  relative
  h-[440px]
  w-full
  max-w-full
  min-w-0
  shrink
  overflow-hidden
  rounded-[30px]
  border
  border-white/[0.08]
  bg-[#0a0a0a]
  p-6
  transition-all
  duration-500
  hover:border-red-500/30
  sm:p-8
  lg:w-[420px]
  lg:shrink-0
" >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-600/[0.08] blur-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-blue-600/[0.05] blur-[100px]" />

      {/* Huge Number */}
      <span className="pointer-events-none absolute -right-5 -top-8 text-[190px] font-bold leading-none tracking-[-0.08em] text-white/[0.025]">
        {industry.number}
      </span>

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs text-gray-600">
          {industry.number}
        </span>

        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-700">
          {industry.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="relative z-10 mt-16 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-500 group-hover:border-red-500/40 group-hover:bg-red-500/10">
        <Icon
          size={23}
          strokeWidth={1.5}
          className="text-gray-500 transition-colors duration-300 group-hover:text-red-400"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8">
        <h3 className="text-3xl font-medium tracking-[-0.035em] text-white">
          {industry.title}
        </h3>

        <p className="mt-4 max-w-[330px] text-sm leading-6 text-gray-500">
          {industry.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
          Explore Industry
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-500">
          <ArrowUpRight
            size={17}
            className="text-gray-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-white"
          />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-600 to-blue-500 transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
};

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    0 -> Start
    1 -> End

    Cards move ONLY horizontally while
    this section is sticky.
  */

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-72%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020202] text-white"
    >
      {/* =====================================================
          DESKTOP HORIZONTAL SCROLL
      ====================================================== */}

      <div className="hidden lg:block">

        {/* This height controls how long horizontal scrolling lasts */}
        <div className="h-[350vh]">

          {/* Sticky viewport */}
          <div className="sticky top-0 h-screen overflow-hidden">

            {/* Background */}
            <div className="pointer-events-none absolute inset-0">

              <div className="absolute left-[-15%] top-[20%] h-[650px] w-[650px] rounded-full bg-blue-600/[0.04] blur-[180px]" />

              <div className="absolute right-[-15%] bottom-[10%] h-[650px] w-[650px] rounded-full bg-red-600/[0.05] blur-[180px]" />

              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                  `,
                  backgroundSize: "100px 100px",
                }}
              />

            </div>

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-center">

              {/* Header */}
              <div className="mx-auto mb-14 w-full max-w-[1500px] px-12">

                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

                  <span className="text-[10px] uppercase tracking-[0.35em] text-gray-600">
                    Industries We Serve
                  </span>
                </div>

                <div className="mt-7 flex items-end justify-between gap-10">

                  <h2 className="max-w-4xl text-[82px] font-medium leading-[0.92] tracking-[-0.055em]">
                    Technology built
                    <br />

                    <span className="text-gray-600">
                      for your world.
                    </span>
                  </h2>

                  <p className="mb-2 max-w-sm text-sm leading-7 text-gray-600">
                    Technology solutions shaped around the challenges,
                    workflows and opportunities of your industry.
                  </p>

                </div>

              </div>

              {/* =================================================
                  HORIZONTAL TRACK
              ================================================== */}

              <div className="relative w-full overflow-hidden">

                <motion.div
                  style={{ x }}
                  className="flex w-max gap-5 pl-[calc((100vw-1450px)/2)] pr-20"
                >
                  {industries.map((industry) => (
                    <IndustryCard
                      key={industry.number}
                      industry={industry}
                    />
                  ))}
                </motion.div>

              </div>

              {/* Bottom Indicator */}
              <div className="mx-auto mt-12 flex w-full max-w-[1500px] items-center justify-between px-12">

                <div className="flex items-center gap-4">

                  <span className="h-px w-16 bg-white/10" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-700">
                    Scroll to explore
                  </span>

                </div>

                <span className="font-mono text-[10px] text-gray-700">
                  01 / 08
                </span>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}

<div className="w-full max-w-full overflow-hidden px-5 py-24 sm:px-6 sm:py-28 lg:hidden">

        <div className="mb-14">

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
              Industries We Serve
            </span>

          </div>

          <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.05em]">
            Technology built
            <br />

            <span className="text-gray-600">
              for your world.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-7 text-gray-600">
            Technology solutions shaped around the challenges and
            opportunities of your industry.
          </p>

        </div>

<div className="flex w-full max-w-full min-w-0 flex-col gap-4">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.number}
              industry={industry}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
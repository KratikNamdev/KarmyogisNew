import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layout,
  Megaphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI & Automation",
    description:
      "Build intelligent systems that automate processes, improve decisions and unlock new digital possibilities.",
    icon: BrainCircuit,
    label: "INTELLIGENCE",
    gradient: "from-red-500/20 via-transparent to-blue-500/10",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Scalable software products and enterprise applications engineered around your business requirements.",
    icon: Code2,
    label: "ENGINEERING",
    gradient: "from-blue-500/20 via-transparent to-red-500/10",
  },
  {
    number: "03",
    title: "Web & App Development",
    description:
      "High-performance websites and mobile applications designed for modern users and digital products.",
    icon: Globe2,
    label: "DIGITAL",
    gradient: "from-red-500/20 via-transparent to-purple-500/10",
  },
  {
    number: "04",
    title: "Salesforce Solutions",
    description:
      "Consulting, development, integration, migration and support for your Salesforce ecosystem.",
    icon: Workflow,
    label: "SALESFORCE",
    gradient: "from-blue-500/20 via-transparent to-cyan-500/10",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Secure and scalable cloud infrastructure with modern DevOps practices for faster delivery.",
    icon: Cloud,
    label: "INFRASTRUCTURE",
    gradient: "from-red-500/20 via-transparent to-blue-500/10",
  },
  {
    number: "06",
    title: "Data & Analytics",
    description:
      "Connect, manage and transform your data into meaningful insights for smarter decisions.",
    icon: Database,
    label: "DATA",
    gradient: "from-blue-500/20 via-transparent to-red-500/10",
  },
  {
    number: "07",
    title: "UI/UX & Product Design",
    description:
      "Digital experiences combining visual clarity, usability and product-focused design systems.",
    icon: Layout,
    label: "EXPERIENCE",
    gradient: "from-red-500/20 via-transparent to-purple-500/10",
  },
  {
    number: "08",
    title: "Digital Marketing",
    description:
      "SEO, performance marketing, social media and digital strategies that strengthen your presence.",
    icon: Megaphone,
    label: "GROWTH",
    gradient: "from-blue-500/20 via-transparent to-red-500/10",
  },
];

const ServiceCard = ({ service, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const yRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -80]
  );

  const y = useSpring(yRaw, {
    stiffness: 80,
    damping: 20,
  });

  // Scale as card passes viewport
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 1, 0.94]
  );

  // Opacity
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 1],
    [0, 1, 1, 0.65]
  );

  return (
    <div
      ref={ref}
      className="sticky top-[100px] mb-10 md:top-[110px]"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
        }}
        className="relative"
      >
        <div
          className={`
            group relative min-h-[470px] overflow-hidden rounded-[32px]
            border border-white/[0.10]
            bg-gradient-to-br ${service.gradient}
            bg-[#0a0a0a]
            shadow-[0_30px_100px_rgba(0,0,0,0.5)]
            transition-all duration-500
            hover:border-red-500/30
            md:min-h-[520px]
          `}
        >
          {/* Background Grid */}
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
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/[0.07] blur-[120px] transition-all duration-700 group-hover:bg-red-600/[0.12]" />

          {/* Blue Glow */}
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[120px]" />

          {/* Huge Background Number */}
          <div className="pointer-events-none absolute right-[-20px] top-[-50px] select-none text-[220px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] md:text-[300px]">
            {service.number}
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[470px] flex-col justify-between p-7 md:min-h-[520px] md:p-12 lg:p-14">

            {/* Top */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-red-400">
                  {service.number}
                </span>

                <span className="h-px w-10 bg-white/10" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                  {service.label}
                </span>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10"
              >
                <service.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-gray-400 transition-colors duration-300 group-hover:text-red-400"
                />
              </motion.div>

            </div>

            {/* Main */}
            <div className="max-w-4xl">

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[72px]"
              >
                {service.title}
              </motion.h3>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 md:text-base md:leading-8">
                {service.description}
              </p>

            </div>

            {/* Bottom */}
            <div className="mt-12 flex items-end justify-between">

              <div className="hidden gap-2 sm:flex">

                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                  Strategy
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                  Technology
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                  Scale
                </span>

              </div>

              <button className="group/button flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">

                <span className="hidden sm:block">
                  Explore service
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover/button:border-red-500 group-hover/button:bg-red-500">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:rotate-45"
                  />
                </span>

              </button>

            </div>

          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40 lg:px-12">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-20%] top-[25%] h-[600px] w-[600px] rounded-full bg-red-600/[0.035] blur-[180px]" />

        <div className="absolute right-[-20%] top-[50%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.04] blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* Header */}
        <div className="mb-24 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                What We Do
              </span>

            </div>
          </div>

          <div>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[90px]">

              Technology
              <br />

              <span className="text-gray-600">
                without limits.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              From a single idea to a complete digital ecosystem, our
              multidisciplinary capabilities help businesses design, build
              and scale what comes next.
            </p>

          </div>

        </div>

        {/* Parallax Cards */}
        <div className="relative">

          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              total={services.length}
            />
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-center">

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-700">

            <span className="h-px w-10 bg-white/10" />

            Scroll to explore

            <span className="h-px w-10 bg-white/10" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import logo from "../../assets/logo.png";

const reasons = [
  {
    number: "01",
    title: "Business First",
    text: "We start with your business goals, not technology. Every solution is designed to solve real problems and create measurable value.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Built to Scale",
    text: "Our solutions are engineered with scalability in mind, so your technology can evolve as your business grows.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Modern Engineering",
    text: "From AI and cloud to modern web platforms, we use the right technologies to build fast, secure and future-ready products.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    text: "We don't disappear after delivery. We work alongside your team to improve, maintain and evolve your technology.",
    icon: ShieldCheck,
  },
];

const WhyKarmyogisSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#030303] py-28 text-white md:py-36"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Red Ambient Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#ff1638]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#8b0018]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px] px-6 md:px-10">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          
          <motion.div style={{ y: headingY }}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#ff1638]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff4a63]">
                Why Karmyogis
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Technology
              <br />
              <span className="text-white/40">with purpose.</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-white/55 md:text-xl">
              Great technology isn't just about writing code. It's about
              understanding the business, solving the right problems and
              creating something that continues to deliver value.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#ff1638] shadow-[0_0_15px_#ff1638]" />

              <span className="text-sm uppercase tracking-[0.2em] text-white/40">
                Built for what comes next
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mt-24 grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Left Visual */}
          <div className="relative min-h-[500px] overflow-hidden border border-white/[0.08] bg-[#070707] lg:min-h-[650px]">
            
            {/* Corner Lines */}
            <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-[#ff1638]/40" />
            <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-[#ff1638]/40" />

            {/* Center Orb */}
            <motion.div
              style={{
                y: orbY,
                rotate: orbRotate,
              }}
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 md:h-[330px] md:w-[330px]"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.08]" />

              <div className="absolute inset-[25px] rounded-full border border-[#ff1638]/20" />

              <div className="absolute inset-[55px] rounded-full border border-white/[0.06]" />

              {/* Red Glow */}
              <div className="absolute inset-[70px] rounded-full bg-[#ff1638]/10 blur-2xl" />

              {/* Logo Core */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#090909] shadow-[0_0_70px_rgba(255,22,56,0.18)] md:h-36 md:w-36">
                <img
                  src={logo}
                  alt="Karmyogis"
                  className="w-20 object-contain md:w-24"
                />
              </div>

              {/* Orbit Dot */}
              <div className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ff1638] shadow-[0_0_20px_#ff1638]" />
            </motion.div>

            {/* Visual Text */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Our Philosophy
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Think. Build. Transform.
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-semibold tracking-tight text-white/90">
                  01<span className="text-[#ff1638]">.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Reasons */}
          <div className="flex flex-col">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-t border-white/[0.1] py-8 last:border-b md:py-10"
                >
                  <div className="grid gap-5 md:grid-cols-[70px_1fr_50px] md:items-start">

                    {/* Number */}
                    <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                      {item.number}
                    </span>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff3b57] md:text-3xl">
                          {item.title}
                        </h3>

                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/25 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#ff1638]"
                        />
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/55 md:text-base">
                        {item.text}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden h-10 w-10 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#ff1638]/50 group-hover:bg-[#ff1638]/10 md:flex">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/30 transition-all duration-300 group-hover:text-[#ff1638] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Hover Line */}
                  <motion.div
                    className="absolute bottom-[-1px] left-0 h-[1px] bg-[#ff1638]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/[0.08] pt-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-xl leading-8 tracking-tight text-white/65 md:text-2xl">
              Your vision deserves more than a digital solution.
              <span className="text-white">
                {" "}
                It deserves a technology partner.
              </span>
            </p>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ff1638]/40 bg-[#ff1638]/5">
              <ArrowUpRight
                size={20}
                className="text-[#ff1638]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKarmyogisSection;
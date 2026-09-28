import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

const CTASection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#030303] text-white">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large Red Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1638] blur-[180px]"
      />

      {/* Secondary Glow */}
      <div className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#8b0018]/15 blur-[160px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-[1500px] flex-col justify-between px-6 py-10 md:px-10 md:py-12">

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">

          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Karmyogis"
              className="w-28 object-contain md:w-32"
            />

            <span className="hidden h-5 w-[1px] bg-white/15 sm:block" />

            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/30 sm:block">
              Technology • Innovation • Growth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff1638] shadow-[0_0_15px_#ff1638]" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              Let's Connect
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-1 flex-col justify-center py-20">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[1px] w-12 bg-[#ff1638]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#ff4a63]">
              Start Something Meaningful
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl text-[clamp(3.5rem,9vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]"
          >
            Let's build
            <br />

            <span className="text-white/30">
              what's next
            </span>

            <span className="text-[#ff1638]">.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 max-w-xl text-base leading-7 text-white/45 md:text-lg"
          >
            Have an idea, a challenge or a vision for what's next?
            Let's turn it into technology that creates real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-3 bg-[#ff1638] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e20f2f] hover:shadow-[0_0_35px_rgba(255,22,56,0.3)]"
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="mailto:hello@karmyogis.com"
              className="group inline-flex h-14 items-center justify-center gap-3 border border-white/15 bg-white/[0.02] px-7 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/5 hover:text-white"
            >
              Talk to Our Team

              <Mail
                size={17}
                className="text-white/40 transition-colors duration-300 group-hover:text-[#ff1638]"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <div className="grid gap-8 border-t border-white/[0.08] pt-7 md:grid-cols-3 md:items-end">

          {/* Location */}
          <div>
            <div className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/25">
              Based In
            </div>

            <p className="text-sm text-white/55">
              India
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-center">
            <div className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/25">
              Start a Conversation
            </div>

            <a
              href="mailto:hello@karmyogis.com"
              className="text-sm text-white/60 transition-colors hover:text-[#ff1638]"
            >
              hello@karmyogis.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 md:justify-end">
            <Phone
              size={16}
              className="text-[#ff1638]"
            />

            <span className="text-sm text-white/40">
              Let's create something remarkable.
            </span>
          </div>
        </div>

        {/* Decorative Arrow */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[28%] right-[8%] hidden md:block"
        >
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#ff1638]/20 bg-[#ff1638]/[0.03]">
            <ArrowUpRight
              size={38}
              strokeWidth={1}
              className="text-[#ff1638]/70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
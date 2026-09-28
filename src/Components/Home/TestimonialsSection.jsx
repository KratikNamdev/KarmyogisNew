import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import logo from "../../assets/logo.png";

const testimonials = [
  {
    quote:
      "Karmyogis understood what we wanted to achieve and translated our vision into a solution that felt modern, reliable and built for growth.",
    name: "Client Partner",
    role: "Business & Technology",
    company: "Karmyogis Client",
  },
  {
    quote:
      "The team brought together strong technical thinking and a clear understanding of our business requirements. The entire experience felt structured and professional.",
    name: "Technology Leader",
    role: "Enterprise Solutions",
    company: "Karmyogis Client",
  },
  {
    quote:
      "What stood out was their approach to problem solving. They didn't just deliver a product — they thought about how the solution could evolve with the business.",
    name: "Business Founder",
    role: "Digital Transformation",
    company: "Karmyogis Client",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-[#030303] py-28 text-white md:py-36">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#ff1638]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#8b0018]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px] px-6 md:px-10">

        {/* Section Heading */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#ff1638]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff4a63]">
                Client Perspective
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Built together.
              <br />
              <span className="text-white/35">Trusted over time.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/40">
            Technology is only successful when it creates meaningful value for
            the people and businesses using it.
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="relative border border-white/[0.09] bg-[#070707]">

          {/* Top Accent */}
          <div className="absolute left-0 top-0 h-[2px] w-32 bg-[#ff1638]" />

          <div className="grid lg:grid-cols-[0.32fr_1fr]">

            {/* Left Panel */}
            <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden border-b border-white/[0.08] p-8 md:p-12 lg:border-b-0 lg:border-r">

              {/* Decorative Circle */}
              <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full border border-[#ff1638]/10" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff1638]/30 bg-[#ff1638]/5">
                  <Quote
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#ff1638]"
                  />
                </div>

                <p className="mt-8 max-w-xs text-sm leading-7 text-white/35">
                  Real partnerships are built through understanding,
                  communication and technology that delivers.
                </p>
              </div>

              {/* Logo */}
              <div className="relative z-10">
                <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Technology Partner
                </div>

                <img
                  src={logo}
                  alt="Karmyogis"
                  className="w-32 object-contain opacity-80"
                />
              </div>
            </div>

            {/* Right Quote */}
            <div className="relative flex min-h-[520px] flex-col justify-between p-8 md:p-12 lg:p-16">

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-4xl"
                >
                  {/* Quote Number */}
                  <div className="mb-10 flex items-center gap-4">
                    <span className="text-xs tracking-[0.25em] text-[#ff1638]">
                      0{active + 1}
                    </span>

                    <div className="h-[1px] w-16 bg-white/10" />

                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                      Testimonial
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-3xl font-medium leading-[1.25] tracking-[-0.03em] text-white md:text-4xl lg:text-[46px]">
                    “{current.quote}”
                  </blockquote>

                  {/* Client */}
                  <div className="mt-12">
                    <div className="text-lg font-medium text-white">
                      {current.name}
                    </div>

                    <div className="mt-1 text-sm text-white/35">
                      {current.role}
                    </div>

                    <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[#ff1638]">
                      {current.company}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-6">

                {/* Progress */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className="group flex h-5 items-center"
                    >
                      <span
                        className={`h-[2px] transition-all duration-300 ${
                          index === active
                            ? "w-12 bg-[#ff1638]"
                            : "w-6 bg-white/15 group-hover:bg-white/35"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10"
                  >
                    <ArrowLeft
                      size={18}
                      className="text-white/50 transition-colors group-hover:text-[#ff1638]"
                    />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10"
                  >
                    <ArrowRight
                      size={18}
                      className="text-white/50"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-5 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/25">
            From first conversation to long-term partnership
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff1638] shadow-[0_0_15px_#ff1638]" />

            <span className="text-sm text-white/40">
              Your success is the real outcome
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
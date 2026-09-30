import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const MapSection = () => {
  return (
    <section
      id="location"
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
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-red-600/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#FF1638]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF1638]">
                Find Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
            >
              We're here to
              <span className="text-[#FF1638]"> connect.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-sm leading-6 text-white/40 lg:text-right"
          >
            Have a project to discuss? Visit us or reach out to start a
            conversation about what's next.
          </motion.p>
        </div>

        {/* Map + Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#080808]"
        >
          {/* Map */}
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[500px] lg:h-[560px]">
            <iframe
              title="Karmyogis Location"
              src="https://www.google.com/maps?q=Indore,Madhya+Pradesh,India&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.9] contrast-[0.85] opacity-70"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Dark Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/25" />

            {/* Red Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020202]/40 via-transparent to-[#020202]/30" />

            {/* Location Pin */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FF1638] shadow-[0_0_50px_rgba(255,22,56,0.45)]">
                <MapPin size={27} className="text-white" />

                <span className="absolute inset-[-12px] animate-ping rounded-full border border-[#FF1638]/40" />
              </div>
            </div>

            {/* Location Card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto">
              <div className="w-full rounded-2xl border border-white/[0.1] bg-[#050505]/90 p-5 backdrop-blur-xl sm:w-[360px]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF1638]/10 text-[#FF1638]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                      Our Location
                    </p>

                    <h3 className="mt-1 text-base font-semibold text-white">
                      Karmyogis
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-white/45">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Indore,Madhya+Pradesh,India"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-white">
                    Open In Google Maps
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#FF1638] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            Building meaningful digital experiences from India.
          </p>

          <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF1638]/60">
            KARMYOGIS / 04
          </span>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
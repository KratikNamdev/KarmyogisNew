import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

const ServicesGrid = () => {
  return (
    <section
      id="services-list"
      className="relative overflow-hidden bg-[#020202] px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF1638]">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            Built around what
            <span className="text-[#FF1638]"> your business needs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group"
            >
              <Link
                to={`/services/${service.slug}`}
                className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#080808] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF1638]/30 sm:p-8"
              >
                <div className="absolute right-[-70px] top-[-70px] h-48 w-48 rounded-full bg-[#FF1638]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#FF1638]/10" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#FF1638]">
                    {service.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 group-hover:border-[#FF1638]/40 group-hover:bg-[#FF1638] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <div className="relative mt-auto">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {service.shortDescription}
                  </p>

                  <div className="mt-7 border-t border-white/[0.07] pt-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 transition-colors group-hover:text-[#FF1638]">
                      View Service
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
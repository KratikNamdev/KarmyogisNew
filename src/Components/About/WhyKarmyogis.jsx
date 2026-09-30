import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Business-First Thinking",
    description:
      "We understand the business problem first and then build technology around the real objective.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Built To Scale",
    description:
      "Our solutions are designed with flexibility and scalability in mind, so they can evolve with your business.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Reliable Execution",
    description:
      "From planning to development and delivery, we focus on clear communication, quality and dependable execution.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Always Moving Forward",
    description:
      "We continuously explore better technologies, smarter approaches and new possibilities to create lasting value.",
    icon: Zap,
  },
];

const WhyKarmyogis = () => {
  return (
    <section
      id="why-karmyogis"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020202]
        py-24
        text-white
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Red Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-red-950/[0.07]
            blur-[180px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_15px_rgba(239,68,68,0.8)]
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-600
                  sm:text-[10px]
                  sm:tracking-[0.4em]
                "
              >
                Why Karmyogis
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h2
              className="
                max-w-[950px]
                text-[43px]
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                sm:text-[56px]
                md:text-[68px]
                lg:text-[78px]
                xl:text-[88px]
              "
            >
              Built around
              <br />

              <span className="text-gray-600">
                your ambition.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[14px]
                leading-7
                text-gray-600
                sm:text-[15px]
                sm:leading-8
              "
            >
              We bring together business understanding, technology
              expertise and a long-term mindset to create solutions
              that move businesses forward.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            REASONS GRID
        ================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            border-t
            border-white/[0.07]
            sm:mt-20
            sm:grid-cols-2
            lg:mt-28
            lg:grid-cols-4
          "
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  border-b
                  border-white/[0.07]
                  p-6
                  transition-colors
                  duration-500
                  hover:bg-white/[0.015]
                  sm:p-8
                  lg:min-h-[430px]
                  lg:border-b-0
                  lg:border-r
                  lg:p-9
                  xl:p-10
                "
              >
                {/* Number */}
                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.15em]
                    text-red-500/70
                  "
                >
                  {reason.number}
                </span>

                {/* Large Background Number */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-4
                    -top-6
                    text-[150px]
                    font-bold
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.02]
                    transition-all
                    duration-500
                    group-hover:text-red-500/[0.035]
                  "
                >
                  {reason.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    mt-16
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:border-red-500/40
                    group-hover:bg-red-500/10
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-red-400
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-7">
                  <h3
                    className="
                      max-w-[250px]
                      text-[24px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-red-400
                      sm:text-[27px]
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[290px]
                      text-[13px]
                      leading-6
                      text-gray-600
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    bottom-7
                    left-6
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    transition-all
                    duration-500
                    group-hover:border-red-500
                    group-hover:bg-red-500
                    sm:left-8
                    lg:left-9
                    xl:left-10
                  "
                >
                  <ArrowUpRight
                    size={15}
                    className="
                      text-gray-600
                      transition-all
                      duration-300
                      group-hover:rotate-45
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Bottom Red Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-red-700
                    via-red-500
                    to-red-400
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              text-[18px]
              font-medium
              leading-[1.3]
              tracking-[-0.025em]
              text-gray-400
              sm:text-[22px]
            "
          >
            One goal.
            <span className="text-gray-700">
              {" "}Build technology that creates real progress.
            </span>
          </p>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            KARMYOGIS / 05
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKarmyogis;
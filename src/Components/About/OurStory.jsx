import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const storySteps = [
  {
    number: "01",
    year: "BEGINNING",
    title: "Ideas Start With A Purpose.",
    description:
      "Every meaningful digital journey starts with understanding the problem, the people and the opportunity behind it.",
  },
  {
    number: "02",
    year: "EXPERTISE",
    title: "Technology Becomes The Foundation.",
    description:
      "We bring together design, development and technology expertise to turn ideas into practical digital solutions.",
  },
  {
    number: "03",
    year: "GROWTH",
    title: "Solutions Evolve With Business.",
    description:
      "As businesses change, technology needs to evolve with them. We build with scalability, flexibility and long-term growth in mind.",
  },
  {
    number: "04",
    year: "WHAT'S NEXT",
    title: "We Keep Building Forward.",
    description:
      "Our journey continues with new technologies, new challenges and new opportunities to create meaningful digital impact.",
  },
];

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#030303]
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
            left-[-15%]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-950/[0.08]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[-15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/[0.04]
            blur-[170px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
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
                Our Story
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
                max-w-[900px]
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
              A journey shaped by
              <br />

              <span className="text-gray-600">
                technology,
              </span>{" "}
              <span>ideas & ambition.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[600px]
                text-[14px]
                leading-7
                text-gray-600
                sm:text-[15px]
                sm:leading-8
              "
            >
              We continue to evolve with every project, every challenge
              and every new possibility technology brings.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div className="relative mt-20 sm:mt-24 lg:mt-32">
          {/* Vertical Line */}
          <div
            className="
              absolute
              bottom-0
              left-[11px]
              top-0
              w-px
              bg-gradient-to-b
              from-red-500/70
              via-white/[0.08]
              to-transparent
              sm:left-[15px]
            "
          />

          <div className="space-y-0">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  grid
                  grid-cols-1
                  gap-8
                  border-b
                  border-white/[0.07]
                  py-10
                  pl-10
                  sm:py-14
                  sm:pl-14
                  lg:grid-cols-12
                  lg:gap-10
                  lg:py-16
                  lg:pl-0
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-[42px]
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-500/40
                    bg-[#030303]
                    sm:top-[57px]
                    sm:h-8
                    sm:w-8
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-red-500
                      shadow-[0_0_10px_rgba(239,68,68,0.8)]
                    "
                  />
                </div>

                {/* Number */}
                <div className="lg:col-span-2 lg:pl-2">
                  <span
                    className="
                      font-mono
                      text-[11px]
                      tracking-[0.15em]
                      text-red-500/70
                    "
                  >
                    {step.number}
                  </span>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-700
                    "
                  >
                    {step.year}
                  </p>
                </div>

                {/* Title */}
                <div className="lg:col-span-6">
                  <h3
                    className="
                      max-w-[600px]
                      text-[30px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-red-400
                      sm:text-[38px]
                      lg:text-[44px]
                    "
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p
                    className="
                      max-w-[380px]
                      text-[13px]
                      leading-6
                      text-gray-600
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {step.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="
                      mt-6
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      transition-all
                      duration-300
                      group-hover:border-red-500
                      group-hover:bg-red-500
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="
            mt-20
            flex
            flex-col
            gap-6
            sm:mt-24
            lg:mt-28
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              text-[20px]
              font-medium
              leading-[1.25]
              tracking-[-0.025em]
              text-gray-300
              sm:text-[26px]
              lg:text-[30px]
            "
          >
            The story is still being written.
            <span className="text-gray-600">
              {" "}And we're just getting started.
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
            KARMYOGIS / 03
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
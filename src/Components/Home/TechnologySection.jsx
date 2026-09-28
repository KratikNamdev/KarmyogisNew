import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import logo from "../../assets/logo.png";

// ============================================================
// TECHNOLOGIES
// ============================================================
// Abhi sabhi cards mein same Karmyogis logo use ho raha hai.
// Baad mein sirf src replace karke actual technology logos laga
// sakte ho.
// ============================================================

const topTechnologies = [
  {
    name: "React",
    src: logo,
  },
  {
    name: "Node.js",
    src: logo,
  },
  {
    name: "AWS",
    src: logo,
  },
  {
    name: "Java",
    src: logo,
  },
  {
    name: "Salesforce",
    src: logo,
  },
  {
    name: "Azure",
    src: logo,
  },
  {
    name: "MySQL",
    src: logo,
  },
  {
    name: "Python",
    src: logo,
  },
];

const bottomTechnologies = [
  {
    name: "Next.js",
    src: logo,
  },
  {
    name: "MongoDB",
    src: logo,
  },
  {
    name: "Docker",
    src: logo,
  },
  {
    name: "GitHub",
    src: logo,
  },
  {
    name: "TypeScript",
    src: logo,
  },
  {
    name: "Tailwind",
    src: logo,
  },
  {
    name: "Spring Boot",
    src: logo,
  },
  {
    name: "Power BI",
    src: logo,
  },
];

// ============================================================
// TECHNOLOGY CARD
// ============================================================

const TechnologyLogoCard = ({ technology }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.025,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-[112px]
        w-[170px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.075]
        bg-[#090909]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
        transition-all
        duration-500
        hover:border-[#FF1638]/35
        hover:bg-[#0D0D0D]
      "
    >
      {/* ================================================
          METALLIC REFLECTION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-0
          h-full
          w-24
          rotate-[20deg]
          bg-white/[0.025]
          blur-xl
          transition-all
          duration-700
          group-hover:left-[120%]
        "
      />

      {/* ================================================
          RED AMBIENT GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#FF1638]/0
          blur-[45px]
          transition-all
          duration-500
          group-hover:bg-[#FF1638]/10
        "
      />

      {/* ================================================
          TOP RED LINE
      ================================================= */}

      <div
        className="
          absolute
          left-7
          right-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#FF1638]/0
          to-transparent
          transition-all
          duration-500
          group-hover:via-[#FF1638]/60
        "
      />

      {/* ================================================
          CORNER INDICATOR
      ================================================= */}

      <div
        className="
          absolute
          right-3
          top-3
          h-1
          w-1
          rounded-full
          bg-white/10
          transition-all
          duration-300
          group-hover:bg-[#FF1638]
          group-hover:shadow-[0_0_10px_#FF1638]
        "
      />

      {/* ================================================
          CARD CONTENT
      ================================================= */}

      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Logo */}

        <div
          className="
            flex
            h-11
            w-14
            items-center
            justify-center
          "
        >
          <img
            src={technology.src}
            alt={technology.name}
            className="
              max-h-10
              max-w-12
              object-contain
              opacity-55
              transition-all
              duration-500
              group-hover:opacity-100
            "
          />
        </div>

        {/* Technology name */}

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/25
            transition-colors
            duration-300
            group-hover:text-white/65
          "
        >
          {technology.name}
        </span>
      </div>
    </motion.div>
  );
};

// ============================================================
// MARQUEE
// ============================================================

const TechnologyMarquee = ({
  technologies,
  reverse = false,
}) => {
  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="
          flex
          w-max
          gap-4
        "
        animate={{
          x: reverse
            ? ["-50%", "0%"]
            : ["0%", "-50%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedTechnologies.map(
          (technology, index) => (
            <TechnologyLogoCard
              key={`${technology.name}-${index}`}
              technology={technology}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

// ============================================================
// ORBIT
// ============================================================

const Orbit = ({
  className,
  duration,
  reverse = false,
  children,
}) => {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        absolute
        rounded-full
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// TECHNOLOGY SECTION
// ============================================================

const TechnologySection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030303]
        py-32
        sm:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)]
            [background-size:75px_75px]
          "
        />

        {/* Center red ambient */}

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#FF1638]/[0.025]
            blur-[160px]
          "
        />

        {/* Left red glow */}

        <div
          className="
            absolute
            left-[-180px]
            top-[30%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#FF1638]/[0.035]
            blur-[140px]
          "
        />

        {/* Right dark-red glow */}

        <div
          className="
            absolute
            right-[-180px]
            bottom-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#8B0018]/[0.045]
            blur-[140px]
          "
        />
      </div>

      <div className="relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#FF1638]/20
              bg-[#FF1638]/[0.035]
              px-4
              py-2
            "
          >
            <Sparkles
              size={13}
              className="text-[#FF5368]"
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#FF6A7B]
              "
            >
              Technology Ecosystem
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mt-7
              text-4xl
              font-semibold
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-[68px]
              lg:leading-[1.02]
            "
          >
            Technology that
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-[#D6D6D6]
                to-[#FF334D]
                bg-clip-text
                text-transparent
              "
            >
              connects everything.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/35
              sm:text-base
            "
          >
            A powerful technology ecosystem connecting
            modern development, cloud, data, automation
            and enterprise platforms under one roof.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN TECHNOLOGY ECOSYSTEM
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-24
            max-w-[1800px]
          "
        >
          {/* ==================================================
              TOP LOGO ROW
          ================================================== */}

          <div className="relative z-10">
            {/* Left fade */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-20
                w-32
                bg-gradient-to-r
                from-[#030303]
                to-transparent
                sm:w-56
              "
            />

            {/* Right fade */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-20
                w-32
                bg-gradient-to-l
                from-[#030303]
                to-transparent
                sm:w-56
              "
            />

            <TechnologyMarquee
              technologies={topTechnologies}
            />
          </div>

          {/* ==================================================
              CENTER CORE
          ================================================== */}

          <div
            className="
              relative
              flex
              h-[500px]
              items-center
              justify-center
              sm:h-[600px]
            "
          >
            {/* Ambient red glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#FF1638]/[0.045]
                blur-[100px]
              "
            />

            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <Orbit
              duration={44}
              className="
                h-[390px]
                w-[390px]
                border
                border-white/[0.075]
                sm:h-[500px]
                sm:w-[500px]
              "
            >
              {/* White metallic light */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[-3px]
                  h-2
                  w-2
                  -translate-x-1/2
                  rounded-full
                  bg-white/70
                  shadow-[0_0_15px_rgba(255,255,255,0.5)]
                "
              />

              {/* Red light */}

              <div
                className="
                  absolute
                  bottom-[12%]
                  right-[10%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FF1638]
                  shadow-[0_0_15px_#FF1638]
                "
              />
            </Orbit>

            {/* =================================================
                SECOND ORBIT
            ================================================== */}

            <Orbit
              duration={29}
              reverse
              className="
                h-[300px]
                w-[300px]
                border
                border-[#FF1638]/[0.10]
                sm:h-[390px]
                sm:w-[390px]
              "
            >
              <div
                className="
                  absolute
                  right-[8%]
                  top-[14%]
                  h-2
                  w-2
                  rounded-full
                  bg-[#FF1638]
                  shadow-[0_0_18px_#FF1638]
                "
              />
            </Orbit>

            {/* =================================================
                ROTATING RED ARC
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-transparent
                border-t-[#FF1638]/30
                border-r-[#FF1638]/10
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            {/* =================================================
                CORE GLOW
            ================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.65, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#FF1638]/[0.035]
                blur-[80px]
              "
            />

            {/* =================================================
                MAIN CORE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                relative
                z-30
                flex
                h-[225px]
                w-[225px]
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.12]
                bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.10),rgba(25,25,25,0.96)_45%,rgba(3,3,3,1)_100%)]
                shadow-[0_0_100px_rgba(255,22,56,0.10)]
                sm:h-[275px]
                sm:w-[275px]
              "
            >
              {/* Inner ring */}

              <div
                className="
                  absolute
                  inset-4
                  rounded-full
                  border
                  border-white/[0.055]
                "
              />

              {/* Metallic highlight */}

              <div
                className="
                  absolute
                  left-[25%]
                  top-[12%]
                  h-16
                  w-16
                  rounded-full
                  bg-white/[0.035]
                  blur-2xl
                "
              />

              {/* Red indicator */}

              <div
                className="
                  absolute
                  left-1/2
                  top-5
                  h-1.5
                  w-1.5
                  -translate-x-1/2
                  rounded-full
                  bg-[#FF1638]
                  shadow-[0_0_15px_#FF1638]
                "
              />

              {/* Core content */}

              <div className="relative flex flex-col items-center">
                {/* Karmyogis Logo */}

                <div
                  className="
                    flex
                    h-[68px]
                    w-[68px]
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.10]
                    bg-black/60
                    p-3
                    shadow-[0_0_35px_rgba(255,255,255,0.05)]
                  "
                >
                  <img
                    src={logo}
                    alt="Karmyogis"
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                </div>

                {/* Brand */}

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    tracking-[-0.035em]
                    text-white
                    sm:text-2xl
                  "
                >
                  KARMYOGIS
                </h3>

                {/* Label */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-px
                      w-5
                      bg-[#FF1638]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/35
                    "
                  >
                    Technology Core
                  </span>

                  <span
                    className="
                      h-px
                      w-5
                      bg-[#FF1638]
                    "
                  />
                </div>
              </div>
            </motion.div>

            {/* =================================================
                CONNECTION LINES
            ================================================== */}

            <div
              className="
                absolute
                left-[5%]
                top-1/2
                hidden
                h-px
                w-[32%]
                bg-gradient-to-r
                from-transparent
                via-white/[0.04]
                to-[#FF1638]/20
                lg:block
              "
            />

            <div
              className="
                absolute
                right-[5%]
                top-1/2
                hidden
                h-px
                w-[32%]
                bg-gradient-to-l
                from-transparent
                via-white/[0.04]
                to-[#FF1638]/20
                lg:block
              "
            />
          </div>

          {/* ==================================================
              BOTTOM LOGO ROW
          ================================================== */}

          <div className="relative z-10">
            {/* Left fade */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-20
                w-32
                bg-gradient-to-r
                from-[#030303]
                to-transparent
                sm:w-56
              "
            />

            {/* Right fade */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-20
                w-32
                bg-gradient-to-l
                from-[#030303]
                to-transparent
                sm:w-56
              "
            />

            <TechnologyMarquee
              technologies={bottomTechnologies}
              reverse
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-20
            flex
            max-w-[1350px]
            flex-col
            gap-6
            border-t
            border-white/[0.07]
            px-5
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#FF1638]
                  shadow-[0_0_12px_#FF1638]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/30
                "
              >
                Connected technology
              </span>
            </div>

            <p
              className="
                mt-3
                text-sm
                text-white/35
              "
            >
              One technology ecosystem. Built around your business.
            </p>
          </div>

          <button
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-5
              py-3
              text-xs
              text-white/55
              transition-all
              duration-300
              hover:border-[#FF1638]/40
              hover:bg-[#FF1638]/[0.05]
              hover:text-white
            "
          >
            Explore our capabilities

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
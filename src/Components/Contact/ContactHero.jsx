import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#020202]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main Red Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[40%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-red-600/[0.06]
            blur-[170px]
            sm:h-[650px]
            sm:w-[650px]
          "
        />

        {/* Side Glow */}
        <div
          className="
            absolute
            right-[-15%]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-red-950/[0.08]
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#020202_85%)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          justify-center
          px-5
          pb-24
          pt-[140px]
          sm:px-7
          md:px-10
          lg:px-12
        "
      >
        {/* =================================================
            LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
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
              text-gray-500
              sm:text-[10px]
              sm:tracking-[0.4em]
            "
          >
            Contact Karmyogis
          </span>
        </motion.div>

        {/* =================================================
            HEADING
        ================================================== */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            max-w-[1150px]
            text-[48px]
            font-medium
            leading-[0.93]
            tracking-[-0.06em]
            sm:mt-9
            sm:text-[64px]
            md:text-[78px]
            lg:text-[96px]
            xl:text-[112px]
          "
        >
          Let's start a
          <br />

          <span className="text-gray-600">
            conversation.
          </span>
        </motion.h1>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <p
            className="
              max-w-[590px]
              text-[14px]
              leading-7
              text-gray-500
              sm:text-[15px]
              sm:leading-8
            "
          >
            Have a project in mind, a business challenge to solve,
            or simply want to explore what's possible? Tell us about
            it. We'd love to hear from you.
          </p>

          {/* Scroll CTA */}
          <a
            href="#contact-form"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-gray-400
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Start Here</span>

            <span
              className="
                flex
                h-10
                w-10
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
              <ArrowDownRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-[-45deg]
                "
              />
            </span>
          </a>
        </motion.div>

        {/* =================================================
            BOTTOM META
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            absolute
            bottom-7
            left-5
            right-5
            flex
            items-center
            justify-between
            sm:bottom-8
            sm:left-7
            sm:right-7
            md:left-10
            md:right-10
            lg:left-12
            lg:right-12
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/10 sm:w-16" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-gray-700
                sm:text-[9px]
              "
            >
              Let's Connect
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                sm:text-[9px]
              "
            >
              Scroll
            </span>

            <ArrowDownRight size={14} />
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM RED ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-red-600/50
          to-transparent
        "
      />
    </section>
  );
};

export default ContactHero;
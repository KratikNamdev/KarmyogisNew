import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section
      id="contact"
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

        {/* Main Red Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-600/[0.07]
            blur-[180px]
            sm:h-[700px]
            sm:w-[700px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute
            bottom-[-20%]
            left-[-10%]
            h-[400px]
            w-[400px]
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
          w-full
          max-w-[1500px]
          flex-col
          items-center
          px-5
          text-center
          sm:px-7
          md:px-10
          lg:px-12
        "
      >
        {/* Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-red-500
              shadow-[0_0_15px_rgba(239,68,68,0.9)]
            "
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-gray-600
              sm:text-[10px]
              sm:tracking-[0.45em]
            "
          >
            Let's Build Together
          </span>
        </motion.div>

        {/* =================================================
            MAIN HEADING
        ================================================== */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-[1100px]
            text-[48px]
            font-medium
            leading-[0.92]
            tracking-[-0.06em]
            sm:mt-10
            sm:text-[64px]
            md:text-[76px]
            lg:text-[94px]
            xl:text-[110px]
          "
        >
          Let's build
          <br />

          <span className="text-gray-600">
            what's next.
          </span>
        </motion.h2>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="
            mt-7
            max-w-[600px]
            text-[14px]
            leading-7
            text-gray-500
            sm:mt-9
            sm:text-[15px]
            sm:leading-8
          "
        >
          Have an idea, a business challenge or a digital
          transformation goal? Let's turn it into something
          meaningful.
        </motion.p>

        {/* =================================================
            CTA BUTTON
        ================================================== */}

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          href="/contact"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-4
            rounded-full
            border
            border-red-500/40
            bg-red-500
            px-6
            py-3.5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-white
            shadow-[0_0_40px_rgba(239,68,68,0.12)]
            transition-all
            duration-500
            hover:border-red-400
            hover:bg-red-600
            hover:shadow-[0_0_60px_rgba(239,68,68,0.2)]
            sm:px-7
            sm:py-4
          "
        >
          <span>Start A Conversation</span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-all
              duration-300
              group-hover:bg-white/20
            "
          >
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </span>
        </motion.a>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="
            mt-20
            flex
            w-full
            max-w-[1100px]
            flex-col
            items-center
            gap-4
            border-t
            border-white/[0.06]
            pt-7
            sm:mt-24
            sm:flex-row
            sm:justify-between
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            KARMYOGIS
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-gray-700
              sm:text-[9px]
            "
          >
            Building What Comes Next
          </span>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            / 06
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM RED LINE
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

export default AboutCTA;
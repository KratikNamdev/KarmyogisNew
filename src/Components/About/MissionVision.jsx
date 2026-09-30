import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
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
        <div
          className="
            absolute
            left-[-15%]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-950/[0.07]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            right-[-15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/[0.04]
            blur-[180px]
          "
        />

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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
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
              Mission & Vision
            </span>
          </div>

          <h2
            className="
              mt-7
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
            Driven by purpose.
            <br />

            <span className="text-gray-600">
              Built for what's next.
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            MISSION
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mt-16
            grid
            grid-cols-1
            items-center
            gap-10
            sm:mt-20
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Image */}
          <div
            className="
              group
              relative
              order-2
              overflow-hidden
              rounded-[26px]
              border
              border-white/[0.08]
              bg-[#090909]
              lg:order-1
              lg:rounded-[30px]
            "
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/assets/mission.png"
                alt="Karmyogis Mission"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-black/70
                  via-transparent
                  to-red-950/20
                "
              />

              {/* Red Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-80px]
                  left-[-50px]
                  h-56
                  w-56
                  rounded-full
                  bg-red-600/[0.15]
                  blur-[100px]
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  right-5
                  top-5
                  font-mono
                  text-[11px]
                  tracking-[0.15em]
                  text-white/40
                  sm:right-7
                  sm:top-7
                "
              >
                01
              </span>
            </div>

            {/* Red Bottom Line */}
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
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-red-500/70
              "
            >
              Our Mission
            </span>

            <h3
              className="
                mt-5
                max-w-[600px]
                text-[34px]
                font-medium
                leading-[1]
                tracking-[-0.045em]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Turning technology
              <br />

              <span className="text-gray-600">
                into real impact.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-[560px]
                text-[14px]
                leading-7
                text-gray-500
                sm:text-[15px]
                sm:leading-8
              "
            >
              Our mission is to help businesses use technology with
              clarity and purpose. We create digital solutions that
              solve real problems, improve experiences and enable
              businesses to operate, grow and adapt with confidence.
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-600
              "
            >
              <span className="h-px w-10 bg-red-500/50" />
              Technology with purpose
            </div>
          </div>
        </motion.div>

        {/* =================================================
            VISION
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            grid
            grid-cols-1
            items-center
            gap-10
            sm:mt-28
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Text */}
          <div className="order-1">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-red-500/70
              "
            >
              Our Vision
            </span>

            <h3
              className="
                mt-5
                max-w-[600px]
                text-[34px]
                font-medium
                leading-[1]
                tracking-[-0.045em]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Building what
              <br />

              <span className="text-gray-600">
                comes next.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-[560px]
                text-[14px]
                leading-7
                text-gray-500
                sm:text-[15px]
                sm:leading-8
              "
            >
              Our vision is to build a future where businesses can
              confidently embrace technology to create better
              products, smarter operations and stronger connections
              with their customers.
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-600
              "
            >
              <span className="h-px w-10 bg-red-500/50" />
              Building for tomorrow
            </div>
          </div>

          {/* Image */}
          <div
            className="
              group
              relative
              order-2
              overflow-hidden
              rounded-[26px]
              border
              border-white/[0.08]
              bg-[#090909]
              lg:order-2
              lg:rounded-[30px]
            "
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/assets/vision.png"
                alt="Karmyogis Vision"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tl
                  from-black/75
                  via-transparent
                  to-red-950/20
                "
              />

              {/* Red Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-80px]
                  right-[-50px]
                  h-56
                  w-56
                  rounded-full
                  bg-red-600/[0.15]
                  blur-[100px]
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  right-5
                  top-5
                  font-mono
                  text-[11px]
                  tracking-[0.15em]
                  text-white/40
                  sm:right-7
                  sm:top-7
                "
              >
                02
              </span>
            </div>

            {/* Red Bottom Line */}
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
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            border-t
            border-white/[0.07]
            pt-8
            sm:mt-28
            sm:pt-10
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
              Purpose drives our mission.
              <span className="text-gray-700">
                {" "}Possibility drives our vision.
              </span>
            </p>

            <ArrowUpRight
              size={22}
              className="text-red-500/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
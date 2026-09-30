import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020202]
        py-24
        text-white
        sm:py-28
        lg:py-36
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-12%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-950/[0.08]
          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-14
          px-5
          sm:px-7
          md:px-10
          lg:grid-cols-2
          lg:gap-20
          lg:px-12
        "
      >
        {/* =====================================================
            LEFT — CONTENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          {/* Label */}
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
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-7
              max-w-[720px]
              text-[42px]
              font-medium
              leading-[0.96]
              tracking-[-0.055em]
              sm:text-[54px]
              md:text-[62px]
              lg:text-[68px]
              xl:text-[76px]
            "
          >
            Technology that
            <br />

            <span className="text-gray-600">
              works for
            </span>{" "}
            <span className="text-white">
              your business.
            </span>
          </h2>

          {/* Description */}
          <div className="mt-7 max-w-[600px] space-y-5">
            <p
              className="
                text-[14px]
                leading-7
                text-gray-500
                sm:text-[15px]
                sm:leading-8
              "
            >
              Karmyogis is a technology and digital solutions company
              focused on helping businesses turn ideas, challenges and
              opportunities into meaningful digital experiences.
            </p>

            <p
              className="
                text-[14px]
                leading-7
                text-gray-600
                sm:text-[15px]
                sm:leading-8
              "
            >
              From software and digital products to automation and
              business technology, we bring together strategy,
              creativity and engineering to build solutions that are
              practical, scalable and built for the future.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#our-story"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-gray-400
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Discover Our Story</span>

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
              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </span>
          </a>
        </motion.div>

        {/* =====================================================
            RIGHT — IMAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="order-1 lg:order-2"
        >
          <div
            className="
              group
              relative
              mx-auto
              w-full
              max-w-[650px]
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-[#090909]
              sm:rounded-[32px]
            "
          >
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4]">
              <img
                src="/assets/about.png"
                alt="Karmyogis team and technology"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              {/* Red Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-56
                  w-56
                  rounded-full
                  bg-red-600/[0.18]
                  blur-[100px]
                "
              />

              {/* Image Label */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <div>
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/50
                    "
                  >
                    Karmyogis
                  </span>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-white
                      sm:text-base
                    "
                  >
                    Building What Comes Next
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    backdrop-blur-md
                  "
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>

            {/* Bottom Red Line */}
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
      </div>
    </section>
  );
};

export default WhoWeAre;
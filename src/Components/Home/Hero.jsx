import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Red Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-10 h-[550px] w-[550px] rounded-full bg-red-600/20 blur-[140px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]"
      />

      {/* Decorative Red Line */}
      <div className="absolute left-0 top-1/2 h-px w-24 bg-gradient-to-r from-red-600 to-transparent" />
      <div className="absolute right-0 top-[35%] h-px w-32 bg-gradient-to-l from-red-600/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-20 pt-32 lg:px-12">
        
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-300">
                Technology • Innovation • Growth
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              We Build
              <br />

              <span className="bg-gradient-to-r from-white via-[#9ec9ee] to-white bg-clip-text text-transparent">
                Technology
              </span>

              <br />

              <span className="relative inline-block">
                That Moves
                <span className="ml-3 text-red-500">.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
            >
              Karmyogis transforms ideas into powerful digital solutions
              through AI, software development, Salesforce, cloud,
              automation and modern web technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button className="group flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]">
                Explore Our Solutions

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <button className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                  <Play size={12} fill="currentColor" />
                </span>

                Discover Karmyogis
              </button>
            </motion.div>

            {/* Bottom Mini Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7"
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  AI & Automation
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Intelligent solutions
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Software
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Built to scale
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Digital
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Designed for growth
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[480px] items-center justify-center lg:min-h-[650px]">
            
            {/* Outer Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-white/[0.08] sm:h-[500px] sm:w-[500px] lg:h-[590px] lg:w-[590px]"
            >
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_20px_#ef4444]" />
            </motion.div>

            {/* Inner Circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/10 sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]"
            >
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
            </motion.div>

            {/* Red Glow Behind Logo */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[280px] w-[280px] rounded-full bg-red-600/20 blur-[100px] sm:h-[400px] sm:w-[400px]"
            />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10"
            >
              <motion.img
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src='assets/logo.png'
                alt="Karmyogis"
                className="w-[280px] drop-shadow-[0_0_35px_rgba(239,68,68,0.2)] sm:w-[390px] lg:w-[480px]"
              />
            </motion.div>

            {/* Floating Tech Tags */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[18%] rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Powering
              </span>
              <p className="mt-1 text-sm font-semibold text-white">
                Digital Future
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] right-0 rounded-xl border border-red-500/20 bg-black/60 px-4 py-3 backdrop-blur-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-400">
                Built With
              </span>
              <p className="mt-1 text-sm font-semibold text-white">
                Innovation
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#030303] to-transparent" />
    </section>
  );
};

export default Hero;
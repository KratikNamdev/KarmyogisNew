import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "September 30, 2026";

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.07] px-5 pb-20 pt-[150px] sm:px-6 lg:px-10 lg:pb-24">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Red Glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#FF1638]/[0.06] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FF1638]"
          >
            Legal / Privacy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
          >
            Privacy
            <span className="text-[#FF1638]"> Policy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            Your privacy matters to us. This Privacy Policy explains how
            Karmyogis collects, uses, protects, and handles information when
            you visit our website or communicate with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25"
          >
            <span className="h-px w-8 bg-[#FF1638]" />
            Last Updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1000px]">

          {/* INTRO */}
          <div className="border-b border-white/[0.08] pb-12">
            <p className="text-base leading-8 text-white/50 sm:text-lg">
              Karmyogis respects your privacy and is committed to handling
              personal information responsibly. This Privacy Policy describes
              the types of information we may collect, how we use it, how it
              may be shared, and the choices available to you.
            </p>
          </div>

          {/* 01 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              01
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Information We Collect
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              We may collect information that you voluntarily provide when you
              contact us, submit an enquiry, request information, or otherwise
              communicate with Karmyogis.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/40">
              <li>• Name and contact information</li>
              <li>• Email address and phone number</li>
              <li>• Company or organization details</li>
              <li>• Project requirements and business information</li>
              <li>• Information included in messages or enquiries</li>
              <li>• Any other information you choose to provide</li>
            </ul>
          </div>

          {/* 02 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              02
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Information Collected Automatically
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              When you visit our website, certain technical information may
              be collected automatically through standard web technologies.
              This information may include browser type, device information,
              approximate location, pages visited, referring website, and
              general website usage information.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              This information may be used to understand website usage,
              maintain security, troubleshoot technical issues, and improve
              website performance.
            </p>
          </div>

          {/* 03 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              03
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How We Use Your Information
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Information collected by Karmyogis may be used for legitimate
              business and operational purposes, including:
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/40">
              <li>• Responding to enquiries and requests</li>
              <li>• Understanding project requirements</li>
              <li>• Providing and managing our services</li>
              <li>• Communicating about projects or services</li>
              <li>• Improving our website and user experience</li>
              <li>• Maintaining website security</li>
              <li>• Meeting applicable legal or regulatory requirements</li>
            </ul>
          </div>

          {/* 04 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              04
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Cookies & Similar Technologies
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Our website may use cookies and similar technologies to support
              website functionality, understand usage patterns, improve user
              experience, and support analytics or marketing activities where
              applicable.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              You may be able to control or disable cookies through your
              browser settings. Disabling certain cookies may affect some
              website functionality.
            </p>
          </div>

          {/* 05 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              05
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How We Share Information
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Karmyogis does not intend to sell personal information as part
              of its ordinary business operations.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Information may be shared with trusted service providers,
              technology providers, contractors, or business partners when
              reasonably necessary to provide services, operate our website,
              process enquiries, maintain systems, or perform business
              functions.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Information may also be disclosed where required by applicable
              law, legal process, or to protect the rights, security, or
              property of Karmyogis, our users, or others.
            </p>
          </div>

          {/* 06 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              06
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Third-Party Services
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Our website or services may use third-party platforms and
              services such as hosting providers, analytics tools, advertising
              platforms, communication services, APIs, payment providers, or
              other technology providers.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              These third parties may process information according to their
              own privacy policies and terms. We encourage you to review the
              privacy practices of any third-party service you use.
            </p>
          </div>

          {/* 07 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              07
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Data Security
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              We take reasonable measures to protect information from
              unauthorized access, misuse, alteration, disclosure, or
              destruction.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              However, no method of transmission over the internet or method
              of electronic storage can be guaranteed to be completely secure.
              We therefore cannot guarantee absolute security of information.
            </p>
          </div>

          {/* 08 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              08
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Data Retention
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              We may retain personal information for as long as reasonably
              necessary to fulfill the purposes described in this Privacy
              Policy, provide services, maintain business records, resolve
              disputes, comply with legal obligations, and enforce agreements.
            </p>
          </div>

          {/* 09 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              09
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Your Choices
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Depending on applicable law, you may have certain rights
              regarding your personal information. These may include the
              ability to request access, correction, updating, or deletion of
              certain information.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              You may also contact us regarding communication preferences or
              questions about the handling of your information.
            </p>
          </div>

          {/* 10 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              10
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Children's Privacy
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Our website and services are intended for general business and
              professional use. We do not knowingly collect personal
              information from children where prohibited by applicable law.
            </p>
          </div>

          {/* 11 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              11
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              External Links
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Our website may contain links to websites, applications, or
              services operated by third parties. Karmyogis is not responsible
              for the privacy practices, security, or content of those
              external services.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              We recommend reviewing the privacy policies of external websites
              before providing them with personal information.
            </p>
          </div>

          {/* 12 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              12
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Karmyogis may update this Privacy Policy from time to time to
              reflect changes in our practices, technologies, services, or
              applicable legal requirements.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Any changes will be published on this page along with an updated
              "Last Updated" date.
            </p>
          </div>

          {/* 13 */}
          <div className="py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              13
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Contact Us
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or the way Karmyogis handles personal
              information, please contact us through the contact information
              available on our website.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 border border-[#FF1638]/30 bg-[#FF1638]/[0.06] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#FF1638] hover:bg-[#FF1638] hover:shadow-[0_0_30px_rgba(255,22,56,0.2)]"
            >
              Contact Karmyogis

              <span className="text-[#FF1638] transition-colors group-hover:text-white">
                ↗
              </span>
            </a>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.08] pt-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-[11px] text-white/20">
                © {new Date().getFullYear()} Karmyogis. All rights reserved.
              </p>

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF1638]/50">
                KARMYOGIS / PRIVACY
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
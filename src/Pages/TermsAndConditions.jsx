import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
            Legal / Terms
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
          >
            Terms &
            <span className="text-[#FF1638]"> Conditions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            Please read these terms carefully before using the Karmyogis
            website or engaging with our services.
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
          {/* Intro */}
          <div className="border-b border-white/[0.08] pb-12">
            <p className="text-base leading-8 text-white/50 sm:text-lg">
              These Terms and Conditions govern your use of the Karmyogis
              website and the services provided by Karmyogis. By accessing our
              website or using our services, you acknowledge that you have
              read, understood, and agree to be bound by these terms.
            </p>
          </div>

          {/* 01 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              01
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Acceptance of Terms
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              By accessing, browsing, or using this website, you agree to
              comply with these Terms and Conditions and all applicable laws
              and regulations. If you do not agree with any part of these
              terms, please do not use this website or our services.
            </p>
          </div>

          {/* 02 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              02
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Our Services
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Karmyogis provides technology and digital services that may
              include web development, app development, Salesforce solutions,
              digital marketing, SEO, social media management, graphics and
              design, and related digital solutions.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              The exact scope, deliverables, timelines, pricing, and
              responsibilities for a specific project may be defined
              separately through a proposal, quotation, statement of work, or
              other written agreement.
            </p>
          </div>

          {/* 03 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              03
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Website Use
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of Karmyogis or any
              third party.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/40">
              <li>• Do not attempt to gain unauthorized access to the website.</li>
              <li>• Do not interfere with the website's operation or security.</li>
              <li>• Do not use the website for unlawful or fraudulent activities.</li>
              <li>• Do not reproduce or misuse website content without permission.</li>
            </ul>
          </div>

          {/* 04 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              04
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Intellectual Property
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Unless otherwise stated, the content of this website, including
              text, graphics, logos, visual elements, designs, layouts,
              branding, and other materials, is owned by or licensed to
              Karmyogis and is protected by applicable intellectual property
              laws.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              You may not copy, reproduce, modify, distribute, publish, or
              commercially exploit website materials without prior written
              permission.
            </p>
          </div>

          {/* 05 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              05
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Project Information
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Information provided through our website, enquiry forms, email,
              or other communication channels should be accurate and complete
              to the best of your knowledge.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Project requirements, specifications, pricing, timelines, and
              deliverables may change based on the final scope agreed between
              the parties.
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
              Certain projects may require the use of third-party platforms,
              software, APIs, hosting providers, advertising platforms,
              analytics tools, payment services, or other external
              technologies.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              The availability, functionality, policies, pricing, and
              performance of third-party services are controlled by their
              respective providers. Karmyogis is not responsible for changes
              made by those third parties outside our reasonable control.
            </p>
          </div>

          {/* 07 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              07
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Payments & Commercial Terms
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Where applicable, payment terms, project fees, milestones,
              deposits, recurring charges, and other commercial conditions
              will be communicated separately and agreed upon before or during
              the engagement.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Failure to make payments according to an agreed schedule may
              result in suspension or delay of services until outstanding
              obligations are resolved.
            </p>
          </div>

          {/* 08 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              08
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Confidentiality
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Information shared by clients during a project may include
              confidential business, technical, financial, operational, or
              strategic information. We expect both parties to handle
              confidential information responsibly and only use it for the
              purposes for which it was shared.
            </p>
          </div>

          {/* 09 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              09
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Disclaimer
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              We make reasonable efforts to keep the information on this
              website accurate and current. However, website content is
              provided for general informational purposes and may be updated,
              changed, or removed without prior notice.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              We do not guarantee that the website will always be available,
              error-free, secure, or free from interruptions.
            </p>
          </div>

          {/* 10 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              10
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Limitation of Liability
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              To the extent permitted by applicable law, Karmyogis will not be
              liable for indirect, incidental, consequential, or special
              losses arising from the use of this website or reliance on
              information provided through it.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Any liability relating to a specific project or service may be
              governed by the terms of the applicable agreement between the
              parties.
            </p>
          </div>

          {/* 11 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              11
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Links to Other Websites
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Our website may contain links to external websites or services.
              These links may be provided for convenience or additional
              information. Karmyogis does not control external websites and is
              not responsible for their content, availability, security, or
              privacy practices.
            </p>
          </div>

          {/* 12 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              12
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Changes to These Terms
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Karmyogis may update or modify these Terms and Conditions from
              time to time. Any updated version will be posted on this page
              with a revised "Last Updated" date.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
              Your continued use of the website after changes are posted
              indicates acceptance of the updated terms.
            </p>
          </div>

          {/* 13 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              13
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Termination
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              We reserve the right to restrict or terminate access to the
              website where we reasonably believe that a user has violated
              these Terms and Conditions or applicable laws.
            </p>
          </div>

          {/* 14 */}
          <div className="border-b border-white/[0.08] py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              14
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Governing Law
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              These Terms and Conditions shall be interpreted and governed in
              accordance with the applicable laws and regulations governing
              the relationship between Karmyogis and the user.
            </p>
          </div>

          {/* 15 */}
          <div className="py-12">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#FF1638]">
              15
            </p>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Contact Us
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              If you have questions about these Terms and Conditions or need
              clarification regarding our services, please contact Karmyogis
              through the contact information provided on our website.
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
                KARMYOGIS / LEGAL
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
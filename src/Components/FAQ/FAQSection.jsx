import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What services does Karmyogis provide?",
    answer:
      "Karmyogis provides a range of digital and technology services including Salesforce, web development, app development, digital marketing, SEO, social media management, and graphics designing.",
  },
  {
    id: "02",
    question: "What type of businesses do you work with?",
    answer:
      "We work with businesses looking to build, improve, or grow their digital presence. Our approach can be adapted to startups, growing businesses, established companies, and organizations with specific technology requirements.",
  },
  {
    id: "03",
    question: "Can you build a website from scratch?",
    answer:
      "Yes. We can design and develop websites from the ground up based on your business goals, brand identity, functionality requirements, and target audience.",
  },
  {
    id: "04",
    question: "Do you provide custom web development?",
    answer:
      "Yes. Our web development solutions can be customized around your specific requirements rather than relying only on predefined templates or standard solutions.",
  },
  {
    id: "05",
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We provide app development services for businesses that want to turn their ideas, services, or digital products into mobile experiences.",
  },
  {
    id: "06",
    question: "Do you offer Salesforce services?",
    answer:
      "Yes. Salesforce is one of the technology services offered by Karmyogis. We can help businesses with Salesforce-related implementation, customization, workflows, and digital solutions.",
  },
  {
    id: "07",
    question: "Do you provide SEO services?",
    answer:
      "Yes. Our SEO services focus on improving organic visibility, search presence, website performance, and reaching relevant audiences through search engines.",
  },
  {
    id: "08",
    question: "Can you manage our social media?",
    answer:
      "Yes. We provide social media handling and management services including content planning, creative direction, publishing, and maintaining a consistent digital presence.",
  },
  {
    id: "09",
    question: "Do you also provide digital marketing?",
    answer:
      "Yes. We provide digital marketing solutions designed around business objectives such as visibility, audience engagement, lead generation, and online growth.",
  },
  {
    id: "10",
    question: "How do we get started with Karmyogis?",
    answer:
      "Simply get in touch with us and tell us about your project, business challenge, or requirement. We'll understand your goals and discuss the most suitable way to move forward.",
  },
  {
    id: "11",
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope, functionality, number of pages or features, integrations, and overall requirements. After understanding your project, we can provide a more specific timeline.",
  },
  {
    id: "12",
    question: "Can you work with an existing website or application?",
    answer:
      "Yes. We can work with existing digital products and help with improvements, redesigns, new functionality, optimization, or ongoing development depending on the project requirements.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState("01");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#020202] px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute left-[-15%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#FF1638]/[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#FF1638]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF1638]">
              Need To Know
            </span>

            <span className="h-px w-8 bg-[#FF1638]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            Frequently Asked
            <span className="text-[#FF1638]"> Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base"
          >
            Everything you need to know before getting started with Karmyogis.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="border-t border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className={`border-b border-white/[0.08] transition-colors duration-300 ${
                  isOpen ? "bg-white/[0.015]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="group flex w-full items-center gap-5 px-1 py-6 text-left sm:py-7"
                >
                  {/* Number */}
                  <span
                    className={`hidden w-10 shrink-0 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 sm:block ${
                      isOpen ? "text-[#FF1638]" : "text-white/20"
                    }`}
                  >
                    {faq.id}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-base font-medium transition-colors duration-300 sm:text-lg ${
                      isOpen ? "text-white" : "text-white/70"
                    } group-hover:text-white`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#FF1638]/40 bg-[#FF1638] text-white"
                        : "border-white/[0.1] bg-white/[0.02] text-white/40 group-hover:border-[#FF1638]/40 group-hover:text-[#FF1638]"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-0 pr-14 sm:pl-[60px] sm:pr-20">
                        <p className="max-w-3xl text-sm leading-7 text-white/40 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[24px] border border-white/[0.08] bg-[#080808] p-7 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-lg font-medium text-white">
              Still have a question?
            </p>

            <p className="mt-1 text-sm text-white/35">
              Let's talk about your specific requirement.
            </p>
          </div>

          <a
            href="/contact"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-[#FF1638] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e91030] hover:shadow-[0_0_35px_rgba(255,22,56,0.25)]"
          >
            Contact Us

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Footer Line */}
        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
            KARMYOGIS / FAQ
          </span>

          <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF1638]/50">
            01 — 12
          </span>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
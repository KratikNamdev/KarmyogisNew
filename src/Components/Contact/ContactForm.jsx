import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#020202] px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-36"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-600/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-red-900/[0.08] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#FF1638]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF1638]">
              Contact Karmyogis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Tell us what
            <span className="text-[#FF1638]"> you're building.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
          >
            Share a few details about your project, business challenge, or
            digital goals. We'll get back to you and explore the right way
            forward.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-white/[0.08] bg-[#080808] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="h-14 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF1638]/50 focus:bg-white/[0.04]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="h-14 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF1638]/50 focus:bg-white/[0.04]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="h-14 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF1638]/50 focus:bg-white/[0.04]"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your Company"
                    className="h-14 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#FF1638]/50 focus:bg-white/[0.04]"
                  />
                </div>

                {/* Service */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    What do you need?
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="h-14 w-full rounded-xl border border-white/[0.08] bg-[#080808] px-4 text-sm text-white/70 outline-none transition focus:border-[#FF1638]/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="salesforce">Salesforce</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media">Social Media Handling</option>
                    <option value="seo">SEO</option>
                    <option value="graphics">Graphics Designing</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Tell us about your project
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us about your project, requirements, goals or challenges..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#FF1638]/50 focus:bg-white/[0.04]"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-white/30">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry.
                </p>

                <button
                  type="submit"
                  className="group flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#FF1638] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e91030] hover:shadow-[0_0_35px_rgba(255,22,56,0.25)]"
                >
                  {submitted ? (
                    <>
                      Sent Successfully
                      <CheckCircle2 size={18} />
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col rounded-[28px] border border-white/[0.08] bg-[#080808] p-7 sm:p-9 lg:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF1638]">
                  Get In Touch
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                  Let's talk about
                  <br />
                  <span className="text-white/40">what comes next.</span>
                </h3>

                <p className="mt-5 text-sm leading-6 text-white/40">
                  Whether you're starting something new or looking to improve
                  what already exists, we're here to understand the problem
                  and help shape the solution.
                </p>
              </div>

              {/* Details */}
              <div className="mt-10 space-y-3">
                {/* Email */}
                <a
                  href="mailto:hello@karmyogis.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#FF1638]/30 hover:bg-[#FF1638]/[0.03]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF1638]/10 text-[#FF1638]">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-white/75 transition group-hover:text-white">
                      hello@karmyogis.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+910000000000"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#FF1638]/30 hover:bg-[#FF1638]/[0.03]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF1638]/10 text-[#FF1638]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-white/75 transition group-hover:text-white">
                      +91 XXX XXX XXXX
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF1638]/10 text-[#FF1638]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF1638]/10 text-[#FF1638]">
                    <Clock3 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Mon — Fri · 10:00 AM — 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-white/[0.07]" />

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    KARMYOGIS
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF1638]/60">
                    Let's Connect
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
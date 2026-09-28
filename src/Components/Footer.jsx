import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";


const Footer = () => {
  const services = [
    "AI & Automation",
    "Software Development",
    "Web & App Development",
    "Salesforce Solutions",
    "Cloud & DevOps",
    "Data & Analytics",
  ];

  const company = [
    "About Us",
    "Services",
    "Industries",
    "Technology",
    "Why Karmyogis",
    "Contact",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020202] text-white">

      {/* ================= BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff1638]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#8b0018]/10 blur-[150px]" />

      {/* ================= MAIN ================= */}

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">

        {/* TOP CTA STRIP */}
        <div className="flex flex-col gap-8 border-b border-white/[0.08] py-14 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#ff1638]">
              Ready when you are
            </p>

            <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Let's create something
              <span className="text-white/35"> remarkable.</span>
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 border border-[#ff1638]/40 bg-[#ff1638]/5 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-[#ff1638] hover:shadow-[0_0_35px_rgba(255,22,56,0.2)]"
          >
            Start a Conversation

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* ================= FOOTER GRID ================= */}

        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* BRAND */}
          <div>

            <a href="/" className="inline-block">
              <img
                src='assets/logo.png'
                alt="Karmyogis"
                className="w-36 object-contain"
              />
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
              We build modern digital solutions that help businesses
              innovate, transform and scale with confidence.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[11px] font-bold uppercase text-white/40 transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10 hover:text-[#ff1638]"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[11px] font-bold uppercase text-white/40 transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10 hover:text-[#ff1638]"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-[11px] font-bold uppercase text-white/40 transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10 hover:text-[#ff1638]"
              >
                fb
              </a>

              <a
                href="mailto:hello@karmyogis.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#ff1638]/50 hover:bg-[#ff1638]/10"
              >
                <Mail
                  size={16}
                  className="text-white/40 transition-colors hover:text-[#ff1638]"
                />
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
              Services
            </p>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-[#ff1638] transition-all duration-300 group-hover:w-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
              Company
            </p>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-[#ff1638] transition-all duration-300 group-hover:w-3" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
              Let's Talk
            </p>

            <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em]">
              Have an idea?
              <br />
              <span className="text-white/30">
                Let's build it.
              </span>
            </h3>

            <a
              href="mailto:hello@karmyogis.com"
              className="group mt-7 flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#ff1638]/30 bg-[#ff1638]/5">
                <Mail
                  size={15}
                  className="text-[#ff1638]"
                />
              </span>

              hello@karmyogis.com

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-7">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                Location
              </p>

              <p className="mt-2 text-sm text-white/45">
                India
              </p>
            </div>

          </div>
        </div>

        {/* ================= BIG BRAND ================= */}

        <div className="relative overflow-hidden border-t border-white/[0.06] py-14 md:py-20">

          <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-white/[0.035]" />

      <div className="relative flex justify-center overflow-hidden">
  <h2
    className="
      select-none
      whitespace-nowrap
      text-[16vw]
      font-black
      leading-[0.8]
      tracking-[-0.075em]
      text-white/[0.055]
    "
  >
    KARMYOGIS
  </h2>
</div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-7 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Karmyogis. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              className="text-xs text-white/25 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/25 transition-colors hover:text-white/60"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="group flex items-center gap-1 text-xs text-white/30 transition-colors hover:text-[#ff1638]"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Back to Top

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
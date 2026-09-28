import React, { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      name: "Salesforce",
      href: "#services",
    },
    {
      name: "Web Development",
      href: "#services",
    },
    {
      name: "App Development",
      href: "#services",
    },
    {
      name: "Digital Marketing",
      href: "#services",
    },
    {
      name: "Social Media Handling",
      href: "#services",
    },
    {
      name: "SEO",
      href: "#services",
    },
    {
      name: "Graphics",
      href: "#services",
    },
  ];

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Industries",
      href: "#industries",
    },
    {
      name: "Technology",
      href: "#technology",
    },
    {
      name: "Why Karmyogis",
      href: "#why-karmyogis",
    },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#030303]/90 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[100px] max-w-[1500px] items-center justify-between px-6 md:px-10">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            onClick={handleNavClick}
            className="group relative z-10 flex items-center"
          >
            <img
              src="assets/logo.png"
              alt="Karmyogis"
              className="w-[80px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center lg:flex">

            <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1.5 backdrop-blur-xl">

              {/* HOME */}

              <a
                href="#home"
                className="group relative rounded-full px-4 py-2.5 text-[12px] font-medium tracking-wide text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Home

                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#ff1638] transition-all duration-300 group-hover:w-3" />
              </a>

              {/* ================= SERVICES DROPDOWN ================= */}

              <div
                className="group/services relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[12px] font-medium tracking-wide text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  Services

                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180 text-[#ff1638]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full w-[270px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden border border-white/[0.1] bg-[#070707]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">

                    {/* Dropdown Header */}
                    <div className="border-b border-white/[0.07] px-4 py-3">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#ff1638]">
                        What We Do
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Technology & Digital Solutions
                      </p>
                    </div>

                    {/* Services */}
                    <div className="py-1">
                      {services.map((service, index) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={handleNavClick}
                          className="group flex items-center justify-between px-4 py-3 transition-all duration-200 hover:bg-white/[0.05]"
                        >
                          <div className="flex items-center gap-3">

                            <span className="text-[9px] tracking-[0.15em] text-[#ff1638]/50">
                              0{index + 1}
                            </span>

                            <span className="text-[12px] text-white/55 transition-colors group-hover:text-white">
                              {service.name}
                            </span>

                          </div>

                          <ArrowUpRight
                            size={14}
                            className="text-white/15 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff1638]"
                          />
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              {/* OTHER NAV ITEMS */}

              {navItems.slice(1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2.5 text-[12px] font-medium tracking-wide text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.name}

                  <span className="absolute bottom-[5px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#ff1638] transition-all duration-300 group-hover:w-3" />
                </a>
              ))}

            </div>
          </nav>

          {/* ================= DESKTOP CTA ================= */}

          <div className="hidden lg:block">

            <a
              href="#contact"
              className="group relative flex items-center gap-3 overflow-hidden border border-[#ff1638]/40 bg-[#ff1638]/[0.06] px-5 py-3 text-[12px] font-semibold tracking-wide text-white transition-all duration-300 hover:border-[#ff1638] hover:bg-[#ff1638] hover:shadow-[0_0_30px_rgba(255,22,56,0.2)]"
            >
              <span className="relative z-10">
                Let's Talk
              </span>

              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

              <span className="absolute inset-y-0 left-[-100%] w-[70%] -skew-x-12 bg-white/10 transition-all duration-700 group-hover:left-[140%]" />
            </a>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[1001] flex h-11 w-11 items-center justify-center border border-white/[0.1] bg-white/[0.025] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={21} className="text-white" />
            ) : (
              <Menu size={21} className="text-white" />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/[0.08] bg-[#030303]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            isOpen
              ? "max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1500px] px-6 py-6 md:px-10">

            <div className="mb-4 h-[1px] w-12 bg-[#ff1638]" />

            <nav className="flex flex-col">

              {/* HOME */}

              <a
                href="#home"
                onClick={handleNavClick}
                className="group flex items-center justify-between border-b border-white/[0.07] py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[9px] tracking-[0.2em] text-[#ff1638]/60">
                    01
                  </span>

                  <span className="text-base font-medium text-white/60 group-hover:text-white">
                    Home
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-white/20 group-hover:text-[#ff1638]"
                />
              </a>

              {/* ================= MOBILE SERVICES ================= */}

              <div className="border-b border-white/[0.07]">

                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">

                    <span className="text-[9px] tracking-[0.2em] text-[#ff1638]/60">
                      02
                    </span>

                    <span className="text-base font-medium text-white/60">
                      Services
                    </span>

                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-white/30 transition-transform duration-300 ${
                      servicesOpen
                        ? "rotate-180 text-[#ff1638]"
                        : ""
                    }`}
                  />
                </button>

                {/* Mobile Service List */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    servicesOpen
                      ? "max-h-[500px] pb-3 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-8 border-l border-[#ff1638]/20 pl-4">

                    {services.map((service, index) => (
                      <a
                        key={service.name}
                        href={service.href}
                        onClick={handleNavClick}
                        className="group flex items-center justify-between py-3"
                      >
                        <div className="flex items-center gap-3">

                          <span className="text-[9px] text-[#ff1638]/50">
                            0{index + 1}
                          </span>

                          <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                            {service.name}
                          </span>

                        </div>

                        <ArrowUpRight
                          size={14}
                          className="text-white/15 group-hover:text-[#ff1638]"
                        />
                      </a>
                    ))}

                  </div>
                </div>
              </div>

              {/* MOBILE OTHER LINKS */}

              {navItems.slice(1).map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="group flex items-center justify-between border-b border-white/[0.07] py-5"
                >
                  <div className="flex items-center gap-4">

                    <span className="text-[9px] tracking-[0.2em] text-[#ff1638]/60">
                      0{index + 3}
                    </span>

                    <span className="text-base font-medium text-white/60 transition-colors group-hover:text-white">
                      {item.name}
                    </span>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff1638]"
                  />
                </a>
              ))}

              {/* MOBILE CTA */}

              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-6 flex items-center justify-between bg-[#ff1638] px-5 py-4 text-sm font-semibold text-white"
              >
                <span>Let's Talk</span>

                <ArrowUpRight size={18} />
              </a>

            </nav>
          </div>
        </div>
      </header>

      {/* ================= MOBILE BACKDROP ================= */}

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
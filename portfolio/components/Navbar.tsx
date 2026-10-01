"use client";

import { Download, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Security Lab", id: "security" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let current = "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className="
        fixed
        left-1/2
        top-4
        z-[100]
        w-[calc(100%-2rem)]
        -translate-x-1/2
        sm:top-5
        sm:w-[calc(100%-3rem)]
        lg:w-[calc(100%-5rem)]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[70px]
          max-w-[1280px]
          items-center
          justify-between
          rounded-[1.25rem]
          border
          border-white/[0.12]
          bg-[#030509]/75
          px-3
          shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
          sm:h-[76px]
          sm:px-4
          lg:px-5
        "
      >
        {/* =====================================================
            BRAND
           ===================================================== */}

        <button
          onClick={() => scrollToSection("home")}
          className="
            group
            flex
            shrink-0
            items-center
            gap-3
            text-left
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/[0.07]
              text-cyan-300
              transition-all
              duration-300
              group-hover:border-cyan-400/60
              group-hover:bg-cyan-400/[0.12]
              group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
            "
          >
            <Terminal size={19} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-[0.08em] text-white">
              RAMARAO
            </p>

            <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.28em] text-cyan-400">
              Security Engineer
            </p>
          </div>
        </button>

        {/* =====================================================
            NAVIGATION
           ===================================================== */}

        <nav
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            rounded-xl
            border
            border-white/[0.08]
            bg-black/30
            p-1
            lg:flex
          "
        >
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative
                  rounded-lg
                  px-3.5
                  py-2.5
                  text-[10px]
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-cyan-400/[0.10] text-white"
                      : "text-white/45 hover:bg-white/[0.05] hover:text-white"
                  }
                `}
              >
                {item.label}

                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      w-4
                      -translate-x-1/2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_8px_rgba(34,211,238,0.8)]
                    "
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* =====================================================
            RIGHT SIDE
           ===================================================== */}

        <div className="flex shrink-0 items-center gap-3">

          {/* Availability */}

          <div className="hidden items-center gap-2 xl:flex">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.9)]
              "
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
              Available
            </span>
          </div>

          {/* Resume */}

          <a
            href="/Ram-Resume.pdf"
            download
            className="
              group
              flex
              h-11
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-400/35
              bg-cyan-400/[0.06]
              px-4
              text-[10px]
              font-bold
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400/70
              hover:bg-cyan-400/[0.12]
              hover:text-cyan-200
              hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
              sm:px-5
            "
          >
            <Download
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            <span className="hidden sm:inline">
              Download Resume
            </span>

            <span className="sm:hidden">
              Resume
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  GitBranch,
  LockKeyhole,
  Server,
  ShieldCheck,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const backgroundX = useTransform(
    smoothX,
    [-1, 1],
    [-8, 8]
  );

  const backgroundY = useTransform(
    smoothY,
    [-1, 1],
    [-5, 5]
  );

  const panelRotateX = useTransform(
    smoothY,
    [-1, 1],
    [1.5, -1.5]
  );

  const panelRotateY = useTransform(
    smoothX,
    [-1, 1],
    [-2, 2]
  );

  const panelX = useTransform(
    smoothX,
    [-1, 1],
    [-3, 3]
  );

  const panelY = useTransform(
    smoothY,
    [-1, 1],
    [-2, 2]
  );

  const spotlightX = useTransform(
    smoothX,
    [-1, 1],
    ["20%", "80%"]
  );

  const spotlightY = useTransform(
    smoothY,
    [-1, 1],
    ["20%", "80%"]
  );

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set(x * 2 - 1);
      mouseY.set(y * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop, mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#030509]
        text-white
      "
      style={{
        perspective: "1400px",
      }}
    >

      {/* ======================================================
          BACKGROUND IMAGE
         ====================================================== */}

      <motion.div
        className="absolute -inset-[10px]"
        style={{
          x: isDesktop ? backgroundX : 0,
          y: isDesktop ? backgroundY : 0,
          scale: 1.015,
        }}
      >
        <img
          src="/images/ram-hero.png"
          alt="Ram - Security and Backend Engineer"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* ======================================================
          BACKGROUND OVERLAY
         ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute inset-0 bg-black/[0.12]" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/[0.12] via-transparent to-black/[0.25]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.12] via-transparent to-[#030509]/70" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* ======================================================
          MOUSE LIGHT
         ====================================================== */}

      {isDesktop && (
        <motion.div
          className="
            pointer-events-none
            absolute
            z-[2]
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-25
            blur-[100px]
          "
          style={{
            left: spotlightX,
            top: spotlightY,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.20) 0%, rgba(34,211,238,0.05) 35%, transparent 70%)",
          }}
        />
      )}

      {/* ======================================================
          MAIN CONTENT
         ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1280px]
          items-center
          justify-end
          px-5
          pb-16
          pt-28
          sm:px-8
          lg:px-10
          lg:pb-16
          lg:pt-32
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            x: 55,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            rotateX: isDesktop ? panelRotateX : 0,
            rotateY: isDesktop ? panelRotateY : 0,
            x: isDesktop ? panelX : 0,
            y: isDesktop ? panelY : 0,
            transformStyle: "preserve-3d",
          }}
          className="
            relative
            w-full
            max-w-[540px]
            rounded-[1.75rem]
            border
            border-white/[0.14]
            bg-[#030711]/[0.78]
            p-6
            shadow-[0_30px_100px_rgba(0,0,0,0.5)]
            backdrop-blur-2xl
            sm:p-7
            lg:mr-2
            lg:p-7
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -inset-px
              rounded-[1.75rem]
              bg-gradient-to-br
              from-cyan-400/[0.07]
              via-transparent
              to-blue-500/[0.06]
            "
          />

          <div className="relative">

            {/* ==================================================
                HEADER
               ================================================== */}

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-70
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_15px_rgba(52,211,153,.9)]
                    "
                  />

                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-emerald-400">
                  System Online
                </span>

              </div>

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-2.5
                  py-1
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-white/40
                "
              >
                RAM.OS
              </div>

            </div>

            {/* ==================================================
                NAME
               ================================================== */}

            <div>

              <p className="text-2xl font-light leading-none text-white/90 sm:text-3xl">
                Hi, I&apos;m
              </p>

              <h1
                className="
                  mt-2
                  text-[3.5rem]
                  font-black
                  leading-[0.9]
                  tracking-[-0.045em]
                  sm:text-[4rem]
                  lg:text-[4rem]
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Ramarao
                </span>

                <br />

                <span className="text-white">
                  Duggirala.
                </span>
              </h1>

            </div>

            {/* ==================================================
                ROLE
               ================================================== */}

            <div className="mt-6 flex items-center gap-3">

              <div
                className="
                  h-px
                  w-7
                  bg-cyan-400/70
                  shadow-[0_0_8px_rgba(34,211,238,.5)]
                "
              />

              <h2 className="text-base font-semibold text-white/85 sm:text-lg">
                Security &amp; Backend Engineer
              </h2>

            </div>

            {/* ==================================================
                DESCRIPTION
               ================================================== */}

            <p className="mt-4 max-w-[500px] text-sm leading-6 text-white/55 sm:text-[15px]">
              I build secure systems, scalable backend solutions,
              and reliable infrastructure that keeps applications
              ready for production.
            </p>

            {/* ==================================================
                BUTTONS
               ================================================== */}

            <div className="mt-6 flex flex-wrap gap-3">

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-black
                  shadow-[0_0_25px_rgba(34,211,238,0.18)]
                  transition-all
                  hover:bg-cyan-300
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
                "
              >
                View My Work

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  hover:border-cyan-400/50
                  hover:bg-white/[0.08]
                "
              >
                <GitBranch size={15} />
                GitHub
              </motion.a>

            </div>

            {/* ==================================================
                DIVIDER
               ================================================== */}

            <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* ==================================================
                SYSTEM STATUS
               ================================================== */}

            <div>

              <div className="mb-3 flex items-center justify-between">

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                  System Status
                </p>

                <span className="text-[8px] text-white/20">
                  LIVE
                </span>

              </div>

              <div className="grid grid-cols-3 gap-2">

                <StatusCard
                  icon={<Server size={14} />}
                  label="Backend"
                  value="Operational"
                />

                <StatusCard
                  icon={<ShieldCheck size={14} />}
                  label="Security"
                  value="Active"
                />

                <StatusCard
                  icon={<LockKeyhole size={14} />}
                  label="Infrastructure"
                  value="Secure"
                />

              </div>

            </div>

            {/* ==================================================
                FOOTER
               ================================================== */}

            <div className="mt-5 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/20">

              <span>
                Building secure systems
              </span>

              <span>
                ● 2026
              </span>

            </div>

          </div>
        </motion.div>
      </div>

      {/* ======================================================
          GREETING
         ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -5, 0],
        }}
        transition={{
          opacity: {
            duration: 0.5,
            delay: 1,
          },
          scale: {
            duration: 0.5,
            delay: 1,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-[7%]
          top-[37%]
          z-20
          hidden
          rounded-2xl
          border
          border-white/15
          bg-black/45
          px-4
          py-2.5
          shadow-2xl
          backdrop-blur-xl
          lg:block
        "
      >
        <p className="text-xs font-medium text-white">
          Hey there! 👋
        </p>

        <p className="mt-0.5 text-xs font-semibold text-cyan-300">
          I&apos;m Ram!
        </p>
      </motion.div>

      {/* ======================================================
          SCROLL
         ====================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          text-white/40
          transition-colors
          hover:text-cyan-300
        "
      >
        <span className="text-[8px] font-semibold uppercase tracking-[0.4em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>

    </section>
  );
}


/* ================================================================
   STATUS CARD
   ================================================================ */

function StatusCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
      }}
      className="
        group
        rounded-xl
        border
        border-white/10
        bg-white/[0.035]
        p-2.5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
      "
    >
      <div className="mb-1.5 text-cyan-300">
        {icon}
      </div>

      <p className="text-[8px] text-white/35">
        {label}
      </p>

      <div className="mt-1 flex items-center gap-1">

        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,.8)]" />

        <p className="text-[8px] font-semibold text-emerald-400">
          {value}
        </p>

      </div>
    </motion.div>
  );
}
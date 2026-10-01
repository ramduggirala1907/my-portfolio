"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Globe,
  Lock,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Application security, vulnerability assessment, secure development and defensive engineering.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Scalable APIs, authentication systems, service architecture and production-ready backend systems.",
  },
  {
    icon: Network,
    title: "Infrastructure",
    description:
      "Linux environments, networking, reverse proxies, deployment pipelines and server operations.",
  },
  {
    icon: Code2,
    title: "Engineering",
    description:
      "TypeScript, Python, modern web architectures and maintainable production code.",
  },
];

const technologies = [
  "TypeScript",
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "PostgreSQL",
  "Docker",
  "Linux",
  "Nginx",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030509] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
         ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.035] blur-[130px]" />

        <div className="absolute bottom-[10%] right-[5%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.03] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
         ========================================================= */}

      <div className="relative mx-auto max-w-[1450px]">

        {/* =======================================================
            SECTION HEADING
           ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400">
              01 / About
            </span>

            <div className="h-px w-16 bg-cyan-400/30" />
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Engineering systems,
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              not just interfaces.
            </span>
          </h2>
        </motion.div>

        {/* =======================================================
            MAIN GRID
           ======================================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* =====================================================
              LEFT CONTENT
             ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              I work at the intersection of{" "}
              <span className="font-semibold text-white">
                security, backend engineering, and infrastructure
              </span>
              . My focus is building systems that are reliable,
              observable, maintainable, and secure from development
              through deployment.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              From designing APIs and authentication flows to hardening
              applications and deploying services on Linux infrastructure,
              I enjoy understanding how the complete system works — not
              just one layer of it.
            </p>

            {/* ===================================================
                CAPABILITY CARDS
               =================================================== */}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.09]
                      bg-white/[0.025]
                      p-4
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-cyan-400/25
                      hover:bg-white/[0.045]
                      sm:p-5
                    "
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-cyan-400/20
                          bg-cyan-400/[0.07]
                          text-cyan-300
                          transition-all
                          duration-300
                          group-hover:border-cyan-400/40
                          group-hover:bg-cyan-400/15
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-white/15
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-cyan-300/60
                        "
                      />
                    </div>

                    <h3 className="text-sm font-bold text-white sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — RAM.OS PROFILE HUD
             ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              rotateY: 5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            style={{
              perspective: "1200px",
            }}
            className="lg:-mt-6"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.12]
                bg-black/[0.38]
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
                sm:p-8
              "
            >
              {/* HUD glow */}

              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[90px]" />

              {/* =================================================
                  HEADER
                 ================================================= */}

              <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Terminal size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-white">
                      RAM
                    </p>

                    <p className="mt-0.5 text-[8px] uppercase tracking-[0.25em] text-white/30">
                      Engineer Profile
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                    Online
                  </span>
                </div>
              </div>

              {/* =================================================
                  PROFILE
                 ================================================= */}

              <div className="relative py-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Primary Focus
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Secure systems.
                </h3>

                <h3 className="text-2xl font-black tracking-tight text-cyan-300 sm:text-3xl">
                  Reliable infrastructure.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Building and securing software across the application,
                  API, server, and infrastructure layers.
                </p>
              </div>

              {/* =================================================
                  SYSTEM METRICS
                 ================================================= */}

              <div className="grid grid-cols-2 gap-3">
                <Metric
                  icon={<Lock size={16} />}
                  label="Security"
                  value="Active"
                />

                <Metric
                  icon={<Database size={16} />}
                  label="Backend"
                  value="Production"
                />

                <Metric
                  icon={<Cpu size={16} />}
                  label="Engineering"
                  value="Building"
                />

                <Metric
                  icon={<Globe size={16} />}
                  label="Infrastructure"
                  value="Online"
                />
              </div>

              {/* =================================================
                  TECH STACK
                 ================================================= */}

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                  Core Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-2.5
                        py-1.5
                        text-[9px]
                        font-medium
                        text-white/50
                        transition
                        hover:border-cyan-400/25
                        hover:text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  TERMINAL FOOTER
                 ================================================= */}

              <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/30 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-cyan-400">
                    $
                  </span>

                  <span className="font-mono text-[10px] text-white/40">
                    whoami
                  </span>
                </div>

                <p className="mt-1.5 font-mono text-[10px] text-emerald-400/70">
                  ram@secure-systems:~$ engineer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM SIGNALS
           ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-9 grid grid-cols-2 border-y border-white/[0.08] sm:grid-cols-4"
        >
          <Signal
            icon={<ShieldCheck size={17} />}
            label="Security"
          />

          <Signal
            icon={<Server size={17} />}
            label="Backend"
          />

          <Signal
            icon={<Network size={17} />}
            label="Infrastructure"
          />

          <Signal
            icon={<Terminal size={17} />}
            label="Linux"
          />
        </motion.div>
      </div>
    </section>
  );
}


/* ===============================================================
   METRIC
   =============================================================== */

function Metric({
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
        scale: 1.02,
        y: -3,
      }}
      className="
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-3
        transition
        hover:border-cyan-400/20
        sm:p-4
      "
    >
      <div className="mb-2 text-cyan-300">
        {icon}
      </div>

      <p className="text-[9px] uppercase tracking-wider text-white/30">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-white/75 sm:text-sm">
        {value}
      </p>
    </motion.div>
  );
}


/* ===============================================================
   SIGNAL
   =============================================================== */

function Signal({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-3
        border-r
        border-white/[0.08]
        px-5
        py-4
        last:border-r-0
      "
    >
      <span className="text-cyan-400/70">
        {icon}
      </span>

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
        {label}
      </span>
    </div>
  );
}
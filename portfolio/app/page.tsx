import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030509]">

      {/* =========================================================
          NAVIGATION
         ========================================================= */}

      <Navbar />

      {/* =========================================================
          HERO
         ========================================================= */}

      <div id="home">
        <Hero />
      </div>

      {/* =========================================================
          ABOUT
         ========================================================= */}

      <About />

      {/* =========================================================
          SKILLS — TEMPORARY
         ========================================================= */}

      <section
        id="skills"
        className="
          scroll-mt-32
          min-h-[80svh]
          bg-[#030509]
          px-6
          py-24
          text-white
        "
      >
        <div className="mx-auto flex min-h-[60svh] max-w-[1450px] items-center justify-center">
          <div className="text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              02 / Skills
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              Skills
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Interactive capability matrix coming next.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS — TEMPORARY
         ========================================================= */}

      <section
        id="projects"
        className="
          scroll-mt-32
          min-h-[80svh]
          bg-[#030509]
          px-6
          py-24
          text-white
        "
      >
        <div className="mx-auto flex min-h-[60svh] max-w-[1450px] items-center justify-center">
          <div className="text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              03 / Projects
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              Projects
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Selected engineering projects coming next.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY LAB — TEMPORARY
         ========================================================= */}

      <section
        id="security"
        className="
          scroll-mt-32
          min-h-[80svh]
          bg-[#030509]
          px-6
          py-24
          text-white
        "
      >
        <div className="mx-auto flex min-h-[60svh] max-w-[1450px] items-center justify-center">
          <div className="text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              04 / Security Lab
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              Security Lab
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Security tooling, research and infrastructure experiments.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE — TEMPORARY
         ========================================================= */}

      <section
        id="experience"
        className="
          scroll-mt-32
          min-h-[80svh]
          bg-[#030509]
          px-6
          py-24
          text-white
        "
      >
        <div className="mx-auto flex min-h-[60svh] max-w-[1450px] items-center justify-center">
          <div className="text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              05 / Experience
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              Experience
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Engineering experience and professional journey coming next.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT — TEMPORARY
         ========================================================= */}

      <section
        id="contact"
        className="
          scroll-mt-32
          min-h-[80svh]
          bg-[#030509]
          px-6
          py-24
          text-white
        "
      >
        <div className="mx-auto flex min-h-[60svh] max-w-[1450px] items-center justify-center">
          <div className="text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              06 / Contact
            </p>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              Let&apos;s Connect
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Contact section coming next.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
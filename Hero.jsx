import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, HeartPulse, ShieldCheck, UserCheck } from "lucide-react";
import { IMAGES, WA_DEFAULT } from "@/lib/clinic";

const BADGES = [
  { icon: ShieldCheck, label: "Prevenção de Lesões" },
  { icon: HeartPulse, label: "Avaliação Cardiovascular" },
  { icon: UserCheck, label: "Acompanhamento Individualizado" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = () => (
  <section
    id="inicio"
    data-testid="hero-section"
    className="relative flex min-h-screen items-center overflow-hidden bg-[#382A22]"
  >
    <div className="absolute inset-0">
      <img
        src={IMAGES.hero}
        alt="Atleta em movimento durante avaliação de medicina esportiva"
        className="h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#382A22] via-[#382A22]/85 to-[#382A22]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#382A22] via-transparent to-[#382A22]/60" />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-12">
      <motion.span
        {...fadeUp(0.1)}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8DCCB]/30 bg-[#E8DCCB]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8DCCB]"
      >
        Medicina Esportiva · Jundiaí - SP
      </motion.span>

      <motion.h1
        {...fadeUp(0.25)}
        className="font-heading max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#F8F5F0] sm:text-5xl lg:text-6xl"
      >
        Seu potencial não tem limites.{" "}
        <span className="text-[#E8DCCB]">Sua saúde é o ponto de partida.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.4)}
        className="mt-6 max-w-2xl text-base leading-relaxed text-[#E8DCCB]/80 sm:text-lg"
      >
        Medicina esportiva especializada para quem busca mais saúde, melhor
        desempenho e qualidade de vida em todas as fases da prática esportiva.
      </motion.p>

      <motion.div {...fadeUp(0.55)} className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-cta-agendar"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E8DCCB] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#382A22] shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F5F0]"
        >
          Agendar Consulta
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#especialidades"
          data-testid="hero-cta-especialidades"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DCCB]/30 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F8F5F0] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8DCCB]/60 hover:text-[#E8DCCB]"
        >
          Conheça Nossas Especialidades
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.7)}
        className="mt-14 flex flex-wrap gap-3"
        data-testid="hero-badges"
      >
        {BADGES.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-[#F8F5F0]/90 backdrop-blur-md"
          >
            <Icon className="h-4 w-4 text-[#E8DCCB]" />
            {label}
          </span>
        ))}
      </motion.div>
    </div>

    <motion.a
      href="#clinica"
      aria-label="Rolar para a próxima seção"
      data-testid="hero-scroll-indicator"
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#E8DCCB]/50 transition-colors hover:text-[#E8DCCB]"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="h-6 w-6" />
    </motion.a>
  </section>
);

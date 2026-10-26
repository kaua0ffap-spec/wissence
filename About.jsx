import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  "Atendimento individualizado e acolhedor",
  "Abordagem baseada em evidências científicas",
  "Acompanhamento especializado em cada etapa",
  "Integração entre saúde, prevenção e desempenho esportivo",
];

export const About = () => (
  <section id="clinica" data-testid="about-section" className="bg-[#F8F5F0] py-20 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
      <Reveal className="relative">
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-[#382A22]/15 ring-1 ring-[#E8DCCB]">
          <img
            src="/clinica-fachada.jpg"
            alt="Fachada da Clínica Wissence em Jundiaí - SP"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-[#382A22] px-7 py-5 shadow-xl sm:block lg:-right-6">
          <p className="font-heading text-2xl font-extrabold text-[#E8DCCB]">Wissence</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[#E8DCCB]/60">
            Excelência em Medicina do Esporte
          </p>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#766458]">
            A Clínica
          </span>
          <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#382A22] sm:text-3xl lg:text-4xl">
            Cuidado médico especializado para quem vive o esporte
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-[#766458]">
            A <strong className="font-semibold text-[#382A22]">Wissence</strong> nasceu
            do compromisso com a saúde e o bem-estar de atletas e praticantes de
            atividade física de Jundiaí e região. Aqui, cada pessoa é recebida de
            forma única: ouvimos sua história, entendemos seus objetivos e
            construímos um plano de cuidado sob medida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#766458]">
            Unimos ciência, experiência clínica e acolhimento para que você pratique
            esporte com segurança, previna lesões e alcance seu melhor desempenho —
            seja qual for o seu ponto de partida.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 space-y-4">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#766458]" />
                <span className="text-sm font-medium text-[#382A22] sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

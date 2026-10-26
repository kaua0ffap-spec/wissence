import {
  BookOpenCheck,
  Crosshair,
  HeartHandshake,
  Stethoscope,
  UserCheck,
  Zap,
} from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada consulta é conduzida com tempo, escuta e atenção às suas necessidades.",
  },
  {
    icon: Stethoscope,
    title: "Profissionais Qualificados",
    description: "Cuidado médico dedicado e especializado em saúde do esporte.",
  },
  {
    icon: Crosshair,
    title: "Abordagem Individualizada",
    description: "Planos de cuidado construídos para o seu corpo, sua rotina e seus objetivos.",
  },
  {
    icon: BookOpenCheck,
    title: "Medicina Baseada em Evidências",
    description: "Decisões clínicas fundamentadas na melhor ciência disponível.",
  },
  {
    icon: Zap,
    title: "Tecnologia e Avaliação Especializada",
    description: "Recursos modernos de avaliação para um diagnóstico preciso.",
  },
  {
    icon: HeartHandshake,
    title: "Foco em Saúde e Qualidade de Vida",
    description: "Performance importa, mas sua saúde vem sempre em primeiro lugar.",
  },
];

export const Differentials = () => (
  <section data-testid="differentials-section" className="bg-[#F8F5F0] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#766458]">
          Nossos Diferenciais
        </span>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#382A22] sm:text-3xl lg:text-4xl">
          O padrão de cuidado que você merece
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#E8DCCB] bg-[#E8DCCB] sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            data-testid={`differential-item-${i}`}
            className="group bg-white p-8 transition-colors duration-500 hover:bg-[#382A22]"
          >
            <Reveal delay={(i % 3) * 0.08}>
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#382A22]/[0.07] text-[#382A22] transition-colors duration-500 group-hover:bg-[#E8DCCB]/10 group-hover:text-[#E8DCCB]">
                <Icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <h3 className="font-heading text-lg font-semibold text-[#382A22] transition-colors duration-500 group-hover:text-[#F8F5F0]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#766458] transition-colors duration-500 group-hover:text-[#E8DCCB]/75">
                {description}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

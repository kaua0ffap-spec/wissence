import {
  Activity,
  ArrowUpRight,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/clinic";

const SPECIALTIES = [
  {
    icon: Activity,
    title: "Medicina Esportiva",
    description:
      "Cuidado médico completo voltado à prática esportiva, unindo prevenção, diagnóstico e acompanhamento contínuo da sua saúde.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Física e Esportiva",
    description:
      "Análise detalhada da sua condição física para orientar treinos seguros e alinhados aos seus objetivos.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção de Lesões",
    description:
      "Identificação de fatores de risco e estratégias personalizadas para você treinar com mais segurança.",
  },
  {
    icon: FlaskConical,
    title: "Tratamento de Lesões Esportivas",
    description:
      "Conduta médica especializada no cuidado de lesões relacionadas ao esporte, com foco na sua recuperação.",
  },
  {
    icon: Trophy,
    title: "Acompanhamento de Atletas",
    description:
      "Suporte médico contínuo para atletas que buscam evolução de performance com saúde e consistência.",
  },
  {
    icon: HeartPulse,
    title: "Avaliação Cardiovascular para Prática Esportiva",
    description:
      "Avaliação criteriosa da saúde cardiovascular para liberar e orientar a prática esportiva com segurança.",
  },
  {
    icon: RotateCcw,
    title: "Orientação para Retorno ao Esporte",
    description:
      "Direcionamento médico para um retorno progressivo e seguro às atividades após lesões ou pausas.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento de Saúde e Performance",
    description:
      "Monitoramento da sua saúde ao longo da jornada esportiva, unindo qualidade de vida e desempenho.",
  },
];

export const Specialties = () => (
  <section
    id="especialidades"
    data-testid="specialties-section"
    className="bg-[#382A22] py-20 lg:py-28"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <Reveal className="max-w-2xl">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#E8DCCB]">
          Especialidades e Serviços
        </span>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#F8F5F0] sm:text-3xl lg:text-4xl">
          Cuidado completo para cada fase da sua jornada esportiva
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#E8DCCB]/70">
          Da primeira avaliação ao retorno ao esporte, oferecemos um acompanhamento
          médico integrado, pensado para a sua realidade.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SPECIALTIES.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={(i % 4) * 0.08}>
            <article
              data-testid={`specialty-card-${i}`}
              className="group flex h-full flex-col rounded-xl border border-[#E8DCCB]/15 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#E8DCCB]/50 hover:shadow-2xl hover:shadow-black/30"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8F5F0] text-[#382A22] ring-1 ring-[#E8DCCB] transition-colors duration-500 group-hover:bg-[#382A22] group-hover:text-[#E8DCCB]">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-[#382A22]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#766458]">
                {description}
              </p>
              <a
                href={waLink(
                  `Olá! Vim pelo site da Clínica Wissence e gostaria de saber mais sobre: ${title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`specialty-cta-${i}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#382A22] transition-colors hover:text-[#766458]"
              >
                Agendar Consulta
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

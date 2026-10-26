import { Reveal } from "./Reveal";
import { IMAGES } from "@/lib/clinic";

const CATEGORIES = [
  {
    image: IMAGES.audiencePro,
    alt: "Atleta profissional em treinamento de alto rendimento",
    title: "Atletas Profissionais",
    description:
      "Acompanhamento médico de alto nível para sustentar performance, prevenir lesões e prolongar sua carreira.",
  },
  {
    image: IMAGES.audienceAmateur,
    alt: "Atleta amador correndo ao ar livre",
    title: "Atletas Amadores",
    description:
      "Suporte especializado para evoluir nos treinos e competições com saúde, segurança e consistência.",
  },
  {
    image: IMAGES.audienceGym,
    alt: "Praticante de musculação em academia",
    title: "Praticantes de Academia",
    description:
      "Avaliação e orientação médica para treinar com segurança, corrigir riscos e potencializar seus resultados.",
  },
  {
    image: IMAGES.audienceBeginner,
    alt: "Pessoa iniciando atividade física com orientação",
    title: "Iniciando Atividade Física",
    description:
      "O ponto de partida ideal: avaliação médica completa para começar a se exercitar com segurança e confiança.",
  },
];

export const Audience = () => (
  <section data-testid="audience-section" className="bg-[#E8DCCB] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#766458]">
          Para Quem É
        </span>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#382A22] sm:text-3xl lg:text-4xl">
          A medicina esportiva é para todos que se movimentam
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#766458]">
          Do alto rendimento ao primeiro treino, o acompanhamento médico transforma
          a sua relação com o exercício.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map(({ image, alt, title, description }, i) => (
          <Reveal key={title} delay={(i % 4) * 0.08}>
            <article
              data-testid={`audience-card-${i}`}
              className="group relative h-96 overflow-hidden rounded-xl ring-1 ring-[#382A22]/10"
            >
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382A22] via-[#382A22]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-heading text-lg font-semibold text-[#F8F5F0]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#E8DCCB] opacity-0 transition-all duration-500 group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0">
                  {description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Jéssica Miola",
    when: "há 3 meses",
    text: "Depois de passar por vários profissionais, encontrei aqui um atendimento que realmente faz diferença. O Dr. Léo e o Dr. Bruno são extremamente atenciosos, competentes e passam muita segurança em cada consulta. O atendimento é humanizado, sem pressa, com explicações claras e um cuidado genuíno com o paciente. Recomendo de olhos fechados!",
  },
  {
    name: "Gislaine Cristina Trancolin",
    when: "há 3 meses",
    text: "Gostei muito desde o primeiro atendimento! Muitos prestativos, atenciosos e capacitados! Dr. Victor sempre me dá bastante atenção! Indico 100% a clínica!! Parabéns a equipe toda!!",
  },
  {
    name: "Rodrigo Petrovich Medeiros",
    when: "há 4 meses",
    text: "Excelente experiência. Dr. Luis Gustavo e sua equipe são simplesmente nota 1000. Tratamento iniciado, com toda explicação e condução do processo, tenho certeza que em breve estarei com o corpo que desejo. Abraço a todos da Wissence.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-[#B08D57] text-[#B08D57]" />
    ))}
  </div>
);

export const Testimonials = () => (
  <section data-testid="testimonials-section" className="bg-[#F8F5F0] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#766458]">
          Depoimentos
        </span>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#382A22] sm:text-3xl lg:text-4xl">
          O que nossos pacientes dizem
        </h2>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E8DCCB] bg-white px-4 py-2">
          <Stars />
          <span className="text-sm font-semibold text-[#382A22]">5,0</span>
          <span className="text-xs text-[#766458]">· Avaliações do Google</span>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map(({ name, when, text }, i) => (
          <Reveal key={name} delay={i * 0.1}>
            <figure
              data-testid={`testimonial-card-${i}`}
              className="flex h-full flex-col rounded-xl border border-[#E8DCCB] bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#382A22]/10"
            >
              <Quote className="h-7 w-7 text-[#E8DCCB]" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#766458]">
                “{text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-[#E8DCCB] pt-4">
                <Stars />
                <p className="mt-2 font-heading text-sm font-semibold text-[#382A22]">{name}</p>
                <p className="text-xs text-[#766458]">{when} · Google</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

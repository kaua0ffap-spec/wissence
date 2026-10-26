import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WA_DEFAULT } from "@/lib/clinic";

export const CtaBanner = () => (
  <section data-testid="cta-banner" className="relative overflow-hidden bg-[#382A22] py-20 lg:py-28">
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8DCCB]/10 blur-[140px]"
    />
    <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
      <Reveal>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#F8F5F0] sm:text-3xl lg:text-4xl">
          Cuide da sua saúde.{" "}
          <span className="text-[#E8DCCB]">Supere seus limites com responsabilidade.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#E8DCCB]/80 sm:text-lg">
          Tenha acompanhamento especializado para cuidar da sua saúde, prevenir
          lesões e alcançar seus objetivos esportivos.
        </p>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-banner-button"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#E8DCCB] px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#382A22] shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F5F0]"
        >
          Agendar Minha Consulta
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </div>
  </section>
);

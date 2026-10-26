import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { CLINIC, WA_DEFAULT } from "@/lib/clinic";
import { Logo } from "./Header";

const QUICK_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

const SPECIALTY_LINKS = [
  "Medicina Esportiva",
  "Avaliação Física e Esportiva",
  "Prevenção de Lesões",
  "Tratamento de Lesões Esportivas",
  "Acompanhamento de Atletas",
  "Saúde e Performance",
];

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-white/10 bg-[#382A22] pb-10 pt-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#inicio" data-testid="footer-logo">
            <Logo compact />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#E8DCCB]/70">
            Clínica de medicina esportiva em Jundiaí dedicada à saúde, à prevenção
            de lesões e ao desempenho de atletas e praticantes de atividade física.
          </p>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E8DCCB]/80 transition-colors hover:text-[#E8DCCB]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
              <Instagram className="h-4 w-4" />
            </span>
            @clinicawissence
          </a>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#F8F5F0]">
            Links Rápidos
          </h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`footer-link-${link.href.slice(1)}`}
                  className="text-sm text-[#E8DCCB]/60 transition-colors hover:text-[#E8DCCB]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Especialidades">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#F8F5F0]">
            Especialidades
          </h3>
          <ul className="mt-5 space-y-3">
            {SPECIALTY_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#especialidades"
                  className="text-sm text-[#E8DCCB]/60 transition-colors hover:text-[#E8DCCB]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#F8F5F0]">
            Contato
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-[#E8DCCB]/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E8DCCB]" />
              <span>{CLINIC.address}</span>
            </li>
            <li>
              <a
                href={CLINIC.phoneHref}
                data-testid="footer-phone-link"
                className="flex items-center gap-3 transition-colors hover:text-[#E8DCCB]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#E8DCCB]" />
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E8DCCB]" />
              <span>
                Seg a Sex: 08:00 às 19:00
                <br />
                Sáb: 08:00 às 12:00
              </span>
            </li>
            <li>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="text-[#E8DCCB] transition-colors hover:text-white"
              >
                Agendar pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-center">
        <p className="text-xs text-[#E8DCCB]/40">
          © {new Date().getFullYear()} Clínica Wissence · Medicina Esportiva · Jundiaí - SP.
          Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

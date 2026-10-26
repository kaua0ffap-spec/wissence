import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC, HOURS, MAPS_EMBED, MAPS_ROUTE, WA_DEFAULT } from "@/lib/clinic";

const INFO_ICON =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8DCCB]/10 text-[#E8DCCB] ring-1 ring-[#E8DCCB]/20";

export const LocationContact = () => (
  <section id="contato" data-testid="contact-section" className="bg-[#F8F5F0] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
      <Reveal className="max-w-2xl">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#766458]">
          Localização e Contato
        </span>
        <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#382A22] sm:text-3xl lg:text-4xl">
          Estamos no centro de Jundiaí, perto de você
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-2xl bg-[#382A22] p-8 text-white shadow-xl lg:p-10">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <span className={INFO_ICON}>
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#F8F5F0]">Endereço</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#E8DCCB]/70">{CLINIC.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className={INFO_ICON}>
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#F8F5F0]">Telefone e WhatsApp</h3>
                  <a
                    href={CLINIC.phoneHref}
                    data-testid="contact-phone-link"
                    className="mt-1 block text-sm text-[#E8DCCB]/70 transition-colors hover:text-[#E8DCCB]"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className={INFO_ICON}>
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#F8F5F0]">Horários de Atendimento</h3>
                  <ul className="mt-1 space-y-1 text-sm text-[#E8DCCB]/70">
                    {HOURS.map(({ days, time }) => (
                      <li key={days} className="flex justify-between gap-4">
                        <span>{days}</span>
                        <span className="font-medium text-[#E8DCCB]">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#382A22] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar pelo WhatsApp
              </a>
              <a
                href={MAPS_ROUTE}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-route-button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8DCCB]/25 px-6 py-3.5 text-sm font-semibold text-[#F8F5F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8DCCB]/60 hover:text-[#E8DCCB]"
              >
                <Navigation className="h-4 w-4" />
                Traçar Rota
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <div className="h-full min-h-[380px] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-[#E8DCCB]">
            <iframe
              title="Mapa da Clínica Wissence - Rua Rangel Pestana, 465, Centro, Jundiaí - SP"
              data-testid="contact-map"
              src={MAPS_EMBED}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

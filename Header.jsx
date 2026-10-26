import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WA_DEFAULT } from "@/lib/clinic";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-[#E8DCCB]/40">
      <img
        src="/logo.png"
        alt="Logotipo Wissence"
        className="h-full w-full scale-[1.06] object-cover"
      />
    </span>
    <span className="font-heading text-xl font-extrabold tracking-tight text-[#F8F5F0]">
      Wissence
      {!compact && (
        <span className="ml-2 hidden text-[10px] font-medium uppercase tracking-[0.28em] text-[#E8DCCB]/60 sm:inline">
          Medicina Esportiva
        </span>
      )}
    </span>
  </span>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#382A22]/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <a href="#inicio" data-testid="logo-link">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.href.slice(1)}`}
              className="text-sm font-medium text-[#E8DCCB]/75 transition-colors duration-300 hover:text-[#E8DCCB]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-button"
            className="rounded-full bg-[#E8DCCB] px-6 py-2.5 text-sm font-semibold text-[#382A22] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8F5F0]"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#F8F5F0] ring-1 ring-[#E8DCCB]/25 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="mt-3 space-y-1 border-t border-white/10 bg-[#382A22]/95 px-4 py-4 backdrop-blur-xl sm:px-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`mobile-nav-${item.href.slice(1)}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-[#F8F5F0] transition-colors hover:bg-white/5 hover:text-[#E8DCCB]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-cta-button"
            className="mt-2 block rounded-full bg-[#E8DCCB] px-6 py-3 text-center text-sm font-semibold text-[#382A22]"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

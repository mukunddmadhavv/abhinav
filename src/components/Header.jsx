import { Building2, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/siteContent";

function Header({ enquiryHref }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sand to-amber shadow-glow">
            <Building2 className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.14em] text-white">
              Abhinav Traders
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/55">
              Cement Wholesaler
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/75 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919569555234"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sand hover:text-sand"
          >
            Call Now
          </a>
          <a
            href={enquiryHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire Today
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-3 text-white lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white/80"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={enquiryHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-sand px-4 py-3 text-center text-sm font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Enquire Today
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

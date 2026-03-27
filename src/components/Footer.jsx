import { defaultWhatsAppMessage } from "../utils/whatsapp";

function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.12em] text-white">
            ABHINAV TRADERS
          </p>
          <p className="mt-2 text-sm text-white/65">
            Cement wholesaler based in Deoria, Uttar Pradesh.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/70">
          <a href="tel:+919569555234" className="transition hover:text-sand">
            Number : 9569555234
          </a>
          <a href="tel:+919838075527" className="transition hover:text-sand">
            Number : 9838075527
          </a>
          <a
            href={defaultWhatsAppMessage()}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sand"
          >
            WhatsApp: 9569555234
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Dharamsala+gali+Motilal+Road+Deoria+274001+Uttar+Pradesh"
          target="_blank"
          rel="noreferrer"
          className="max-w-sm text-sm leading-7 text-white/70 transition hover:text-sand"
        >
          Dharamsala gali, Motilal Road, Deoria (274001), U.P
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import { Mail, Phone, MessageCircle } from "lucide-react";

function FloatingContactBar({ enquiryHref }) {
  return (
    <div className="fixed bottom-5 left-4 right-4 z-30 sm:left-auto sm:right-6 sm:w-auto">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2.5 rounded-full border border-ink/10 bg-white/95 px-2.5 py-2 shadow-[0_16px_38px_rgba(10,23,42,0.16)] backdrop-blur-xl">
        <a
          href="tel:+919569555234"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-3.5 py-2.5 text-sm font-bold text-white transition hover:bg-steel"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={enquiryHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sand px-3.5 py-2.5 text-sm font-bold text-ink transition hover:bg-amber"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default FloatingContactBar;

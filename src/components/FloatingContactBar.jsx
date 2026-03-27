import { Mail, Phone, MessageCircle } from "lucide-react";

function FloatingContactBar({ enquiryHref }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 sm:left-auto sm:right-6 sm:w-auto">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-ink/10 bg-white/95 p-3 shadow-[0_18px_50px_rgba(14,20,32,0.18)] backdrop-blur-xl">
        <a
          href="tel:+919569555234"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-steel"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={enquiryHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-ink transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default FloatingContactBar;

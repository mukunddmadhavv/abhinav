import { ArrowRight, MessageCircle } from "lucide-react";
import { contactSummary } from "../data/siteContent";

function HeroSection({ enquiryHref }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,163,255,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(166,212,255,0.22),transparent_26%)]" />
      <div className="absolute inset-0 bg-radial-grid bg-[size:22px_22px] opacity-20" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sand/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-sand/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-sand">
            Trusted Local Cement Supply
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Dependable cement wholesale support for dealers, contractors, and project buyers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            ABHINAV TRADERS is a Deoria-based cement wholesaler focused on easy
            communication, prompt enquiry handling, and a simple path from
            requirement to contact.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={enquiryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sand px-6 py-4 text-sm font-bold text-ink transition hover:bg-amber"
            >
              <MessageCircle className="h-4 w-4" />
              Send Enquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+919838075527"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:border-sand hover:text-sand"
            >
              Call 9838075527
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactSummary.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full border border-sand/30 bg-sand/10 blur-xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-sand/80">
                ABHINAV TRADERS
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Core Business
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-white">
                    Cement Wholesaler
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-ink/40 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      Contact
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      9569555234
                    </p>
                    <p className="text-sm text-white/58">Direct business line</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-ink/40 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      Alternate
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      9838075527
                    </p>
                    <p className="text-sm text-white/58">Quick response support</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-sand/20 bg-sand/10 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/75">
                    Location
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    Dharamsala gali, Motilal Road, Deoria (274001), U.P
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import { trustStrip } from "../data/siteContent";

function PromoStrip() {
  return (
    <section className="border-y border-ink/5 bg-mist">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {trustStrip.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-ink/6 bg-white px-5 py-4 text-center text-sm font-semibold text-ink/80"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoStrip;

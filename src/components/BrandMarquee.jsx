const items = [
  { alt: "Sarvottam cement 53 grade bag", src: "/marquee/sarvottam-53.jpg" },
  { alt: "Sarvottam cement 43 and 53 grade packs", src: "/marquee/sarvottam-43-53.jpg" },
  { alt: "Sarvottam pride banner", src: "/marquee/sarvottam-banner.jpg" },
  { alt: "Sarvottam product lineup", src: "/marquee/sarvottam-lineup.png" },
];

function BrandMarquee() {
  return (
    <section className="bg-mist px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-[0_16px_40px_rgba(10,23,42,0.10)] backdrop-blur">
        <div className="marquee-track">
          {[...items, ...items].map((item, idx) => (
            <div key={`${item.alt}-${idx}`} className="marquee-item">
              <img
                src={item.src}
                alt={item.alt}
                className="h-40 w-auto object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;

import { serviceCards } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Professional cement supply presentation for wholesale, retail, and project enquiries."
          description="Each section helps visitors understand the business quickly, from supply support and communication speed to contact channels and location details."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group rounded-[2rem] border border-ink/8 bg-mist p-6 transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber shadow-sm transition group-hover:bg-sand group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate transition group-hover:text-white/72">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

import { aboutCards } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About the Firm"
            title="ABHINAV TRADERS is built around straightforward service and easy business communication."
            description="The page highlights what matters most for a cement wholesaler: clear contact details, a dependable local presence, and fast access for customers who need supply support."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {aboutCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-[0_18px_40px_rgba(14,20,32,0.06)]"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

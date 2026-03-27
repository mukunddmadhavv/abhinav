import { advantages, processSteps } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose ABHINAV TRADERS"
          title="Clear, reachable, responsive."
          description="Quick contact, trusted supply, simple next steps."
          invert
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:grid-cols-3 lg:p-8">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-[1.5rem] bg-white/5 p-6">
              <span className="text-sm font-bold tracking-[0.28em] text-sand">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

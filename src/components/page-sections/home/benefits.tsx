import { translations, type Language } from "@/src/i18n/translations";

export function Benefits({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="border-y border-white/5 bg-[#11111C]" id="how">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98CFF]">{t.whyEyebrow}</p>
          <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl">{t.whyTitle}</h2>
          <p className="mt-5 max-w-md leading-7 text-[#8D899E]">{t.whyDescription}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.features.map((feature, index) => (
            <article className="rounded-2xl border border-white/8 bg-[#171722] p-5" key={feature.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#29234C] text-sm font-bold text-[#A98CFF]">0{index + 1}</span>
              <h3 className="mt-8 text-base font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#8D899E]">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

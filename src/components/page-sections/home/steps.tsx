import { translations, type Language } from "@/src/i18n/translations";

export function Steps({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98CFF]">{t.stepsEyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">{t.stepsTitle}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {t.steps.map(([number, title, body]) => (
          <div className="relative border-t border-white/15 pt-5" key={number}>
            <span className="text-xs font-bold tracking-[0.2em] text-[#A98CFF]">{number}</span>
            <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#8D899E]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

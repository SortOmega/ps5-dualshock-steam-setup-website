import { ArrowIcon, DownloadIcon } from "@/src/components/icons";
import { releaseUrl, repositoryUrl } from "@/src/constants/links";
import { translations, type Language } from "@/src/i18n/translations";
import { SetupPreview } from "./setup-preview";

export function Hero({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(149,96,255,0.22),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(238,65,160,0.18),transparent_30%),linear-gradient(180deg,#111020_0%,#0D0D16_75%)]" />
      <div className="absolute -left-40 top-32 -z-10 h-96 w-96 rounded-full bg-[#732B78]/20 blur-3xl" />
      <div className="mx-auto grid min-h-[650px] w-full max-w-6xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-16">
        <div className="max-w-xl">
          <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A98CFF]"><span className="h-px w-8 bg-[#A98CFF]" />{t.eyebrow}</div>
          <h1 className="whitespace-pre-line text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl">{t.title}</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#AAA6BB]">{t.description}</p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a className="group inline-flex items-center gap-3 rounded-full bg-[#A98CFF] px-6 py-3.5 text-sm font-bold text-[#171326] shadow-[0_12px_35px_rgba(169,140,255,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#B9A3FF]" href={releaseUrl}>
              <DownloadIcon />{t.download}<ArrowIcon />
            </a>
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#D3C9F4] transition-colors hover:text-white" href={repositoryUrl} rel="noreferrer" target="_blank">
              {t.source}<ArrowIcon />
            </a>
          </div>
          <p className="mt-5 text-xs text-[#777288]">{t.version}</p>
        </div>
        <SetupPreview language={language} />
      </div>
    </section>
  );
}

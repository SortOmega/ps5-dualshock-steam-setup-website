import { ArrowIcon, DownloadIcon } from "@/src/components/icons";
import { releaseUrl } from "@/src/constants/links";
import { translations, type Language } from "@/src/i18n/translations";

export function DownloadCta({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="px-6 pb-20 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#A98CFF]/20 bg-[#201B38] px-6 py-14 text-center sm:px-12">
        <div className="absolute -left-20 -top-40 h-80 w-80 rounded-full bg-[#9D4EDD]/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-20 h-96 w-96 rounded-full bg-[#E9409E]/10 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-[#B5AECC]">{t.ctaBody}</p>
          <a className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A98CFF] px-6 py-3.5 text-sm font-bold text-[#171326] transition-colors hover:bg-[#B9A3FF]" href={releaseUrl}>
            <DownloadIcon />{t.cta}<ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

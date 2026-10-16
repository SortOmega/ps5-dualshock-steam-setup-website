import { repositoryUrl } from "@/src/constants/links";
import { translations, type Language } from "@/src/i18n/translations";

export function Footer({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/5 px-6 py-7 text-xs text-[#777288] sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <span>{t.footerText}</span>
      <div className="flex gap-5">
        <span>{t.footerLicense}</span>
        <a className="transition-colors hover:text-white" href={repositoryUrl} rel="noreferrer" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { repositoryUrl, releaseUrl } from "@/src/constants/links";
import { translations, type Language } from "@/src/i18n/translations";

function LanguageSwitcher({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs font-bold">
      {(["en", "es"] as const).map((option) => (
        <button
          aria-pressed={language === option}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            language === option
              ? "bg-[#A98CFF] text-[#171326]"
              : "text-[#AAA6BB] hover:text-white"
          }`}
          key={option}
          onClick={() => onLanguageChange(option)}
          type="button"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Header({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const t = translations[language];

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
      <a aria-label="Steam Input Setup" className="flex items-center gap-3" href="#top">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A98CFF] text-[#151322] shadow-[0_0_28px_rgba(169,140,255,0.35)]">
          <Image
            alt="Steam Input Setup"
            className="h-7 w-7"
            height={128}
            src="/ps5-steam-input-setup.png"
            width={128}
          />
        </span>
        <span className="text-sm font-bold tracking-[-0.02em] text-white">
          Steam Input Setup
        </span>
      </a>
      <div className="hidden items-center gap-8 text-sm text-[#A9A5BA] md:flex">
        <a className="transition-colors hover:text-white" href="#how">
          {t.navHow}
        </a>
        <a className="transition-colors hover:text-white" href={repositoryUrl} rel="noreferrer" target="_blank">
          {t.navOpenSource}
        </a>
        <a className="rounded-full border border-white/10 px-4 py-2 text-[#E8E1FF] transition-colors hover:border-[#A98CFF]/60 hover:bg-white/5" href={releaseUrl}>
          {t.navDownload}
        </a>
      </div>
      <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
    </nav>
  );
}

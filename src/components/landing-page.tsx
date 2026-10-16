"use client";

import { useState } from "react";
import type { Language } from "@/src/i18n/translations";
import {
  Benefits,
  DownloadCta,
  Footer,
  Header,
  Hero,
  Steps,
} from "@/src/components/page-sections/home";

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <main className="overflow-hidden bg-[#0D0D16] text-[#F4F1FF]">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Benefits language={language} />
      <Steps language={language} />
      <DownloadCta language={language} />
      <Footer language={language} />
    </main>
  );
}

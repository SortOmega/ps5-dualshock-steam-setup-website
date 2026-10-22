import Image from "next/image";
import { CheckIcon } from "@/src/components/icons";
import { translations, type Language } from "@/src/i18n/translations";

export function SetupPreview({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute -inset-10 rounded-full bg-[#7E55D7]/20 blur-3xl" />
      <div className="relative rotate-1 rounded-[2rem] border border-white/10 bg-[#151522]/95 p-3 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#10101A] p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#29234C] text-[#A98CFF]">
                <Image
                  alt=""
                  className="h-7 w-7"
                  height={128}
                  src="/ps5-steam-input-setup.png"
                  width={128}
                />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{t.heroLabel}</p>
                <p className="mt-0.5 text-xs text-[#777288]">Linux utility</p>
              </div>
            </div>
            <span className="rounded-md bg-[#24213A] px-2 py-1 text-xs font-bold text-[#B7A6EA]">PS5</span>
          </div>
          <div className="mt-5 rounded-2xl bg-[#191827] p-4">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[#60E8B1]">
                <Image
                  alt=""
                  className="h-7 w-7"
                  height={128}
                  src="/ps5-steam-input-setup.png"
                  width={128}
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#F4F1FF]">Steam</p>
                <p className="text-xs text-[#777288]">{t.compatibility}</p>
              </div>
              <CheckIcon />
            </div>
            <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
              {["60-steam-input.rules", "70-steam-input.rules"].map((rule) => (
                <div className="flex items-center justify-between text-[#AAA6BB]" key={rule}>
                  <span className="flex items-center gap-3"><span className="h-2 w-2 rounded-sm bg-[#A98CFF]" />{rule}</span>
                  <CheckIcon />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#60E8B1]/15 bg-[#60E8B1]/5 px-4 py-3 text-xs text-[#60E8B1]">
            <CheckIcon />{t.heroStatus}
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-[#777288]">{t.heroHint}</p>
        </div>
      </div>
      <div className="absolute -bottom-8 -right-2 flex rotate-3 items-center gap-2 rounded-2xl border border-white/10 bg-[#201D31] px-4 py-3 text-xs font-semibold text-[#D7D0EE] shadow-xl sm:-right-8">
        <span className="h-2 w-2 rounded-full bg-[#60E8B1] shadow-[0_0_10px_#60E8B1]" />{t.heroAction}
      </div>
    </div>
  );
}

import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import Ticker from "@/components/Ticker";
import {
  ShieldCheck,
  Check,
  X,
  FileSpreadsheet,
  Zap,
} from "lucide-react";

const TALLY_URL = "https://tally.so/r/4aKLGO";

/*
  COLOR MAP (Overworld system):
  --bone:       #FFFAEF  (parchment background)
  --bone-mid:   #F2EAD6  (surface / alternate section bg)
  --bone-deep:  #E8DFCA  (borders, dividers)
  --ink:        #161310  (text, borders, shadows)
  --ink-muted:  #6B6459  (secondary text)
  --cobalt:     #2E5DD6  (interactive accent — buttons, links, focus)
  --terracotta: #C4432B  (heading accent words — high signal only)
  --forest:     #2D6A4F  (sparingly — stamps, tiny signals)
*/

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAEF] text-[#161310] font-sans antialiased overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          NAVIGATION BAR
      ═══════════════════════════════════════════ */}
      <nav className="w-full bg-[#FFFAEF] border-b-2 border-[#161310] px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-pixel text-lg sm:text-xl text-[#161310] tracking-tight">
            NET◆PLAYBOOK
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline stamp text-[#2D6A4F]">
            NET-2027
          </span>
          <Button
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-sm py-2 px-4"
          >
            Get Playbook
          </Button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FFFAEF] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center space-y-6 sm:space-y-8">
          {/* Badge — stamp */}
          <div className="flex justify-center">
            <span className="stamp text-[#2D6A4F] border-[#2D6A4F] bg-[#2D6A4F]/10">
              <Zap className="w-3 h-3" />
              NET-2027 EDITION • ENGINEERING &amp; COMPUTING
            </span>
          </div>

          {/* Pixel heading — cobalt blue accent on key words */}
          <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl text-[#161310] leading-[1.1] tracking-tight">
            107 TO 150.{" "}
            <span className="text-[#2E5DD6]">THE NUST NET</span>{" "}
            PLAYBOOK.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-[#6B6459] font-normal max-w-2xl mx-auto leading-relaxed">
            An independent student guide sharing the exact preparation system,
            subject routines, and timed FLP review method used to jump from 107
            to 150.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-cobalt w-full sm:w-auto text-base"
            >
              <span>Get the Playbook — 650 PKR</span>
              <svg
                className="w-4 h-4 shrink-0 btn-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </a>
            <Button
              href="#whats-inside"
              variant="secondary"
              className="w-full sm:w-auto text-base"
            >
              Explore Contents
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-xs sm:text-sm text-[#6B6459] font-normal flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2D6A4F] shrink-0" />
            <span>
              PDF + Companion FLP Toolkit • Delivered via email after quick
              payment verification
            </span>
          </p>

          {/* Tilted preview cards */}
          <div className="flex justify-center gap-3 sm:gap-5 pt-4 sm:pt-6">
            <div className="card-hard-sm -rotate-2 w-28 sm:w-40 aspect-[3/4] overflow-hidden hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/sample-1.png"
                alt="Chapter Preparation Loop preview"
                width={160}
                height={213}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-hard-sm rotate-1 w-32 sm:w-44 aspect-[3/4] overflow-hidden z-10 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/sample-2.png"
                alt="3-Round Math Strategy preview"
                width={176}
                height={235}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-hard-sm -rotate-1 w-28 sm:w-40 aspect-[3/4] overflow-hidden hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/sample-3.png"
                alt="FLP Toolkit preview"
                width={160}
                height={213}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TICKER STRIP
      ═══════════════════════════════════════════ */}
      <Ticker />

      {/* ═══════════════════════════════════════════
          SCORE PROGRESSION
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FFFAEF] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center sm:text-left mb-8">
            <span className="stamp text-[#6b6459] mb-3 inline-flex">
              PROVEN ITERATION
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              AN ATLAS, <span className="text-[#C4432B]">SCORED IN</span>{" "}
              3 ATTEMPTS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* NET-2 */}
            <div className="card-hard p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="stamp text-[#6b6459] text-[10px]">ATTEMPT 01</span>
                <span className="text-xs text-[#6b6459] font-normal">
                  Initial Baseline
                </span>
              </div>
              <div className="font-pixel text-3xl sm:text-4xl text-[#161310]">
                107<span className="text-[#6b6459] text-xl">/200</span>
              </div>
              <hr className="divider-tear" />
              <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                Studied like a board exam; struggled under timed MCQ pressure.
              </p>
            </div>

            {/* NET-3 */}
            <div className="card-hard p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="stamp text-[#6b6459] text-[10px]">ATTEMPT 02</span>
                <span className="text-xs font-medium text-[#161310]">
                  +34 Points
                </span>
              </div>
              <div className="font-pixel text-3xl sm:text-4xl text-[#161310]">
                141<span className="text-[#6b6459] text-xl">/200</span>
              </div>
              <hr className="divider-tear" />
              <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                Fixed Physics using a PTB-first method and targeted chapter
                loops.
              </p>
            </div>

            {/* NET-4 — Top Score */}
            <div className="card-hard p-5 space-y-3 relative">
              <div className="absolute -top-3 -right-2 bg-[#C4432B] text-[#FFFAEF] text-[10px] font-bold uppercase px-3 py-1 rounded border-2 border-[#161310] shadow-[2px_2px_0px_#161310] rotate-2">
                ★ TOP SCORE
              </div>
              <div className="flex items-center justify-between">
                <span className="stamp text-[#2E5DD6] text-[10px]">ATTEMPT 03</span>
                <span className="text-xs font-medium text-[#C4432B]">
                  +9 Points
                </span>
              </div>
              <div className="font-pixel text-3xl sm:text-4xl text-[#161310]">
                <span className="text-[#C4432B]">150</span>
                <span className="text-[#6b6459] text-xl">/200</span>
              </div>
              <hr className="divider-tear" />
              <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                Simulated 3-hour FLPs, reviewed every MCQ, and used a 3-round
                Math strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT'S INSIDE
      ═══════════════════════════════════════════ */}
      <section
        id="whats-inside"
        className="w-full bg-[#F2EAD6] border-b-2 border-[#161310]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center sm:text-left mb-8">
            <span className="stamp text-[#6b6459] mb-3 inline-flex">
              CURRICULUM &amp; BREAKDOWN
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              WHAT&apos;S INSIDE{" "}
              <span className="text-[#C4432B]">THE PLAYBOOK.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              A comprehensive blueprint distilled into 5 core parts plus an
              analysis toolkit.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Part I: Get Clear Before You Prepare",
                desc: "Test pattern, eligibility rules, and subject weightings (50% Math, 30% Physics, 20% English).",
              },
              {
                num: "02",
                title: "Part II: Build a System You Can Repeat",
                desc: "Baseline check, sticking to core resources, and the repeatable Chapter Preparation Loop.",
              },
              {
                num: "03",
                title: "Part III: Prepare by Subject",
                desc: "Mathematics (lectures, notes, KIPS FUNG), Physics (PTB textbook-first + highlighting), and English.",
              },
              {
                num: "04",
                title: "Part IV: Turn Practice into Performance",
                desc: "Full-length practice paper review, the 3-round Mathematics time-management strategy, and final-days checklist.",
              },
              {
                num: "05",
                title: "Part V: Behind the Scores",
                desc: "Full 107 → 141 → 150 breakdown and what I would do differently.",
              },
            ].map((part) => (
              <div
                key={part.num}
                className="card-hard-flat p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
              >
                <span className="font-pixel text-lg text-[#6b6459] shrink-0 w-8">
                  {part.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-medium text-[#161310]">
                    {part.title}
                  </h3>
                  <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                    {part.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bonus */}
            <div className="card-hard p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start relative">
              <div className="absolute -top-2.5 left-4 bg-[#2D6A4F] text-[#FFFAEF] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border border-[#161310] shadow-[2px_2px_0px_#161310]">
                BONUS INCLUDED
              </div>
              <span className="shrink-0 w-8 h-8 rounded bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center mt-1">
                <FileSpreadsheet className="w-4 h-4" />
              </span>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-medium text-[#161310]">
                  Companion FLP Performance &amp; Analysis Toolkit
                </h3>
                <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                  4 structured analysis &amp; tracking sheets to diagnose
                  chapter-level mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SAMPLE PAGES
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FFFAEF] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center sm:text-left mb-8">
            <span className="stamp text-[#6b6459] mb-3 inline-flex">
              PREVIEW MATERIAL
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              INSIDE{" "}
              <span className="text-[#C4432B]">THE PLAYBOOK.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              Real previews and templates from inside the guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: "/images/sample-1.png",
                alt: "Sample 1 - The Chapter Preparation Loop",
                label: "SYS.01",
                title: "The Chapter Preparation Loop",
                desc: "Systematic process for mastering core textbook concepts before attempting practice MCQs.",
              },
              {
                src: "/images/sample-2.png",
                alt: "Sample 2 - The 3-Round Mathematics Strategy",
                label: "SYS.02",
                title: "The 3-Round Math Strategy",
                desc: "Clock management framework to answer 80 Mathematics MCQs without running out of time.",
              },
              {
                src: "/images/sample-3.png",
                alt: "Sample 3 - FLP Performance & Error Matrix",
                label: "TOOLKIT",
                title: "FLP Diagnosis & Tracking Sheet",
                desc: "Granular tracking matrix to pinpoint whether errors are conceptual or calculation-based.",
              },
            ].map((sample, i) => (
              <div key={i} className="card-hard overflow-hidden flex flex-col">
                <div className="relative aspect-[3/4] w-full bg-[#F2EAD6] border-b-[1.5px] border-[#161310]">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-1.5">
                  <div>
                    <span className="font-pixel text-[10px] text-[#2E5DD6] uppercase">
                      {sample.label}
                    </span>
                    <h3 className="text-sm font-medium text-[#161310] mt-0.5">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-[#6b6459] font-normal mt-1 leading-relaxed">
                      {sample.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO IT'S FOR / NOT FOR
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#F2EAD6] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center sm:text-left mb-8">
            <span className="stamp text-[#6b6459] mb-3 inline-flex">
              FIT &amp; EXPECTATIONS
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              THREE VOICES,{" "}
              <span className="text-[#C4432B]">NEVER BLENDED.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Built For */}
            <div className="card-hard p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[2]" />
                </span>
                <h3 className="font-pixel text-lg text-[#161310]">
                  Built For
                </h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#6b6459] font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    First-time and repeat NET-Engineering / Computing aspirants
                    who want a clear, repeatable preparation system.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    Students feeling overwhelmed by multiple coaching books and
                    seeking a streamlined resource priority.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    Aspirants scoring between 100 and 135 who need timed testing
                    discipline to break past the 145+ barrier.
                  </span>
                </li>
              </ul>
            </div>

            {/* Not For */}
            <div className="card-hard p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#6b6459]/10 text-[#6b6459] flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2]" />
                </span>
                <h3 className="font-pixel text-lg text-[#161310]">Not For</h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#6b6459] font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#6b6459] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    NET-Business / Architecture students (this playbook is
                    strictly engineered for Engineering &amp; Computing).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#6b6459] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    Anyone looking for a textbook replacement; you still need
                    your PTB textbooks and practice papers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#6b6459] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    Anyone searching for a magic &quot;guaranteed score&quot;
                    shortcut without doing the actual timed chapter practice.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#FFFAEF] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center sm:text-left mb-8">
            <span className="stamp text-[#6b6459] mb-3 inline-flex">
              FIELD LOG
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              FREQUENTLY <span className="text-[#C4432B]">ASKED.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              Everything you need to know about payment, delivery, and format.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="w-full bg-[#161310] border-b-2 border-[#161310]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center space-y-6">
          <span className="stamp text-[#2D6A4F] border-[#2D6A4F]/40 bg-[#2D6A4F]/10">
            JOIN THE EXPEDITION
          </span>

          <h2 className="font-pixel text-3xl sm:text-5xl text-[#FFFAEF] leading-tight">
            READY TO{" "}
            <span className="text-[#C4432B]">TAKE CONTROL?</span>
          </h2>

          <p className="text-[#FFFAEF]/60 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Get instant access to the exact routines, the 3-round math strategy,
            and the companion FLP diagnostic sheets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal w-full sm:w-auto text-base py-3.5 px-7 rounded-lg border-2 border-[#FFFAEF]/20 bg-[#2E5DD6] text-white font-medium shadow-[4px_4px_0px_rgba(255,250,239,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_rgba(255,250,239,0.15)] transition-all"
            >
              <span>Get the Playbook — 650 PKR</span>
              <svg className="w-4 h-4 shrink-0 btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#FFFAEF]/40 font-normal">
            Pay via Easypaisa, JazzCash, NayaPay, or SadaPay • Direct PDF &amp;
            Sheets email delivery
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="w-full bg-[#161310] border-t border-[#6b6459]/20 px-4 sm:px-6 py-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-pixel text-sm text-[#FFFAEF]/50">
            NET◆PLAYBOOK
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#FFFAEF]/30 font-normal">
          Independent student guide. Not an official NUST publication.
        </p>
        <p className="text-[11px] text-[#FFFAEF]/20 font-normal">
          © 2027 The NUST NET Playbook. All rights reserved.
        </p>
      </footer>

      {/* ═══════════════════════════════════════════
          MOBILE BOTTOM BAR
      ═══════════════════════════════════════════ */}
      <aside
        aria-label="Quick Action"
        className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-[#FFFAEF] border-t-2 border-[#161310] z-50 flex items-center justify-between gap-3"
      >
        <div className="flex flex-col">
          <span className="font-pixel text-[10px] text-[#6b6459] uppercase">
            NET-2027
          </span>
          <span className="text-base font-medium text-[#161310] leading-none">
            650 PKR
          </span>
        </div>
        <Button
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="py-2.5 px-5 text-sm"
        >
          Get Playbook
        </Button>
      </aside>
    </div>
  );
}

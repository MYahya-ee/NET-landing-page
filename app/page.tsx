import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import Ticker from "@/components/Ticker";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  Check,
  X,
  FileSpreadsheet,
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
      <nav className="w-full bg-[#FFFAEF] border-b-2 border-[#161310] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-pixel text-base sm:text-xl text-[#161310] tracking-tight flex items-center gap-1.5 sm:gap-2">
            <span>NET</span>
            <Image
              src="/images/nav-logo.png"
              alt="Logo"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain inline-block -mt-0.5"
              priority
            />
            <span>PLAYBOOK</span>
          </span>
        </div>
        <div className="flex items-center">
          <Button
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="cobalt"
            className="!py-1.5 !px-2.5 !text-xs sm:!py-2 sm:!px-4 sm:!text-sm !shadow-[2px_2px_0px_#161310] sm:!shadow-[3px_3px_0px_#161310]"
            arrowClassName="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
          {/* Pixel heading — cobalt blue accent on key words */}
          <h1 className="font-pixel-num font-normal text-[2.75rem] sm:text-7xl lg:text-8xl text-[#161310] leading-[0.98] tracking-tight">
            107 TO 150.{" "}
            <span className="text-[#2E5DD6]">THE NUST NET</span>{" "}
            PLAYBOOK.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-[#161310]/85 font-medium max-w-2xl mx-auto leading-relaxed">
            A guide sharing the exact preparation system, subject routines, and
            timed FLP review method used to jump from 107 to 150.
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
              See what&apos;s inside
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-xs sm:text-sm text-[#6B6459] font-normal text-center">
            PDF + Companion FLP Toolkit • Delivered via email after quick
            payment verification
          </p>

          {/* Tilted preview cards */}
          <div className="flex justify-center gap-3 sm:gap-5 pt-4 sm:pt-6">
            <div className="card-hard-sm -rotate-2 w-28 sm:w-40 aspect-[1/1.414] overflow-hidden hover:rotate-0 transition-transform duration-300 bg-white">
              <Image
                src="/images/sample-2.png"
                alt="Preview of Chapter 1: Know the Test Before You Prepare"
                width={160}
                height={226}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="card-hard-sm rotate-1 w-32 sm:w-44 aspect-[1/1.414] overflow-hidden z-10 hover:rotate-0 transition-transform duration-300 bg-white">
              <Image
                src="/images/sample-1.png"
                alt="Cover of The NUST NET Playbook"
                width={176}
                height={249}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="card-hard-sm -rotate-1 w-28 sm:w-40 aspect-[1/1.414] overflow-hidden hover:rotate-0 transition-transform duration-300 bg-white">
              <Image
                src="/images/sample-3.png"
                alt="Preview of Chapter 3: The Chapter Loop"
                width={160}
                height={226}
                className="w-full h-full object-contain"
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
              MY RESULTS
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              My score in 3 attempts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* NET-2 */}
            <div className="card-hard p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="stamp text-[#6b6459] text-[10px]">ATTEMPT 01</span>
                <span className="text-xs text-[#6b6459] font-normal">
                  Starting point
                </span>
              </div>
              <div className="font-pixel-num text-3xl sm:text-4xl text-[#161310]">
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
              <div className="font-pixel-num text-3xl sm:text-4xl text-[#161310]">
                141<span className="text-[#6b6459] text-xl">/200</span>
              </div>
              <hr className="divider-tear" />
              <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                Fixed Physics using a PTB-first method and targeted chapter
                loops.
              </p>
            </div>

            {/* NET-4 — Best Score */}
            <div className="card-hard p-5 space-y-3 relative">
              <div className="absolute -top-3 -right-2 bg-[#C4432B] text-[#FFFAEF] text-[10px] font-bold uppercase px-3 py-1 border-2 border-[#161310] shadow-[2px_2px_0px_#161310] rotate-2">
                ★ BEST SCORE
              </div>
              <div className="flex items-center justify-between">
                <span className="stamp text-[#2E5DD6] text-[10px]">ATTEMPT 03</span>
                <span className="text-xs font-medium text-[#C4432B]">
                  +9 Points
                </span>
              </div>
              <div className="font-pixel-num text-3xl sm:text-4xl text-[#161310]">
                <span className="text-[#C4432B]">150</span>
                <span className="text-[#6b6459] text-xl">/200</span>
              </div>
              <hr className="divider-tear" />
              <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                I practiced full 3-hour papers, checked every MCQ afterward, and used a 3-round method for Math.
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
              WHAT YOU GET
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              WHAT&apos;S INSIDE{" "}
              <span className="text-[#C4432B]">THE PLAYBOOK.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              5 short parts, plus a toolkit to track your mistakes.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Part I: Know the Exam First",
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
                <span className="font-pixel-num text-lg text-[#6b6459] shrink-0 w-8">
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
              <div className="absolute -top-2.5 left-4 bg-[#2D6A4F] text-[#FFFAEF] text-[10px] font-bold uppercase px-2.5 py-0.5 border border-[#161310] shadow-[2px_2px_0px_#161310]">
                BONUS INCLUDED
              </div>
              <span className="shrink-0 w-8 h-8 bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center mt-1">
                <FileSpreadsheet className="w-4 h-4" />
              </span>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-medium text-[#161310]">
                  Practice Paper Toolkit
                </h3>
                <p className="text-sm text-[#6b6459] font-normal leading-relaxed">
                  4 simple sheets to track your practice papers and find which chapters are costing you marks.
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
              SNEAK PEEK
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              A look inside
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              Real pages from the guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: "/images/sample-2.png",
                alt: "Preview of Chapter 1: Know the Test Before You Prepare",
                label: "PART I / CH.1",
                title: "Know the Test Before You Prepare",
                desc: "Learn who can apply, how the test is set up, and how marks are split, before you spend money on more books.",
              },
              {
                src: "/images/sample-1.png",
                alt: "Cover of The NUST NET Playbook",
                label: "COVER",
                title: "107 to 150: The NET Playbook",
                desc: "The NET-2027 edition, made for Engineering & Computing.",
              },
              {
                src: "/images/sample-3.png",
                alt: "Preview of Chapter 3: The Chapter Loop",
                label: "PART II / CH.3",
                title: "The Repeatable Chapter Loop",
                desc: "A simple routine you repeat for every chapter, which you can consistently execute and repeat",
              },
            ].map((sample, i) => (
              <div key={i} className="card-hard overflow-hidden flex flex-col">
                <div className="relative aspect-[1/1.414] w-full bg-[#F2EAD6] border-b-[1.5px] border-[#161310]">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    className="object-contain p-2"
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
              IS THIS FOR YOU?
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              Check before you buy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Built For */}
            <div className="card-hard p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[2]" />
                </span>
                <h3 className="font-pixel text-lg text-[#161310]">
                  This is for you if:
                </h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#6b6459] font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    You&apos;re preparing for NET Engineering or Computing (first attempt or retake) and want a clear plan.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    You feel lost because there are too many books and you don&apos;t know which ones matter.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1 stroke-[2]" />
                  <span>
                    You&apos;re scoring between 100 and 135 and want to reach 145+ by practicing under time pressure.
                  </span>
                </li>
              </ul>
            </div>

            {/* Not For */}
            <div className="card-hard p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-[#6b6459]/10 text-[#6b6459] flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 stroke-[2]" />
                </span>
                <h3 className="font-pixel text-lg text-[#161310]">
                  This is NOT for you if:
                </h3>
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
                    You want a shortcut or a guaranteed score. This only works if you do the practice.
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
              FAQ
            </span>
            <h2 className="font-pixel text-2xl sm:text-4xl text-[#161310] leading-tight mt-3">
              Common questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6b6459] font-normal max-w-xl">
              Quick answers about payment, delivery, and format.
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
          <h2 className="font-pixel text-3xl sm:text-5xl text-[#FFFAEF] leading-tight">
            Ready to raise your NET score?
          </h2>

          <p className="text-[#FFFAEF]/80 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Get the full study plan, the 3-round Math method, and the practice paper tracking sheets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal w-full sm:w-auto text-base py-3.5 px-7 border-2 border-[#FFFAEF]/20 bg-[#2E5DD6] text-white font-medium shadow-[4px_4px_0px_rgba(255,250,239,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_rgba(255,250,239,0.15)] transition-all"
            >
              <span>Get the Playbook — 650 PKR</span>
              <svg className="w-4 h-4 shrink-0 btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#FFFAEF]/60 font-normal">
            Pay with Easypaisa, JazzCash, NayaPay, or SadaPay • PDF and sheets sent to your email
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="w-full bg-[#161310] border-t border-[#6b6459]/20 px-4 sm:px-6 py-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-pixel text-sm text-[#FFFAEF]/50 flex items-center gap-1.5">
            <span>NET</span>
            <Image
              src="/images/nav-logo.png"
              alt="Logo"
              width={16}
              height={16}
              className="w-3.5 h-3.5 object-contain opacity-75 inline-block -mt-0.5"
            />
            <span>PLAYBOOK</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#FFFAEF]/60 font-normal">
          An independent guide by a NET student. Not an official NUST publication.
        </p>
        <p className="text-[11px] text-[#FFFAEF]/40 font-normal">
          © 2027 The NUST NET Playbook. All rights reserved.
        </p>
      </footer>

      {/* ═══════════════════════════════════════════
          MOBILE SCROLL-TRIGGERED STICKY BAR
      ═══════════════════════════════════════════ */}
      <MobileStickyBar tallyUrl={TALLY_URL} />
    </div>
  );
}

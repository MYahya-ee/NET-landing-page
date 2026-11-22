import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import {
  Sparkles,
  ShieldCheck,
  Check,
  X,
  FileSpreadsheet,
} from "lucide-react";

const TALLY_URL = "https://tally.so/r/4aKLGO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EC] text-[#1B1713] font-sans antialiased overflow-x-hidden selection:bg-[#EFE9DF] selection:text-[#1B1713]">
      {/* Top Banner Notice */}
      <div className="w-full bg-[#EFE9DF] text-[#5C544B] text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-[#DDD6CB]">
        <span>
          Instant Email Delivery • Verified for{" "}
          <strong className="text-[#1B1713] font-semibold">NET-2027</strong>{" "}
          Academic Cycle
        </span>
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-16">
        {/* 1. HERO SECTION */}
        <section className="text-center space-y-5 sm:space-y-6 pt-2 sm:pt-4">
          {/* Accent rule: tiny high-signal detail (#1F4E3D) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#1F4E3D]/10 text-[#1F4E3D] border border-[#1F4E3D]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#1F4E3D] shrink-0" />
            <span>NET-2027 EDITION • ENGINEERING &amp; COMPUTING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1713] leading-tight sm:leading-[1.15]">
            107 to 150: The NUST NET Playbook
          </h1>

          <p className="text-base sm:text-lg text-[#5C544B] max-w-2xl mx-auto leading-relaxed">
            An independent student guide sharing the exact preparation system,
            subject routines, and timed FLP review method used to jump from 107
            to 150.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col items-center">
            <Button
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Get the Playbook — 650 PKR
            </Button>

            <p className="mt-3.5 text-xs sm:text-sm text-[#5C544B] flex items-center justify-center gap-1.5 text-center">
              <ShieldCheck className="w-4 h-4 text-[#1F4E3D] shrink-0" />
              <span>
                PDF + Companion FLP Toolkit • Delivered via email after quick
                payment verification
              </span>
            </p>
          </div>
        </section>

        {/* 2. SCORE PROGRESSION STRIP */}
        <section aria-labelledby="progression-heading" className="space-y-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F4E3D]">
              Proven Iteration
            </span>
            <h2
              id="progression-heading"
              className="text-xl sm:text-2xl font-bold text-[#1B1713]"
            >
              The Score Progression
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Card 1: NET-2 */}
            <div className="p-5 rounded-2xl bg-[#EFE9DF]/50 border border-[#DDD6CB] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E5DFD4] text-[#5C544B]">
                    Attempt 1
                  </span>
                  <span className="text-xs text-[#5C544B]">Initial Baseline</span>
                </div>
                <div className="text-2xl font-bold text-[#1B1713] tracking-tight">
                  NET-2: <span>107</span>
                  <span className="text-[#5C544B] text-lg font-normal">/200</span>
                </div>
                <p className="mt-2.5 text-sm text-[#5C544B] leading-relaxed">
                  Studied like a board exam; struggled under timed MCQ pressure.
                </p>
              </div>
            </div>

            {/* Card 2: NET-3 */}
            <div className="p-5 rounded-2xl bg-[#EFE9DF]/50 border border-[#DDD6CB] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E5DFD4] text-[#5C544B]">
                    Attempt 2
                  </span>
                  <span className="text-xs font-medium text-[#1B1713]">+34 Points</span>
                </div>
                <div className="text-2xl font-bold text-[#1B1713] tracking-tight">
                  NET-3: <span>141</span>
                  <span className="text-[#5C544B] text-lg font-normal">/200</span>
                </div>
                <p className="mt-2.5 text-sm text-[#5C544B] leading-relaxed">
                  Fixed Physics using a PTB-first method and targeted chapter loops.
                </p>
              </div>
            </div>

            {/* Card 3: NET-4 (Highlighted top score with subtle accent) */}
            <div className="p-5 rounded-2xl bg-[#EFE9DF]/80 border-2 border-[#1F4E3D]/40 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#1F4E3D] text-[#F7F3EC] text-[10px] font-bold uppercase px-3 py-0.5 rounded-bl-lg tracking-wider">
                Top Score
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-[#1F4E3D]/10 text-[#1F4E3D]">
                    Attempt 3
                  </span>
                  <span className="text-xs font-bold text-[#1F4E3D]">+9 Points</span>
                </div>
                <div className="text-2xl font-bold text-[#1B1713] tracking-tight">
                  NET-4: <span className="text-[#1F4E3D]">150</span>
                  <span className="text-[#5C544B] text-lg font-normal">/200</span>
                </div>
                <p className="mt-2.5 text-sm text-[#5C544B] leading-relaxed">
                  Simulated 3-hour FLPs, reviewed every MCQ, and used a 3-round Math strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT'S INSIDE (TABLE OF CONTENTS) */}
        <section aria-labelledby="toc-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F4E3D]">
              Curriculum &amp; Breakdown
            </span>
            <h2
              id="toc-heading"
              className="text-2xl sm:text-3xl font-bold text-[#1B1713]"
            >
              What&apos;s Inside the Playbook
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#5C544B]">
              A comprehensive blueprint distilled into 5 core parts plus an analysis toolkit.
            </p>
          </div>

          <div className="space-y-3">
            {/* Part I */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/50 border border-[#DDD6CB] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E5DFD4] text-[#1B1713] flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                  Part I: Get Clear Before You Prepare
                </h3>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  Test pattern, eligibility rules, and subject weightings (50% Math, 30% Physics, 20% English).
                </p>
              </div>
            </div>

            {/* Part II */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/50 border border-[#DDD6CB] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E5DFD4] text-[#1B1713] flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                  Part II: Build a System You Can Repeat
                </h3>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  Baseline check, sticking to core resources, and the repeatable Chapter Preparation Loop.
                </p>
              </div>
            </div>

            {/* Part III */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/50 border border-[#DDD6CB] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E5DFD4] text-[#1B1713] flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                  Part III: Prepare by Subject
                </h3>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  Mathematics (lectures, notes, KIPS FUNG), Physics (PTB textbook-first + highlighting), and English.
                </p>
              </div>
            </div>

            {/* Part IV */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/50 border border-[#DDD6CB] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E5DFD4] text-[#1B1713] flex items-center justify-center font-bold text-xs shrink-0">
                04
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                  Part IV: Turn Practice into Performance
                </h3>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  Full-length practice paper review, the 3-round Mathematics time-management strategy, and final-days checklist.
                </p>
              </div>
            </div>

            {/* Part V */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/50 border border-[#DDD6CB] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E5DFD4] text-[#1B1713] flex items-center justify-center font-bold text-xs shrink-0">
                05
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                  Part V: Behind the Scores
                </h3>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  Full 107 → 141 → 150 breakdown and what I would do differently.
                </p>
              </div>
            </div>

            {/* Included Bonus */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#EFE9DF]/80 border-2 border-[#1F4E3D]/30 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#1F4E3D]/10 text-[#1F4E3D] flex items-center justify-center font-bold text-xs shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1B1713]">
                    Included Bonus: Companion FLP Performance &amp; Analysis Toolkit
                  </h3>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#1F4E3D]/10 text-[#1F4E3D] tracking-wider">
                    Bonus
                  </span>
                </div>
                <p className="text-sm text-[#5C544B] leading-relaxed">
                  4 structured analysis &amp; tracking sheets to diagnose chapter-level mistakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INSIDE THE PLAYBOOK (SAMPLE PAGES) */}
        <section aria-labelledby="samples-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F4E3D]">
              Preview Material
            </span>
            <h2
              id="samples-heading"
              className="text-2xl sm:text-3xl font-bold text-[#1B1713]"
            >
              Inside the Playbook (Sample Pages)
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#5C544B]">
              Real previews and templates from inside the guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Sample 1 */}
            <div className="bg-[#EFE9DF]/40 rounded-2xl border border-[#DDD6CB] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-[#E5DFD4]/50 border-b border-[#DDD6CB]">
                <Image
                  src="/images/sample-1.png"
                  alt="Sample 1 - The Chapter Preparation Loop"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4E3D]">
                    Sample 1
                  </span>
                  <h3 className="text-sm font-bold text-[#1B1713] mt-0.5">
                    The Chapter Preparation Loop
                  </h3>
                  <p className="text-xs text-[#5C544B] mt-1 leading-relaxed">
                    Systematic process for mastering core textbook concepts before attempting practice MCQs.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample 2 */}
            <div className="bg-[#EFE9DF]/40 rounded-2xl border border-[#DDD6CB] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-[#E5DFD4]/50 border-b border-[#DDD6CB]">
                <Image
                  src="/images/sample-2.png"
                  alt="Sample 2 - The 3-Round Mathematics Strategy"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4E3D]">
                    Sample 2
                  </span>
                  <h3 className="text-sm font-bold text-[#1B1713] mt-0.5">
                    The 3-Round Math Strategy
                  </h3>
                  <p className="text-xs text-[#5C544B] mt-1 leading-relaxed">
                    Clock management framework to answer 80 Mathematics MCQs without running out of time.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample 3 */}
            <div className="bg-[#EFE9DF]/40 rounded-2xl border border-[#DDD6CB] overflow-hidden shadow-sm flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-[#E5DFD4]/50 border-b border-[#DDD6CB]">
                <Image
                  src="/images/sample-3.png"
                  alt="Sample 3 - FLP Performance & Error Matrix"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F4E3D]">
                    Sample 3 • Toolkit
                  </span>
                  <h3 className="text-sm font-bold text-[#1B1713] mt-0.5">
                    FLP Diagnosis &amp; Tracking Sheet
                  </h3>
                  <p className="text-xs text-[#5C544B] mt-1 leading-relaxed">
                    Granular tracking matrix to pinpoint whether errors are conceptual or calculation-based.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO IT'S FOR / NOT FOR */}
        <section aria-labelledby="target-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F4E3D]">
              Fit &amp; Expectations
            </span>
            <h2
              id="target-heading"
              className="text-2xl sm:text-3xl font-bold text-[#1B1713]"
            >
              Who It&apos;s For / Not For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Built For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#EFE9DF]/60 border border-[#DDD6CB] space-y-4">
              <div className="flex items-center gap-2 text-[#1B1713]">
                <span className="w-5 h-5 rounded-full bg-[#1F4E3D]/10 text-[#1F4E3D] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <h3 className="text-lg font-bold">Built For</h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#5C544B] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1F4E3D] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    First-time and repeat NET-Engineering / Computing aspirants who want a clear, repeatable preparation system.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1F4E3D] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    Students feeling overwhelmed by multiple coaching books and seeking a streamlined resource priority.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1F4E3D] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    Aspirants scoring between 100 and 135 who need timed testing discipline to break past the 145+ barrier.
                  </span>
                </li>
              </ul>
            </div>

            {/* Not For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#EFE9DF]/40 border border-[#DDD6CB] space-y-4">
              <div className="flex items-center gap-2 text-[#1B1713]">
                <span className="w-5 h-5 rounded-full bg-[#5C544B]/10 text-[#5C544B] flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <h3 className="text-lg font-bold">Not For</h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#5C544B] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#5C544B] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    NET-Business / Architecture students (this playbook is strictly engineered for Engineering &amp; Computing).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#5C544B] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    Anyone looking for a textbook replacement; you still need your PTB textbooks and practice papers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#5C544B] shrink-0 mt-1 stroke-[2.5]" />
                  <span>
                    Anyone searching for a magic &quot;guaranteed score&quot; shortcut without doing the actual timed chapter practice.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION (COLLAPSIBLE ACCORDION) */}
        <section aria-labelledby="faq-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F4E3D]">
              Clear Answers
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-[#1B1713]"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#5C544B]">
              Everything you need to know about payment, delivery, and format.
            </p>
          </div>

          <FaqAccordion />
        </section>

        {/* 7. FINAL CTA */}
        <section className="bg-[#EFE9DF] border border-[#DDD6CB] rounded-3xl p-6 sm:p-10 text-center space-y-5 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1F4E3D]/10 text-[#1F4E3D] border border-[#1F4E3D]/20">
            Start Your Preparation Right
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1B1713]">
            Ready to Take Control of Your NET Score?
          </h2>

          <p className="text-[#5C544B] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get instant access to the exact routines, the 3-round math strategy, and the companion FLP diagnostic sheets.
          </p>

          <div className="pt-2 flex flex-col items-center">
            <Button
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Get the Playbook — 650 PKR
            </Button>

            <p className="mt-3 text-xs sm:text-sm text-[#5C544B]">
              Pay via Easypaisa, JazzCash, NayaPay, or SadaPay • Direct PDF &amp; Sheets email delivery
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-12 border-t border-[#DDD6CB] text-center space-y-2">
          <p className="text-xs sm:text-sm text-[#5C544B] font-medium">
            Independent student guide. Not an official NUST publication.
          </p>
          <p className="text-[11px] text-[#5C544B]/80">
            © 2027 The NUST NET Playbook. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Mobile Bottom Fixed Bar for in-app Reddit browsing */}
      <aside
        aria-label="Quick Action"
        className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-[#F7F3EC]/95 backdrop-blur border-t border-[#DDD6CB] z-50 flex items-center justify-between gap-3 shadow-sm"
      >
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-[#5C544B] uppercase tracking-wide">
            NET-2027 Playbook
          </span>
          <span className="text-base font-bold text-[#1B1713] leading-none">
            650 PKR
          </span>
        </div>
        <Button
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="py-2.5 px-4 text-sm"
        >
          Get Playbook
        </Button>
      </aside>
    </div>
  );
}

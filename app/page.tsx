import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BookOpen,
  Award,
  Sparkles,
  TrendingUp,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Layers,
} from "lucide-react";

const TALLY_URL = "https://tally.so/r/4aKLGO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Top Banner Notice */}
      <div className="w-full bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-slate-800">
        <span>Instant Email Delivery • Updated for <strong>NET-2027</strong> Academic Cycle</span>
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 sm:space-y-16">
        {/* 1. HERO SECTION */}
        <section className="text-center space-y-5 sm:space-y-6 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>NET-2027 EDITION • ENGINEERING &amp; COMPUTING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
            107 to 150: The NUST NET Playbook
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            An independent student guide sharing the exact preparation system,
            subject routines, and timed FLP review method used to jump from 107
            to 150.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col items-center">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span>Get the Playbook — 650 PKR</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <p className="mt-3 text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-1.5 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                PDF + Companion FLP Toolkit • Delivered via email after quick payment verification
              </span>
            </p>
          </div>
        </section>

        {/* 2. SCORE PROGRESSION STRIP */}
        <section aria-labelledby="progression-heading" className="space-y-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Proven Iteration
            </span>
            <h2 id="progression-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
              The Score Progression
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Card 1: NET-2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">
                    Attempt 1
                  </span>
                  <span className="text-xs font-medium text-slate-400">Initial Baseline</span>
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  NET-2: <span className="text-amber-600">107</span><span className="text-slate-400 text-lg">/200</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Studied like a board exam; struggled under timed MCQ pressure.
                </p>
              </div>
            </div>

            {/* Card 2: NET-3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                    Attempt 2
                  </span>
                  <span className="text-xs font-medium text-slate-400">+34 Points</span>
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  NET-3: <span className="text-blue-600">141</span><span className="text-slate-400 text-lg">/200</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Fixed Physics using a PTB-first method and targeted chapter loops.
                </p>
              </div>
            </div>

            {/* Card 3: NET-4 */}
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-500 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-bl-lg tracking-wider">
                Top Score
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Attempt 3
                  </span>
                  <span className="text-xs font-bold text-emerald-600">+9 Points</span>
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  NET-4: <span className="text-emerald-600">150</span><span className="text-slate-400 text-lg">/200</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Simulated 3-hour FLPs, reviewed every MCQ, and used a 3-round Math strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT'S INSIDE (TABLE OF CONTENTS) */}
        <section aria-labelledby="toc-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Curriculum &amp; Breakdown
            </span>
            <h2 id="toc-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What&apos;s Inside the Playbook
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              A comprehensive blueprint distilled into 5 core parts plus an analysis toolkit.
            </p>
          </div>

          <div className="space-y-3">
            {/* Part I */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                01
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Part I: Get Clear Before You Prepare
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Test pattern, eligibility rules, and subject weightings (50% Math, 30% Physics, 20% English).
                </p>
              </div>
            </div>

            {/* Part II */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                02
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Part II: Build a System You Can Repeat
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Baseline check, sticking to core resources, and the repeatable Chapter Preparation Loop.
                </p>
              </div>
            </div>

            {/* Part III */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                03
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Part III: Prepare by Subject
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mathematics (lectures, notes, KIPS FUNG), Physics (PTB textbook-first + highlighting), and English.
                </p>
              </div>
            </div>

            {/* Part IV */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                04
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Part IV: Turn Practice into Performance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Full-length practice paper review, the 3-round Mathematics time-management strategy, and final-days checklist.
                </p>
              </div>
            </div>

            {/* Part V */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                05
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Part V: Behind the Scores
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Full 107 → 141 → 150 breakdown and what I would do differently.
                </p>
              </div>
            </div>

            {/* Included Bonus */}
            <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border-2 border-emerald-300 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-950">
                    Included Bonus: Companion FLP Performance &amp; Analysis Toolkit
                  </h3>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 tracking-wider">
                    Included
                  </span>
                </div>
                <p className="text-sm text-emerald-900/80 leading-relaxed">
                  4 structured analysis &amp; tracking sheets to diagnose chapter-level mistakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INSIDE THE PLAYBOOK (SAMPLE PAGES) */}
        <section aria-labelledby="samples-heading" className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Preview Material
            </span>
            <h2 id="samples-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Inside the Playbook (Sample Pages)
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Real screenshots and templates from inside the guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-slate-100 border-b border-slate-100">
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Sample 1
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                    The Chapter Preparation Loop
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Systematic process for mastering core textbook concepts before attempting practice MCQs.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-slate-100 border-b border-slate-100">
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Sample 2
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                    The 3-Round Math Strategy
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Clock management framework to answer 80 Mathematics MCQs without running out of time.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-slate-100 border-b border-slate-100">
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Sample 3 • Toolkit
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                    FLP Diagnosis &amp; Tracking Sheet
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Fit &amp; Expectations
            </span>
            <h2 id="target-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Who It&apos;s For / Not For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Built For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-emerald-400/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold">Built For</h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>
                    First-time and repeat NET-Engineering / Computing aspirants who want a clear, repeatable preparation system.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>
                    Students feeling overwhelmed by multiple coaching books and seeking a streamlined resource priority.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>
                    Aspirants scoring between 100 and 135 who need timed testing discipline to break past the 145+ barrier.
                  </span>
                </li>
              </ul>
            </div>

            {/* Not For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-rose-300/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-rose-700">
                <XCircle className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold">Not For</h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">✕</span>
                  <span>
                    NET-Business / Architecture students (this playbook is strictly engineered for Engineering &amp; Computing).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">✕</span>
                  <span>
                    Anyone looking for a textbook replacement; you still need your PTB textbooks and practice papers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">✕</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Clear Answers
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Everything you need to know about payment, delivery, and format.
            </p>
          </div>

          <FaqAccordion />
        </section>

        {/* 7. FINAL CTA & FOOTER */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-center text-white space-y-5 shadow-xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
            Start Your Preparation Right
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Take Control of Your NET Score?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get instant access to the exact routines, the 3-round math strategy, and the companion FLP diagnostic sheets.
          </p>

          <div className="pt-2 flex flex-col items-center">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold text-slate-950 bg-white hover:bg-slate-100 active:scale-[0.99] transition-all rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <span>Get the Playbook — 650 PKR</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Pay via Easypaisa, JazzCash, NayaPay, or SadaPay • Direct PDF &amp; Sheets email delivery
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-12 border-t border-slate-200 text-center space-y-2">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Independent student guide. Not an official NUST publication.
          </p>
          <p className="text-[11px] text-slate-400">
            © 2027 The NUST NET Playbook. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Mobile Bottom Fixed Bar for in-app Reddit browsing */}
      <aside aria-label="Quick Action" className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur border-t border-slate-200 z-50 flex items-center justify-between gap-3 shadow-lg">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            NET-2027 Playbook
          </span>
          <span className="text-base font-extrabold text-slate-900 leading-none">
            650 PKR
          </span>
        </div>
        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[220px] py-2.5 px-4 text-sm font-bold text-center text-white bg-blue-600 active:bg-blue-700 rounded-lg shadow-sm"
        >
          Get Playbook
        </a>
      </aside>
    </div>
  );
}

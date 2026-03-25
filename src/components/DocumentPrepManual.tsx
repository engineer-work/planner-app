import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Clock, 
  Target, 
  Activity, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Layout,
  Layers
} from 'lucide-react';
import { cn } from '../lib/utils';

export const DocumentPrepManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
          <Cpu size={14} className="text-emerald-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-600 font-bold">AI-Accelerated Workflow</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          How I Would Execute <br />Each Task
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          A step-by-step guide on exactly how to execute each block of your study plan with specific actions, outputs, and time management strategies.
        </p>
      </header>

      {/* Task 1 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">1</div>
            <h3 className="text-2xl font-bold text-zinc-900">3P — Watch/Read Once</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">10 Minutes</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Objective</h4>
              <p className="text-sm text-zinc-600">First-pass exposure to the transcript. No deep thinking yet—just orientation.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">How I Do It</h4>
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-50 border-b border-zinc-100">
                    <tr>
                      <th className="p-3 font-mono uppercase tracking-widest text-zinc-400">Minute</th>
                      <th className="p-3 font-mono uppercase tracking-widest text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr>
                      <td className="p-3 font-mono text-zinc-400">0:00-10:00</td>
                      <td className="p-3 text-zinc-600 font-bold">Watch/read straight through without pausing to take detailed notes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-zinc-400">During</td>
                      <td className="p-3 text-zinc-600 italic">Mentally note: "What is the one big idea?"</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-zinc-400">After</td>
                      <td className="p-3 text-zinc-600">Write 1 sentence capturing the main point</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Output</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> A single sentence summarizing the lecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> No detailed notes yet—just the terrain map</li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Example</h4>
              <p className="text-xs text-emerald-800 italic leading-relaxed">
                "Binomial coefficients count unordered collections, and Pascal's Rule shows they can be built from smaller cases by choosing whether to include a favorite element."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Task 2 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">2</div>
            <h3 className="text-2xl font-bold text-zinc-900">SQ3R + S-RUN</h3>
          </div>
          <span className="text-xs font-mono bg-emerald-100 px-4 py-1.5 rounded-full text-emerald-600 font-bold">40 Minutes</span>
        </div>

        <p className="text-sm text-zinc-500 italic">This is where your pattern-form document is built. Let me break it into phases:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phase 2A */}
          <div className="space-y-6 p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900">Phase 2A: SQ3R — Extract Cues & Notes</h4>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-zinc-50 border-b border-zinc-100">
                  <tr>
                    <th className="p-3 font-mono uppercase text-zinc-400">Step</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  <tr><td className="p-3 font-bold">Survey</td><td className="p-3">Scan transcript for headings, key terms, examples</td><td className="p-3 font-mono text-zinc-400">2m</td></tr>
                  <tr><td className="p-3 font-bold">Question</td><td className="p-3">Turn headings into questions</td><td className="p-3 font-mono text-zinc-400">3m</td></tr>
                  <tr><td className="p-3 font-bold">Read</td><td className="p-3">Read carefully, answering your questions</td><td className="p-3 font-mono text-zinc-400">10m</td></tr>
                  <tr><td className="p-3 font-bold">Recite</td><td className="p-3">Close transcript, recall key points</td><td className="p-3 font-mono text-zinc-400">3m</td></tr>
                  <tr><td className="p-3 font-bold">Review</td><td className="p-3">Check accuracy, fill gaps</td><td className="p-3 font-mono text-zinc-400">2m</td></tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-2">
              <h5 className="text-[10px] font-mono uppercase text-zinc-400">Output</h5>
              <p className="text-xs text-zinc-600 leading-relaxed">
                <strong>Cues:</strong> Key terms and questions (left column in your pattern document)<br/>
                <strong>Raw notes:</strong> Bullet points of core concepts
              </p>
            </div>
          </div>

          {/* Phase 2B */}
          <div className="space-y-6 p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900">Phase 2B: S-RUN — Structure & Visualize</h4>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-zinc-50 border-b border-zinc-100">
                  <tr>
                    <th className="p-3 font-mono uppercase text-zinc-400">Step</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  <tr><td className="p-3 font-bold">Synthesize</td><td className="p-3">Organize notes into logical flow</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                  <tr><td className="p-3 font-bold">Reduce</td><td className="p-3">Condense to essential points</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                  <tr><td className="p-3 font-bold">Visualize</td><td className="p-3">Create Mermaid diagram</td><td className="p-3 font-mono text-zinc-400">7m</td></tr>
                  <tr><td className="p-3 font-bold">Summarize</td><td className="p-3">Write 1-paragraph summary</td><td className="p-3 font-mono text-zinc-400">3m</td></tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-2">
              <h5 className="text-[10px] font-mono uppercase text-zinc-400">Output</h5>
              <p className="text-xs text-zinc-600 leading-relaxed">
                <strong>Mermaid diagram</strong> (visual relationships)<br/>
                <strong>Summary</strong> (1 paragraph capturing the essence)<br/>
                <strong>Final notes</strong> (structured, not raw)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks 3 & 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Task 3 */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">3</div>
              <h3 className="text-xl font-bold text-zinc-900">Active Recall (Use)</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">20m</span>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-zinc-600">Retrieve information without looking at your notes. This is where learning solidifies.</p>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How I Do It</h4>
              <ul className="text-xs space-y-2 text-zinc-600">
                <li className="flex gap-3"><strong>0-2m:</strong> Close all notes and references</li>
                <li className="flex gap-3"><strong>2-15m:</strong> Answer quiz questions from memory</li>
                <li className="flex gap-3"><strong>15-20m:</strong> Check answers and identify gaps</li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Example</h4>
              <p className="text-xs text-emerald-800 italic leading-relaxed">
                "Retrieve the definition of Pascal's Rule and the formula for binomial coefficients without looking at the pattern document."
              </p>
            </div>
          </div>
        </section>

        {/* Task 4 */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">4</div>
              <h3 className="text-xl font-bold text-zinc-900">Active Recall (Create)</h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">20m</span>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-zinc-600">Design questions that will test understanding—for yourself or others.</p>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How I Do It</h4>
              <ul className="text-xs space-y-2 text-zinc-600">
                <li className="flex gap-3"><strong>0-5m:</strong> Identify 3-5 core concepts</li>
                <li className="flex gap-3"><strong>5-12m:</strong> Create 2-3 basic comprehension questions</li>
                <li className="flex gap-3"><strong>12-17m:</strong> Create 2-3 application problems</li>
                <li className="flex gap-3"><strong>17-20m:</strong> Create 1-2 challenge/extension cases</li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Example</h4>
              <p className="text-xs text-emerald-800 italic leading-relaxed">
                "Create a question asking to explain why Pascal's Rule works using the 'favorite element' logic."
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Task 5 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">5</div>
            <h3 className="text-2xl font-bold text-zinc-900">Application — Problem Solving</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">30 Minutes</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Objective</h4>
              <p className="text-sm text-zinc-600">Solve novel problems that require applying the concept in new contexts.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">How I Do It</h4>
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-50 border-b border-zinc-100">
                    <tr>
                      <th className="p-3 font-mono uppercase text-zinc-400">Minute</th>
                      <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr><td className="p-3 font-mono text-zinc-400">0-10</td><td className="p-3 text-zinc-600">Solve 2-3 straightforward problems</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">10-25</td><td className="p-3 text-zinc-600 font-bold">Solve 2-3 problems that combine concepts</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">25-30</td><td className="p-3 text-zinc-600 italic">Review solutions and identify patterns</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Problem Sources</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Sparkles size={12} className="text-emerald-400" /></div>
                  <p className="text-xs opacity-70">Create your own variations of lecture problems</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><BookOpen size={12} className="text-emerald-400" /></div>
                  <p className="text-xs opacity-70">Use textbook problems (if available)</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Cpu size={12} className="text-emerald-400" /></div>
                  <p className="text-xs opacity-70">Generate problems by changing numbers and contexts</p>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Example</h4>
              <p className="text-xs text-emerald-800 italic leading-relaxed">
                "Solve a problem where you need to choose a committee of 5 from 15 people, but 2 people refuse to work together."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Task 6 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">6</div>
            <h3 className="text-2xl font-bold text-zinc-900">Deliberate Practice</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">30 Minutes</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Objective</h4>
              <p className="text-sm text-zinc-600">Test extreme cases, verify solutions with multiple methods, and solidify robust understanding.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">How I Do It</h4>
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-50 border-b border-zinc-100">
                    <tr>
                      <th className="p-3 font-mono uppercase text-zinc-400">Minute</th>
                      <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr><td className="p-3 font-mono text-zinc-400">0-10</td><td className="p-3 text-zinc-600">Test edge cases (k=0, n small, etc.)</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">10-25</td><td className="p-3 text-zinc-600 font-bold">Verify solutions using different methods</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">25-30</td><td className="p-3 text-zinc-600 italic">Analyze mistakes and identify patterns</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Verification Strategy</h4>
            <p className="text-xs text-zinc-500 leading-relaxed italic">
              "For the exam problem: Verify \(\binom{15}{5} - \binom{8}{5} - \binom{7}{5}\) by summing individual cases (4 T/F + 1 MC, etc.) and confirm they equal the subtraction result."
            </p>
          </div>
        </div>
      </section>

      {/* Task 7 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">7</div>
            <h3 className="text-2xl font-bold text-zinc-900">Feynman Technique</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">20 Minutes</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Objective</h4>
              <p className="text-sm text-zinc-600">Explain the concept clearly enough that someone else could understand—without looking at any references.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">How I Do It</h4>
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-50 border-b border-zinc-100">
                    <tr>
                      <th className="p-3 font-mono uppercase text-zinc-400">Minute</th>
                      <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr><td className="p-3 font-mono text-zinc-400">0-3</td><td className="p-3 text-zinc-600">Set up recording or find a listener</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">3-15</td><td className="p-3 text-zinc-600 font-bold">Explain concept from scratch in simple terms</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">15-20</td><td className="p-3 text-zinc-600 italic">Identify where you stumbled and clarify</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">The Explanation Test</h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              "Imagine you have a group of things... instead of adding up all the different ways to meet that rule, you can do something simpler: count every possible way to pick, then subtract the ways that break the rule."
            </p>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Layout className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">3-Hour Study Session Flow</h3>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-5 font-mono uppercase text-zinc-400">Task</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Time</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Core Activity</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Key Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr><td className="p-5 font-bold">1: 3P</td><td className="p-5">10m</td><td className="p-5">First exposure</td><td className="p-5 italic">1-sentence summary</td></tr>
              <tr><td className="p-5 font-bold">2: SQ3R + S-RUN</td><td className="p-5">40m</td><td className="p-5">Build pattern document</td><td className="p-5 italic">Cues + Notes + Mermaid + Summary</td></tr>
              <tr><td className="p-5 font-bold">3: Active Recall (Use)</td><td className="p-5">20m</td><td className="p-5">Test yourself</td><td className="p-5 italic">Quiz answers, identified gaps</td></tr>
              <tr><td className="p-5 font-bold">4: Active Recall (Create)</td><td className="p-5">20m</td><td className="p-5">Design questions</td><td className="p-5 italic">Quiz bank for future use</td></tr>
              <tr><td className="p-5 font-bold">5: Application</td><td className="p-5">30m</td><td className="p-5">Solve novel problems</td><td className="p-5 italic">Solutions to 5-7 problems</td></tr>
              <tr><td className="p-5 font-bold">6: Deliberate Practice</td><td className="p-5">30m</td><td className="p-5">Edge cases, verification</td><td className="p-5 italic">Verified solutions, mistake analysis</td></tr>
              <tr><td className="p-5 font-bold">7: Feynman</td><td className="p-5">20m</td><td className="p-5">Explain without notes</td><td className="p-5 italic">Recording or written explanation</td></tr>
            </tbody>
            <tfoot className="bg-zinc-900 text-white">
              <tr>
                <td className="p-5 font-bold uppercase tracking-widest font-mono">Total</td>
                <td className="p-5 font-bold">170m</td>
                <td colSpan={2} className="p-5 text-right font-mono uppercase tracking-widest opacity-50">Complete Learning Cycle</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
        <div className="flex items-center gap-3">
          <Target className="text-zinc-900" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold">Pro Tip: Track Your Actual vs. Target</h3>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Your planner has columns for <strong>ACTUAL</strong>, <strong>DIFF</strong>, <strong>GAP</strong>, and <strong>COMMENT</strong>. Use them honestly to calibrate your future sessions. 
          If a task takes longer, note why—this data allows the AI to better architect your future study cycles.
        </p>
      </section>
    </div>
  );
};

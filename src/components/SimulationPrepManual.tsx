import React, { useState } from 'react';
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
  Layers,
  Play,
  Square,
  Search,
  Brain,
  Code,
  ShieldAlert,
  ChevronDown,
  GraduationCap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MasterLearningFrameworkManual } from './MasterLearningFrameworkManual';

export const SimulationPrepManual: React.FC = () => {
  const [view, setView] = useState<'standard' | 'mlf'>('standard');
  const [showDropdown, setShowDropdown] = useState(false);

  if (view === 'mlf') {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-mono uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              <GraduationCap size={16} />
              Master Learning Framework
              <ChevronDown size={14} className={cn("transition-transform", showDropdown && "rotate-180")} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-zinc-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                <button 
                  onClick={() => { setView('standard'); setShowDropdown(false); }}
                  className="w-full px-6 py-4 text-left text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 transition-colors flex items-center gap-3"
                >
                  <Brain size={14} />
                  Standard Simulation
                </button>
                <button 
                  onClick={() => { setView('mlf'); setShowDropdown(false); }}
                  className="w-full px-6 py-4 text-left text-[10px] font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 font-bold flex items-center gap-3"
                >
                  <GraduationCap size={14} />
                  Master Framework
                </button>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setView('standard')}
            className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Back to Standard
          </button>
        </div>
        <MasterLearningFrameworkManual />
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-12">
      {/* View Switcher Dropdown */}
      <div className="flex items-center justify-between">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-6 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-mono uppercase tracking-widest text-[10px] hover:border-zinc-900 transition-all"
          >
            <Brain size={16} className="text-indigo-500" />
            Standard Simulation
            <ChevronDown size={14} className={cn("transition-transform", showDropdown && "rotate-180")} />
          </button>
          
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-zinc-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
              <button 
                onClick={() => { setView('standard'); setShowDropdown(false); }}
                className="w-full px-6 py-4 text-left text-[10px] font-mono uppercase tracking-widest text-indigo-600 bg-indigo-50 font-bold flex items-center gap-3"
              >
                <Brain size={14} />
                Standard Simulation
              </button>
              <button 
                onClick={() => { setView('mlf'); setShowDropdown(false); }}
                className="w-full px-6 py-4 text-left text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 transition-colors flex items-center gap-3"
              >
                <GraduationCap size={14} />
                Master Framework
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
          <Brain size={14} className="text-indigo-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-600 font-bold">Cognitive Execution Guide</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          How to Work Properly <br />Through This Session
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          A step-by-step guide on exactly how a human brain executes each technique—with clear actions, no multitasking, and support for how your brain actually works.
        </p>
      </header>

      {/* Mindset Section */}
      <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-indigo-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400">The Mindset Before Starting</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-[10px] font-mono uppercase text-indigo-400">Principle 01</div>
              <div className="text-xl font-bold">One task at a time</div>
              <p className="text-sm opacity-60 leading-relaxed">Focus completely on the current technique. Don't think about what's next.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-[10px] font-mono uppercase text-indigo-400">Principle 02</div>
              <div className="text-xl font-bold">Use your pattern document</div>
              <p className="text-sm opacity-60 leading-relaxed">Your Cues, Notes, Mermaid, and Quizzes are your support tools for this session.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-[10px] font-mono uppercase text-indigo-400">Principle 03</div>
              <div className="text-xl font-bold">Track honestly</div>
              <p className="text-sm opacity-60 leading-relaxed">Record actual time and gaps. This is for you, to calibrate your learning engine.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-[10px] font-mono uppercase text-indigo-400">Principle 04</div>
              <div className="text-xl font-bold">Rest between techniques</div>
              <p className="text-sm opacity-60 leading-relaxed">Stand up, stretch, breathe. Your brain consolidates during rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technique 1 */}
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
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">First exposure. No deep thinking. Just orientation.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">How to Do It</h4>
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-50 border-b border-zinc-100">
                    <tr>
                      <th className="p-3 font-mono uppercase tracking-widest text-zinc-400">Minute</th>
                      <th className="p-3 font-mono uppercase tracking-widest text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr><td className="p-3 font-mono text-zinc-400">0:00</td><td className="p-3 text-zinc-600">Close all notes. Open only the transcript/video.</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">0:00-10:00</td><td className="p-3 text-zinc-600 font-bold">Watch or read straight through without pausing.</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">During</td><td className="p-3 text-zinc-600 italic">Let your brain receive info. Don't judge or analyze.</td></tr>
                    <tr><td className="p-3 font-mono text-zinc-400">10:00</td><td className="p-3 text-zinc-600">Write 1 sentence summarizing the main idea.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Brain Activity</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> Building a mental terrain map</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> Identifying main idea without detail-clutter</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> Preparing ground for deeper work</li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Example Output</h4>
              <p className="text-xs text-emerald-800 italic leading-relaxed">
                "This lecture shows how to use the subtraction principle to count selections with 'at least one' constraints."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technique 2 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">2</div>
            <h3 className="text-2xl font-bold text-zinc-900">SQ3R — Deep Understanding</h3>
          </div>
          <span className="text-xs font-mono bg-indigo-100 px-4 py-1.5 rounded-full text-indigo-600 font-bold">20 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Extract structure, understand relationships, solve examples.</p>
            </div>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-zinc-50 border-b border-zinc-100">
                  <tr>
                    <th className="p-3 font-mono uppercase text-zinc-400">Step</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Action</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Brain Job</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  <tr><td className="p-3 font-bold">Survey</td><td className="p-3">Scan headings, bold words, examples</td><td className="p-3 italic">Creates structure map</td></tr>
                  <tr><td className="p-3 font-bold">Question</td><td className="p-3">Turn headings into questions</td><td className="p-3 italic">Activates curiosity</td></tr>
                  <tr><td className="p-3 font-bold">Read</td><td className="p-3">Careful reading, answering questions</td><td className="p-3 italic">Connects new info</td></tr>
                  <tr><td className="p-3 font-bold">Recite</td><td className="p-3">Close everything, say aloud what you learned</td><td className="p-3 italic font-bold">Retrieval & memory formation</td></tr>
                  <tr><td className="p-3 font-bold">Review</td><td className="p-3">Check transcript, fill gaps</td><td className="p-3 italic">Corrects misconceptions</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Required Output</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> 3 examples solved (lecture or self-created)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-500" /> Answers to your questions written down</li>
              </ul>
            </div>
            <div className="p-6 bg-amber-50/50 rounded-3xl border border-amber-100 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-amber-600">Critical Warning</h4>
              <p className="text-xs text-amber-800 italic leading-relaxed">
                "Don't skip the Recite step because it feels hard. This is the most important step for memory."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technique 3 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">3</div>
            <h3 className="text-2xl font-bold text-zinc-900">Active Recall — Practice Without Notes</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">30 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Retrieve information from memory. This is where learning solidifies.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How to Do It</h4>
              <ul className="text-xs space-y-3 text-zinc-600">
                <li className="flex gap-3"><strong>0:00:</strong> Close EVERYTHING. No notes, no transcript.</li>
                <li className="flex gap-3"><strong>0-25m:</strong> Answer questions from memory. Use your quiz bank.</li>
                <li className="flex gap-3"><strong>25-30m:</strong> Check answers against pattern document. Mark errors.</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">The "Struggle" Principle</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Forcing retrieval strengthens neural pathways. The struggle to remember is where learning happens. 
              Incorrect answers are valuable—they show you exactly what to review.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] italic opacity-60">
              "Let yourself struggle for 2-3 minutes before checking notes."
            </div>
          </div>
        </div>
      </section>

      {/* Technique 4 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">4</div>
            <h3 className="text-2xl font-bold text-zinc-900">S-RUN — Note Taking</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">20 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Synthesize what you've learned into a 1-page summary for future review.</p>
            </div>
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
                  <tr><td className="p-3 font-bold">Synthesize</td><td className="p-3">Gather key points from recall and transcript</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                  <tr><td className="p-3 font-bold">Reduce</td><td className="p-3">Condense to 3-5 key bullet points. No fluff.</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                  <tr><td className="p-3 font-bold">Understand</td><td className="p-3">Check that you can explain each point</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                  <tr><td className="p-3 font-bold">Note</td><td className="p-3">Create the final 1-page document</td><td className="p-3 font-mono text-zinc-400">5m</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">1-Page Summary Checklist</h4>
            <ul className="grid grid-cols-2 gap-4">
              <li className="p-3 bg-white rounded-xl border border-zinc-100 text-[10px] font-bold">Core Idea (1 sentence)</li>
              <li className="p-3 bg-white rounded-xl border border-zinc-100 text-[10px] font-bold">Formula / Process</li>
              <li className="p-3 bg-white rounded-xl border border-zinc-100 text-[10px] font-bold">One Worked Example</li>
              <li className="p-3 bg-white rounded-xl border border-zinc-100 text-[10px] font-bold">Common Mistakes</li>
              <li className="p-3 bg-white rounded-xl border border-zinc-100 text-[10px] font-bold">The "Aha" Insight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technique 5 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">5</div>
            <h3 className="text-2xl font-bold text-zinc-900">Application — Coding / Problem Solving</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">50 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Apply the concept to new problems. Write code that simulates the logic.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How to Do It</h4>
              <ul className="text-xs space-y-3 text-zinc-600">
                <li className="flex gap-3"><strong>Setup (5m):</strong> Read 3-5 new problems using the concept.</li>
                <li className="flex gap-3"><strong>Solve 1 (15m):</strong> Write code for first problem. Run and verify.</li>
                <li className="flex gap-3"><strong>Solve 2 (15m):</strong> Write code for second problem (variation).</li>
                <li className="flex gap-3"><strong>Solve 3 (15m):</strong> Write code for third problem (complex).</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Building Tools, Not Just Answers</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 font-mono text-[10px] text-emerald-400 leading-relaxed">
              {`// You're writing a function that can calculate ANY answer\nlong long countAtLeastOneEach(int cat1, int cat2, int choose) {\n    return binomial(cat1 + cat2, choose) \n         - binomial(cat1, choose) \n         - binomial(cat2, choose);\n}`}
            </div>
            <p className="text-xs opacity-60 italic">"Code is the application—let the computer do the calculation while you build the logic."</p>
          </div>
        </div>
      </section>

      {/* Technique 6 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">6</div>
            <h3 className="text-2xl font-bold text-zinc-900">Deliberate Practice — Edge Cases</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">30 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Find the boundaries where your code or understanding might fail.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How to Do It</h4>
              <ul className="text-xs space-y-3 text-zinc-600">
                <li className="flex gap-3"><strong>Identify (5m):</strong> List boundary conditions (0, max, overflow).</li>
                <li className="flex gap-3"><strong>Test (15m):</strong> Run code with edge cases, verify results.</li>
                <li className="flex gap-3"><strong>Analysis (10m):</strong> Document what worked and what failed.</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Edge Cases to Test</h4>
            <ul className="space-y-2 text-[10px] text-zinc-600">
              <li className="flex justify-between border-b border-zinc-100 pb-1"><span>Choose = 0</span> <span className="font-mono">Result: 0</span></li>
              <li className="flex justify-between border-b border-zinc-100 pb-1"><span>Choose = Total</span> <span className="font-mono">Check validity</span></li>
              <li className="flex justify-between border-b border-zinc-100 pb-1"><span>Category Size = 0</span> <span className="font-mono">Result: 0</span></li>
              <li className="flex justify-between border-b border-zinc-100 pb-1"><span>Choose {'>'} Total</span> <span className="font-mono">Result: 0</span></li>
              <li className="flex justify-between border-b border-zinc-100 pb-1"><span>Large Numbers</span> <span className="font-mono text-red-500">Overflow check</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technique 7 */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">7</div>
            <h3 className="text-2xl font-bold text-zinc-900">Feynman — Recall & Explain</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">20 Minutes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Purpose</h4>
              <p className="text-sm text-zinc-600">Explain the concept so clearly that someone with no background could understand.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-400">How to Do It</h4>
              <ul className="text-xs space-y-3 text-zinc-600">
                <li className="flex gap-3"><strong>Setup (1m):</strong> Imagine you're teaching a friend. Close notes.</li>
                <li className="flex gap-3"><strong>Explain (10m):</strong> Speak aloud or write concept from scratch.</li>
                <li className="flex gap-3"><strong>Identify (5m):</strong> Note where you stumbled or were unclear.</li>
                <li className="flex gap-3"><strong>Review (4m):</strong> Go back to notes for those specific gaps.</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">The Explanation Test</h4>
            <p className="text-xs text-emerald-800 leading-relaxed italic">
              "Imagine you have a bag with red and blue marbles... count all the ways to pick 3, then subtract the ways that break the rule (all-red or all-blue). This works because a selection can't be both at once."
            </p>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Layout className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Cognitive Flow Summary</h3>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-5 font-mono uppercase text-zinc-400">#</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Technique</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Brain's Job</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Key Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr><td className="p-5 font-mono text-zinc-400">1</td><td className="p-5 font-bold">3P</td><td className="p-5">Receive, orient</td><td className="p-5 italic">1-sentence summary</td></tr>
              <tr><td className="p-5 font-bold">2</td><td className="p-5 font-bold">SQ3R</td><td className="p-5">Extract structure</td><td className="p-5 italic">Solved examples</td></tr>
              <tr><td className="p-5 font-bold">3</td><td className="p-5 font-bold">Active Recall</td><td className="p-5">Force retrieval</td><td className="p-5 italic">Quiz answers</td></tr>
              <tr><td className="p-5 font-bold">4</td><td className="p-5 font-bold">S-RUN</td><td className="p-5">Synthesize</td><td className="p-5 italic">1-page summary</td></tr>
              <tr><td className="p-5 font-bold">5</td><td className="p-5 font-bold">Application</td><td className="p-5">Implement, test</td><td className="p-5 italic">Code solver</td></tr>
              <tr><td className="p-5 font-bold">6</td><td className="p-5 font-bold">Deliberate Practice</td><td className="p-5">Build robustness</td><td className="p-5 italic">Edge case analysis</td></tr>
              <tr><td className="p-5 font-bold">7</td><td className="p-5 font-bold">Feynman</td><td className="p-5">Consolidate</td><td className="p-5 italic">Plain language explanation</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6">
        <div className="flex items-center gap-3">
          <Target className="text-zinc-900" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold">Pro Tip: Calibration</h3>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Use the <strong>ACTUAL</strong> and <strong>DIFF</strong> columns in your planner. 
          If a task takes longer, note why in the <strong>COMMENT</strong> field. 
          This data allows the AI to better architect your future study cycles based on your real-world performance.
        </p>
      </section>
    </div>
  );
};

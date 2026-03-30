import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  Zap, 
  Infinity, 
  Brain, 
  History, 
  FastForward, 
  ShieldAlert,
  ArrowRight,
  Layout,
  UserCheck,
  Sparkles,
  Search,
  Cpu,
  Target,
  Clock,
  Heart,
  Users,
  Timer,
  Compass,
  Calendar
} from 'lucide-react';
import { cn } from '../lib/utils';

export const MasterLearningFrameworkManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
          <GraduationCap size={14} className="text-indigo-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-600 font-bold">The Master Learning Framework</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          Mastery Through <br />Architecture & Identity
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          A complete, integrated learning system (MLF) combining 7 techniques, 5 mastery grades, and 3 intensity plans for permanent retention and transformation.
        </p>
      </header>

      {/* Definition Box */}
      <section className="p-10 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <Layout className="text-indigo-200" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-200">MLF Definition</h3>
          </div>
          <div className="border-2 border-white/20 rounded-3xl p-8 space-y-6 bg-white/5 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <h4 className="text-2xl font-bold tracking-tight">THE MASTER LEARNING FRAMEWORK (MLF)</h4>
              <p className="text-sm opacity-80 italic">A complete, integrated learning system combining:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                <div className="text-xl font-bold">7</div>
                <div className="text-[10px] font-mono uppercase opacity-60">Techniques</div>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                <div className="text-xl font-bold">5</div>
                <div className="text-[10px] font-mono uppercase opacity-60">Grades (A+ to S+++)</div>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                <div className="text-xl font-bold">3</div>
                <div className="text-[10px] font-mono uppercase opacity-60">Intensities</div>
              </div>
            </div>
            <p className="text-xs text-center opacity-70 leading-relaxed">
              Merged into a 5-day progression with spaced repetition for permanent retention and identity transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Grade Guides */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
          <Layers className="text-zinc-400" size={20} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">The 5 Mastery Grades</h3>
        </div>

        {/* A+ Level */}
        <div className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Grade 01</div>
              <h4 className="text-3xl font-bold text-zinc-900">A+ LEVEL — Foundation</h4>
            </div>
            <span className="text-xs font-mono bg-zinc-900 text-white px-4 py-1.5 rounded-full font-bold">Goal: Create Data Structure</span>
          </div>
          <p className="text-sm text-zinc-500 italic">"Hippocampus begins encoding. Linear, isolated pathways form."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-mono uppercase text-zinc-400">What to Do</h5>
              <ul className="space-y-3">
                {[
                  { step: 1, action: "Read/Listen once for big picture", time: "10 min" },
                  { step: 2, action: "Create One-Page Summary (5 parts)", time: "15 min" },
                  { step: 3, action: "Draw Visual Diagram (Flowchart)", time: "10 min" },
                  { step: 4, action: "Take Integrated Quiz (MCQ/SA/TF)", time: "15 min" },
                  { step: 5, action: "Surface + Strategic Reflection", time: "10 min" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-xs p-3 bg-white rounded-xl border border-zinc-100">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold">{item.step}</span>
                      {item.action}
                    </span>
                    <span className="font-mono text-zinc-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-zinc-100 space-y-4">
              <h5 className="text-xs font-mono uppercase text-zinc-400">Neural Outcome</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-zinc-400 uppercase">New Synapses</div>
                  <div className="text-sm font-bold">500–1,000</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-zinc-400 uppercase">Retrieval Speed</div>
                  <div className="text-sm font-bold">3–5 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* S Level */}
        <div className="p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-rose-400 uppercase">Grade 02</div>
              <h4 className="text-3xl font-bold text-rose-900">S LEVEL — Narrative & Emotion</h4>
            </div>
            <span className="text-xs font-mono bg-rose-500 text-white px-4 py-1.5 rounded-full font-bold">Goal: Add Emotional Indexing</span>
          </div>
          <p className="text-sm text-rose-800/60 italic">"Amygdala activates. Narrative chains and emotional tags attached."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-mono uppercase text-rose-400">What to Do</h5>
              <ul className="space-y-3">
                {[
                  { step: 1, action: "Transform summary into a story", time: "20 min" },
                  { step: 2, action: "Add emotional states to diagram", time: "10 min" },
                  { step: 3, action: "Add 'My Connection' to study guide", time: "15 min" },
                  { step: 4, action: "Convert quiz to real-life scenarios", time: "15 min" },
                  { step: 5, action: "Identity Reflection: 'Who am I becoming?'", time: "10 min" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-xs p-3 bg-white rounded-xl border border-rose-100">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center text-[10px] font-bold text-rose-600">{item.step}</span>
                      {item.action}
                    </span>
                    <span className="font-mono text-rose-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-rose-100 space-y-4">
              <h5 className="text-xs font-mono uppercase text-rose-400">Neural Outcome</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-rose-400 uppercase">New Synapses</div>
                  <div className="text-sm font-bold text-rose-900">2,000–5,000</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-rose-400 uppercase">Retrieval Speed</div>
                  <div className="text-sm font-bold text-rose-900">1–2 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* S+ Level */}
        <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-emerald-400 uppercase">Grade 03</div>
              <h4 className="text-3xl font-bold text-emerald-900">S+ LEVEL — Social Learning</h4>
            </div>
            <span className="text-xs font-mono bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold">Goal: Activate Mirror Neurons</span>
          </div>
          <p className="text-sm text-emerald-800/60 italic">"Theory of Mind engaged. Dual pathways (knowing + teaching) form."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-mono uppercase text-emerald-400">What to Do</h5>
              <ul className="space-y-3">
                {[
                  { step: 1, action: "Create 3 AI Personas with biases", time: "15 min" },
                  { step: 2, action: "Teach all 5 methods to each persona", time: "75 min" },
                  { step: 3, action: "Role-Play Reversal (argue their side)", time: "15 min" },
                  { step: 4, action: "Reflect on revealed gaps", time: "10 min" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-xs p-3 bg-white rounded-xl border border-emerald-100">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-600">{item.step}</span>
                      {item.action}
                    </span>
                    <span className="font-mono text-emerald-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-emerald-100 space-y-4">
              <h5 className="text-xs font-mono uppercase text-emerald-400">Neural Outcome</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-emerald-400 uppercase">New Synapses</div>
                  <div className="text-sm font-bold text-emerald-900">10,000–20,000</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-emerald-400 uppercase">Retrieval Speed</div>
                  <div className="text-sm font-bold text-emerald-900">0.5–1 second</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* S++ Level */}
        <div className="p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-indigo-400 uppercase">Grade 04</div>
              <h4 className="text-3xl font-bold text-indigo-900">S++ LEVEL — Spacing & Timing</h4>
            </div>
            <span className="text-xs font-mono bg-indigo-500 text-white px-4 py-1.5 rounded-full font-bold">Goal: Optimize for Myelination</span>
          </div>
          <p className="text-sm text-indigo-800/60 italic">"Hippocampal-neocortical transfer. Permanent storage achieved."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-mono uppercase text-indigo-400">What to Do</h5>
              <ul className="space-y-3">
                {[
                  { step: 1, action: "Create 90-day Spacing Schedule", time: "10 min" },
                  { step: 2, action: "Scheduled reviews (Day 3, 7, 14, 30...)", time: "95 min" },
                  { step: 3, action: "Variable Retrieval (random prompts)", time: "Ongoing" },
                  { step: 4, action: "Track Forgetting Curve", time: "Ongoing" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-xs p-3 bg-white rounded-xl border border-indigo-100">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-600">{item.step}</span>
                      {item.action}
                    </span>
                    <span className="font-mono text-indigo-400">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-indigo-100 space-y-4">
              <h5 className="text-xs font-mono uppercase text-indigo-400">Neural Outcome</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-indigo-400 uppercase">New Synapses</div>
                  <div className="text-sm font-bold text-indigo-900">50,000–100,000</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-indigo-400 uppercase">Retrieval Speed</div>
                  <div className="text-sm font-bold text-indigo-900">0.1–0.3 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* S+++ Level */}
        <div className="p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-amber-400 uppercase">Grade 05</div>
              <h4 className="text-3xl font-bold text-amber-900">S+++ LEVEL — Transformation</h4>
            </div>
            <span className="text-xs font-mono bg-amber-500 text-white px-4 py-1.5 rounded-full font-bold">Goal: Integrate into Identity</span>
          </div>
          <p className="text-sm text-amber-800/60 italic">"Default Mode Network integration. Knowledge becomes who you are."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-mono uppercase text-amber-400">The 8 Phases</h5>
              <div className="grid grid-cols-2 gap-2">
                {["Invitation", "Immersion", "Discovery", "Collaboration", "Creation", "Integration", "Spacing", "Legacy"].map((phase, i) => (
                  <div key={i} className="p-2 bg-white rounded-lg border border-amber-100 text-[10px] font-bold text-center">
                    {i+1}. {phase}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-amber-100 space-y-4">
              <h5 className="text-xs font-mono uppercase text-amber-400">Neural Outcome</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-amber-400 uppercase">New Synapses</div>
                  <div className="text-sm font-bold text-amber-900">200,000–500,000</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-amber-400 uppercase">Retrieval Speed</div>
                  <div className="text-sm font-bold text-amber-900">Instantaneous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merged System Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
          <Infinity className="text-zinc-400" size={20} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">The Complete Merged System</h3>
        </div>

        {/* Core Mapping */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-zinc-900">Core Mapping: 7 Techniques → Master Grades</h4>
          <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="p-5 font-mono uppercase text-zinc-400">#</th>
                  <th className="p-5 font-mono uppercase text-zinc-400">Technique</th>
                  <th className="p-5 font-mono uppercase text-zinc-400">Target Time</th>
                  <th className="p-5 font-mono uppercase text-zinc-400">Master Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                <tr><td className="p-5">1</td><td className="p-5 font-bold">3P (Watch/Read Once)</td><td className="p-5">10 min</td><td className="p-5">A+ (Part 1)</td></tr>
                <tr><td className="p-5">2</td><td className="p-5 font-bold">SQ3R (Deep Understanding)</td><td className="p-5">20 min</td><td className="p-5">A+ (Part 2-3)</td></tr>
                <tr><td className="p-5">3</td><td className="p-5 font-bold">Active Recall (Practice)</td><td className="p-5">30 min</td><td className="p-5">A+ (Part 4)</td></tr>
                <tr><td className="p-5">4</td><td className="p-5 font-bold">S-RUN (Note Taking)</td><td className="p-5">20 min</td><td className="p-5">A+ (Part 1)</td></tr>
                <tr><td className="p-5">5</td><td className="p-5 font-bold">Application (Coding)</td><td className="p-5">50 min</td><td className="p-5">S+ / S+++</td></tr>
                <tr><td className="p-5">6</td><td className="p-5 font-bold">Deliberate Practice</td><td className="p-5">30 min</td><td className="p-5">S++</td></tr>
                <tr><td className="p-5">7</td><td className="p-5 font-bold">Feynman (Recall & Explain)</td><td className="p-5">20 min</td><td className="p-5">S / S+</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5-Day Progression */}
        <div className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
          <div className="flex items-center gap-3">
            <Calendar className="text-indigo-400" size={20} />
            <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400">The 5-Day Progression (Merged)</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { day: 1, grade: "A+", focus: "Foundation", desc: "3P → SQ3R → Recall → S-RUN" },
              { day: 2, grade: "S", focus: "Emotion", desc: "Add story, emotion, identity" },
              { day: 3, grade: "S+", focus: "Social", desc: "Teach AI personas, role-play" },
              { day: 4, grade: "S++", focus: "Spacing", desc: "Spacing schedule + deliberate practice" },
              { day: 5, grade: "S+++", focus: "Legacy", desc: "Create, integrate, legacy plan" }
            ].map((d, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
                <div className="text-[10px] font-mono text-indigo-400 uppercase">Day {d.day}</div>
                <div className="text-lg font-bold">{d.grade}</div>
                <div className="text-[10px] font-bold text-indigo-200">{d.focus}</div>
                <p className="text-[9px] opacity-60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Schedule */}
      <section className="p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 space-y-8">
        <div className="flex items-center gap-3">
          <Timer className="text-indigo-900" size={20} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-900 font-bold">The Spacing Schedule (Permanent Retention)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { interval: "Day 3", method: "Summary" },
            { interval: "Day 7", method: "Diagram" },
            { interval: "Day 14", method: "Study Guide" },
            { interval: "Day 30", method: "Quiz" },
            { interval: "Day 60", method: "Reflection" },
            { interval: "Day 90", method: "All Combined" },
            { interval: "Variable", method: "Random" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl border border-indigo-100 text-center space-y-1">
              <div className="text-[10px] font-bold text-indigo-600">{item.interval}</div>
              <div className="text-[9px] text-zinc-500">{item.method}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Advice */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
        <div className="flex items-center gap-3">
          <Compass className="text-emerald-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Final Strategic Advice</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Time vs. Method</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Use the intensity plans to decide <strong>when</strong> to study, but use the Master Method grades to decide <strong>how</strong> to study. Time volume without method is inefficient; method without time is non-execution.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Identity Integration</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              The goal is not to acquire topics, but to transform who you are. At S+++, knowledge is no longer something you know—it is something you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

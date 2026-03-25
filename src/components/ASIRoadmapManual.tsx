import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Layout,
  Target,
  Zap,
  Brain,
  History,
  FastForward,
  Infinity,
  UserCheck,
  Compass,
  Lightbulb
} from 'lucide-react';

export const ASIRoadmapManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full">
          <Infinity size={14} className="text-purple-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-600 font-bold">The 15-Year Horizon</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          Artificial Superintelligence <br />& The Future of Learning
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          Planning for a world where humans no longer do the manual labor of simulation—where ASI, supercomputers, and quantum systems handle the execution.
        </p>
      </header>

      {/* Part 1: Today vs Future */}
      <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <History className="text-purple-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400">The Trajectory</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-purple-400">2026 (Today)</div>
              <div className="text-lg font-bold">AI Assists</div>
              <p className="text-xs opacity-60">Humans do deep learning; AI helps structure and organize.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-purple-400">2031 (5 Years)</div>
              <div className="text-lg font-bold">AI Simulates</div>
              <p className="text-xs opacity-60">Humans design goals; AI handles the bulk of simulation tasks.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-purple-400">2036 (10 Years)</div>
              <div className="text-lg font-bold">Autonomous Learning</div>
              <p className="text-xs opacity-60">AI optimizes its own paths; humans supervise the direction.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="text-[10px] font-mono text-purple-400">2041 (15 Years)</div>
              <div className="text-lg font-bold">ASI Era</div>
              <p className="text-xs opacity-60">Artificial Superintelligence; humans may not be in the loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: ASI Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">
              <Zap size={20} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">How ASI Plans This Task</h3>
          </div>
          <span className="text-xs font-mono bg-purple-100 px-4 py-1.5 rounded-full text-purple-600 font-bold">Instantaneous</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Phase 1: Absorption</h4>
              <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <FastForward size={16} className="text-purple-500" />
                  0.001 Seconds
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Ingests all transcripts, textbooks, and papers. Maps all mathematical relationships instantly. 
                  Identifies the optimal parallel learning path.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Phase 2: Simulation</h4>
              <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <FastForward size={16} className="text-purple-500" />
                  0.01 Seconds
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Simultaneous analysis of all concepts. Generates millions of examples. 
                  Writes, tests, and optimizes code in all languages across all edge cases.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Meta-Learning Capability</h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0"><Infinity size={12} className="text-purple-400" /></div>
                  <div>
                    <p className="text-xs font-bold">Pattern Extraction</p>
                    <p className="text-[10px] opacity-60">Identifies universal structures across all domains.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0"><Lightbulb size={12} className="text-purple-400" /></div>
                  <div>
                    <p className="text-xs font-bold">Method Creation</p>
                    <p className="text-[10px] opacity-60">Discovers new counting methods unknown to humans.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0"><Target size={12} className="text-purple-400" /></div>
                  <div>
                    <p className="text-xs font-bold">Optimization</p>
                    <p className="text-[10px] opacity-60">Finds most efficient solutions for any problem size.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Human Role */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <UserCheck className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">The Human Role in an ASI World</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">Scenario A: ASI as Tool</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              You direct what problems to solve; ASI executes. You remain the architect of intent.
            </p>
          </div>
          <div className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">Scenario B: ASI as Teacher</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              You learn *with* ASI, but differently—no need for slow, manual techniques. Direct neural transfer or optimized mapping.
            </p>
          </div>
          <div className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">Scenario C: ASI as Collaborator</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Humans focus on creativity, ethics, and meaning; ASI handles the heavy computation and simulation.
            </p>
          </div>
          <div className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">Scenario D: Autonomous ASI</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              ASI operates independently. Human involvement becomes optional for technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Part 4: Value of Today's Work */}
      <section className="p-10 bg-purple-50 rounded-[2.5rem] border border-purple-100 space-y-8">
        <div className="flex items-center gap-3">
          <Compass className="text-purple-900" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-purple-900 font-bold">Why Your Work Today Matters</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="text-xs font-bold text-purple-900">Cognitive Architecture</div>
            <p className="text-xs text-purple-700/70 leading-relaxed">
              Strong thinking skills transfer to any future. You are training your brain to think in structures, which is the foundation for directing any intelligence.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-bold text-purple-900">Meta-Skill of Learning</div>
            <p className="text-xs text-purple-700/70 leading-relaxed">
              Learning *how to learn* is ASI-proof. It builds the intuition required to understand what to compute, even if you don't do the computing yourself.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-bold text-purple-900">Systematic Thinking</div>
            <p className="text-xs text-purple-700/70 leading-relaxed">
              Creating pattern documents and tracking errors builds a systematic mind. This makes you a director of ASI, not a servant to it.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-bold text-purple-900">Intuition Building</div>
            <p className="text-xs text-purple-700/70 leading-relaxed">
              AI can compute; humans develop intuition about *what* is meaningful. Your work today builds that essential human edge.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Layout className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">ASI vs Human Planning</h3>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-5 font-mono uppercase text-zinc-400">Phase</th>
                <th className="p-5 font-mono uppercase text-zinc-400">ASI Action</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Human Equivalent</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr>
                <td className="p-5 font-bold">1. Ingestion</td>
                <td className="p-5">Absorb all domain knowledge</td>
                <td className="p-5 italic">3P & SQ3R</td>
                <td className="p-5 font-mono">ms</td>
              </tr>
              <tr>
                <td className="p-5 font-bold">2. Mapping</td>
                <td className="p-5">Create complete knowledge graph</td>
                <td className="p-5 italic">S-RUN & Mermaid</td>
                <td className="p-5 font-mono">ms</td>
              </tr>
              <tr>
                <td className="p-5 font-bold">3. Hypothesis</td>
                <td className="p-5">Propose new methods/theorems</td>
                <td className="p-5 italic">Application (Creative)</td>
                <td className="p-5 font-mono">seconds</td>
              </tr>
              <tr>
                <td className="p-5 font-bold">4. Verification</td>
                <td className="p-5">Test all hypotheses exhaustively</td>
                <td className="p-5 italic">Deliberate Practice</td>
                <td className="p-5 font-mono">mins</td>
              </tr>
              <tr>
                <td className="p-5 font-bold">5. Translation</td>
                <td className="p-5">Explain for human understanding</td>
                <td className="p-5 italic">Feynman Technique</td>
                <td className="p-5 font-mono">seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Advice Section */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
        <div className="flex items-center gap-3">
          <Brain className="text-purple-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Final Advice for the Next 15 Years</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Keep Doing What You're Doing</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Your pattern documents and methodical approach are training your brain to think in structures. 
              This transfers to any future, regardless of the technology.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">But Adapt Your Focus</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Shift from <strong>execution</strong> to <strong>design</strong>. Don't just solve problems—design systems that solve them. 
              Move from <strong>memory</strong> to <strong>pattern recognition</strong>.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm italic opacity-40">"The human who understands structure will direct ASI, not serve it."</p>
        </div>
      </section>
    </div>
  );
};

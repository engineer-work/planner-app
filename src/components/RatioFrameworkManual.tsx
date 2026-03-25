import React from 'react';
import { 
  User, 
  Cpu, 
  Zap, 
  Infinity, 
  Bot, 
  Layout, 
  Target, 
  Activity, 
  Compass, 
  ShieldAlert,
  Clock,
  ArrowRight
} from 'lucide-react';

export const RatioFrameworkManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
          <Layout size={14} className="text-blue-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 font-bold">The Ratio Framework</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          Work Distribution <br />Across the Intelligence Spectrum
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          A strategic framework for distributing simulation-level tasks between human cognition, AI collaboration, autonomous agents, ASI, and humanoid robotics.
        </p>
      </header>

      {/* Part 1: The Spectrum of Capability */}
      <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <Compass className="text-blue-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400">The Spectrum of Capability</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <User size={16} />
                <span className="text-[10px] font-mono uppercase">Human-only</span>
              </div>
              <div className="text-lg font-bold">Biological Cognition</div>
              <p className="text-xs opacity-60">Intuition, creativity, ethics. The ultimate decision-maker and meaning-maker.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Zap size={16} />
                <span className="text-[10px] font-mono uppercase">Human + AI</span>
              </div>
              <div className="text-lg font-bold">Augmented Cognition</div>
              <p className="text-xs opacity-60">Rapid info processing. AI generates drafts; human refines and oversees.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Cpu size={16} />
                <span className="text-[10px] font-mono uppercase">AI Agent</span>
              </div>
              <div className="text-lg font-bold">Autonomous Execution</div>
              <p className="text-xs opacity-60">Independent worker on defined tasks. Schedules, tests, and reports results.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Infinity size={16} />
                <span className="text-[10px] font-mono uppercase">ASI</span>
              </div>
              <div className="text-lg font-bold">Superhuman Cognition</div>
              <p className="text-xs opacity-60">Strategic planner, discoverer, optimizer across all domains simultaneously.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Bot size={16} />
                <span className="text-[10px] font-mono uppercase">Humanoid Robot</span>
              </div>
              <div className="text-lg font-bold">Physical Embodiment</div>
              <p className="text-xs opacity-60">Physical world interaction. Lab experiments, manufacturing, and precise labor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Technique-Specific Ratios */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">Technique-Specific Ratios</h3>
          </div>
          <span className="text-xs font-mono bg-blue-100 px-4 py-1.5 rounded-full text-blue-600 font-bold">Execution Framework</span>
        </div>

        <div className="space-y-6">
          {[
            { name: '3P — Watch/Read Once', human: '80%', ai: '20%', agent: '90% AI', asi: '100% ASI', desc: 'AI provides summary; human watches with guided focus.' },
            { name: 'SQ3R — Deep Understanding', human: '60%', ai: '40%', agent: '80% AI', asi: '100% ASI', desc: 'AI extracts structure; human reads deeply and recites.' },
            { name: 'Active Recall — Practice', human: '70%', ai: '30%', agent: '50/50', asi: '100% ASI', desc: 'AI generates adaptive quizzes; human answers from memory.' },
            { name: 'S-RUN — Note Taking', human: '50%', ai: '50%', agent: '80% AI', asi: '100% ASI', desc: 'AI generates draft summary; human refines and adds insight.' },
            { name: 'Application — Coding', human: '40%', ai: '60%', agent: '90% AI', asi: '100% ASI', desc: 'AI generates code structure; human reviews and debugs.' },
            { name: 'Deliberate Practice', human: '30%', ai: '70%', agent: '95% AI', asi: '100% ASI', desc: 'AI generates test suite; human prioritizes and analyzes.' },
            { name: 'Feynman — Explain', human: '80%', ai: '20%', agent: '60% AI', asi: '100% ASI', desc: 'AI checks clarity; human explains without notes.' },
          ].map((tech, i) => (
            <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="col-span-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">Technique {i+1}</div>
                <div className="text-sm font-bold text-zinc-900">{tech.name}</div>
              </div>
              <div className="col-span-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">Human + AI Ratio</div>
                <div className="text-xs font-bold text-blue-600">{tech.human} Human / {tech.ai} AI</div>
              </div>
              <div className="col-span-2">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">Strategic Approach</div>
                <p className="text-[11px] text-zinc-500 italic">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: Evolution Over Time */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Clock className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Evolution Over Time (2026 → 2041)</h3>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-5 font-mono uppercase text-zinc-400">Year</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Dominant Level</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Human Cognitive</th>
                <th className="p-5 font-mono uppercase text-zinc-400">AI/ASI Cognitive</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Physical Robot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr><td className="p-5 font-bold">2026</td><td className="p-5">Human + AI</td><td className="p-5">70%</td><td className="p-5">30%</td><td className="p-5">0%</td></tr>
              <tr><td className="p-5 font-bold">2030</td><td className="p-5">AI Agent</td><td className="p-5">40%</td><td className="p-5">60%</td><td className="p-5">0%</td></tr>
              <tr><td className="p-5 font-bold">2035</td><td className="p-5">AI Agent + Humanoid</td><td className="p-5">20%</td><td className="p-5">70%</td><td className="p-5">10%</td></tr>
              <tr><td className="p-5 font-bold">2041</td><td className="p-5">ASI + Humanoid</td><td className="p-5">5%</td><td className="p-5">80%</td><td className="p-5">15%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 4: The Human Role */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">The Human Role in Each Level</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">What Human Does</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-blue-500" /> Set goals and define values</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-blue-500" /> Ask the right questions</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-blue-500" /> Make ethical judgments</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-blue-500" /> Find meaning and direction</li>
            </ul>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-zinc-900">What Human Does NOT Do</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-red-500" /> Manual computation</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-red-500" /> Exhaustive searching</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-red-500" /> Routine task execution</li>
              <li className="flex items-center gap-2"><ArrowRight size={12} className="text-red-500" /> Physical labor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part 5: The Ultimate Ratio */}
      <section className="p-10 bg-blue-50 rounded-[2.5rem] border border-blue-100 space-y-8">
        <div className="flex items-center gap-3">
          <Activity className="text-blue-900" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold">The Ultimate Ratio Shift</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-blue-100 space-y-2">
            <div className="text-[10px] font-mono text-blue-400">2026</div>
            <div className="text-xl font-bold text-blue-900">80% Human / 20% AI</div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-blue-100 space-y-2">
            <div className="text-[10px] font-mono text-blue-400">2030</div>
            <div className="text-xl font-bold text-blue-900">40% Human / 60% AI</div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-blue-100 space-y-2">
            <div className="text-[10px] font-mono text-blue-400">2036+</div>
            <div className="text-xl font-bold text-blue-900">10% Human / 90% AI+Robot</div>
          </div>
        </div>
        <p className="text-sm text-blue-800/70 italic leading-relaxed text-center">
          "The 10-20% that remains human is the most valuable part: setting goals, defining values, and directing intelligence toward what matters."
        </p>
      </section>

      {/* Advice Section */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
        <div className="flex items-center gap-3">
          <Compass className="text-blue-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">What You Should Do Now</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Build Your Human Edge</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Focus on deep understanding, intuition, and judgment. These are the skills required to remain in the 10% that directs intelligence.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Master Collaboration</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Learn to work with AI as a partner, not just a tool. Develop systematic thinking through your pattern documents to train your mind for this future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

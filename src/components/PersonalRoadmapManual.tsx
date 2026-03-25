import React from 'react';
import { 
  Compass, 
  Target, 
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
  Cpu
} from 'lucide-react';

export const PersonalRoadmapManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
          <Compass size={14} className="text-emerald-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-600 font-bold">Personal Roadmap</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          From Human Learner <br />to ASI Director
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          How the skills you're building today translate to the 5-10% human role in the ASI era—the part that directs intelligence rather than being directed by it.
        </p>
      </header>

      {/* The Core Premise */}
      <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-emerald-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400">The Core Premise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-[10px] font-mono text-emerald-400">Today's Activity</div>
              <div className="text-lg font-bold">Pattern Documents</div>
              <p className="text-xs opacity-60 italic">"Frameworks for structuring knowledge"</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-[10px] font-mono text-emerald-400">Today's Activity</div>
              <div className="text-lg font-bold">Error Tracking</div>
              <p className="text-xs opacity-60 italic">"Diagnostic intuition for AI outputs"</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-[10px] font-mono text-emerald-400">Today's Activity</div>
              <div className="text-lg font-bold">Systematic Methods</div>
              <p className="text-xs opacity-60 italic">"Protocols for directing AI/ASI"</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-[10px] font-mono text-emerald-400">Today's Activity</div>
              <div className="text-lg font-bold">Meta-Cognition</div>
              <p className="text-xs opacity-60 italic">"Understanding how intelligence works"</p>
            </div>
          </div>
          <p className="text-sm text-center italic opacity-60">"You are not wasting time. You are building the architecture for human-AI collaboration."</p>
        </div>
      </section>

      {/* Phase 1: Foundation Building */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">1</div>
            <h3 className="text-2xl font-bold text-zinc-900">Phase 1: Foundation Building (2026)</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">80% Human / 20% AI</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Current Skills</h4>
            <div className="space-y-4">
              {[
                { name: 'Pattern Documentation', desc: 'Creating Cues, Notes, Mermaid, Summary, Quizzes.' },
                { name: 'Methodical Learning', desc: 'Following the 7-technique plan to build discipline.' },
                { name: 'Error Analysis', desc: 'Tracking gaps and branching timelines.' },
                { name: 'Multi-method Verification', desc: 'Validating from multiple angles (casework, code).' }
              ].map((skill, i) => (
                <div key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <div className="text-xs font-bold text-zinc-900">{skill.name}</div>
                  <p className="text-[10px] text-zinc-500 mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">What to Focus On</h4>
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-emerald-400 uppercase">Primary</div>
                <div className="text-sm font-bold">Complete your pattern documents. Master the 7 techniques.</div>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-emerald-400 uppercase">Secondary</div>
                <div className="text-sm font-bold">Learn to use AI as a collaborator, not just an answer machine.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Human + AI Mastery */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">2</div>
            <h3 className="text-2xl font-bold text-zinc-900">Phase 2: Human + AI Mastery (2028-2030)</h3>
          </div>
          <span className="text-xs font-mono bg-emerald-100 px-4 py-1.5 rounded-full text-emerald-600 font-bold">60% Human / 40% AI</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Skills to Develop</h4>
            <div className="space-y-4">
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">Output Evaluation</div>
                <p className="text-[10px] text-zinc-500 mt-1">Judging AI-generated solutions against manual work.</p>
              </div>
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">Workflow Design</div>
                <p className="text-[10px] text-zinc-500 mt-1">Creating systems where AI and human complement each other.</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-600">Document Evolution</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] border-b border-emerald-100 pb-1">
                <span className="text-emerald-800">Cues + Notes</span>
                <span className="font-bold text-emerald-900">Interactive Knowledge Graph</span>
              </div>
              <div className="flex justify-between text-[10px] border-b border-emerald-100 pb-1">
                <span className="text-emerald-800">Mermaid Diagram</span>
                <span className="font-bold text-emerald-900">Dynamic Visualization</span>
              </div>
              <div className="flex justify-between text-[10px] border-b border-emerald-100 pb-1">
                <span className="text-emerald-800">Quiz</span>
                <span className="font-bold text-emerald-900">Adaptive Testing System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: AI Agent Era */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">3</div>
            <h3 className="text-2xl font-bold text-zinc-900">Phase 3: AI Agent Era (2030-2034)</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">30% Human / 70% AI</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Skills to Develop</h4>
            <div className="space-y-4">
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">Agent Supervision</div>
                <p className="text-[10px] text-zinc-500 mt-1">Monitoring AI agents executing complex tasks.</p>
              </div>
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">System Architecture</div>
                <p className="text-[10px] text-zinc-500 mt-1">Designing how multiple agents work together.</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Skill Transfer</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Cpu size={12} className="text-emerald-400" /></div>
                <div>
                  <p className="text-xs font-bold">Systematic Plan → Agent Workflows</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Search size={12} className="text-emerald-400" /></div>
                <div>
                  <p className="text-xs font-bold">Error Tracking → Monitoring Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: ASI Emergence */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">4</div>
            <h3 className="text-2xl font-bold text-zinc-900">Phase 4: ASI Emergence (2034-2038)</h3>
          </div>
          <span className="text-xs font-mono bg-purple-100 px-4 py-1.5 rounded-full text-purple-600 font-bold">15% Human / 85% ASI</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Strategic Direction</h4>
            <div className="space-y-4">
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">Problem Formulation</div>
                <p className="text-[10px] text-zinc-500 mt-1">Asking the precise questions that ASI can solve.</p>
              </div>
              <div className="p-5 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="text-xs font-bold text-zinc-900">Value Alignment</div>
                <p className="text-[10px] text-zinc-500 mt-1">Ensuring ASI pursues human goals and ethical boundaries.</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-purple-50/50 rounded-[2.5rem] border border-purple-100 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-purple-600">Document Evolution</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] border-b border-purple-100 pb-1">
                <span className="text-purple-800">Learning Notes</span>
                <span className="font-bold text-purple-900">Knowledge Architecture</span>
              </div>
              <div className="flex justify-between text-[10px] border-b border-purple-100 pb-1">
                <span className="text-purple-800">Error Logs</span>
                <span className="font-bold text-purple-900">Diagnostic Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 5: The 5-10% Human Role */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">5</div>
            <h3 className="text-2xl font-bold text-zinc-900">Phase 5: The 5-10% Human Role (2038-2041+)</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">5-10% Human / 90-95% ASI+Robot</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Meaning-making', desc: 'Defining what problems actually matter to solve.' },
            { name: 'Ethical Judgment', desc: 'Making value-based decisions that AI cannot hold.' },
            { name: 'Creative Direction', desc: 'Imagining and choosing new possibilities to pursue.' },
            { name: 'Human Connection', desc: 'Empathy, relationships, and presence.' },
            { name: 'Boundary Setting', desc: 'Saying "no" to certain paths and setting limits.' }
          ].map((role, i) => (
            <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-2">
              <div className="text-xs font-bold text-zinc-900">{role.name}</div>
              <p className="text-[10px] text-zinc-500 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Bridge */}
      <section className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 space-y-8">
        <div className="flex items-center gap-3">
          <Layout className="text-emerald-900" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold">The Bridge: Today to Tomorrow</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-emerald-600 uppercase">Today's Activity</div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs border-b border-emerald-100 pb-1">
                <span>Cues (Key Concepts)</span>
                <span className="font-bold">Extracting Essence</span>
              </div>
              <div className="flex justify-between text-xs border-b border-emerald-100 pb-1">
                <span>Mermaid (Visuals)</span>
                <span className="font-bold">Mapping Solution Space</span>
              </div>
              <div className="flex justify-between text-xs border-b border-emerald-100 pb-1">
                <span>Error Tracking</span>
                <span className="font-bold">Diagnostic Frameworks</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-emerald-600 uppercase">Tomorrow's Capability</div>
            <p className="text-xs text-emerald-800/70 leading-relaxed">
              The person who can structure knowledge, direct intelligence, diagnose errors, and ask the right questions will direct ASI. Others will be directed by it.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Today */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
        <div className="flex items-center gap-3">
          <Sparkles className="text-emerald-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">What You Can Do Today</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Master the Foundation</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Complete your current pattern documents. They are your first examples of structured knowledge. Track your errors systematically to build the habit of diagnosis.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic">Ask Meta-Questions</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Every "why this method?" strengthens your 5-10% role. Document your process—your journey becomes a case study in human-AI collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

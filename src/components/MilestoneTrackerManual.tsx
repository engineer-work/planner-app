import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Target, 
  Zap, 
  TrendingUp, 
  Calendar, 
  Layout, 
  ShieldAlert,
  ArrowRight,
  ClipboardList,
  BarChart3,
  UserCheck,
  Cpu,
  Infinity
} from 'lucide-react';
import { cn } from '../lib/utils';

export const MilestoneTrackerManual: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Foundation Building",
      years: "2026-2028",
      ratio: "80% Human / 20% AI",
      color: "zinc",
      milestones: [
        { title: "Pattern Document Mastery", goal: "Create 10+ high-quality topics", next: "Expand to probability/statistics" },
        { title: "7-Technique Fluency", goal: "Execute all 7 techniques habitually", next: "Optimize your flow" },
        { title: "Error Tracking System", goal: "Log every error with root cause", next: "Create log template" },
        { title: "AI Collaboration Basics", goal: "50+ AI-assisted tasks completed", next: "Develop prompt library" }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Human + AI Mastery",
      years: "2028-2030",
      ratio: "60% Human / 40% AI",
      color: "emerald",
      milestones: [
        { title: "AI Workflow Design", goal: "5+ documented workflows (30%+ savings)", next: "Document first workflow" },
        { title: "Output Evaluation Skill", goal: "95% accuracy in detecting AI errors", next: "Test AI limits" },
        { title: "Prompt Engineering Mastery", goal: "90% success on first attempt", next: "Analyze successful prompts" },
        { title: "Multi-Agent Understanding", goal: "Design simple multi-agent workflows", next: "Experiment with agent chains" }
      ]
    },
    {
      id: 3,
      title: "Phase 3: AI Agent Era",
      years: "2030-2034",
      ratio: "30% Human / 70% AI",
      color: "indigo",
      milestones: [
        { title: "Agent Supervision", goal: "Manage 5+ agents simultaneously", next: "Start with one simple agent" },
        { title: "Exception Handling Protocols", goal: "Comprehensive exception library", next: "Document every AI failure" },
        { title: "System Architecture Design", goal: "Design end-to-end learning systems", next: "Sketch automated 7-tech plan" },
        { title: "Verification Frameworks", goal: "Automated verification for all outputs", next: "Build verification scripts" }
      ]
    },
    {
      id: 4,
      title: "Phase 4: ASI Emergence",
      years: "2034-2038",
      ratio: "15% Human / 85% ASI",
      color: "purple",
      milestones: [
        { title: "Problem Formulation", goal: "Define problems with scope/values", next: "Practice defining without solving" },
        { title: "Value Alignment", goal: "Design alignment constraints", next: "Read alignment foundations" },
        { title: "ASI Output Interpretation", goal: "Validate and explain ASI solutions", next: "Practice Feynman on complexity" },
        { title: "Ethical Boundary Setting", goal: "Clear personal ethical framework", next: "Write ethical principles" }
      ]
    },
    {
      id: 5,
      title: "Phase 5: The 5-10% Human Role",
      years: "2038-2041+",
      ratio: "5-10% Human / 90% ASI+Robot",
      color: "amber",
      milestones: [
        { title: "Meaning-Making", goal: "Clear philosophy of what matters", next: "Write mission statement" },
        { title: "Creative Direction", goal: "Direct ASI toward novel frontiers", next: "Keep impossible ideas journal" },
        { title: "Human Connection", goal: "Deep relationships and mentoring", next: "Teach someone else" },
        { title: "Wisdom & Judgment", goal: "Decisions integrating knowledge/values", next: "Reflect on difficult decisions" }
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
          <ClipboardList size={14} className="text-zinc-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">Milestone Tracker</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          Your 15-Year <br />Milestone Tracker
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          Monitor your progress across the 5 phases toward the 5-10% human role in the ASI era. Calibration is the key to direction.
        </p>
      </header>

      {/* How to Use Section */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <Target className="text-zinc-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">How to Use This Tracker</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Milestone", desc: "The capability you're building" },
              { label: "Current Level", desc: "Where you are today" },
              { label: "Evidence", desc: "What proves achievement" },
              { label: "Next Action", desc: "What to do next" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">{item.label}</div>
                <p className="text-xs opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Grid */}
      <div className="space-y-24">
        {phases.map((phase) => (
          <section key={phase.id} className="space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center font-serif italic text-lg text-white",
                  phase.color === 'zinc' ? "bg-zinc-900" :
                  phase.color === 'emerald' ? "bg-emerald-500" :
                  phase.color === 'indigo' ? "bg-indigo-500" :
                  phase.color === 'purple' ? "bg-purple-500" : "bg-amber-500"
                )}>
                  {phase.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">{phase.title}</h3>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{phase.years}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Target Ratio</span>
                <span className={cn(
                  "text-xs font-mono px-4 py-1.5 rounded-full font-bold",
                  phase.color === 'zinc' ? "bg-zinc-100 text-zinc-600" :
                  phase.color === 'emerald' ? "bg-emerald-100 text-emerald-600" :
                  phase.color === 'indigo' ? "bg-indigo-100 text-indigo-600" :
                  phase.color === 'purple' ? "bg-purple-100 text-purple-600" : "bg-amber-100 text-amber-600"
                )}>
                  {phase.ratio}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phase.milestones.map((m, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6 group hover:border-zinc-300 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Milestone {i + 1}</div>
                      <h4 className="text-lg font-bold text-zinc-900">{m.title}</h4>
                    </div>
                    <Circle className="text-zinc-200 group-hover:text-zinc-400 transition-colors" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Target Level</div>
                      <p className="text-xs text-zinc-600 font-medium">{m.goal}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Next Action</div>
                      <div className="flex items-center gap-2 text-xs text-indigo-600 font-bold">
                        <ArrowRight size={12} />
                        {m.next}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reflection Card */}
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white space-y-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="text-zinc-400" size={18} />
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Phase {phase.id} Reflection</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-500 uppercase">Key Learning</p>
                  <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 text-[10px] italic opacity-40">
                    Record your biggest insight here...
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-500 uppercase">Biggest Challenge</p>
                  <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 text-[10px] italic opacity-40">
                    What was most difficult?
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Annual Review Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Calendar className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Annual Review Template</h3>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-5 font-mono uppercase text-zinc-400">Year</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Phase</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Human %</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Key Achievement</th>
                <th className="p-5 font-mono uppercase text-zinc-400">Next Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {[2026, 2027, 2028, 2029, 2030].map(year => (
                <tr key={year}>
                  <td className="p-5 font-bold">{year}</td>
                  <td className="p-5">{year <= 2028 ? '1' : '2'}</td>
                  <td className="p-5 font-mono">{year <= 2028 ? '80%' : '60%'}</td>
                  <td className="p-5 italic text-zinc-400">Pending...</td>
                  <td className="p-5 italic text-zinc-400">Pending...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Question */}
      <section className="p-12 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-200">
            <UserCheck size={32} />
          </div>
          <h3 className="text-3xl font-serif italic text-emerald-900">The Final Question</h3>
          <p className="text-sm text-emerald-800/70 leading-relaxed">
            As you build these pattern documents, track errors, and develop systematic methods—<strong>what do you already see as your unique human contribution?</strong>
          </p>
          <div className="p-6 bg-white rounded-3xl border border-emerald-100 text-left">
            <p className="text-[10px] font-mono text-emerald-400 uppercase mb-2">Your Answer (Seed of the 5-10% role)</p>
            <div className="h-24 text-sm text-emerald-900 italic opacity-30">
              Start writing your unique human edge here...
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { 
  Table, 
  Layout, 
  BarChart3, 
  ClipboardList, 
  AlertCircle, 
  Cpu, 
  History, 
  FileText,
  Settings,
  Zap,
  CheckCircle2,
  ArrowRight,
  Target,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

export const DigitalTrackerManual: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
          <Table size={14} className="text-zinc-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 font-bold">Digital Tracker Specification</span>
        </div>
        <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight">
          Spreadsheet Template <br />& Implementation Guide
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          A comprehensive digital tracker structure for Excel or Google Sheets to monitor your 15-year evolution toward the 5-10% human role.
        </p>
      </header>

      {/* File Structure Overview */}
      <section className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-3">
            <Layout className="text-zinc-400" size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">File Structure Overview</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Dashboard', desc: 'Overview, ratios, and progress visualization.' },
              { name: 'Milestone Tracker', desc: 'Track all 20 milestones across 5 phases.' },
              { name: 'Weekly Log', desc: 'Daily tracking of techniques and time.' },
              { name: 'Error Log', desc: 'Root cause analysis and prevention strategies.' },
              { name: 'AI Collab Log', desc: 'Track AI usage, prompts, and time saved.' },
              { name: 'Annual Reviews', desc: 'Year-by-year progress and achievements.' },
              { name: 'Phase Reflections', desc: 'Deep qualitative insights by phase.' },
              { name: 'Skills Inventory', desc: 'Track skill development (1-5 scale).' }
            ].map((sheet, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">{sheet.name}</div>
                <p className="text-[10px] opacity-60">{sheet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sheet 1: Dashboard */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">1</div>
            <h3 className="text-2xl font-bold text-zinc-900">Sheet 1: The Dashboard</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">Command Center</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Core Metrics Table</h4>
            <div className="border border-zinc-100 rounded-2xl overflow-hidden text-[10px]">
              <table className="w-full text-left">
                <thead className="bg-zinc-50 border-b border-zinc-100">
                  <tr>
                    <th className="p-3 font-mono uppercase text-zinc-400">Metric</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Target</th>
                    <th className="p-3 font-mono uppercase text-zinc-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  <tr><td className="p-3 font-bold">Human Cognitive %</td><td className="p-3">80% (2026)</td><td className="p-3 text-emerald-600 font-bold">On Track</td></tr>
                  <tr><td className="p-3 font-bold">AI Assistance %</td><td className="p-3">20% (2026)</td><td className="p-3 text-emerald-600 font-bold">On Track</td></tr>
                  <tr><td className="p-3 font-bold">Milestones Completed</td><td className="p-3">20 Total</td><td className="p-3 text-zinc-400">0/20</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Progress Visualization</h4>
            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono uppercase text-zinc-400"><span>Phase 1 Progress</span> <span>40%</span></div>
                <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-900 w-[40%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono uppercase text-zinc-400"><span>Phase 2 Progress</span> <span>0%</span></div>
                <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-900 w-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sheet 3: Weekly Log */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">3</div>
            <h3 className="text-2xl font-bold text-zinc-900">Sheet 3: Weekly Log</h3>
          </div>
          <span className="text-xs font-mono bg-zinc-100 px-4 py-1.5 rounded-full text-zinc-500">Daily Execution</span>
        </div>
        <div className="border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <table className="w-full text-left text-[10px]">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="p-4 font-mono uppercase text-zinc-400">Date</th>
                <th className="p-4 font-mono uppercase text-zinc-400">Technique</th>
                <th className="p-4 font-mono uppercase text-zinc-400">Target</th>
                <th className="p-4 font-mono uppercase text-zinc-400">Actual</th>
                <th className="p-4 font-mono uppercase text-zinc-400">Diff</th>
                <th className="p-4 font-mono uppercase text-zinc-400">Error Branch?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr><td className="p-4">2026-03-25</td><td className="p-4 font-bold">3P</td><td className="p-4">10m</td><td className="p-4">12m</td><td className="p-4 text-red-500">+2m</td><td className="p-4">No</td></tr>
              <tr><td className="p-4">2026-03-25</td><td className="p-4 font-bold">Application</td><td className="p-4">50m</td><td className="p-4">65m</td><td className="p-4 text-red-500">+15m</td><td className="p-4 font-bold text-amber-600">Yes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sheet 4: Error Log */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center font-serif italic text-lg">4</div>
            <h3 className="text-2xl font-bold text-zinc-900">Sheet 4: Error Log</h3>
          </div>
          <span className="text-xs font-mono bg-rose-100 px-4 py-1.5 rounded-full text-rose-600 font-bold">Diagnostic Intelligence</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Required Columns</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Error ID', desc: 'Unique identifier (ERR-001)' },
                { name: 'Root Cause', desc: 'Why did it happen? (e.g., Rushed)' },
                { name: 'Branch Duration', desc: 'Time lost to remediation' },
                { name: 'Prevention', desc: 'Specific strategy for next time' }
              ].map((col, i) => (
                <div key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <div className="text-[10px] font-bold text-zinc-900">{col.name}</div>
                  <p className="text-[9px] text-zinc-500 mt-1">{col.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-rose-50/50 rounded-[2.5rem] border border-rose-100 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-rose-600">The Edge Case Checklist</h4>
            <div className="space-y-2 text-[9px] text-rose-800">
              <div className="flex justify-between border-b border-rose-100 pb-1"><span>choose = 0</span> <span className="font-mono">C(n,0) = 1</span></div>
              <div className="flex justify-between border-b border-rose-100 pb-1"><span>choose = n</span> <span className="font-mono">C(n,n) = 1</span></div>
              <div className="flex justify-between border-b border-rose-100 pb-1"><span>choose {'>'} n</span> <span className="font-mono">C(n,k) = 0</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Settings className="text-zinc-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Setup & Implementation Guide</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-bold">1</div>
            <h4 className="text-sm font-bold text-zinc-900">Essential Formulas</h4>
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 font-mono text-[9px] text-zinc-600 space-y-2">
              <p>Progress: <br />=COUNTIF(Milestones!E:E, "✅") / 20</p>
              <p>Error Time: <br />=SUMIF(Log!H:H, "Yes", Log!F:F)</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-bold">2</div>
            <h4 className="text-sm font-bold text-zinc-900">Conditional Formatting</h4>
            <ul className="text-[10px] space-y-2 text-zinc-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> ✅ Completed → Green BG</li>
              <li className="flex items-center gap-2"><Activity size={12} className="text-amber-500" /> 🔄 In Progress → Yellow BG</li>
              <li className="flex items-center gap-2"><AlertCircle size={12} className="text-red-500" /> Actual {'>'} Target → Red Text</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-bold">3</div>
            <h4 className="text-sm font-bold text-zinc-900">Recommended Charts</h4>
            <ul className="text-[10px] space-y-2 text-zinc-500">
              <li className="flex items-center gap-2"><BarChart3 size={12} className="text-indigo-500" /> Human % vs AI % Over Time</li>
              <li className="flex items-center gap-2"><BarChart3 size={12} className="text-indigo-500" /> Milestone Completion by Phase</li>
              <li className="flex items-center gap-2"><BarChart3 size={12} className="text-indigo-500" /> Error Frequency by Technique</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Start Card */}
      <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-8">
        <div className="flex items-center gap-3">
          <Zap className="text-emerald-400" size={18} />
          <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Quick Start: First Actions</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-emerald-400 uppercase">Priority 01</div>
            <div className="text-sm font-bold">Set target dates for Phase 1 milestones in the Milestone Tracker.</div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-emerald-400 uppercase">Priority 02</div>
            <div className="text-sm font-bold">Start logging today's study session in the Weekly Log.</div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-emerald-400 uppercase">Priority 03</div>
            <div className="text-sm font-bold">Self-assess your current skill levels in the Skills Inventory.</div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <footer className="pt-8 border-t border-zinc-100 text-center">
        <p className="text-xs italic text-zinc-400 leading-relaxed">
          "Calibration is the key to direction. By tracking your evolution digitally, you create the data required <br />to optimize your path toward the 5-10% human role."
        </p>
      </footer>
    </div>
  );
};

import React from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Clock, 
  Sparkles, 
  CheckSquare, 
  ArrowRight,
  BookOpen,
  MessageSquare,
  History,
  Award,
  ShieldCheck,
  Layout,
  FileText,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

import { TechniqueTemplate } from '../types';

const GradeCard = ({ grade, title, goal, color, template, onApply, children }: { 
  grade: string, 
  title: string, 
  goal: string, 
  color: string, 
  template?: TechniqueTemplate,
  onApply?: (template: TechniqueTemplate) => void,
  children: React.ReactNode 
}) => (
  <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden mb-12 group/card">
    <div className={cn("px-8 py-6 flex items-center justify-between border-b border-zinc-100", color)}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-display font-black text-2xl shadow-inner">
          {grade}
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-white tracking-tight">{title}</h2>
          <p className="text-white/80 text-xs font-mono uppercase tracking-widest font-bold">Goal: {goal}</p>
        </div>
      </div>
      {template && onApply && (
        <button
          onClick={() => onApply(template)}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-2xl text-[10px] font-mono font-bold uppercase tracking-widest transition-all backdrop-blur-md border border-white/20 flex items-center gap-2 group"
        >
          <Layout size={14} className="group-hover:rotate-12 transition-transform" />
          Apply Template
        </button>
      )}
    </div>
    <div className="p-8">
      {children}
    </div>
  </div>
);

const SectionHeader = ({ icon: Icon, title, color }: { icon: any, title: string, color: string }) => (
  <div className="flex items-center gap-3 mb-6 mt-8 first:mt-0">
    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", color)}>
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-display font-bold text-zinc-900 tracking-tight">{title}</h3>
  </div>
);

const StepTable = ({ steps }: { steps: any[] }) => (
  <div className="overflow-x-auto -mx-8 px-8 mb-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-zinc-100">
          <th className="py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Step</th>
          <th className="py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Action</th>
          <th className="py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Time</th>
          <th className="py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Brain Mechanism</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-50">
        {steps.map((step, i) => (
          <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
            <td className="py-4 pr-4">
              <span className="w-6 h-6 rounded-lg bg-zinc-100 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                {step.id}
              </span>
            </td>
            <td className="py-4 pr-4 text-sm font-medium text-zinc-900">{step.action}</td>
            <td className="py-4 pr-4 text-xs font-mono text-zinc-500">{step.time}</td>
            <td className="py-4 text-xs text-zinc-500 italic">{step.mechanism}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100">
    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Checklist</h4>
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="mt-0.5 w-5 h-5 rounded-md border-2 border-zinc-200 flex items-center justify-center text-emerald-500">
            <CheckSquare size={14} />
          </div>
          <span className="text-sm text-zinc-600 leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const NeuralOutcome = ({ metrics }: { metrics: any[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
    {metrics.map((m, i) => (
      <div key={i} className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-1">{m.label}</p>
        <p className="text-sm font-display font-bold text-zinc-900">{m.value}</p>
      </div>
    ))}
  </div>
);

export const MasterLearningFramework = ({ onApplyTemplate }: { onApplyTemplate?: (template: TechniqueTemplate) => void }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full mb-6">
          <Sparkles size={16} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Master Learning Framework</span>
        </div>
        <h1 className="text-5xl font-display font-black text-zinc-900 tracking-tight mb-4">
          WHAT TO DO AT EACH LEVEL
        </h1>
        <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          A neuro-optimized guide for mastering any subject, moving from foundational encoding to identity-level transformation.
          <br />
          <span className="text-indigo-600 font-bold mt-2 block">Select a level below to apply its architecture to your active chunk.</span>
        </p>
      </header>

      {/* A+ LEVEL */}
      <GradeCard 
        grade="A+" 
        title="Foundation" 
        goal="Create the Data Structure" 
        color="bg-gradient-to-br from-blue-500 to-indigo-600"
        template="MLF_A_Plus"
        onApply={onApplyTemplate}
      >
        <p className="text-zinc-600 mb-8 leading-relaxed">
          At A+ Level, your brain is building new neural pathways in the hippocampus and prefrontal cortex. The goal is encoding — getting the information into your brain in an organized, retrievable format.
        </p>

        <SectionHeader icon={Zap} title="What to Do" color="bg-blue-50 text-blue-600" />
        <StepTable steps={[
          { id: 1, action: "Read or listen to the material once for big picture", time: "10 min", mechanism: "Hippocampus begins encoding" },
          { id: 2, action: "Create One-Page Summary (Problem, Conflict, Gap, Solution, Takeaway)", time: "15 min", mechanism: "Prefrontal cortex organizes; creates 5 chunks" },
          { id: 3, action: "Draw Visual Diagram (flowchart) showing relationships", time: "10 min", mechanism: "Dual coding strengthens pathways" },
          { id: 4, action: "Take Integrated Quiz (MC + Short Answer + T/F)", time: "15 min", mechanism: "Active recall forces retrieval; LTP begins" },
          { id: 5, action: "Answer Reflection Prompts (Surface + Strategic levels only)", time: "10 min", mechanism: "Elaboration creates multiple retrieval paths" }
        ]} />

        <div className="grid md:grid-cols-2 gap-8">
          <Checklist items={[
            "Completed One-Page Summary",
            "Completed Visual Diagram",
            "Completed Integrated Quiz (scored 80%+)",
            "Completed Surface + Strategic Reflection",
            "Total time: 60 minutes"
          ]} />
          <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 mb-4">When to Move to S Level</h4>
            <ul className="space-y-2">
              {["Recall all 5 parts without looking", "Score 80%+ on Integrated Quiz", "Understand big picture in one sentence"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-indigo-900 font-medium">
                  <ShieldCheck size={14} className="text-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <NeuralOutcome metrics={[
          { label: "New Synapses", value: "500–1,000" },
          { label: "Retrieval Speed", value: "3–5 seconds" },
          { label: "Durability", value: "1–7 days" },
          { label: "Network", value: "Linear" }
        ]} />
      </GradeCard>

      {/* S LEVEL */}
      <GradeCard 
        grade="S" 
        title="Narrative & Emotion" 
        goal="Add Emotional Indexing" 
        color="bg-gradient-to-br from-emerald-500 to-teal-600"
        template="MLF_S"
        onApply={onApplyTemplate}
      >
        <p className="text-zinc-600 mb-8 leading-relaxed">
          At S Level, your brain is attaching emotional tags to the neural pathways created in A+. The amygdala activates, releasing dopamine and norepinephrine, which strengthen synaptic connections by 2–3x.
        </p>

        <SectionHeader icon={Activity} title="What to Do" color="bg-emerald-50 text-emerald-600" />
        <StepTable steps={[
          { id: 1, action: "Transform Summary into a story with character and emotional arc", time: "20 min", mechanism: "Narrative activates multiple brain regions" },
          { id: 2, action: "Add emotional states to your Visual Diagram", time: "10 min", mechanism: "Emotional tagging strengthens each node" },
          { id: 3, action: "Add 'My Connection' column to your Study Guide", time: "15 min", mechanism: "Personal relevance activates default mode network" },
          { id: 4, action: "Convert quiz into real-life scenarios with emotional stakes", time: "15 min", mechanism: "Scenario-based learning engages amygdala" },
          { id: 5, action: "Add Identity Reflection: 'Who am I becoming?'", time: "10 min", mechanism: "Identity integration begins" }
        ]} />

        <div className="grid md:grid-cols-2 gap-8">
          <Checklist items={[
            "One-Page Summary transformed into story",
            "Emotional states added to diagram",
            "'My Connection' column added to guide",
            "Quiz converted to real-life scenarios",
            "Identity Reflection completed",
            "Total additional time: 70 minutes"
          ]} />
          <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-4">When to Move to S+ Level</h4>
            <ul className="space-y-2">
              {["Tell the story of the concept to someone else", "Feel an emotional connection to material", "Can answer 'Who am I becoming?'"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-emerald-900 font-medium">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <NeuralOutcome metrics={[
          { label: "New Synapses", value: "2,000–5,000" },
          { label: "Retrieval Speed", value: "1–2 seconds" },
          { label: "Durability", value: "7–30 days" },
          { label: "Network", value: "Narrative Chains" }
        ]} />
      </GradeCard>

      {/* S+ LEVEL */}
      <GradeCard 
        grade="S+" 
        title="Social Learning & AI Personas" 
        goal="Activate Mirror Neurons Through Teaching" 
        color="bg-gradient-to-br from-amber-500 to-orange-600"
        template="MLF_S_Plus"
        onApply={onApplyTemplate}
      >
        <p className="text-zinc-600 mb-8 leading-relaxed">
          At S+ Level, your brain is activating mirror neurons by teaching AI personas. Teaching forces you to reorganize knowledge, identify gaps, and strengthen pathways through dual encoding.
        </p>

        <SectionHeader icon={Users} title="What to Do" color="bg-amber-50 text-amber-600" />
        <StepTable steps={[
          { id: 1, action: "Create 3 AI Personas with distinct cognitive biases", time: "15 min", mechanism: "Prefrontal cortex engages theory of mind" },
          { id: 2, action: "Teach Method 1 (Summary) to each persona", time: "15 min", mechanism: "Mirror neurons activate; teaching strengthens learning" },
          { id: 3, action: "Teach Method 2 (Diagram) to each persona", time: "15 min", mechanism: "Dual pathways form" },
          { id: 4, action: "Teach Method 3 (Guide) to each persona", time: "15 min", mechanism: "Error detection strengthens accuracy" },
          { id: 5, action: "Teach Method 4 (Quiz) to each persona", time: "15 min", mechanism: "Retrieval practice reinforced" },
          { id: 6, action: "Teach Method 5 (Reflection) to each persona", time: "15 min", mechanism: "Metacognition deepens" },
          { id: 7, action: "Role-Play Reversal — argue from persona's perspective", time: "15 min", mechanism: "Perspective-taking expands neural flexibility" }
        ]} />

        <div className="grid md:grid-cols-2 gap-8">
          <Checklist items={[
            "Created 3 AI personas (Intuitionist, Overwhelmed, Skeptic)",
            "Taught all 5 methods to all 3 personas",
            "Completed Role-Play Reversal",
            "Completed Teaching Reflection",
            "Total time: 115 minutes"
          ]} />
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-4">When to Move to S++ Level</h4>
            <ul className="space-y-2">
              {["Teach all 5 methods without hesitation", "Argue from opposing perspectives", "Identify gaps in own understanding"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-amber-900 font-medium">
                  <ShieldCheck size={14} className="text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <NeuralOutcome metrics={[
          { label: "New Synapses", value: "10,000–20,000" },
          { label: "Retrieval Speed", value: "0.5–1 second" },
          { label: "Durability", value: "30–90 days" },
          { label: "Network", value: "Dual Pathways" }
        ]} />
      </GradeCard>

      {/* S++ LEVEL */}
      <GradeCard 
        grade="S++" 
        title="Spaced Repetition & Timing" 
        goal="Optimize for Time Through Myelination" 
        color="bg-gradient-to-br from-rose-500 to-pink-600"
        template="MLF_S_Double_Plus"
        onApply={onApplyTemplate}
      >
        <p className="text-zinc-600 mb-8 leading-relaxed">
          At S++ Level, your brain is myelinating axons and transferring information from hippocampus to neocortex for permanent storage. Spaced reviews strengthen LTP by 50–70% per review.
        </p>

        <SectionHeader icon={Clock} title="The S++ Retention Architecture" color="bg-rose-50 text-rose-600" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { day: 'D5', title: 'Encoding Check', desc: 'Verify initial memory traces' },
            { day: 'D15', title: 'Consolidation', desc: 'Transfer to long-term storage' },
            { day: 'D30', title: 'Myelination', desc: 'Strengthen neural pathways' },
            { day: 'D60', title: 'LTM Phase 1', desc: 'Permanent neocortical indexing' },
            { day: 'D90', title: 'LTM Phase 2', desc: 'Identity-level integration' },
            { day: 'LTM', title: 'Permanent', desc: 'Infinite retrieval durability' },
          ].map((phase, i) => (
            <div key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
              <div className="text-xs font-mono font-bold text-rose-500 mb-1">{phase.day}</div>
              <div className="text-sm font-bold text-zinc-900 mb-1">{phase.title}</div>
              <div className="text-[10px] text-zinc-500 leading-tight">{phase.desc}</div>
            </div>
          ))}
        </div>

        <StepTable steps={[
          { id: 1, action: "Create Spacing Schedule for all 5 methods", time: "10 min", mechanism: "Prefrontal cortex plans retrieval timing" },
          { id: 2, action: "Day 5 Review: Method 1 (Summary)", time: "10 min", mechanism: "First spaced recall; LTP strengthens" },
          { id: 3, action: "Day 15 Review: Method 2 (Diagram)", time: "10 min", mechanism: "Second spaced recall" },
          { id: 4, action: "Day 30 Review: Method 3 (Guide)", time: "15 min", mechanism: "Hippocampal-neocortical transfer begins" },
          { id: 5, action: "Day 60 Review: Method 4 (Quiz)", time: "20 min", mechanism: "Myelination accelerates" },
          { id: 6, action: "Day 90 Review: Method 5 (Reflection)", time: "20 min", mechanism: "Automaticity developing" },
          { id: 7, action: "LTM: Permanent Storage Check", time: "30 min", mechanism: "Permanent storage achieved" }
        ]} />

        <div className="grid md:grid-cols-2 gap-8">
          <Checklist items={[
            "Created spacing schedule for 90 days",
            "Completed all interval reviews (D3 to D90)",
            "Created variable retrieval prompts",
            "Tracked forgetting curve",
            "Total time: 105 minutes (distributed)"
          ]} />
          <div className="bg-rose-50 rounded-3xl p-6 border border-rose-100">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-400 mb-4">When to Move to S+++ Level</h4>
            <ul className="space-y-2">
              {["Recall all 5 methods without conscious effort", "Completed all spaced reviews", "Retrieval feels automatic and effortless"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-rose-900 font-medium">
                  <ShieldCheck size={14} className="text-rose-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <NeuralOutcome metrics={[
          { label: "New Synapses", value: "50,000–100,000" },
          { label: "Retrieval Speed", value: "0.1–0.3 seconds" },
          { label: "Durability", value: "1–5 years" },
          { label: "Network", value: "Myelinated" }
        ]} />
      </GradeCard>

      {/* S+++ LEVEL */}
      <GradeCard 
        grade="S+++" 
        title="Transformation & Identity" 
        goal="Integrate Knowledge into Identity" 
        color="bg-gradient-to-br from-zinc-800 to-black"
        template="MLF_S_Triple_Plus"
        onApply={onApplyTemplate}
      >
        <p className="text-zinc-600 mb-8 leading-relaxed">
          At S+++ Level, your brain is integrating knowledge into self-concept through the Default Mode Network. Information is no longer something you know — it becomes something you are.
        </p>

        <SectionHeader icon={Award} title="The 8 Phases" color="bg-zinc-100 text-zinc-900" />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Phase 1: Invitation", desc: "Answer: 'What do I want to become?'", mech: "Identity processing" },
            { title: "Phase 2: Immersion", desc: "Live in scenarios using 5 methods for 4 weeks", mech: "Experiential learning" },
            { title: "Phase 3: Discovery", desc: "Build your own tools using the 5 methods", mech: "Creation pathways" },
            { title: "Phase 4: Collaboration", desc: "Work with AI collaborators on complex problems", mech: "Perspective integration" },
            { title: "Phase 5: Creation", desc: "Create something new (course, video, guide)", mech: "Novel pathways" },
            { title: "Phase 6: Integration", desc: "Complete layered reflection (surface to identity)", mech: "Solidification" },
            { title: "Phase 7: Spacing Ecosystem", desc: "Maintain ongoing spaced reviews", mech: "Permanent retention" },
            { title: "Phase 8: Legacy", desc: "Teach others and build systems that scale", mech: "Reinforcement" }
          ].map((phase, i) => (
            <div key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h5 className="text-sm font-display font-bold text-zinc-900 mb-1">{phase.title}</h5>
              <p className="text-xs text-zinc-600 mb-2">{phase.desc}</p>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">{phase.mech}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Checklist items={[
            "Phase 1: Invitation completed",
            "Phase 2: Immersion (4 weeks)",
            "Phase 3: Discovery (built tools)",
            "Phase 5: Created something new",
            "Phase 8: Legacy system built",
            "Total time: 8–10 hours + ongoing"
          ]} />
          <div className="bg-zinc-900 rounded-3xl p-6 text-white">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Final Identity Statement</h4>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm text-zinc-300">
              "I am someone who..."
            </div>
            <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
              At this level, retrieval is instantaneous (0.05s) and durability is for a lifetime.
            </p>
          </div>
        </div>

        <NeuralOutcome metrics={[
          { label: "New Synapses", value: "200k–500k" },
          { label: "Retrieval Speed", value: "Instant" },
          { label: "Durability", value: "Lifetime" },
          { label: "Network", value: "Identity-Level" }
        ]} />
      </GradeCard>

      {/* QUICK REFERENCE SUMMARY */}
      <div className="bg-indigo-900 rounded-[3rem] p-12 text-white shadow-2xl shadow-indigo-200">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <Layout size={24} className="text-indigo-300" />
          </div>
          <h2 className="text-3xl font-display font-black tracking-tight">Quick Reference</h2>
        </div>
        <div className="grid gap-4">
          {[
            { grade: "A+", summary: "Organize the information into 5 methods." },
            { grade: "S", summary: "Add story and emotion to make it memorable." },
            { grade: "S+", summary: "Teach it to AI personas to find gaps." },
            { grade: "S++", summary: "Space it over time to make it permanent." },
            { grade: "S+++", summary: "Integrate it into who you are and share it." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="w-12 text-2xl font-display font-black text-indigo-300">{item.grade}</span>
              <p className="text-sm font-medium text-indigo-50">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

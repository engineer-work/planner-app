import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Brain,
  Target,
  Zap,
  BookOpen,
  ArrowRight,
  Info,
  Check,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { format, parseISO, isBefore, isToday, addDays } from 'date-fns';
import { SpacedRepetitionItem } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SpacedRepetitionViewProps {
  queue: SpacedRepetitionItem[];
  onToggle: (id: string) => void;
}

export function SpacedRepetitionView({ queue, onToggle }: SpacedRepetitionViewProps) {
  const sortedQueue = [...queue].sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate));
  
  const pendingItems = sortedQueue.filter(item => item.status !== 'Completed');
  const completedItems = sortedQueue.filter(item => item.status === 'Completed');
  
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const overdueCount = pendingItems.filter(item => isBefore(parseISO(item.scheduledDate), parseISO(today)) && !isToday(parseISO(item.scheduledDate))).length;
  const todayCount = pendingItems.filter(item => isToday(parseISO(item.scheduledDate))).length;
  const upcomingCount = pendingItems.filter(item => !isToday(parseISO(item.scheduledDate)) && !isBefore(parseISO(item.scheduledDate), parseISO(today))).length;

  const retentionRate = queue.length > 0 ? Math.round((completedItems.length / queue.length) * 100) : 0;

  const getLevelInstruction = (level: string) => {
    switch(level) {
      case 'D5': return "Focus on **Blind Recall**. Close all notes and reconstruct the core concept from scratch.";
      case 'D15': return "Focus on **Interleaving**. Compare this concept with a related one to find subtle differences.";
      case 'D30': return "Focus on **Application**. How would you use this to solve a complex, real-world problem today?";
      case 'LTM': return "Focus on **Teaching**. Explain this to an imaginary student or AI persona in under 2 minutes.";
      default: return "Perform active retrieval and identify any remaining knowledge gaps.";
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto p-4 md:p-8">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Brain className="w-8 h-8 text-indigo-600" />
            Spaced Repetition Tracker
          </h2>
          <p className="text-muted-foreground">
            Manage your S++ long-term retention schedule. Spacing reviews at 5, 15, and 30 days ensures permanent neural encoding.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-indigo-600">{retentionRate}%</div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Retention Health</div>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-amber-600">{overdueCount}</div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Overdue Reviews</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              Upcoming Reviews
            </h3>
            <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
              {pendingItems.length} Pending
            </span>
          </div>

          {pendingItems.length === 0 ? (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-slate-300" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-slate-600">No pending reviews</p>
                <p className="text-sm text-slate-400">Apply S++ architecture to a module to start tracking.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingItems.map((item) => {
                const isOverdue = isBefore(parseISO(item.scheduledDate), parseISO(today)) && !isToday(parseISO(item.scheduledDate));
                const isDueToday = isToday(parseISO(item.scheduledDate));
                
                return (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "group relative bg-white p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                      isOverdue ? "border-red-200 bg-red-50/30" : "border-slate-200",
                      isDueToday ? "border-indigo-200 ring-1 ring-indigo-100" : ""
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => onToggle(item.id)}
                          className={cn(
                            "w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-200",
                            isOverdue ? "border-red-300 hover:bg-red-100" : "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50"
                          )}
                        >
                          <Check className="w-5 h-5 opacity-0 group-hover:opacity-100 text-indigo-600 transition-opacity" />
                        </button>
                        
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{item.topicName}</span>
                            <span className={cn(
                              "text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider",
                              item.level === 'LTM' ? "bg-purple-100 text-purple-700" : "bg-indigo-100 text-indigo-700"
                            )}>
                              {item.level}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {format(parseISO(item.scheduledDate), 'MMM d, yyyy')}
                            </span>
                            {isOverdue && (
                              <span className="text-red-600 font-semibold flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Overdue
                              </span>
                            )}
                            {isDueToday && (
                              <span className="text-indigo-600 font-semibold flex items-center gap-1">
                                <Zap className="w-3 h-3 fill-indigo-600" />
                                Due Today
                              </span>
                            )}
                          </div>
                          <div className="mt-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                            <p className="text-[10px] text-slate-600 leading-relaxed">
                              <span className="font-bold text-indigo-600 uppercase tracking-tighter mr-1">Instruction:</span>
                              {getLevelInstruction(item.level)}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:block">
                        <button 
                          onClick={() => onToggle(item.id)}
                          className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-indigo-600 transition-colors"
                        >
                          Complete Review
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {completedItems.length > 0 && (
            <div className="pt-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Completed Recently
              </h3>
              <div className="space-y-2 opacity-60">
                {completedItems.slice(0, 5).map((item) => (
                  <div key={item.id} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-slate-700 line-through">{item.topicName}</span>
                      <span className="text-[10px] font-bold text-slate-400">{item.level}</span>
                    </div>
                    <span className="text-xs text-slate-400">
                      Done {item.completedDate ? format(parseISO(item.completedDate), 'MMM d') : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: How to do properly */}
        <div className="space-y-6">
          <div className="bg-indigo-900 text-white p-6 rounded-3xl shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-300" />
                How to do properly?
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Spaced repetition is only effective if you use **Active Retrieval**. Do not just re-read.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-300">1</div>
                <div className="space-y-1">
                  <p className="font-bold text-sm">Blind Recall</p>
                  <p className="text-xs text-indigo-200">Close all notes. Try to write down the core concept or draw the diagram from memory first.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-300">2</div>
                <div className="space-y-1">
                  <p className="font-bold text-sm">Self-Testing</p>
                  <p className="text-xs text-indigo-200">Use the quizzes you created during the A+ phase. If you miss an answer, tag it for review.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-300">3</div>
                <div className="space-y-1">
                  <p className="font-bold text-sm">Gap Analysis</p>
                  <p className="text-xs text-indigo-200">Compare your recall to your original notes. Identify exactly what was forgotten and why.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-800">
              <div className="flex items-center gap-3 text-xs font-bold text-indigo-300 uppercase tracking-widest">
                <Target className="w-4 h-4" />
                Goal: Permanent LTM
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Brain Mechanism
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p className="text-xs font-bold text-slate-700">Myelination</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">Each spaced review triggers oligodendrocytes to wrap myelin around the neural circuit, increasing signal speed.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p className="text-xs font-bold text-slate-700">LTP Consolidation</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">Long-Term Potentiation (LTP) is strengthened when the brain is forced to retrieve information just as it's about to be forgotten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

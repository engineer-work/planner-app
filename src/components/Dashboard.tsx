import React, { useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { StudyCycle, PlannerData } from '../types';
import { format, parseISO, isAfter, isBefore, startOfDay, endOfDay } from 'date-fns';
import { ArrowLeft, TrendingUp, Clock, Target, Calendar, Zap, Activity, CheckCircle2, Layers, BookOpen, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface DashboardProps {
  plannerData: PlannerData;
  onBack: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ plannerData, onBack }) => {
  const [selectedCycleId, setSelectedCycleId] = React.useState<string | 'all'>('all');

  const stats = useMemo(() => {
    const cyclesToAnalyze = selectedCycleId === 'all' 
      ? plannerData.cycles 
      : plannerData.cycles.filter(c => c.id === selectedCycleId);

    const allChunks = cyclesToAnalyze.flatMap(c => c.days.flatMap(d => d.chunks));
    const allBlocks = allChunks.flatMap(c => c.blocks);
    
    const totalPlanned = allChunks.reduce((acc, c) => acc + c.plannedMin, 0);
    const totalActual = allChunks.reduce((acc, c) => acc + c.actualMin, 0);
    const totalGaps = allBlocks.reduce((acc, b) => acc + b.gapMin, 0);
    const completedBlocks = allBlocks.filter(b => b.done).length;
    const totalBlocks = allBlocks.length;
    
    const chunksWithRecall = allChunks.filter(c => c.recallScore !== undefined);
    const avgRecall = chunksWithRecall.length > 0 
      ? chunksWithRecall.reduce((acc, c) => acc + (c.recallScore || 0), 0) / chunksWithRecall.length 
      : 0;

    // Daily progress (aggregated by date)
    const dailyMap = new Map<string, { planned: number, actual: number, recall: number, recallCount: number }>();
    cyclesToAnalyze.forEach(cycle => {
      cycle.days.forEach(day => {
        const dateKey = day.date;
        const current = dailyMap.get(dateKey) || { planned: 0, actual: 0, recall: 0, recallCount: 0 };
        
        const dayRecallChunks = day.chunks.filter(c => c.recallScore !== undefined);
        const dayRecallSum = dayRecallChunks.reduce((acc, c) => acc + (c.recallScore || 0), 0);
        
        dailyMap.set(dateKey, {
          planned: current.planned + day.chunks.reduce((acc, c) => acc + c.plannedMin, 0),
          actual: current.actual + day.chunks.reduce((acc, c) => acc + c.actualMin, 0),
          recall: current.recall + dayRecallSum,
          recallCount: current.recallCount + dayRecallChunks.length
        });
      });
    });

    const dailyData = Array.from(dailyMap.entries())
      .map(([date, values]) => ({
        date,
        name: format(parseISO(date), 'MMM dd'),
        planned: values.planned,
        actual: values.actual,
        recall: values.recallCount > 0 ? values.recall / values.recallCount : 0
      }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-14); // Show last 14 days of activity

    // Technique distribution
    const techniqueMap: Record<string, number> = {};
    allBlocks.forEach(b => {
      techniqueMap[b.technique] = (techniqueMap[b.technique] || 0) + b.actualMin;
    });
    const techniqueData = Object.entries(techniqueMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    // Cycle performance comparison
    const cycleComparison = plannerData.cycles.map(c => {
      const chunks = c.days.flatMap(d => d.chunks);
      const actual = chunks.reduce((acc, ch) => acc + ch.actualMin, 0);
      const planned = chunks.reduce((acc, ch) => acc + ch.plannedMin, 0);
      return {
        name: c.topic,
        actual,
        planned,
        efficiency: planned > 0 ? (actual / planned) * 100 : 0
      };
    });

    // Projections
    const totalDaysActive = dailyMap.size || 1;
    const avgDailyActual = totalActual / totalDaysActive;
    const projectedMonthly = avgDailyActual * 30;
    const projectedYearly = avgDailyActual * 365;

    // Grading Logic
    const completionScore = (completedBlocks / (totalBlocks || 1)) * 100;
    const recallScore = avgRecall;
    const intensityScore = totalPlanned > 0 ? (totalActual / totalPlanned) * 100 : 0;
    
    let grade = 'D';
    let gradeColor = 'text-rose-500';
    let gradeDesc = 'Needs more consistency and focus.';

    if (completionScore > 95 && recallScore > 4.5 && intensityScore > 90) {
      grade = 'A+';
      gradeColor = 'text-emerald-500';
      gradeDesc = 'Exceptional mastery and discipline.';
    } else if (completionScore > 85 && recallScore > 4.0) {
      grade = 'A';
      gradeColor = 'text-emerald-400';
      gradeDesc = 'Strong performance and retention.';
    } else if (completionScore > 70 && recallScore > 3.0) {
      grade = 'B';
      gradeColor = 'text-indigo-400';
      gradeDesc = 'Good progress, keep pushing.';
    } else if (completionScore > 50 && recallScore > 2.0) {
      grade = 'C';
      gradeColor = 'text-amber-400';
      gradeDesc = 'Average performance, focus on recall.';
    }

    return {
      totalPlanned,
      totalActual,
      totalGaps,
      avgRecall,
      completionRate: totalBlocks > 0 ? (completedBlocks / totalBlocks) * 100 : 0,
      dailyData,
      techniqueData,
      cycleComparison,
      projectedMonthly,
      projectedYearly,
      avgDailyActual,
      totalCycles: plannerData.cycles.length,
      completedCycles: plannerData.cycles.filter(c => c.completed).length,
      grade,
      gradeColor,
      gradeDesc
    };
  }, [plannerData, selectedCycleId]);

  const COLORS = ['#18181b', '#10b981', '#6366f1', '#f59e0b', '#f43f5e', '#8b5cf6'];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="p-4 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="space-y-1">
            <h2 className="text-4xl font-display font-bold tracking-tight text-zinc-900">Performance Intelligence</h2>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Advanced analytics & learning velocity</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-2xl">
            <Layers size={14} className="text-zinc-500" />
            <select 
              value={selectedCycleId}
              onChange={(e) => setSelectedCycleId(e.target.value)}
              className="bg-transparent text-[10px] font-mono font-bold outline-none cursor-pointer uppercase tracking-wider"
            >
              <option value="all">Global Overview (All Cycles)</option>
              {plannerData.cycles.map(c => (
                <option key={c.id} value={c.id}>{c.topic} ({format(parseISO(c.startDate), 'MMM dd')})</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
            <Activity size={14} className="text-emerald-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold">Live Data Stream</span>
          </div>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-zinc-900 text-white rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16" />
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-4">Performance Grade</span>
          <div className={cn("text-7xl font-display font-bold tracking-tighter mb-2", stats.gradeColor)}>{stats.grade}</div>
          <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest leading-relaxed">{stats.gradeDesc}</p>
        </motion.div>

        {[
          { label: 'Total Learning', value: `${Math.round(stats.totalActual / 60)}h`, sub: `${stats.totalActual}m logged`, icon: Clock, color: 'text-zinc-900' },
          { label: 'Avg Efficiency', value: `${Math.round(stats.completionRate)}%`, sub: 'Task completion', icon: Target, color: 'text-emerald-500' },
          { label: 'Avg Recall', value: stats.avgRecall.toFixed(1), sub: 'Memory Score (0-5)', icon: Zap, color: 'text-indigo-500' },
          { label: 'Active Cycles', value: stats.totalCycles, sub: `${stats.completedCycles} completed`, icon: BookOpen, color: 'text-blue-500' },
          { label: 'Daily Intensity', value: `${Math.round(stats.avgDailyActual)}m`, sub: 'Average per day', icon: Activity, color: 'text-amber-500' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50 group hover:border-zinc-300 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{stat.label}</span>
              <div className={cn("p-2 rounded-lg bg-zinc-50", stat.color)}>
                <stat.icon size={16} />
              </div>
            </div>
            <div className={cn("text-4xl font-mono font-bold tracking-tight", stat.color)}>{stat.value}</div>
            <div className="text-[10px] font-mono opacity-40 mt-2 tracking-widest uppercase">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Progress Chart */}
        <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50 h-[450px]">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-3">
            <TrendingUp size={14} className="text-indigo-500" /> Learning Timeline (Last 14 Days)
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stats.dailyData}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} />
              <Tooltip 
                cursor={{ stroke: '#10b981', strokeWidth: 2 }}
                contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontFamily: 'monospace', fontSize: '10px' }}
              />
              <Area type="monotone" dataKey="actual" stroke="#10b981" fillOpacity={1} fill="url(#colorActual)" strokeWidth={3} />
              <Area type="monotone" dataKey="planned" stroke="#18181b" fill="transparent" strokeDasharray="5 5" strokeWidth={1} opacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Memory Retention Chart */}
        <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50 h-[450px]">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-3">
            <Zap size={14} className="text-indigo-500" /> Memory Retention (LTM Tracking)
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stats.dailyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} />
              <YAxis domain={[0, 5]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} />
              <Tooltip 
                contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontFamily: 'monospace', fontSize: '10px' }}
              />
              <Line type="monotone" dataKey="recall" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Profile Breakdown */}
      <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-10 flex items-center gap-3">
          <Target size={14} className="text-indigo-500" /> Performance by Study Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['OfficeWorker', 'Intensive', 'Balanced'].map((profile) => {
            const profileCycles = plannerData.cycles.filter(c => c.profile === profile);
            const chunks = profileCycles.flatMap(c => c.days.flatMap(d => d.chunks));
            const actual = chunks.reduce((acc, ch) => acc + ch.actualMin, 0);
            const planned = chunks.reduce((acc, ch) => acc + ch.plannedMin, 0);
            const count = profileCycles.length;
            
            if (count === 0) return null;

            return (
              <div key={profile} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">{profile}</span>
                  <span className="px-2 py-1 bg-zinc-900 text-white text-[8px] font-mono rounded-md">{count} Cycles</span>
                </div>
                <div className="text-2xl font-mono font-bold text-zinc-900">{Math.round(actual / 60)}H logged</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-mono uppercase opacity-40">
                    <span>Efficiency</span>
                    <span>{planned > 0 ? Math.round((actual / planned) * 100) : 0}%</span>
                  </div>
                  <div className="h-1 bg-zinc-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-zinc-900" 
                      style={{ width: `${planned > 0 ? Math.min((actual / planned) * 100, 100) : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cycle Comparison */}
      {selectedCycleId === 'all' && stats.cycleComparison.length > 1 && (
        <div className="p-10 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-10 flex items-center gap-3">
            <BarChart3 size={14} className="text-indigo-500" /> Cycle Comparison & Efficiency
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.cycleComparison} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f1f1" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontFamily: 'monospace', fill: '#a1a1aa' }} width={120} />
                <Tooltip 
                  contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontFamily: 'monospace', fontSize: '10px' }}
                />
                <Bar dataKey="actual" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Projections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-10 bg-zinc-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <h3 className="text-xs font-mono uppercase tracking-[0.3em] opacity-40 mb-10">Learning Velocity Projections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase opacity-40 tracking-widest">Projected Monthly</div>
              <div className="text-6xl font-mono font-bold text-emerald-400 tracking-tighter">{Math.round(stats.projectedMonthly / 60)}H</div>
              <div className="text-[10px] font-mono opacity-40 mt-2">Based on current {stats.avgDailyActual.toFixed(0)}m/day</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase opacity-40 tracking-widest">Projected Yearly</div>
              <div className="text-6xl font-mono font-bold text-indigo-400 tracking-tighter">{Math.round(stats.projectedYearly / 60)}H</div>
              <div className="text-[10px] font-mono opacity-40 mt-2">Total learning volume</div>
            </div>
          </div>
          <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
            <p className="text-sm font-medium opacity-60 leading-relaxed max-w-2xl">
              Your learning architecture is currently spanning <span className="text-white font-bold italic">{stats.totalCycles} cycles</span>. 
              At this velocity, you are building a knowledge base of <span className="text-emerald-400 font-bold">{Math.round(stats.projectedYearly / 60)} hours</span> annually.
            </p>
          </div>
        </div>

        <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/50 space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Recent Gaps</h3>
          <div className="space-y-6">
            {plannerData.cycles
              .filter(c => selectedCycleId === 'all' || c.id === selectedCycleId)
              .flatMap(c => c.days.flatMap(d => d.chunks).flatMap(ch => ch.blocks))
              .filter(b => b.gapMin > 0)
              .slice(0, 5)
              .map((block, i) => (
                <div key={i} className="pb-6 border-b border-zinc-50 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider bg-zinc-100 px-2 py-1 rounded-lg">{block.technique}</span>
                    <span className="text-[10px] text-rose-500 font-mono font-bold">+{block.gapMin}m</span>
                  </div>
                  <p className="text-xs italic text-zinc-500 leading-relaxed">"{block.gapReason || 'No reason provided'}"</p>
                </div>
              ))}
            {stats.totalGaps === 0 && (
              <div className="text-center py-20">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                </div>
                <p className="text-xs font-mono opacity-40 italic">Perfect execution. No gaps recorded.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

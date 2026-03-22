import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  ChevronRight, 
  Download, 
  Upload, 
  CheckCircle2, 
  Check,
  Circle, 
  Clock, 
  BarChart3, 
  Settings,
  Plus,
  Trash2,
  FileJson,
  FileSpreadsheet,
  ArrowLeft,
  Globe,
  Play,
  Square,
  RefreshCw,
  ExternalLink,
  Link,
  X,
  Layout,
  Target,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { format, parseISO, isValid, differenceInMinutes, addMinutes, startOfDay, addDays } from 'date-fns';
import { formatInTimeZone, toDate, fromZonedTime, toZonedTime } from 'date-fns-tz';
import { StudyCycle, PlannerData, StudyDay, StudyChunk, StudyBlock, DEFAULT_TECHNIQUES, StudyProfile, PROFILE_CONFIGS } from './types';
import { createInitialCycle, createInitialStore } from './initialData';
import { cn } from './lib/utils';
import { Dashboard } from './components/Dashboard';

const TIMEZONES = [
  'Asia/Kolkata',
  'UTC',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Europe/Paris',
  'Asia/Singapore'
];

export default function App() {
  const [data, setData] = useState<PlannerData | null>(null);
  const [selectedChunkId, setSelectedChunkId] = useState<string | null>(null);
  const [view, setView] = useState<'setup' | 'overview' | 'detail' | 'dashboard'>('setup');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Setup state
  const [setupProfile, setSetupProfile] = useState<StudyProfile>('OfficeWorker');
  const [setupDays, setSetupDays] = useState(5);
  const [setupSubject, setSetupSubject] = useState('Transformation');
  const [setupTopic, setSetupTopic] = useState('Electric Charge');
  const [setupUnit, setSetupUnit] = useState('');
  const [setupPart, setSetupPart] = useState('');
  const [setupLesson, setSetupLesson] = useState('');
  const [setupChapter, setSetupChapter] = useState('');
  const [setupSession, setSetupSession] = useState('');
  const [setupSourceType, setSetupSourceType] = useState<StudyCycle['sourceType']>('Book');
  const [setupStartDate, setSetupStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const activeCycle = useMemo(() => {
    if (!data || !data.activeCycleId) return null;
    return data.cycles.find(c => c.id === data.activeCycleId) || null;
  }, [data]);

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem('planner_app_v1_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migration check
        if (parsed && Array.isArray(parsed.days)) {
          // Old format, migrate to new format
          const initialCycle: StudyCycle = {
            id: crypto.randomUUID(),
            subject: parsed.subject || 'Transformation',
            topic: parsed.topic || 'Electric Charge',
            subTopic: parsed.subTopic || 'General Study',
            startDate: parsed.startDate || format(new Date(), 'yyyy-MM-dd'),
            days: parsed.days,
            profile: parsed.profile || 'OfficeWorker',
            completed: false,
            createdAt: new Date().toISOString()
          };
          const newStore: PlannerData = {
            activeCycleId: initialCycle.id,
            cycles: [initialCycle],
            timezone: parsed.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'
          };
          setData(newStore);
          setView('overview');
        } else if (parsed && Array.isArray(parsed.cycles)) {
          setData(parsed);
          if (parsed.activeCycleId) setView('overview');
        } else {
          setData(createInitialStore());
        }
      } catch (e) {
        console.error('Failed to parse saved data', e);
        setData(createInitialStore());
      }
    } else {
      setData(createInitialStore());
    }
  }, []);

  // Save data
  useEffect(() => {
    if (data) {
      localStorage.setItem('planner_app_v1_data', JSON.stringify(data));
    }
  }, [data]);

  const handleStart = () => {
    const newCycle = createInitialCycle(
      setupProfile, 
      setupDays, 
      setupSubject, 
      setupTopic, 
      parseISO(setupStartDate),
      {
        unit: setupUnit,
        part: setupPart,
        lesson: setupLesson,
        chapter: setupChapter,
        session: setupSession,
        sourceType: setupSourceType
      }
    );
    if (!data) {
      const newStore = createInitialStore();
      newStore.cycles = [newCycle];
      newStore.activeCycleId = newCycle.id;
      setData(newStore);
    } else {
      setData({
        ...data,
        cycles: [...data.cycles, newCycle],
        activeCycleId: newCycle.id
      });
    }
    setView('overview');
  };

  const shiftCycleDates = (cycleId: string, newStartDate: string) => {
    if (!data) return;
    const cycle = data.cycles.find(c => c.id === cycleId);
    if (!cycle) return;

    const start = parseISO(newStartDate);
    const newDays = cycle.days.map((day, idx) => {
      const currentDate = addDays(start, idx);
      const dateStr = format(currentDate, 'yyyy-MM-dd');
      const dayName = format(currentDate, 'EEE');
      
      return {
        ...day,
        date: dateStr,
        dayName,
        chunks: day.chunks.map(chunk => ({
          ...chunk,
          date: dateStr,
          dayName,
          blocks: chunk.blocks.map(block => {
            const blockStart = parseISO(block.startTime);
            const blockEnd = parseISO(block.endTime);
            
            const newStart = new Date(currentDate);
            newStart.setHours(blockStart.getHours(), blockStart.getMinutes(), 0, 0);
            
            const newEnd = new Date(currentDate);
            newEnd.setHours(blockEnd.getHours(), blockEnd.getMinutes(), 0, 0);
            
            return {
              ...block,
              startTime: newStart.toISOString(),
              endTime: newEnd.toISOString()
            };
          })
        }))
      };
    });

    const newCycles = data.cycles.map(c => 
      c.id === cycleId ? { ...c, startDate: newStartDate, days: newDays } : c
    );
    setData({ ...data, cycles: newCycles });
  };

  const updateChunk = (chunkId: string, updates: Partial<StudyChunk>) => {
    if (!data || !data.activeCycleId) return;
    
    const cycle = data.cycles.find(c => c.id === data.activeCycleId);
    if (!cycle) return;

    const targetChunk = cycle.days.flatMap(d => d.chunks).find(c => c.id === chunkId);
    const shouldSync = updates.notes !== undefined || updates.urlLinks !== undefined;

    const newDays = cycle.days.map(day => ({
      ...day,
      chunks: day.chunks.map(chunk => {
        if (chunk.id === chunkId) {
          return { ...chunk, ...updates };
        }
        if (shouldSync && targetChunk && chunk.name === targetChunk.name) {
          return { ...chunk, ...updates };
        }
        return chunk;
      })
    }));

    const newCycles = data.cycles.map(c => 
      c.id === data.activeCycleId ? { ...c, days: newDays } : c
    );
    setData({ ...data, cycles: newCycles });
  };

  const updateBlock = (chunkId: string, blockId: string, updates: Partial<StudyBlock>) => {
    if (!data || !data.activeCycleId) return;
    const cycle = data.cycles.find(c => c.id === data.activeCycleId);
    if (!cycle) return;

    const newDays = cycle.days.map(day => ({
      ...day,
      chunks: day.chunks.map(chunk => {
        if (chunk.id !== chunkId) return chunk;
        const newBlocks = chunk.blocks.map(block => 
          block.id === blockId ? { ...block, ...updates } : block
        );
        const totalActual = newBlocks.reduce((acc, b) => acc + b.actualMin, 0);
        return { ...chunk, blocks: newBlocks, actualMin: totalActual };
      })
    }));

    const newCycles = data.cycles.map(c => 
      c.id === data.activeCycleId ? { ...c, days: newDays } : c
    );
    setData({ ...data, cycles: newCycles });
  };

  const regenerateBlocks = (chunkId: string) => {
    if (!data || !data.activeCycleId) return;
    const cycle = data.cycles.find(c => c.id === data.activeCycleId);
    if (!cycle) return;

    const chunk = cycle.days.flatMap(d => d.chunks).find(c => c.id === chunkId);
    if (!chunk) return;

    const totalDefaultTime = DEFAULT_TECHNIQUES.reduce((acc, t) => acc + t.time, 0);
    const newBlocks: StudyBlock[] = DEFAULT_TECHNIQUES.map((t, idx) => {
      const scaledTime = Math.round((t.time / totalDefaultTime) * chunk.plannedMin);
      const finalTime = chunk.plannedMin > 0 ? Math.max(1, scaledTime) : 0;
      const blockDate = new Date(chunk.date);
      blockDate.setHours(8, 0, 0, 0);

      return {
        id: crypto.randomUUID(),
        blockNumber: idx + 1,
        technique: t.name,
        activity: t.activity,
        plannedMin: finalTime,
        startTime: blockDate.toISOString(),
        endTime: blockDate.toISOString(),
        actualMin: 0,
        gapMin: 0,
        outputRequired: t.output,
        done: false,
        urls: []
      };
    });

    updateChunk(chunkId, { blocks: newBlocks, actualMin: 0 });
  };

  const calculateActualMin = (startTime: string, endTime: string) => {
    if (!startTime || !endTime) return 0;
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    let diff = (endH * 60 + endM) - (startH * 60 + startM);
    return diff;
  };

  const formatTimeOnly = (isoString: string) => {
    try {
      return format(parseISO(isoString), 'HH:mm');
    } catch {
      return '00:00';
    }
  };

  const handleTimeOnlyChange = (chunkId: string, blockId: string, field: 'startTime' | 'endTime', timeValue: string) => {
    if (!activeCycle) return;
    const block = activeCycle.days.flatMap(d => d.chunks).find(c => c.id === chunkId)?.blocks.find(b => b.id === blockId);
    if (!block) return;

    const [hours, minutes] = timeValue.split(':').map(Number);
    const newDate = parseISO(block[field]);
    newDate.setHours(hours, minutes);
    
    const updates: Partial<StudyBlock> = { [field]: newDate.toISOString() };
    
    // Auto-calculate actual minutes if both times are set
    const otherField = field === 'startTime' ? 'endTime' : 'startTime';
    const otherDate = parseISO(block[otherField]);
    const start = field === 'startTime' ? newDate : otherDate;
    const end = field === 'endTime' ? newDate : otherDate;
    
    updates.actualMin = Math.max(0, differenceInMinutes(end, start));
    updates.gapMin = Math.max(0, updates.actualMin - block.plannedMin);
    
    updateBlock(chunkId, blockId, updates);
  };

  const setNow = (chunkId: string, blockId: string, field: 'startTime' | 'endTime') => {
    const now = new Date();
    const timeValue = format(now, 'HH:mm');
    handleTimeOnlyChange(chunkId, blockId, field, timeValue);
  };

  const exportJSON = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elite_planner_${format(new Date(), 'yyyyMMdd')}.json`;
    a.click();
  };

  const exportCSV = () => {
    if (!activeCycle) return;
    let csv = 'Day,Date,Chunk,Type,Planned(m),Actual(m),Done\n';
    activeCycle.days.forEach(day => {
      day.chunks.forEach(chunk => {
        csv += `${day.dayNumber},${chunk.date},${chunk.name},${chunk.type},${chunk.plannedMin},${chunk.actualMin},${chunk.done}\n`;
      });
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elite_planner_${format(new Date(), 'yyyyMMdd')}.csv`;
    a.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && Array.isArray(parsed.cycles)) {
          setData(parsed);
          setView('overview');
        } else if (parsed && Array.isArray(parsed.days)) {
          // Legacy import migration
          const initialCycle: StudyCycle = {
            id: crypto.randomUUID(),
            subject: parsed.subject || 'Transformation',
            topic: parsed.topic || 'Electric Charge',
            subTopic: parsed.subTopic || 'General Study',
            startDate: parsed.startDate || format(new Date(), 'yyyy-MM-dd'),
            days: parsed.days,
            profile: parsed.profile || 'OfficeWorker',
            completed: false,
            createdAt: new Date().toISOString()
          };
          const newStore: PlannerData = {
            activeCycleId: initialCycle.id,
            cycles: [initialCycle],
            timezone: parsed.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'
          };
          setData(newStore);
          setView('overview');
        }
      } catch (err) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const selectedChunk = useMemo(() => {
    if (!activeCycle || !selectedChunkId) return null;
    for (const day of activeCycle.days) {
      const chunk = day.chunks.find(c => c.id === selectedChunkId);
      if (chunk) return chunk;
    }
    return null;
  }, [activeCycle, selectedChunkId]);

  const switchCycle = (cycleId: string) => {
    if (!data) return;
    setData({ ...data, activeCycleId: cycleId });
    setView('overview');
  };

  const deleteCycle = (cycleId: string) => {
    if (!data) return;
    const newCycles = data.cycles.filter(c => c.id !== cycleId);
    const newActiveId = data.activeCycleId === cycleId ? (newCycles[0]?.id || null) : data.activeCycleId;
    setData({ ...data, cycles: newCycles, activeCycleId: newActiveId });
    if (!newActiveId) setView('setup');
  };

  const updateChunkStatus = (chunkId: string, done: boolean) => {
    updateChunk(chunkId, { done });
  };

  const renderClickableLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline break-all block mb-1"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const aggregatedNotes = useMemo(() => {
    if (!selectedChunk || !activeCycle) return { notes: '', links: '' };
    if (selectedChunk.type !== 'Self Test') return { notes: selectedChunk.notes, links: selectedChunk.urlLinks };

    const names = selectedChunk.name.split(',').map(n => n.trim());
    const allChunks = activeCycle.days.flatMap(d => d.chunks);
    
    const notesMap = new Map<string, string>();
    const linksMap = new Map<string, string>();

    allChunks.forEach(c => {
      if (names.includes(c.name) && c.type === 'Prepare') {
        if (c.notes) notesMap.set(c.name, c.notes);
        if (c.urlLinks) linksMap.set(c.name, c.urlLinks);
      }
    });

    const combinedNotes = Array.from(notesMap.entries())
      .map(([name, note]) => `[Chunk ${name}]:\n${note}`)
      .join('\n\n');
    
    const combinedLinks = Array.from(linksMap.entries())
      .map(([name, link]) => `[Chunk ${name}]:\n${link}`)
      .join('\n\n');

    return { 
      notes: combinedNotes || selectedChunk.notes, 
      links: combinedLinks || selectedChunk.urlLinks 
    };
  }, [selectedChunk, data]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      <AnimatePresence mode="wait">
        {view === 'setup' || !data ? (
          <motion.div
            key="setup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 bg-white"
          >
            <div className="max-w-5xl w-full space-y-16">
              <div className="text-center space-y-6">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full mb-4"
                >
                  <Zap size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">v2.5 Professional Edition</span>
                </motion.div>
                <h1 className="text-8xl font-serif italic tracking-tighter text-zinc-900 leading-none">Planner App</h1>
                <p className="text-sm font-mono uppercase tracking-[0.5em] text-zinc-400">Architecting Knowledge with Precision</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(Object.keys(PROFILE_CONFIGS) as StudyProfile[]).map((p, idx) => (
                  <motion.button
                    key={p}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSetupProfile(p)}
                    className={cn(
                      "p-10 border text-left transition-all duration-500 flex flex-col justify-between group relative h-full rounded-2xl",
                      setupProfile === p 
                        ? "border-zinc-900 bg-zinc-900 text-white shadow-2xl scale-[1.02]" 
                        : "border-zinc-100 bg-zinc-50 hover:border-zinc-300 hover:bg-white"
                    )}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif italic text-3xl">{PROFILE_CONFIGS[p].name}</h3>
                        {setupProfile === p && <CheckCircle2 size={24} className="text-emerald-400" />}
                      </div>
                      <p className="text-sm opacity-70 leading-relaxed font-medium">
                        {PROFILE_CONFIGS[p].description}
                      </p>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-current/10">
                      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
                        <span className="opacity-50">Daily Intensity</span>
                        <span className="font-bold text-lg">{PROFILE_CONFIGS[p].minHoursPerDay}h</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-zinc-50 border border-zinc-200 p-12 rounded-3xl space-y-10 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Primary Subject</label>
                    <input 
                      type="text" 
                      value={setupSubject}
                      onChange={(e) => setSetupSubject(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Transformation"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Core Topic</label>
                    <input 
                      type="text" 
                      value={setupTopic}
                      onChange={(e) => setSetupTopic(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Electric Charge"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Start Date</label>
                    <input 
                      type="date" 
                      value={setupStartDate}
                      onChange={(e) => setSetupStartDate(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Unit</label>
                    <input 
                      type="text" 
                      value={setupUnit}
                      onChange={(e) => setSetupUnit(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Unit 1"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Part</label>
                    <input 
                      type="text" 
                      value={setupPart}
                      onChange={(e) => setSetupPart(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Part A"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Lesson</label>
                    <input 
                      type="text" 
                      value={setupLesson}
                      onChange={(e) => setSetupLesson(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Lesson 4"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Chapter</label>
                    <input 
                      type="text" 
                      value={setupChapter}
                      onChange={(e) => setSetupChapter(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Chapter 2"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Subject Session</label>
                    <input 
                      type="text" 
                      value={setupSession}
                      onChange={(e) => setSetupSession(e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-300 py-3 outline-none font-serif italic text-3xl focus:border-zinc-900 transition-colors"
                      placeholder="e.g. Session 1"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Source Type</label>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Article', 'Book', 'Video', 'Image', 'Audio'].map(type => (
                        <button
                          key={type}
                          onClick={() => setSetupSourceType(type as any)}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider border transition-all",
                            setupSourceType === type 
                              ? "bg-zinc-900 text-white border-zinc-900" 
                              : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Plan Duration (Days)</label>
                  <div className="flex gap-6">
                    {[5].map(d => (
                      <button
                        key={d}
                        onClick={() => setSetupDays(d)}
                        className={cn(
                          "flex-1 py-4 border-2 font-mono text-sm transition-all rounded-xl",
                          setupDays === d 
                            ? "bg-zinc-900 text-white border-zinc-900 shadow-lg scale-105" 
                            : "bg-white border-zinc-100 hover:border-zinc-300"
                        )}
                      >
                        {d} Days
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleStart}
                  className="w-full bg-zinc-900 text-white py-6 rounded-2xl font-mono uppercase tracking-[0.6em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-6 group shadow-xl"
                >
                  Initialize Learning Engine
                  <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-screen"
          >
            {/* Header */}
            <header className="border-b border-zinc-200 px-8 py-5 flex items-center justify-between bg-white/90 backdrop-blur-2xl sticky top-0 z-50">
              <div className="flex items-center gap-6">
                <div 
                  className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-white rounded-2xl cursor-pointer hover:rotate-6 transition-transform shadow-lg shadow-zinc-200" 
                  onClick={() => setView('setup')}
                >
                  <Layout size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-xl font-serif italic tracking-tight text-zinc-900">
                      {activeCycle?.subject || 'Planner App'}
                    </h1>
                    <div className="flex items-center gap-2">
                      {data.cycles.length > 1 && (
                        <select 
                          value={data.activeCycleId || ''}
                          onChange={(e) => switchCycle(e.target.value)}
                          className="bg-zinc-100 border-none rounded-lg px-3 py-1 text-[10px] font-mono font-bold outline-none focus:ring-2 ring-zinc-200"
                        >
                          {data.cycles.map(c => (
                            <option key={c.id} value={c.id}>{c.topic} ({c.startDate})</option>
                          ))}
                        </select>
                      )}
                      {activeCycle && (
                        <div className="flex items-center gap-1">
                          {confirmDeleteId === activeCycle.id ? (
                            <div className="flex items-center gap-1 bg-red-50 p-1 rounded-lg border border-red-100">
                              <span className="text-[8px] font-mono font-bold text-red-600 px-1 uppercase">Confirm?</span>
                              <button 
                                onClick={() => {
                                  deleteCycle(activeCycle.id);
                                  setConfirmDeleteId(null);
                                }}
                                className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                              >
                                <Check size={10} />
                              </button>
                              <button 
                                onClick={() => setConfirmDeleteId(null)}
                                className="p-1 bg-zinc-200 text-zinc-600 rounded hover:bg-zinc-300 transition-colors"
                              >
                                <X size={10} />
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => setConfirmDeleteId(activeCycle.id)}
                              className="p-1.5 hover:bg-red-50 text-red-400 hover:text-red-600 rounded-lg transition-colors"
                              title="Delete Current Cycle"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {activeCycle ? PROFILE_CONFIGS[activeCycle.profile].name : 'Setup'} // {activeCycle?.days.length || 0} DAYS
                    </p>
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-[10px] font-mono font-bold text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded-full">
                      {formatInTimeZone(currentTime, data.timezone, 'HH:mm:ss')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl">
                  <Globe size={14} className="text-zinc-400" />
                  <select 
                    value={data.timezone}
                    onChange={e => setData({...data, timezone: e.target.value})}
                    className="bg-transparent font-bold text-[10px] outline-none cursor-pointer uppercase tracking-wider"
                  >
                    {TIMEZONES.map(tz => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>
                
                <div className="h-10 w-px bg-zinc-200 mx-2" />
                
                <div className="flex items-center gap-2">
                  <button onClick={exportJSON} className="p-3 hover:bg-zinc-100 rounded-xl transition-all text-zinc-600 hover:text-zinc-900" title="Export JSON">
                    <FileJson size={20} />
                  </button>
                  <button onClick={exportCSV} className="p-3 hover:bg-zinc-100 rounded-xl transition-all text-zinc-600 hover:text-zinc-900" title="Export CSV">
                    <FileSpreadsheet size={20} />
                  </button>
                  <label className="p-3 hover:bg-zinc-100 rounded-xl transition-all text-zinc-600 hover:text-zinc-900 cursor-pointer">
                    <Upload size={20} />
                    <input type="file" className="hidden" onChange={handleImport} accept=".json" />
                  </label>
                  <button onClick={() => setView('setup')} className="p-3 hover:bg-zinc-100 rounded-xl transition-all text-zinc-600 hover:text-zinc-900">
                    <Settings size={20} />
                  </button>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto p-8 bg-[#FAFAFA]">
              <div className="max-w-[1800px] mx-auto space-y-10">
                
                {/* Context Banner */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-zinc-900 text-white rounded-3xl p-10 shadow-2xl shadow-zinc-200 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                  <div className="flex-1 space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <Target className="text-emerald-400" size={20} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">Active Architecture</span>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-5xl font-serif italic">{activeCycle ? PROFILE_CONFIGS[activeCycle.profile].name : 'Setup'}</h2>
                      {activeCycle && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                          {activeCycle.unit && <span>Unit: <span className="text-white">{activeCycle.unit}</span></span>}
                          {activeCycle.part && <span>Part: <span className="text-white">{activeCycle.part}</span></span>}
                          {activeCycle.lesson && <span>Lesson: <span className="text-white">{activeCycle.lesson}</span></span>}
                          {activeCycle.chapter && <span>Chapter: <span className="text-white">{activeCycle.chapter}</span></span>}
                          {activeCycle.session && <span>Session: <span className="text-white">{activeCycle.session}</span></span>}
                          {activeCycle.sourceType && <span>Source: <span className="text-white">{activeCycle.sourceType}</span></span>}
                        </div>
                      )}
                    </div>
                    <p className="text-sm opacity-60 leading-relaxed max-w-4xl font-medium">
                      {activeCycle ? PROFILE_CONFIGS[activeCycle.profile].description : ''}
                    </p>
                  </div>
                  <div className="flex gap-12 text-center relative z-10 lg:border-l lg:border-white/10 lg:pl-12">
                    <div>
                      <div className="text-[10px] font-mono uppercase opacity-40 mb-2 tracking-widest">Daily Target</div>
                      <div className="text-5xl font-bold tracking-tighter">{activeCycle ? PROFILE_CONFIGS[activeCycle.profile].minHoursPerDay : 0}H</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase opacity-40 mb-2 tracking-widest">Horizon</div>
                      <div className="text-5xl font-bold tracking-tighter">{activeCycle?.days.length || 0}D</div>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {view === 'overview' ? (
                    <motion.div 
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-4xl font-serif italic text-zinc-900">Learning Grid</h2>
                          <div className="flex items-center gap-4">
                            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Strategic distribution of study modules</p>
                            <div className="h-4 w-px bg-zinc-200" />
                            <div className="flex items-center gap-2">
                              <Calendar size={12} className="text-zinc-400" />
                              <input 
                                type="date" 
                                value={activeCycle?.startDate || ''}
                                onChange={(e) => activeCycle && shiftCycleDates(activeCycle.id, e.target.value)}
                                className="text-[10px] font-mono bg-transparent border-none outline-none cursor-pointer hover:text-zinc-900 transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => setView('dashboard')}
                          className="flex items-center gap-3 text-[10px] font-mono uppercase bg-zinc-900 text-white px-8 py-4 rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 group"
                        >
                          <BarChart3 size={16} className="group-hover:scale-110 transition-transform" /> 
                          Performance Intelligence
                        </button>
                      </div>

                      <div className="bg-white border border-zinc-100 shadow-xl shadow-zinc-100/50 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse text-left min-w-[1400px]">
                            <thead>
                              <tr className="bg-zinc-50/50 border-b border-zinc-200 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                                <th className="p-6 w-20 text-center border-r border-zinc-200">Hours</th>
                                <th className="p-6 w-36 border-r border-zinc-200">Action</th>
                                <th className="p-6 w-24 text-center border-r border-zinc-200">Chunk</th>
                                <th className="p-6 w-24 text-center border-r border-zinc-200">Time</th>
                                <th className="p-6 w-32 border-r border-zinc-200">Dates</th>
                                <th className="p-6 w-24 border-r border-zinc-200">Day Name</th>
                                <th className="p-6 w-32 border-r border-zinc-200">Start Time</th>
                                <th className="p-6 w-32 border-r border-zinc-200">End Time</th>
                                <th className="p-6 w-24 text-center border-r border-zinc-200">Actual (min)</th>
                                <th className="p-6 w-24 text-center border-r border-zinc-200">Difference</th>
                                <th className="p-6 w-24 text-center border-r border-zinc-200">Gap</th>
                                <th className="p-6 w-48 border-r border-zinc-200">Comment</th>
                                <th className="p-6 w-20 text-center">Done</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                              {activeCycle?.days.map((day) => (
                                <React.Fragment key={day.id}>
                                  {day.chunks.map((chunk) => {
                                    const firstBlock = chunk.blocks[0];
                                    const lastBlock = chunk.blocks[chunk.blocks.length - 1];
                                    
                                    const derivedStartTime = firstBlock ? formatTimeOnly(firstBlock.startTime) : chunk.startTime;
                                    const derivedEndTime = lastBlock ? formatTimeOnly(lastBlock.endTime) : chunk.endTime;
                                    
                                    const actual = (firstBlock && lastBlock) 
                                      ? Math.max(0, differenceInMinutes(parseISO(lastBlock.endTime), parseISO(firstBlock.startTime)))
                                      : calculateActualMin(chunk.startTime, chunk.endTime);
                                    
                                    const diff = chunk.plannedMin - actual;
                                    
                                    // Group by sessionId
                                    const sessionChunks = day.chunks.filter(c => c.sessionId === chunk.sessionId);
                                    const isFirstInSession = sessionChunks[0]?.id === chunk.id;
                                    const sessionRowSpan = sessionChunks.length;
                                    
                                    return (
                                      <motion.tr 
                                        key={chunk.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="group hover:bg-zinc-50/30 transition-colors cursor-pointer"
                                        onClick={() => {
                                          setSelectedChunkId(chunk.id);
                                          setView('detail');
                                        }}
                                      >
                                        {isFirstInSession && (
                                          <td 
                                            rowSpan={sessionRowSpan} 
                                            className="p-6 text-center border-r border-zinc-200 bg-zinc-50/50 align-middle"
                                          >
                                            <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 mx-auto">
                                              Session {chunk.sessionId}
                                            </div>
                                          </td>
                                        )}
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className={cn(
                                            "w-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-center rounded-xl shadow-sm",
                                            chunk.type === 'Prepare' ? "bg-red-600 text-white" : 
                                            chunk.type === 'Review' ? "bg-emerald-600 text-white" : 
                                            "bg-zinc-900 text-white"
                                          )}>
                                            {chunk.type}
                                          </div>
                                        </td>
                                        <td className="p-4 text-center border-r border-zinc-100">
                                          <span className={cn(
                                            "text-[10px] font-bold font-mono px-4 py-2 rounded-xl text-white shadow-sm block uppercase tracking-widest",
                                            chunk.name === 'A' ? "bg-red-600" :
                                            chunk.name === 'B' ? "bg-emerald-600" :
                                            chunk.name === 'C' ? "bg-blue-600" :
                                            chunk.name === 'D' ? "bg-zinc-900" :
                                            "bg-purple-800"
                                          )}>
                                            {chunk.name}
                                          </span>
                                        </td>
                                        <td className="p-4 text-center border-r border-zinc-100">
                                          <div className="text-sm font-mono font-bold text-zinc-900">{chunk.plannedMin}</div>
                                        </td>
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className="text-[10px] font-mono font-bold text-zinc-900">{chunk.date}</div>
                                        </td>
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">{chunk.dayName}</div>
                                        </td>
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className="flex items-center gap-2 bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2 opacity-80">
                                            <Clock size={12} className="text-zinc-400 shrink-0" />
                                            <div className="text-[11px] font-mono font-bold text-zinc-900">
                                              {chunk.blocks.length > 0 ? formatTimeOnly(chunk.blocks[0].startTime) : chunk.startTime}
                                            </div>
                                          </div>
                                        </td>
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className="flex items-center gap-2 bg-zinc-50/50 border border-zinc-100 rounded-xl px-4 py-2 opacity-80">
                                            <Clock size={12} className="text-zinc-400 shrink-0" />
                                            <div className="text-[11px] font-mono font-bold text-zinc-900">
                                              {chunk.blocks.length > 0 ? formatTimeOnly(chunk.blocks[chunk.blocks.length - 1].endTime) : chunk.endTime}
                                            </div>
                                          </div>
                                        </td>
                                        <td className="p-4 text-center border-r border-zinc-100">
                                          <div className="text-sm font-mono font-bold text-zinc-400">{actual}</div>
                                        </td>
                                        <td className="p-4 text-center border-r border-zinc-100">
                                          <div className={cn(
                                            "text-sm font-mono font-bold",
                                            diff < 0 ? "text-red-500" : "text-emerald-500"
                                          )}>
                                            {diff}
                                          </div>
                                        </td>
                                        <td className="p-4 text-center border-r border-zinc-100">
                                          <div className={cn(
                                            "text-sm font-mono font-bold",
                                            chunk.blocks.reduce((acc, b) => acc + b.gapMin, 0) > 0 ? "text-red-500" : "text-zinc-400"
                                          )}>
                                            {chunk.blocks.reduce((acc, b) => acc + b.gapMin, 0)}m
                                          </div>
                                        </td>
                                        <td className="p-4 border-r border-zinc-100">
                                          <div className="text-[10px] font-mono text-zinc-400 whitespace-pre-wrap max-h-20 overflow-y-auto">
                                            {chunk.blocks.filter(b => b.gapReason).map(b => `${b.technique}: ${b.gapReason}`).join('\n')}
                                          </div>
                                        </td>
                                        <td className="p-4 text-center" onClick={e => e.stopPropagation()}>
                                          <button 
                                            onClick={() => updateChunk(chunk.id, { done: !chunk.done })}
                                            className={cn(
                                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm",
                                              chunk.done ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-300 hover:bg-zinc-200"
                                            )}
                                          >
                                            <Check size={20} />
                                          </button>
                                        </td>
                                      </motion.tr>
                                    );
                                  })}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  ) : view === 'detail' && selectedChunk ? (
                    <motion.div 
                      key="detail"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <button 
                            onClick={() => setView('overview')}
                            className="p-4 bg-white border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm group"
                          >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                          </button>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Module Detail</span>
                              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">{selectedChunk.type}</span>
                            </div>
                            <h2 className="text-4xl font-serif italic text-zinc-900">Chunk {selectedChunk.name} Architecture</h2>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-[10px] font-mono uppercase opacity-40">Target Volume</div>
                            <div className="text-2xl font-bold font-mono">{selectedChunk.plannedMin}m</div>
                          </div>
                          <button 
                            onClick={() => regenerateBlocks(selectedChunk.id)}
                            className="flex items-center gap-2 text-[10px] font-mono uppercase bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm"
                          >
                            <RefreshCw size={14} /> Re-Architect Blocks
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div className="xl:col-span-2 space-y-6">
                          {selectedChunk.blocks.length > 0 ? (
                            <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl shadow-zinc-100/50 overflow-hidden">
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr className="bg-zinc-50/50 border-b border-zinc-200 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                                    <th className="p-5 w-12 text-center border-r border-zinc-200">#</th>
                                    <th className="p-5 w-40 border-r border-zinc-200">Technique</th>
                                    <th className="p-5 border-r border-zinc-200">Activity & Output</th>
                                    <th className="p-5 w-24 text-center border-r border-zinc-200">Target</th>
                                    <th className="p-5 w-48 border-r border-zinc-200">Timeline</th>
                                    <th className="p-5 w-20 text-center border-r border-zinc-200">Actual</th>
                                    <th className="p-5 w-20 text-center border-r border-zinc-200">Gap</th>
                                    <th className="p-5 border-r border-zinc-200">Comment</th>
                                    <th className="p-5 w-16 text-center">Done</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-200">
                                  {selectedChunk.blocks.map((block) => (
                                    <tr key={block.id} className="group hover:bg-zinc-50/30 transition-colors">
                                      <td className="p-5 text-center font-mono text-[10px] text-zinc-400 border-r border-zinc-100">{block.blockNumber}</td>
                                      <td className="p-5 border-r border-zinc-100">
                                        <div className="space-y-1">
                                          <div className="text-sm font-bold text-zinc-900">{block.technique}</div>
                                          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{block.activity}</div>
                                        </div>
                                      </td>
                                      <td className="p-5 border-r border-zinc-100">
                                        <div className="text-xs text-zinc-600 leading-relaxed italic">"{block.outputRequired}"</div>
                                      </td>
                                      <td className="p-5 text-center border-r border-zinc-100">
                                        <div className="text-sm font-mono font-bold text-zinc-900">{block.plannedMin}m</div>
                                      </td>
                                      <td className="p-5 border-r border-zinc-100">
                                        <div className="flex flex-col gap-2">
                                          <div className="flex items-center gap-2">
                                            <input 
                                              type="time"
                                              value={formatTimeOnly(block.startTime)}
                                              onChange={(e) => handleTimeOnlyChange(selectedChunk.id, block.id, 'startTime', e.target.value)}
                                              className="bg-zinc-50 border border-zinc-100 rounded-lg px-2 py-1 text-[10px] font-mono font-bold outline-none focus:border-zinc-300"
                                            />
                                            <button 
                                              onClick={() => setNow(selectedChunk.id, block.id, 'startTime')}
                                              className="p-1.5 bg-zinc-900 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                                            >
                                              <Play size={10} />
                                            </button>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <input 
                                              type="time"
                                              value={formatTimeOnly(block.endTime)}
                                              onChange={(e) => handleTimeOnlyChange(selectedChunk.id, block.id, 'endTime', e.target.value)}
                                              className="bg-zinc-50 border border-zinc-100 rounded-lg px-2 py-1 text-[10px] font-mono font-bold outline-none focus:border-zinc-300"
                                            />
                                            <button 
                                              onClick={() => setNow(selectedChunk.id, block.id, 'endTime')}
                                              className="p-1.5 bg-zinc-900 text-white rounded-lg hover:bg-rose-500 transition-colors"
                                            >
                                              <Square size={10} />
                                            </button>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-5 text-center border-r border-zinc-100">
                                        <div className="text-sm font-mono font-bold text-zinc-900">{block.actualMin}m</div>
                                      </td>
                                      <td className="p-5 text-center border-r border-zinc-100">
                                        <div className={cn(
                                          "text-sm font-mono font-bold",
                                          block.gapMin > 0 ? "text-red-500" : "text-zinc-400"
                                        )}>{block.gapMin}m</div>
                                      </td>
                                      <td className="p-5 border-r border-zinc-100">
                                        <div className="relative">
                                          <textarea 
                                            value={block.gapReason || ''}
                                            onChange={(e) => updateBlock(selectedChunk.id, block.id, { gapReason: e.target.value })}
                                            className={cn(
                                              "w-full bg-zinc-50 border rounded-lg p-2 text-[10px] outline-none transition-all min-h-[40px] resize-none",
                                              block.gapMin > 0 && !block.gapReason 
                                                ? "border-red-200 focus:border-red-400 bg-red-50/30" 
                                                : "border-zinc-100 focus:border-zinc-300"
                                            )}
                                            placeholder={block.gapMin > 0 ? "Reason required for gap..." : "Add comment..."}
                                          />
                                          {block.gapMin > 0 && !block.gapReason && (
                                            <div className="absolute top-1 right-1">
                                              <Zap size={10} className="text-red-400 animate-pulse" />
                                            </div>
                                          )}
                                        </div>
                                      </td>
                                      <td className="p-5 text-center">
                                        <button 
                                          onClick={() => updateBlock(selectedChunk.id, block.id, { done: !block.done })}
                                          className="transition-all active:scale-90 hover:scale-110"
                                        >
                                          {block.done ? (
                                            <CheckCircle2 className="text-emerald-500" size={20} />
                                          ) : (
                                            <Circle className="text-zinc-200" size={20} />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <div className="p-20 border-2 border-dashed border-zinc-200 rounded-3xl flex flex-col items-center justify-center text-center space-y-6 bg-white">
                              <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
                                <Layout size={40} />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-2xl font-serif italic text-zinc-900">Architecture Pending</h3>
                                <p className="text-sm text-zinc-400 max-w-xs mx-auto">This module has no active study blocks. Initialize them to begin your session.</p>
                              </div>
                              <button 
                                onClick={() => regenerateBlocks(selectedChunk.id)}
                                className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-mono uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
                              >
                                Initialize {selectedChunk.plannedMin}m Session
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="space-y-8">
                          <div className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-xl shadow-zinc-100/50 space-y-6">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Strategic Insights</h3>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase opacity-50">Module Notes</label>
                                <textarea 
                                  value={selectedChunk.notes}
                                  onChange={(e) => updateChunk(selectedChunk.id, { notes: e.target.value })}
                                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-sm outline-none focus:border-zinc-300 transition-all min-h-[120px] resize-none"
                                  placeholder="Document your findings..."
                                />

                                {selectedChunk.blocks.some(b => b.gapMin > 0) && (
                                  <div className="mt-6 space-y-3">
                                    <label className="text-[10px] font-mono uppercase opacity-50 text-red-400 font-bold">Gap Analysis Required</label>
                                    <div className="grid grid-cols-1 gap-2">
                                      {selectedChunk.blocks.map(b => b.gapMin > 0 && (
                                        <div key={b.id} className={cn(
                                          "p-3 rounded-xl border text-[10px] flex items-center justify-between transition-all",
                                          b.gapReason ? "bg-emerald-50/30 border-emerald-100 text-emerald-700" : "bg-red-50/30 border-red-100 text-red-700 shadow-sm shadow-red-100"
                                        )}>
                                          <div className="flex items-center gap-3">
                                            <div className={cn(
                                              "w-6 h-6 rounded-lg flex items-center justify-center font-bold",
                                              b.gapReason ? "bg-emerald-100" : "bg-red-100"
                                            )}>
                                              {b.blockNumber}
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="font-bold uppercase tracking-wider">{b.technique}</span>
                                              <span className="opacity-60">{b.gapMin}m deviation detected</span>
                                            </div>
                                          </div>
                                          {b.gapReason ? (
                                            <CheckCircle2 size={14} className="text-emerald-500" />
                                          ) : (
                                            <Zap size={14} className="text-red-500 animate-pulse" />
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {selectedChunk.type === 'Self Test' && aggregatedNotes.notes && (
                                  <div className="mt-4 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
                                    <div className="text-[9px] font-mono uppercase opacity-40 mb-2">Aggregated Study Notes</div>
                                    <pre className="text-xs text-zinc-600 whitespace-pre-wrap font-sans leading-relaxed">
                                      {aggregatedNotes.notes}
                                    </pre>
                                  </div>
                                )}
                              </div>
                              <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase opacity-50">Reference Links</label>
                                <textarea 
                                  value={selectedChunk.urlLinks}
                                  onChange={(e) => updateChunk(selectedChunk.id, { urlLinks: e.target.value })}
                                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-sm outline-none focus:border-zinc-300 transition-all min-h-[80px] resize-none"
                                  placeholder="Paste URLs here..."
                                />
                                <div className="mt-2 space-y-1">
                                  {renderClickableLinks(selectedChunk.urlLinks)}
                                </div>
                                {selectedChunk.type === 'Self Test' && aggregatedNotes.links && (
                                  <div className="mt-4 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
                                    <div className="text-[9px] font-mono uppercase opacity-40 mb-2">Aggregated Reference Links</div>
                                    <div className="text-xs text-zinc-600 leading-relaxed">
                                      {renderClickableLinks(aggregatedNotes.links)}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-2xl shadow-zinc-200 space-y-6">
                            <h3 className="text-xs font-mono uppercase tracking-widest opacity-40">Session Metrics</h3>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-[9px] font-mono uppercase opacity-40 mb-1">Efficiency</div>
                                <div className="text-2xl font-bold font-mono">
                                  {selectedChunk.plannedMin > 0 ? Math.round((selectedChunk.actualMin / selectedChunk.plannedMin) * 100) : 0}%
                                </div>
                              </div>
                              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-[9px] font-mono uppercase opacity-40 mb-1">Variance</div>
                                <div className="text-2xl font-bold font-mono text-emerald-400">
                                  {selectedChunk.plannedMin - selectedChunk.actualMin}m
                                </div>
                              </div>
                            </div>
                            <div className="pt-6 border-t border-white/10">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-mono uppercase opacity-40">Progress</span>
                                <span className="text-[10px] font-mono font-bold">{Math.round((selectedChunk.blocks.filter(b => b.done).length / (selectedChunk.blocks.length || 1)) * 100)}%</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(selectedChunk.blocks.filter(b => b.done).length / (selectedChunk.blocks.length || 1)) * 100}%` }}
                                  className="h-full bg-emerald-500"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : view === 'dashboard' && activeCycle ? (
                    <motion.div
                      key="dashboard"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                    >
                      <Dashboard plannerData={data} onBack={() => setView('overview')} />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </main>

            {/* Global Stats Footer */}
            <footer className="bg-white border-t border-zinc-100 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Total Volume</span>
                  <span className="text-sm font-bold font-mono">
                    {activeCycle ? Math.round(activeCycle.days.reduce((acc, d) => acc + d.chunks.reduce((ca, c) => ca + c.plannedMin, 0), 0) / 60) : 0}H
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Actual Time</span>
                  <span className="text-sm font-bold font-mono">
                    {activeCycle ? activeCycle.days.reduce((acc, d) => acc + d.chunks.reduce((ca, c) => ca + c.actualMin, 0), 0) : 0}m
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Overall Progress</div>
                <div className="w-48 h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${activeCycle && activeCycle.days.reduce((acc, d) => acc + d.chunks.length, 0) > 0 
                      ? (activeCycle.days.reduce((acc, d) => acc + d.chunks.filter(c => c.done).length, 0) / activeCycle.days.reduce((acc, d) => acc + d.chunks.length, 0)) * 100
                      : 0}%` }}
                    className="h-full bg-zinc-900"
                  />
                </div>
                <span className="text-xs font-bold font-mono">
                  {activeCycle && activeCycle.days.reduce((acc, d) => acc + d.chunks.length, 0) > 0 
                    ? Math.round((activeCycle.days.reduce((acc, d) => acc + d.chunks.filter(c => c.done).length, 0) / activeCycle.days.reduce((acc, d) => acc + d.chunks.length, 0)) * 100)
                    : 0}%
                </span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { StudyCycle, PlannerData, StudyDay, StudyChunk, StudyBlock, DEFAULT_TECHNIQUES, StudyProfile, PROFILE_CONFIGS } from './types';
import { addDays, format } from 'date-fns';

const getSpacedRepetitionChunks = (
  sessionId: number, // 1 to 5
  dateStr: string,
  dayName: string,
  startHour: number,
  startMin: number = 0,
  isBalanced: boolean = false
): StudyChunk[] => {
  const chunks: StudyChunk[] = [];
  const startTimeStr = (totalM: number) => {
    const finalH = Math.floor(totalM / 60) % 24;
    const finalM = totalM % 60;
    return `${String(finalH).padStart(2, '0')}:${String(finalM).padStart(2, '0')}`;
  };
  
  let currentMins = startHour * 60 + startMin;
  const scale = isBalanced ? 1/3 : 1; // 5h vs 15h
  
  if (sessionId === 1) {
    const mins = Math.round(180 * scale);
    chunks.push(createChunk(sessionId, 'A', 'Prepare', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins)));
  } else if (sessionId === 2) {
    const minsB = Math.round(180 * scale);
    const minsA = Math.round(30 * scale);
    chunks.push(createChunk(sessionId, 'B', 'Prepare', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB)));
    currentMins += minsB;
    chunks.push(createChunk(sessionId, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA)));
  } else if (sessionId === 3) {
    const minsC = Math.round(180 * scale);
    const minsB = Math.round(30 * scale);
    const minsA = Math.round(15 * scale);
    chunks.push(createChunk(sessionId, 'C', 'Prepare', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC)));
    currentMins += minsC;
    chunks.push(createChunk(sessionId, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB)));
    currentMins += minsB;
    chunks.push(createChunk(sessionId, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA)));
  } else if (sessionId === 4) {
    const minsD = Math.round(180 * scale);
    const minsC = Math.round(30 * scale);
    const minsB = Math.round(15 * scale);
    const minsA = Math.round(15 * scale);
    chunks.push(createChunk(sessionId, 'D', 'Prepare', minsD, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsD)));
    currentMins += minsD;
    chunks.push(createChunk(sessionId, 'C', 'Review', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC)));
    currentMins += minsC;
    chunks.push(createChunk(sessionId, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB)));
    currentMins += minsB;
    chunks.push(createChunk(sessionId, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA)));
  } else if (sessionId >= 5) {
    const minsD = Math.round(25 * scale);
    const minsC = Math.round(15 * scale);
    const minsB = Math.round(10 * scale);
    const minsA = Math.round(10 * scale);
    const minsTest = Math.round(60 * scale);
    
    chunks.push(createChunk(sessionId, 'D', 'Review', minsD, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsD)));
    currentMins += minsD;
    chunks.push(createChunk(sessionId, 'C', 'Review', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC)));
    currentMins += minsC;
    chunks.push(createChunk(sessionId, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB)));
    currentMins += minsB;
    chunks.push(createChunk(sessionId, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA)));
    currentMins += minsA;
    chunks.push(createChunk(sessionId, 'A,B,C,D', 'Self Test', minsTest, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsTest)));
  }
  
  return chunks;
};

export const createInitialCycle = (
  profile: StudyProfile = 'OfficeWorker',
  numDays: number = 5,
  subject: string = 'Mathematics',
  topic: string = 'Probability',
  startDate: Date = new Date(),
  extraFields: {
    unit?: string;
    part?: string;
    lesson?: string;
    chapter?: string;
    session?: string;
    sourceType?: 'Article' | 'Book' | 'Video' | 'Image' | 'Audio';
  } = {}
): StudyCycle => {
  const days: StudyDay[] = [];
  const dayColors = [
    'bg-slate-50', 
    'bg-zinc-50', 
    'bg-stone-50', 
    'bg-neutral-50', 
    'bg-gray-50', 
    'bg-slate-100/50', 
    'bg-zinc-100/50'
  ];

  for (let i = 1; i <= numDays; i++) {
    const currentDate = addDays(startDate, i - 1);
    const dateStr = format(currentDate, 'yyyy-MM-dd');
    const dayName = format(currentDate, 'EEE');
    let chunks: StudyChunk[] = [];

    if (profile === 'Intensive') {
      // 15 hours per day, 5 sessions of 3 hours each
      for (let j = 1; j <= 5; j++) {
        const startHour = 8 + (j - 1) * 3;
        chunks = [...chunks, ...getSpacedRepetitionChunks(j, dateStr, dayName, startHour)];
      }
    } else if (profile === 'Balanced') {
      // 5 hours per day, 5 sessions of 1 hour each
      for (let j = 1; j <= 5; j++) {
        const startHour = 8 + (j - 1);
        chunks = [...chunks, ...getSpacedRepetitionChunks(j, dateStr, dayName, startHour, 0, true)];
      }
    } else {
      // Office Worker - 1 session per day (3 hours)
      chunks = getSpacedRepetitionChunks(Math.min(i, 5), dateStr, dayName, 19);
    }

    days.push({
      id: crypto.randomUUID(),
      dayNumber: i,
      dayName,
      date: dateStr,
      chunks,
      color: dayColors[(i - 1) % dayColors.length]
    });
  }

  return {
    id: crypto.randomUUID(),
    subject,
    topic,
    subTopic: 'General Study',
    ...extraFields,
    startDate: format(startDate, 'yyyy-MM-dd'),
    days,
    profile,
    completed: false,
    createdAt: new Date().toISOString()
  };
};

export const createInitialStore = (): PlannerData => {
  return {
    activeCycleId: null,
    cycles: [],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata',
  };
};

const createChunk = (
  sessionId: number,
  name: string, 
  type: StudyChunk['type'], 
  time: number, 
  date: string, 
  dayName: string,
  startTime: string = '08:00',
  endTime: string = '11:00'
): StudyChunk => {
  const totalDefaultTime = DEFAULT_TECHNIQUES.reduce((acc, t) => acc + t.time, 0);
  
  return {
    id: crypto.randomUUID(),
    sessionId,
    name,
    type,
    plannedMin: time,
    actualMin: 0,
    done: false,
    date,
    dayName,
    startTime,
    endTime,
    urlLinks: '',
    notes: '',
    blocks: DEFAULT_TECHNIQUES.map((t, idx) => {
      const scaledTime = Math.round((t.time / totalDefaultTime) * time);
      const finalTime = time > 0 ? Math.max(1, scaledTime) : 0;
      const blockDate = new Date(date);
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
    })
  };
};

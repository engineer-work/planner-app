import { StudyCycle, PlannerData, StudyDay, StudyChunk, StudyBlock, DEFAULT_TECHNIQUES, SIMULATION_PREP_TECHNIQUES, StudyProfile, PROFILE_CONFIGS, TECHNIQUE_TEMPLATES, TechniqueTemplate } from './types';
import { addDays, format } from 'date-fns';

const getSpacedRepetitionChunks = (
  dayNumber: number,
  dateStr: string,
  dayName: string,
  startHour: number,
  startMin: number = 0,
  profile: StudyProfile = 'OfficeWorker',
  sessionName: string = 'Session 1'
): StudyChunk[] => {
  const chunks: StudyChunk[] = [];
  const startTimeStr = (totalM: number) => {
    const finalH = Math.floor(totalM / 60) % 24;
    const finalM = totalM % 60;
    return `${String(finalH).padStart(2, '0')}:${String(finalM).padStart(2, '0')}`;
  };
  
  let currentMins = startHour * 60 + startMin;
  const isBalanced = profile === 'Balanced';
  const scale = isBalanced ? 1/3 : 1; // 5h vs 15h

  const getSessName = (chunkName: string, type: StudyChunk['type']) => {
    if ((profile === 'OfficeWorker' || profile === 'Intensive') && type !== 'Self Test') {
      return `Session ${chunkName}`;
    }
    return sessionName;
  };
  
  if (profile === 'MasteryPath') {
    const mlfLevels: TechniqueTemplate[] = ['MLF_A_Plus', 'MLF_S', 'MLF_S_Plus', 'MLF_S_Double_Plus', 'MLF_S_Triple_Plus'];
    const levelIndex = (dayNumber - 1) % mlfLevels.length;
    const template = mlfLevels[levelIndex];
    const mins = 240; // 4 hours as per profile
    chunks.push(createChunk(dayNumber, 'M', 'Prepare', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, `Mastery ${template.split('_').pop()}`, template));
    return chunks;
  }

  if (dayNumber === 1) {
    const mins = Math.round(180 * scale);
    chunks.push(createChunk(dayNumber, 'A', 'Prepare', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, getSessName('A', 'Prepare')));
  } else if (dayNumber === 2) {
    const minsB = Math.round(180 * scale);
    const minsA = Math.round(30 * scale);
    chunks.push(createChunk(dayNumber, 'B', 'Prepare', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB), profile, getSessName('B', 'Prepare')));
    currentMins += minsB;
    chunks.push(createChunk(dayNumber, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA), profile, getSessName('A', 'Review')));
  } else if (dayNumber === 3) {
    const minsC = Math.round(180 * scale);
    const minsB = Math.round(30 * scale);
    const minsA = Math.round(15 * scale);
    chunks.push(createChunk(dayNumber, 'C', 'Prepare', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC), profile, getSessName('C', 'Prepare')));
    currentMins += minsC;
    chunks.push(createChunk(dayNumber, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB), profile, getSessName('B', 'Review')));
    currentMins += minsB;
    chunks.push(createChunk(dayNumber, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA), profile, getSessName('A', 'Review')));
  } else if (dayNumber === 4) {
    const minsD = Math.round(180 * scale);
    const minsC = Math.round(30 * scale);
    const minsB = Math.round(15 * scale);
    const minsA = Math.round(15 * scale);
    chunks.push(createChunk(dayNumber, 'D', 'Prepare', minsD, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsD), profile, getSessName('D', 'Prepare')));
    currentMins += minsD;
    chunks.push(createChunk(dayNumber, 'C', 'Review', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC), profile, getSessName('C', 'Review')));
    currentMins += minsC;
    chunks.push(createChunk(dayNumber, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB), profile, getSessName('B', 'Review')));
    currentMins += minsB;
    chunks.push(createChunk(dayNumber, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA), profile, getSessName('A', 'Review')));
  } else if (dayNumber === 5) {
    const minsD = Math.round(25 * scale);
    const minsC = Math.round(15 * scale);
    const minsB = Math.round(10 * scale);
    const minsA = Math.round(10 * scale);
    const minsTest = Math.round(60 * scale);
    
    chunks.push(createChunk(dayNumber, 'D', 'Review', minsD, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsD), profile, getSessName('D', 'Review')));
    currentMins += minsD;
    chunks.push(createChunk(dayNumber, 'C', 'Review', minsC, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsC), profile, getSessName('C', 'Review')));
    currentMins += minsC;
    chunks.push(createChunk(dayNumber, 'B', 'Review', minsB, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsB), profile, getSessName('B', 'Review')));
    currentMins += minsB;
    chunks.push(createChunk(dayNumber, 'A', 'Review', minsA, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsA), profile, getSessName('A', 'Review')));
    currentMins += minsA;
    chunks.push(createChunk(dayNumber, 'A,B,C,D', 'Self Test', minsTest, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + minsTest), profile, getSessName('A,B,C,D', 'Self Test')));
  } else if (dayNumber === 7) {
    // Day 7: Strengthening (Light Recall)
    const mins = Math.round(20 * scale);
    chunks.push(createChunk(dayNumber, 'A,B,C,D', 'Review', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, getSessName('A,B,C,D', 'Review')));
  } else if (dayNumber === 10) {
    // Day 10: Deep Encoding (Mixed Recall)
    const mins = Math.round(30 * scale);
    chunks.push(createChunk(dayNumber, 'C,A,D,B', 'Review', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, getSessName('C,A,D,B', 'Review')));
  } else if (dayNumber === 15) {
    // Day 15: Stability (Self Test 2)
    const mins = Math.round(60 * scale);
    chunks.push(createChunk(dayNumber, 'A,B,C,D', 'Self Test', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, getSessName('A,B,C,D', 'Self Test')));
  } else if (dayNumber === 30) {
    // Day 30: Long-Term (Final Review)
    const mins = Math.round(45 * scale);
    chunks.push(createChunk(dayNumber, 'A,B,C,D', 'Review', mins, dateStr, dayName, startTimeStr(currentMins), startTimeStr(currentMins + mins), profile, getSessName('A,B,C,D', 'Review')));
  }
  
  return chunks;
};

export const createInitialCycle = (
  profile: StudyProfile = 'OfficeWorker',
  numDays: number = 30,
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

    // Only add chunks for specific LTM days or the initial 5-day learning phase
    if (i <= 5 || [7, 10, 15, 30].includes(i) || profile === 'MasteryPath') {
      if (profile === 'Intensive') {
        // 15 hours per day, 5 sessions of 3 hours each
        // For Intensive, we compress the 5-day cycle into a single day
        // Each session j (1-5) represents one "day" of the standard learning cycle
        for (let j = 1; j <= 5; j++) {
          const startHour = 8 + (j - 1) * 3;
          const sessionLetter = String.fromCharCode(64 + j);
          const sessionLabel = `Session ${sessionLetter}`;
          
          // If we are in the initial learning phase (i <= 5), each session is a stage of the cycle
          // If we are in LTM phase (i > 5), each session is a full review of a different set
          const cycleStage = i <= 5 ? j : i;
          
          chunks = [...chunks, ...getSpacedRepetitionChunks(cycleStage, dateStr, dayName, startHour, 0, profile, sessionLabel)];
        }
      } else if (profile === 'Balanced') {
        // 5 hours per day, 5 sessions of 1 hour each
        for (let j = 1; j <= 5; j++) {
          const startHour = 8 + (j - 1);
          chunks = [...chunks, ...getSpacedRepetitionChunks(i, dateStr, dayName, startHour, 0, profile, extraFields.session || 'Session 1')];
        }
      } else if (profile === 'MasteryPath') {
        // Mastery Path - 1 session per day (4 hours)
        chunks = getSpacedRepetitionChunks(i, dateStr, dayName, 10, 0, profile, 'Mastery Session');
      } else {
        // Office Worker - 1 session per day (3 hours)
        chunks = getSpacedRepetitionChunks(i, dateStr, dayName, 19, 0, profile, extraFields.session || 'Session 1');
      }
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
    spacedRepetitionQueue: [],
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
  endTime: string = '11:00',
  profile: StudyProfile = 'OfficeWorker',
  sessionName: string = 'Session 1',
  template?: TechniqueTemplate
): StudyChunk => {
  let techniques = DEFAULT_TECHNIQUES;
  
  if (template && TECHNIQUE_TEMPLATES[template]) {
    techniques = TECHNIQUE_TEMPLATES[template].techniques;
  }

  const totalDefaultTime = techniques.reduce((acc, t) => acc + t.time, 0);
  
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
    sessionName,
    techniqueTemplate: template,
    blocks: techniques.map((t, idx) => {
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
        diffMin: 0,
        gapMin: 0,
        outputRequired: t.output,
        done: false,
        urls: []
      };
    })
  };
};

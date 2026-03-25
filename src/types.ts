export interface StudyBlock {
  id: string;
  blockNumber: number;
  technique: string;
  activity: string;
  plannedMin: number;
  startTime: string; // ISO string
  endTime: string; // ISO string
  actualMin: number;
  diffMin: number; // Planned - Actual
  diffReason?: string;
  gapMin: number; // Time between blocks
  gapReason?: string;
  outputRequired: string;
  done: boolean;
  urls?: string[];
  recallScore?: number; // 0-5
  effortLevel?: 'Easy' | 'Medium' | 'Hard';
}

export interface StudyChunk {
  id: string;
  sessionId: number; // 1 to 5
  name: string; // A, B, C, D
  type: 'Prepare' | 'Review' | 'Self Test';
  plannedMin: number;
  actualMin: number;
  done: boolean;
  blocks: StudyBlock[];
  date: string; // YYYY-MM-DD
  dayName: string; // Mon, Tue, etc.
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  urlLinks: string;
  notes: string;
  recallScore?: number; // 0-5
  effortLevel?: 'Easy' | 'Medium' | 'Hard';
  sessionName?: string;
  techniqueTemplate?: TechniqueTemplate;
}

export interface StudyDay {
  id: string;
  dayNumber: number;
  dayName: string; // Mon, Tue, etc.
  date: string; // YYYY-MM-DD
  chunks: StudyChunk[];
  color: string; // Tailwind color class for the day column
}

export type StudyProfile = 'OfficeWorker' | 'Intensive' | 'Balanced';

export interface StudyCycle {
  id: string;
  subject: string;
  topic: string;
  subTopic: string;
  unit?: string;
  part?: string;
  lesson?: string;
  chapter?: string;
  session?: string;
  sourceType?: 'Article' | 'Book' | 'Video' | 'Image' | 'Audio';
  startDate: string; // YYYY-MM-DD
  days: StudyDay[];
  profile: StudyProfile;
  completed: boolean;
  createdAt: string;
}

export interface PlannerData {
  activeCycleId: string | null;
  cycles: StudyCycle[];
  timezone: string;
}

export interface ProfileConfig {
  name: string;
  description: string;
  minHoursPerDay: number;
  topicsPerDay: number;
  chunksPerTopic: number;
  labHours?: number;
  lunchBreakMin?: number;
}

export const PROFILE_CONFIGS: Record<StudyProfile, ProfileConfig> = {
  OfficeWorker: {
    name: 'Five-Day Study Plan',
    description: 'The people who interested in learning, but working in office for 9 hr or 11 hr or 12 hr. each day to learn the topic.',
    minHoursPerDay: 3,
    topicsPerDay: 1,
    chunksPerTopic: 1,
  },
  Intensive: {
    name: '15h/day',
    description: 'The people who interested in learning and not like to spend time with other only. In one day 5 topics of same subject, but coding and simulation take more time so, minimum each day working hours min is 15 hours.',
    minHoursPerDay: 15,
    topicsPerDay: 5,
    chunksPerTopic: 1,
  },
  Balanced: {
    name: 'Balanced Learning (5h+ study)',
    description: 'The people who interested in learning, but like to spend time with other only. In one day - 1 topic - but 5 chuck of same subject, same topic. Minimum each day working hours min is 5 hours. If, you spend 3 hours in practical experiment or labs, based on your good interest in work.',
    minHoursPerDay: 5,
    topicsPerDay: 1,
    chunksPerTopic: 5,
    labHours: 3,
    lunchBreakMin: 60,
  }
};

export const SIMULATION_PREP_TECHNIQUES = [
  { name: '3P', activity: 'Watch/read once', time: 10, output: 'Watch transcript' },
  { name: 'SQ3R + S-RUN', activity: 'Cues + Notes + Mermaid + Summary', time: 40, output: 'This is where your pattern-form document lives' },
  { name: 'Active Recall', activity: 'Use quizzes to test yourself', time: 15, output: 'Use the quizzes you created' },
  { name: 'Active Recall (Create)', activity: 'Create quiz questions + test bank', time: 15, output: 'This is where quiz creation lives' },
  { name: 'Application', activity: 'Problem solving', time: 50, output: 'Solve novel problems' },
  { name: 'Deliberate Practice', activity: 'Edge cases + verification', time: 30, output: 'Use multiple methods to verify' },
  { name: 'Feynman', activity: 'Explain without notes', time: 20, output: 'Verbally explain your summary' },
];

export const DEFAULT_TECHNIQUES = [
  { name: '3P', activity: 'Watch / Read Once', time: 10, output: 'Basic understanding' },
  { name: 'SQ3R', activity: 'Deep Understanding', time: 20, output: '3 examples solved' },
  { name: 'Active Recall', activity: 'Practice Without Notes', time: 30, output: '3 Correct answers' },
  { name: 'S-RUN', activity: 'Note Taking', time: 20, output: '1-page summary' },
  { name: 'Application', activity: 'Coding / Problem Solving', time: 50, output: 'Working logic' },
  { name: 'Deliberate Practice', activity: 'Testing / Edge Cases', time: 30, output: 'All cases handled' },
  { name: 'Feynman', activity: 'Recall & Explain', time: 20, output: 'Clear explanation' },
];

export type TechniqueTemplate = 'SimulationPrep' | 'DocumentPrep';

export const TECHNIQUE_TEMPLATES: Record<TechniqueTemplate, { name: string, techniques: typeof DEFAULT_TECHNIQUES }> = {
  SimulationPrep: {
    name: 'Simulation Preparation',
    techniques: DEFAULT_TECHNIQUES
  },
  DocumentPrep: {
    name: 'Document Preparation',
    techniques: SIMULATION_PREP_TECHNIQUES
  }
};

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

export type StudyProfile = 'OfficeWorker' | 'Intensive' | 'Balanced' | 'MasteryPath';

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

export interface SpacedRepetitionItem {
  id: string;
  topicId: string; // ID of the cycle or topic
  topicName: string;
  level: string; // e.g., "D5", "D15", "D30", "LTM"
  scheduledDate: string; // YYYY-MM-DD
  completedDate?: string; // YYYY-MM-DD
  status: 'Pending' | 'Completed' | 'Overdue';
  recallScore?: number;
  notes?: string;
}

export interface PlannerData {
  activeCycleId: string | null;
  cycles: StudyCycle[];
  spacedRepetitionQueue: SpacedRepetitionItem[];
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
  },
  MasteryPath: {
    name: 'Mastery Path (MLF)',
    description: 'A neuro-optimized path through 5 mastery levels (A+ to S+++). Each day focuses on a specific mastery stage for your topic, ensuring permanent retention and identity transformation.',
    minHoursPerDay: 4,
    topicsPerDay: 1,
    chunksPerTopic: 1,
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

export type TechniqueTemplate = 'SimulationPrep' | 'DocumentPrep' | 'MLF_A_Plus' | 'MLF_S' | 'MLF_S_Plus' | 'MLF_S_Double_Plus' | 'MLF_S_Triple_Plus';

export const TECHNIQUE_TEMPLATES: Record<TechniqueTemplate, { name: string, techniques: typeof DEFAULT_TECHNIQUES }> = {
  SimulationPrep: {
    name: 'Simulation Preparation',
    techniques: DEFAULT_TECHNIQUES
  },
  DocumentPrep: {
    name: 'Document Preparation',
    techniques: SIMULATION_PREP_TECHNIQUES
  },
  MLF_A_Plus: {
    name: 'MLF: A+ Level (Foundation)',
    techniques: [
      { name: 'Big Picture', activity: 'Read/Listen once', time: 10, output: 'Hippocampus Encoding' },
      { name: 'Summary', activity: 'One-Page Summary (5 Chunks)', time: 15, output: 'PFC Organization' },
      { name: 'Diagram', activity: 'Visual Flowchart', time: 10, output: 'Dual Coding' },
      { name: 'Recall', activity: 'Integrated Quiz (MC/SA/TF)', time: 15, output: 'Active Retrieval' },
      { name: 'Elaboration', activity: 'Reflection Prompts', time: 10, output: 'Retrieval Paths' }
    ]
  },
  MLF_S: {
    name: 'MLF: S Level (Narrative)',
    techniques: [
      { name: 'Narrative', activity: 'Transform to Story', time: 20, output: 'Amygdala Activation' },
      { name: 'Emotional Tag', activity: 'Add Emotion to Diagram', time: 10, output: 'Synaptic Strength' },
      { name: 'Connection', activity: 'Personal Relevance', time: 15, output: 'DMN Activation' },
      { name: 'Scenarios', activity: 'Real-life Scenario Quiz', time: 15, output: 'Stakes Engagement' },
      { name: 'Identity', activity: 'Identity Reflection', time: 10, output: 'Self-Integration' }
    ]
  },
  MLF_S_Plus: {
    name: 'MLF: S+ Level (Social)',
    techniques: [
      { name: 'Personas', activity: 'Create 3 AI Personas', time: 15, output: 'Theory of Mind' },
      { name: 'Teach Summary', activity: 'Teach Summary to Personas', time: 15, output: 'Mirror Neurons' },
      { name: 'Teach Diagram', activity: 'Teach Diagram to Personas', time: 15, output: 'Dual Pathways' },
      { name: 'Teach Guide', activity: 'Teach Guide to Personas', time: 15, output: 'Error Detection' },
      { name: 'Teach Quiz', activity: 'Teach Quiz to Personas', time: 15, output: 'Retrieval Reinforcement' },
      { name: 'Teach Reflect', activity: 'Teach Reflection to Personas', time: 15, output: 'Metacognition' },
      { name: 'Perspective', activity: 'Role-Play Reversal', time: 15, output: 'Neural Flexibility' }
    ]
  },
  MLF_S_Double_Plus: {
    name: 'MLF: S++ Level (Spaced)',
    techniques: [
      { name: 'Planning', activity: 'Create Spacing Schedule', time: 10, output: 'PFC Planning' },
      { name: 'D3 Review', activity: 'Day 3 Summary Recall', time: 10, output: 'LTP Strength' },
      { name: 'D7 Review', activity: 'Day 7 Diagram Recall', time: 10, output: 'Spaced Recall' },
      { name: 'D14 Review', activity: 'Day 14 Guide Recall', time: 15, output: 'Neocortical Transfer' },
      { name: 'D30 Review', activity: 'Day 30 Quiz Recall', time: 20, output: 'Myelination' },
      { name: 'D60 Review', activity: 'Day 60 Reflection Recall', time: 20, output: 'Automaticity' },
      { name: 'D90 Review', activity: 'Day 90 Combined Recall', time: 30, output: 'Permanent Storage' }
    ]
  },
  MLF_S_Triple_Plus: {
    name: 'MLF: S+++ Level (Identity)',
    techniques: [
      { name: 'Invitation', activity: 'Identity Statement', time: 30, output: 'Self-Concept' },
      { name: 'Immersion', activity: 'Scenario Living (4 Weeks)', time: 60, output: 'Experiential' },
      { name: 'Discovery', activity: 'Build Own Tools', time: 60, output: 'Creation Pathways' },
      { name: 'Collaboration', activity: 'AI Problem Solving', time: 60, output: 'Integration' },
      { name: 'Creation', activity: 'Create New Asset', time: 120, output: 'Novel Pathways' },
      { name: 'Legacy', activity: 'Build Scaling System', time: 120, output: 'Reinforcement' }
    ]
  }
};

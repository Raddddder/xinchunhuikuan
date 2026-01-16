export interface Question {
  id: number;
  text: string;
  isTrue: boolean; // true if the statement is correct ("Truth"), false if it is a lie ("Nonsense")
  explanation: string;
  category: 'Anti-Fraud' | 'Compliance' | 'WeChat';
}

export type GameState = 'start' | 'playing' | 'result';

export interface AnswerRecord {
  questionId: number;
  questionText: string;
  isCorrect: boolean;
  userChoice: boolean; // What the user clicked
  explanation: string;
}

export type FeedbackType = 'correct' | 'incorrect' | null;
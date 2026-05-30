/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'hy' | 'es' | 'en';

export interface Explanation {
  hy: string;
  es: string;
  en: string;
}

export interface QuizQuestion {
  id: string;
  sentence: string; // The Spanish sentence with a blank (e.g. "Voy ___ la biblioteca")
  translation: Explanation; // Translation of the sentence
  options: string[]; // Answer options (e.g. ["a", "en", "de", "con"])
  correctAnswer: string;
  explanation: Explanation; // Explanation of the grammatical rule for this question
  hint?: Explanation;
}

export interface GameMode {
  id: string;
  title: Explanation;
  description: Explanation;
  blueprint: Explanation; // Technical grammar explanation (blueprint)
  questions: QuizQuestion[];
  sceneType: 'wall' | 'crane' | 'mixer' | 'bridge' | 'skyscraper' | 'finishing';
}

export interface UserStats {
  score: number;
  completedGames: { [gameId: string]: number }; // percentage completed or highscore
  bricksLaid: number;
}

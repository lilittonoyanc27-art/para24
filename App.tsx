/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './Header';
import GameSelectionYard from './GameSelectionYard';
import ThreeDActiveScene from './ThreeDActiveScene';
import QuestionBox from './QuestionBox';
import BlueprintModal from './BlueprintModal';
import AIArchitect from './AIArchitect';
import { SPANISH_GAMES_DATA } from './spanishGamesData';
import { GameMode, Language, UserStats } from './types';
import { CheckCircle, Medal, ArrowLeft, RefreshCw, Star, Info, HardHat, FileText, Zap } from 'lucide-react';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('hy');
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<{ [questionId: string]: { isCorrect: boolean; selected: string } }>({});
  const [selectedBlueprint, setSelectedBlueprint] = useState<GameMode | null>(null);
  const [isAIArchitectOpen, setIsAIArchitectOpen] = useState(false);

  // Initialize stats from localStorage
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('spanish_builder_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error('Error parsing stats:', err);
      }
    }
    return {
      score: 0,
      completedGames: {},
      bricksLaid: 0,
    };
  });

  // Save stats to localStorage on modification
  useEffect(() => {
    localStorage.setItem('spanish_builder_stats', JSON.stringify(stats));
  }, [stats]);

  const activeGame = SPANISH_GAMES_DATA.find((g) => g.id === activeGameId) || null;

  const handleSelectGame = (gameId: string) => {
    setActiveGameId(gameId);
    setCurrentQuestionIndex(0);
    setAnswersHistory({});
    // Open blueprint on entry so they get terms beforehand
    const game = SPANISH_GAMES_DATA.find((g) => g.id === gameId);
    if (game) {
      setSelectedBlueprint(game);
    }
  };

  const handleBackToYard = () => {
    setActiveGameId(null);
  };

  const handleAnswerSelected = (selected: string, isCorrect: boolean) => {
    if (!activeGame) return;
    const currentQ = activeGame.questions[currentQuestionIndex];

    setAnswersHistory((prev) => ({
      ...prev,
      [currentQ.id]: { isCorrect, selected },
    }));

    setStats((prev) => {
      const isFirstAnswer = !prev.completedGames[activeGame.id];
      const newScore = isCorrect ? prev.score + 25 : prev.score;
      const newBricks = isCorrect ? prev.bricksLaid + 1 : prev.bricksLaid;

      return {
        ...prev,
        score: newScore,
        bricksLaid: newBricks,
      };
    });
  };

  const handleNextQuestion = () => {
    if (!activeGame) return;
    const isLast = currentQuestionIndex === activeGame.questions.length - 1;

    if (isLast) {
      // Calculate completion score ratio
      const questionsCount = activeGame.questions.length;
      const currentAnswers = { ...answersHistory };
      const correctAnswersCount = Object.keys(currentAnswers).filter((key) => currentAnswers[key].isCorrect).length;
      const scoreRatio = Math.round((correctAnswersCount / questionsCount) * 100);

      setStats((prev) => {
        const highestScore = prev.completedGames[activeGame.id] || 0;
        const finalScoreRecord = Math.max(highestScore, scoreRatio);

        return {
          ...prev,
          completedGames: {
            ...prev.completedGames,
            [activeGame.id]: finalScoreRecord,
          },
        };
      });

      setCurrentQuestionIndex(currentQuestionIndex + 1); // trigger sign off slide
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleResetStats = () => {
    setStats({
      score: 0,
      completedGames: {},
      bricksLaid: 0,
    });
    localStorage.removeItem('spanish_builder_stats');
    setActiveGameId(null);
  };

  const handleRestartGame = () => {
    setCurrentQuestionIndex(0);
    setAnswersHistory({});
  };

  // UI translations vocabulary
  const dictionary = {
    lotSignedOffTitle: {
      hy: 'ՆԱԽԱԳԻԾԸ ՀԱՆՁՆՎԱԾ Է՛',
      es: '¡PROYECTO ENTREGADO!',
      en: 'SECTOR COMPILATION COMPLETE!',
    },
    lotSignedOffDesc: {
      hy: 'Գերազանց աշխատանք: Այս հատվածի բոլոր շինարարական կառուցվածքները հաջողությամբ մոնտաժվել և ամրացվել են:',
      es: '¡Excelente trabajo! Todas las estructuras de construcción de este sector han sido montadas y aseguradas con éxito.',
      en: 'Phenomenal engineering! All building blocks within this grid have been laid down and certified.',
    },
    metricsLabel: {
      hy: 'Որակի ցուցանիշներ',
      es: 'Métricas de calidad',
      en: 'Structural Metrics',
    },
    correctAnswers: {
      hy: 'Ճիշտ տեղադրված բլոկներ',
      es: 'Bloques correctamente colocados',
      en: 'Perfect Solid Blocks',
    },
    constructionGrade: {
      hy: 'Կառույցի հուսալիության գնահատական',
      es: 'Grado de integridad final',
      en: 'Final Integrity Grade',
    },
    returnYard: {
      hy: 'Վերադառնալ հարթակ',
      es: 'Volver al patio',
      en: 'Return to Development Site',
    },
    tryAgain: {
      hy: 'Վերակառուցել հատվածը',
      es: 'Reconstruir sector',
      en: 'Deconstruct & Retry',
    }
  };

  const activeGameCompleted = activeGame && currentQuestionIndex >= activeGame.questions.length;

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-800 flex flex-col font-sans select-text">
      {/* Dynamic Header with Live Stats */}
      <Header
        currentLanguage={currentLanguage}
        onChangeLanguage={setCurrentLanguage}
        stats={stats}
        onResetStats={handleResetStats}
        activeGameId={activeGameId}
        onBackToYard={handleBackToYard}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col justify-start relative">
        {!activeGameId ? (
          /* Scene Selector Hub Yard */
          <GameSelectionYard
            games={SPANISH_GAMES_DATA}
            currentLanguage={currentLanguage}
            stats={stats}
            onSelectGame={handleSelectGame}
            onSelectBlueprint={setSelectedBlueprint}
          />
        ) : activeGameCompleted ? (
          /* Game completion certificate card */
          <div className="w-full max-w-3xl mx-auto bg-white border-4 border-emerald-500 rounded-3xl p-6 md:p-10 text-center space-y-6 shadow-[8px_8px_0px_#94a3b8] relative overflow-hidden text-slate-850" id="completion-room">
            {/* Visual safety stripe decoration */}
            <div className="absolute top-0 inset-x-0 h-3 bg-stripes-success" />

            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center border-2 border-emerald-500 shadow-md animate-pulse">
              <Medal className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-black font-sans text-emerald-600 tracking-tight">
                {dictionary.lotSignedOffTitle[currentLanguage]}
              </h2>
              <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                {dictionary.lotSignedOffDesc[currentLanguage]}
              </p>
            </div>

            {/* Structured progress and correctness results */}
            <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-250 text-left max-w-lg mx-auto font-mono text-xs md:text-sm space-y-3.5">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 font-extrabold uppercase block text-center border-b border-slate-200 pb-2">
                📋 {dictionary.metricsLabel[currentLanguage]}
              </span>
              <div className="flex items-center justify-between text-slate-700">
                <span>{dictionary.correctAnswers[currentLanguage]}:</span>
                <span className="text-emerald-600 font-bold">
                  {Object.keys(answersHistory).filter((key) => answersHistory[key].isCorrect).length} / {activeGame.questions.length}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span>{dictionary.constructionGrade[currentLanguage]}:</span>
                <span className="text-orange-600 font-black animate-pulse">
                  {Object.keys(answersHistory).filter((key) => answersHistory[key].isCorrect).length === activeGame.questions.length
                    ? '🏗️ OUTSTANDING / ՍԵՅՍՄԱԿԱՅՈՒՆ'
                    : '🔧 SATISFACTORY / ԿԱՐԻՔ ՈՒՆԻ ԱՄՐԱՑՄԱՆ'}
                </span>
              </div>
            </div>

            {/* Certificate controls */}
            <div className="flex items-center justify-center flex-wrap gap-4 pt-4">
              <button
                onClick={handleRestartGame}
                className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 border-2 border-slate-300 font-mono text-xs font-black py-3 px-6 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                id="retry-sector-btn"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{dictionary.tryAgain[currentLanguage]}</span>
              </button>

              <button
                onClick={handleBackToYard}
                className="bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-black py-3.5 px-8 rounded-xl flex items-center gap-1.5 transition-colors border-b-4 border-orange-700 shadow-[0_3px_0_#c2410c] cursor-pointer"
                id="signoff-return-btn"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{dictionary.returnYard[currentLanguage]}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Interactive Building Interface */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="active-gameplay-yard">
            {/* 3D construction visual scene area */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-white border-2 border-slate-300 p-4 rounded-xl mb-4 text-xs font-mono text-slate-600 leading-snug flex items-center gap-2 shadow-[4px_4px_0px_#cbd5e1]">
                <Info className="w-4 h-4 text-orange-500 shrink-0" />
                <span>
                  {currentLanguage === 'es'
                    ? 'Aprende español respondiendo a las preguntas de gramática. Utiliza la ayuda del Asistente IA.'
                    : currentLanguage === 'en'
                    ? 'Learn Spanish by answering grammar queries correctly. Summon the AI Assistant for custom tips.'
                    : 'Սովորեք իսպաներեն՝ պատասխանելով քերականական հարցերին։ Օգտագործեք ԱԲ Օգնականի խորհուրդները։'}
                </span>
              </div>

              <div className="flex-1">
                <ThreeDActiveScene
                  sceneType={activeGame.sceneType}
                  questions={activeGame.questions}
                  currentQuestionIndex={currentQuestionIndex}
                  answersHistory={answersHistory}
                  currentLanguage={currentLanguage}
                />
              </div>
            </div>

            {/* Active exercise layout area */}
            <div className="lg:col-span-7">
              <QuestionBox
                question={activeGame.questions[currentQuestionIndex]}
                currentLanguage={currentLanguage}
                onAnswerSelected={handleAnswerSelected}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === activeGame.questions.length - 1}
                gameId={activeGame.id}
              />
            </div>
          </div>
        )}
      </main>

      {/* Blueprint Grammar Instructions overlay sheet */}
      <BlueprintModal
        isOpen={!!selectedBlueprint}
        onClose={() => setSelectedBlueprint(null)}
        title={selectedBlueprint ? selectedBlueprint.title[currentLanguage] : ''}
        blueprintContent={selectedBlueprint ? selectedBlueprint.blueprint[currentLanguage] : ''}
        currentLanguage={currentLanguage}
      />

      {/* AI custom prompt Architect sidebar */}
      <AIArchitect
        isOpen={isAIArchitectOpen}
        onClose={() => setIsAIArchitectOpen(false)}
        currentLanguage={currentLanguage}
      />

      {/* Warning layout strip footer decoration */}
      <footer className="w-full bg-[#0f172a] text-slate-500 p-4 font-mono text-[9px] text-center border-t border-slate-900 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 z-40 relative">
        <span>© 2026 SPANISH BUILDER 3D. CRAFTED FOR SECURE BILINGUAL GRAMMAR EDUCATION.</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" />
          <span>SPANISH-ARMENIAN FULLSTACK INFRASTRUCTURE IS GREEN</span>
        </div>
      </footer>
    </div>
  );
}

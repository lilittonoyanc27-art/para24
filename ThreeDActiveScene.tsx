/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Truck, Hammer, CheckSquare, Sun, Wrench, ArrowUp, Zap, Cloud, Home } from 'lucide-react';
import { QuizQuestion, Language } from './types';

interface ThreeDActiveSceneProps {
  sceneType: 'wall' | 'crane' | 'mixer' | 'bridge' | 'skyscraper' | 'finishing';
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answersHistory: { [questionId: string]: { isCorrect: boolean; selected: string } };
  currentLanguage: Language;
}

export default function ThreeDActiveScene({
  sceneType,
  questions,
  currentQuestionIndex,
  answersHistory,
  currentLanguage,
}: ThreeDActiveSceneProps) {

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answersHistory).length;
  const correctCount = Object.values(answersHistory).filter(a => a.isCorrect).length;

  const dictionary = {
    progress: {
      hy: 'Խաղի ընթացքը՝',
      es: 'Progreso del juego:',
      en: 'Game progress:',
    },
    girders: {
      hy: 'Կամրջի ամուր հեծանները',
      es: 'Vigas coloridas del puente',
      en: 'Colorful bridge beams',
    },
    floors: {
      hy: 'Կառուցված հարկեր',
      es: 'Pisos terminados',
      en: 'Stories built',
    },
    elChute: {
      hy: 'Արական բաժին (EL) 👦',
      es: 'Embudo MASCULINO (EL) 👦',
      en: 'EL Funnel (Masculine) 👦',
    },
    laChute: {
      hy: 'Իգական բաժին (LA) 👧',
      es: 'Embudo FEMENINO (LA) 👧',
      en: 'LA Funnel (Feminine) 👧',
    },
    statusStable: {
      hy: 'ԱՄՈՒՐ ԿԱՌՈՒՅՑ ✨',
      es: 'CONSTRUCCIÓN SÓLIDA ✨',
      en: 'ROCK-SOLID BUILD ✨',
    },
    statusDanger: {
      hy: 'ԱՆԿԱՅՈՒՆ 🧱 ԿԱՐԻՔ ՈՒՆԻ ՎԵՐԱՆՈՐՈԳՄԱՆ',
      es: '¿ESTRUCTURA INESTABLE? 🛠️',
      en: 'UNSTEADY PIECES 🛠️',
    }
  };

  // 1. CARTOON BRICK WALL BUILDER
  const render3DWall = () => {
    return (
      <div className="relative w-full h-full flex flex-col justify-end items-center px-4" id="scene-wall-container">
        {/* Colorful Sky Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-450 via-sky-300 to-sky-100 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between p-4">
            <div className="animate-bounce duration-3000">
              <Cloud className="w-10 h-10 text-white/80 fill-white/10" />
            </div>
            <div className="animate-spin-slow">
              <Sun className="w-14 h-14 text-yellow-400 fill-yellow-250 animate-pulse" />
            </div>
          </div>
          <div className="flex justify-around opacity-30">
            <Cloud className="w-8 h-8 text-white/50" />
            <Cloud className="w-12 h-12 text-white/40" />
          </div>
        </div>

        {/* Cute builder helper character */}
        <div className="absolute left-4 bottom-10 z-10 flex flex-col items-center select-none pointer-events-none">
          <div className="bg-amber-100 px-2 py-1 rounded-xl border border-amber-300 shadow text-[9px] text-slate-800 font-bold mb-1 relative animate-bounce animate-duration-1000">
            ¡Let's build! 👷‍♂️
            <div className="w-2 h-2 bg-amber-100 border-b border-r border-amber-300 absolute left-2 -bottom-1 transform rotate-45"></div>
          </div>
          <span className="text-3xl filter drop-shadow">👷‍♂️</span>
        </div>

        {/* Scaffold design background */}
        <div className="absolute inset-x-12 bottom-0 top-10 border-x-4 border-dashed border-sky-400/30 flex justify-between pointer-events-none">
          <div className="w-1 bg-yellow-500/20 h-full"></div>
          <div className="w-1 bg-yellow-500/20 h-full"></div>
        </div>

        {/* Bricks Grid (3D perspective clay blocks) */}
        <div className="w-full max-w-sm flex flex-wrap justify-center content-end gap-x-3 gap-y-2 pb-3 min-h-[160px] select-none scale-100 z-10">
          {questions.map((q, idx) => {
            const state = answersHistory[q.id];
            const isAnswered = !!state;
            const isCorrect = state?.isCorrect;
            const isCurrent = idx === currentQuestionIndex;

            let brickStyle = 'bg-slate-700/85 border-slate-600 text-slate-400';
            let brickContents = (
              <span className="text-[10px] font-mono opacity-50">L{idx + 1} 🧱</span>
            );

            if (isAnswered) {
              if (isCorrect) {
                brickStyle = 'bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 border-yellow-200 text-slate-900 font-black shadow-md shadow-orange-500/30 ring-2 ring-yellow-300';
                brickContents = (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] font-mono tracking-tighter text-amber-950">LEVEL {idx + 1} ✨</span>
                    <span className="text-[11px] font-sans font-black truncate max-w-full px-1 flex items-center gap-1">
                      🧱 {state.selected}
                    </span>
                  </div>
                );
              } else {
                brickStyle = 'bg-gradient-to-tr from-red-850 to-red-700 border-red-500 text-red-200 opacity-70 line-through';
                brickContents = (
                  <div className="flex flex-col items-center justify-center scale-95">
                    <span className="text-[8px] font-mono text-red-400">CRACKED L{idx + 1}</span>
                    <span className="text-[10px] font-sans font-bold flex items-center gap-1">
                      💥 {state.selected}
                    </span>
                  </div>
                );
              }
            } else if (isCurrent) {
              brickStyle = 'bg-amber-400 border-yellow-300 text-slate-950 font-black ring-4 ring-yellow-400/40 animate-pulse border-2';
              brickContents = (
                <div className="flex flex-col items-center justify-center animate-bounce">
                  <span className="text-[8px] font-black uppercase text-amber-900 tracking-wider">ACTIVE</span>
                  <span className="text-[11px] font-black">🛠️ PLACE BLOCK</span>
                </div>
              );
            }

            return (
              <div
                key={q.id}
                className={`w-[45%] h-11 rounded-xl flex flex-col justify-center items-center relative text-center overflow-hidden border-2 transition-all duration-350 transform ${
                  isCurrent ? 'scale-105 -translate-y-1.5 shadow-lg' : 'hover:scale-[1.03]'
                } ${brickStyle}`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '500px',
                  boxShadow: isCurrent ? '0 10px 15px -3px rgba(234, 179, 8, 0.4)' : '0 4px 6px -1px rgba(0,0,0,0.2)'
                }}
                id={`brick-visual-${q.id}`}
              >
                {/* 3D highlights */}
                <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-black/15"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                {brickContents}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // 2. FUN TOY TOWER CRANE HOISTING CARGO
  const render3DCrane = () => {
    const currentHeight = answeredCount * 14;

    return (
      <div className="relative w-full h-full flex flex-row items-end justify-between px-4 overflow-hidden" id="scene-crane-container">
        {/* Sunny and cloudy background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-indigo-900/40 to-slate-900 pointer-events-none">
          <div className="absolute top-4 left-24 animate-pulse">
            <Sun className="w-10 h-10 text-amber-400" />
          </div>
          <div className="absolute top-6 right-8">
            <Cloud className="w-12 h-12 text-blue-200/20" />
          </div>
        </div>

        {/* Tower Crane Structure Drawings */}
        <div className="absolute left-8 bottom-0 top-6 w-9 bg-yellow-500 border-x-2 border-yellow-600 flex flex-col justify-between items-center py-2 pointer-events-none z-10 shadow-lg">
          <div className="h-full w-0.5 bg-yellow-700/40 border-r border-yellow-800/40"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-0.5 bg-yellow-750 transform rotate-12 my-3 origin-center"></div>
          ))}
          {/* Operator cockpit cabin */}
          <div className="absolute left-0 -top-4 w-9 h-6 bg-slate-800 border-2 border-yellow-400 rounded-md flex items-center justify-center shadow">
            <span className="text-[10px]">👷‍♂️</span>
          </div>
        </div>

        {/* Jib horizontally across the top */}
        <div className="absolute left-0 right-0 top-11 h-4 bg-gradient-to-r from-yellow-400 to-[#f59e0b] border-b-2 border-yellow-700 flex justify-between items-center px-4 z-20 shadow-xl">
          <div className="font-sans font-black text-[9px] text-yellow-950 uppercase tracking-widest pl-12">
            🏗️ PLAYFUL CRANE MAX-T
          </div>
          {/* Drifting Clouds on jib level */}
          <span className="text-xs">☁️</span>
        </div>

        {/* Rope with hook carrying everyday items */}
        <div 
          className="absolute right-1/4 top-13 bottom-[180px] w-1 bg-slate-400 flex flex-col justify-end items-center transition-all duration-500"
          style={{ bottom: `${currentHeight + 60}px` }}
        >
          {/* Cable pulley with tiny spinning tool */}
          <div className="w-6 h-6 bg-yellow-500 border-2 border-orange-500 rounded-md flex items-center justify-center transform translate-y-3 shadow shadow-yellow-500">
            <span className="text-[10px] animate-bounce">📦</span>
          </div>
        </div>

        {/* Dynamic stacked container boxes, representing everyday themes */}
        <div className="w-1/3 self-end flex flex-col-reverse items-center gap-1.5 pl-6 z-15 select-none pb-4 scale-100 origin-bottom">
          {/* Strong concrete colorful pedestal */}
          <div className="w-[110%] bg-gradient-to-r from-teal-700 to-emerald-600 border-t-2 border-cyan-400 h-6 text-center text-[10px] font-bold text-teal-100 flex items-center justify-center rounded-xl shadow-md border">
            🌳 SOIL PLATFORM 🌳
          </div>
          
          {questions.map((q, idx) => {
            const state = answersHistory[q.id];
            const isAnswered = !!state;
            const isCorrect = state?.isCorrect;
            const isCurrent = idx === currentQuestionIndex;

            // Give color combinations for fun
            let containerBg = 'bg-slate-800/60 border-slate-700 text-slate-500 border-dashed';
            let containerLabel = `BOX ${idx + 1} 📦`;

            if (isAnswered) {
              if (isCorrect) {
                containerBg = 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 border-cyan-200 text-slate-900 font-extrabold shadow shadow-cyan-400/40 animate-pulse';
                containerLabel = `🎁 ${state.selected}`;
              } else {
                containerBg = 'bg-gradient-to-r from-red-900 to-rose-950 border-red-500 text-red-300 opacity-60';
                containerLabel = `💥 ${state.selected}`;
              }
            } else if (isCurrent) {
              containerBg = 'bg-yellow-400 border-yellow-200 text-slate-950 font-black animate-bounce ring-4 ring-yellow-400/40 border-2';
              containerLabel = '🏗️ HOISTING...';
            }

            return (
              <div 
                key={q.id}
                className={`w-full h-9 rounded-xl border flex flex-col justify-center items-center text-xs text-center font-sans overflow-hidden transition-all duration-300 transform ${
                  isCurrent ? 'scale-105 shadow-lg' : ''
                } ${containerBg}`}
                id={`container-block-${q.id}`}
              >
                <div className="text-[10px] font-black truncate max-w-full px-1 flex items-center gap-1">
                  {containerLabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun decorative bird and statistics */}
        <div className="text-[9px] text-slate-400 border border-slate-700/80 bg-slate-950/80 p-2 rounded-xl flex flex-col gap-1 pb-4 leading-normal max-w-[110px] select-none shadow">
          <span className="font-bold text-yellow-400 flex items-center gap-1">🐦 CRANE CHIRP:</span>
          <span>"Looking beautiful! {answeredCount} pieces loaded on site now."</span>
        </div>
      </div>
    );
  };

  // 3. COLORFUL CEMENT CONCRETE MIXER + GENDER SLOTS
  const render3DMixer = () => {
    return (
      <div className="relative w-full h-full flex flex-col justify-end items-center px-4 overflow-hidden" id="scene-mixer-container">
        {/* Animated back stars & clouds */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-purple-950 pointer-events-none opacity-90" />

        {/* Concrete mixer truck on top-left */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-800/90 p-2.5 rounded-2xl border border-slate-700 text-[10px] font-sans text-yellow-400 shadow-md">
          <Truck className="w-5 h-5 text-yellow-400 animate-bounce" />
          <div>
            <div className="font-extrabold text-white">GENDER MIXER 2000</div>
            <div className="text-slate-400 text-[9px]">FEED DAILY NOUNS</div>
          </div>
        </div>

        {/* Input chute/box in the center */}
        <div className="absolute top-[76px] left-1/2 -translate-x-1/2 bg-slate-900 border-2 border-indigo-500 p-2.5 rounded-2xl flex flex-col items-center justify-center font-sans shadow-2xl w-48 text-center animate-pulse z-20">
          <span className="text-[8px] font-mono text-cyan-400 tracking-widest uppercase mb-1">🎮 DIRECTIVE</span>
          <span className="text-white text-base font-black flex items-center gap-1.5">
            ✨ {currentQuestionIndex < totalQuestions ? questions[currentQuestionIndex].sentence.split(' ')[0] : 'PERFECT!'} ✨
          </span>
        </div>

        {/* 2 Cartoon buckets representation */}
        <div className="w-full grid grid-cols-2 gap-4 pb-4 max-w-sm select-none mb-1 text-center z-10">
          {/* EL Bin (MASCULINE) */}
          <div className="bg-slate-950/90 border-2 border-amber-500/50 rounded-2xl p-3 flex flex-col items-center min-h-[140px] hover:border-amber-400 transition-all shadow-xl relative justify-between">
            <div className="absolute -top-3.5 bg-gradient-to-tr from-amber-600 to-orange-400 text-white font-sans font-black text-[10px] px-3.5 py-1 rounded-full border border-amber-300 shadow">
              EL (👦 MASC)
            </div>
            
            {/* Liquid tank indicators */}
            <div className="w-full flex-1 flex flex-col justify-end gap-1.5 p-1 mt-3">
              {[...Array(5)].map((_, i) => {
                const filled = correctCount > i;
                return (
                  <div 
                    key={i} 
                    className={`h-4 w-full rounded-md border transition-all duration-500 flex items-center justify-center ${
                      filled 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-amber-300 shadow shadow-orange-500 animate-pulse' 
                      : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    {filled && <span className="text-[8px]">⭐</span>}
                  </div>
                );
              })}
            </div>
            <span className="text-[9px] font-sans text-amber-200 mt-2 font-black">{dictionary.elChute[currentLanguage]}</span>
          </div>

          {/* LA Bin (FEMININE) */}
          <div className="bg-slate-950/90 border-2 border-cyan-500/50 rounded-2xl p-3 flex flex-col items-center min-h-[140px] hover:border-cyan-400 transition-all shadow-xl relative justify-between">
            <div className="absolute -top-3.5 bg-gradient-to-tr from-cyan-600 to-teal-400 text-slate-900 font-sans font-black text-[10px] px-3.5 py-1 rounded-full border border-cyan-200 shadow">
              LA (👧 FEM)
            </div>

            {/* Liquid tank indicators */}
            <div className="w-full flex-1 flex flex-col justify-end gap-1.5 p-1 mt-3">
              {[...Array(5)].map((_, i) => {
                const filled = correctCount > i;
                return (
                  <div 
                    key={i} 
                    className={`h-4 w-full rounded-md border transition-all duration-500 flex items-center justify-center ${
                      filled 
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 border-emerald-300 shadow shadow-cyan-500 animate-pulse' 
                      : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    {filled && <span className="text-[8px]">💗</span>}
                  </div>
                );
              })}
            </div>
            <span className="text-[9px] font-sans text-cyan-200 mt-2 font-black">{dictionary.laChute[currentLanguage]}</span>
          </div>
        </div>
      </div>
    );
  };

  // 4. CANYON MOUNTAINS AND GLOWING BRIDGE
  const render3DBridge = () => {
    return (
      <div className="relative w-full h-full flex flex-col justify-end items-center px-4 overflow-hidden" id="scene-bridge-container">
        {/* River Canyon Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-indigo-950 pointer-events-none" />

        {/* Deep blue glowing river flowing below */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-blue-700 via-blue-900 to-indigo-950 flex justify-center items-center select-none">
          <span className="text-xl animate-bounce">⛵</span>
          <span className="text-xs text-blue-300/40 font-mono tracking-widest pl-4">🌊 PRECIOSO RÍO DE SEVILLA 🌊</span>
          <span className="text-sm">🐟</span>
        </div>

        {/* Left & Right rock mountain cliffs with trees */}
        <div className="absolute left-0 top-14 bottom-10 w-16 bg-gradient-to-r from-slate-900 to-slate-800 border-r-4 border-emerald-500/60 flex flex-col justify-around text-[9px] font-bold text-slate-400 select-none p-1 z-10">
          <span>🌲</span>
          <div className="w-10 h-10 border-2 border-emerald-500/40 rounded-xl bg-slate-950 flex items-center justify-center font-black text-emerald-400">LA</div>
          <span>🌲</span>
        </div>
        <div className="absolute right-0 top-14 bottom-10 w-16 bg-gradient-to-l from-slate-900 to-slate-800 border-l-4 border-amber-500/60 flex flex-col justify-around text-[9px] font-bold text-slate-400 select-none p-1 z-10 text-right">
          <span>🌲</span>
          <div className="w-10 h-10 border-2 border-amber-500/40 rounded-xl bg-slate-950 flex items-center justify-center font-black text-amber-400">EL</div>
          <span>🌲</span>
        </div>

        {/* Girders bridging the center gaps */}
        <div className="w-full max-w-xs flex flex-col justify-center items-center h-48 relative mb-6">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-dashed border-t border-slate-650"></div>

          <div className="w-full grid grid-cols-1 gap-2 p-3 bg-slate-950/85 rounded-2xl border border-slate-800 select-none scale-100 z-20 shadow-2xl">
            <span className="text-[9px] font-sans text-cyan-400 font-extrabold uppercase tracking-widest text-center">
              🌉 {dictionary.girders[currentLanguage]} 🌉
            </span>
            <div className="flex gap-1.5 justify-center mt-1">
              {questions.map((q, idx) => {
                const state = answersHistory[q.id];
                const isAnswered = !!state;
                const isCorrect = state?.isCorrect;
                const isCurrent = idx === currentQuestionIndex;

                let beamStyle = 'bg-slate-900 border-slate-800 text-slate-600';
                let beamSymbol = `B${idx + 1}`;

                if (isAnswered) {
                  if (isCorrect) {
                    beamStyle = 'bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 border-yellow-250 text-slate-950 shadow shadow-orange-500 animate-pulse';
                    beamSymbol = `${state.selected} 🚗`;
                  } else {
                    beamStyle = 'bg-red-950 border-red-500 text-red-400 opacity-60';
                    beamSymbol = '❌';
                  }
                } else if (isCurrent) {
                  beamStyle = 'bg-yellow-400 border-yellow-200 text-slate-950 font-black animate-bounce ring-4 ring-yellow-400/30';
                  beamSymbol = '🔧';
                }

                return (
                  <div 
                    key={q.id}
                    className={`flex-1 h-12 rounded-xl border-2 flex flex-col items-center justify-between py-1 text-center font-black text-[10px] transition-all transform ${beamStyle}`}
                    id={`bridge-beam-${q.id}`}
                  >
                    <span className="opacity-80 text-[8px]">LEVEL {idx + 1}</span>
                    <span className="block truncate font-black w-full text-[9px] px-0.5">
                      {beamSymbol}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Integrity Metric HUD */}
          <div className="w-fit bg-slate-950/95 p-2 border border-slate-850 rounded-xl text-[9px] font-sans mt-3 text-cyan-300 z-20 text-center shadow-lg">
            <span className="font-bold tracking-wider">BRIDGE STATUS REPORT:</span>
            <div className="font-black text-yellow-400">
              {correctCount === totalQuestions ? '🌉 PRECIOSO! ALL BEAMS UNLOCKED' : `🧩 COMPLETED: ${correctCount} / ${totalQuestions}`}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 5. SUNNY SKYSCRAPER WITH GLASS WINDOW INSIGHTS
  const render3DSkyscraper = () => {
    const completionPercent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

    return (
      <div className="relative w-full h-full flex flex-col justify-end items-center px-4 overflow-hidden" id="scene-skyscraper-container">
        {/* Sky banner with drifting clouds */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-indigo-900 pointer-events-none" />

        {/* Crane holding next block at the top */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-950 border-2 border-yellow-400 px-3.5 py-1 rounded-full text-[9px] font-sans text-yellow-400 font-extrabold z-20 shadow-xl select-none animate-pulse">
          <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
          <span>SKY_HOIST: FLOORS CONSTRUCTED = {answeredCount}</span>
        </div>

        {/* Skyscraper Frame */}
        <div className="w-52 bg-slate-950/95 border-2 border-slate-800 rounded-t-3xl min-h-[160px] max-h-[175px] p-3 flex flex-col-reverse justify-start gap-1 pb-4 select-none relative shadow-2xl scale-100 origin-bottom">
          
          {questions.map((q, idx) => {
            const state = answersHistory[q.id];
            const isAnswered = !!state;
            const isCorrect = state?.isCorrect;
            const isCurrent = idx === currentQuestionIndex;

            let floorStyle = 'bg-slate-900/60 border-slate-950 text-slate-705';
            let floorLabel = '---';

            if (isAnswered) {
              if (isCorrect) {
                // Glow blue representing luxury windows
                floorStyle = 'bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 border-cyan-300 text-slate-950 font-black shadow-inner';
                floorLabel = `${state.selected} 🐱`;
              } else {
                floorStyle = 'bg-red-950/70 border-red-500/50 text-red-300 opacity-60';
                floorLabel = '🚨 SHAKY';
              }
            } else if (isCurrent) {
              floorStyle = 'bg-yellow-400 border-yellow-250 text-slate-950 font-black animate-pulse';
              floorLabel = '🚧 WORKING';
            }

            return (
              <div 
                key={q.id}
                className={`w-full h-5 rounded-lg border text-[9px] font-sans flex items-center justify-between px-2.5 transition-all duration-300 ${floorStyle}`}
                id={`skyscraper-floor-${q.id}`}
              >
                <span className="opacity-85 text-[8px] font-black">STORY {idx + 1}</span>
                <span className="font-extrabold truncate max-w-[90px] text-[9px] text-right">
                  {floorLabel}
                </span>
              </div>
            );
          })}
        </div>

        {/* Built progress HUD */}
        <div className="absolute bottom-3 right-3 bg-slate-950/90 p-2.5 rounded-xl border border-slate-850 font-sans text-[9px] text-slate-300 select-none text-right shadow shadow-emerald-500/20">
          <span>{dictionary.floors[currentLanguage]}: {correctCount} / {totalQuestions}</span>
          <div className="font-black text-emerald-400">{completionPercent.toFixed(0)}% REALIZED</div>
        </div>
      </div>
    );
  };

  // 6. ADORABLE ISOMETRIC MODULAR COZY HOUSE
  const render3DFinishing = () => {
    // Modular list of home items
    const items = [
      { name: { hy: 'Հիմք և կանաչ սողոն', es: 'Cimiento y césped', en: 'Foundation & lawn' }, color: 'bg-emerald-600 border-emerald-300 text-white', icon: '🌱' },
      { name: { hy: 'Հարմարավետ սյուներ', es: 'Paredes y columnas', en: 'Pillars & walls' }, color: 'bg-[#475569] border-[#64748b]', icon: '🚪' },
      { name: { hy: 'Մուտքի կամար', es: 'Arco elegante y farola', en: 'Cozy door arch' }, color: 'bg-orange-500 border-orange-300', icon: '💡' },
      { name: { hy: 'Փայլուն պատուհաններ', es: 'Ventanas brillantes', en: 'Glowing windows' }, color: 'bg-sky-400 border-sky-200', icon: '🪟' },
      { name: { hy: 'Պատշգամբի ծաղիկներ', es: 'Balcón florido', en: 'Balcony layers' }, color: 'bg-rose-500 border-rose-350', icon: '🌸' },
      { name: { hy: 'Տաք տանիք և ծխնելույզ', es: 'Tejado de tejas y chimenea', en: 'Tile roof & chimney' }, color: 'bg-[#0f172a] border-slate-700', icon: '🏡' },
    ];

    return (
      <div className="relative w-full h-full flex flex-col justify-end items-center px-4 overflow-hidden" id="scene-finishing-container">
        {/* Sunny garden sky theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-450 via-teal-100 to-emerald-50 pointer-events-none opacity-90" />

        {/* Finished milestone message */}
        {correctCount === totalQuestions ? (
          <div className="absolute top-10 flex flex-col items-center gap-1 bg-yellow-400 text-slate-950 text-xs font-sans font-black py-2 px-5 rounded-full border-2 border-white shadow-xl animate-bounce z-25">
            <Zap className="w-4 h-4 text-slate-900 animate-pulse inline-block" />
            <span>🎉 MILESTONE: DELIGHTFUL HOME BUILT! 🎉</span>
          </div>
        ) : (
          <div className="absolute top-10 flex items-center gap-1.5 bg-teal-500 border border-teal-200 text-slate-950 text-[10px] font-sans font-black px-3 py-1 rounded-full shadow select-none animate-pulse">
            <Home className="w-3.5 h-3.5 text-slate-950" />
            <span>STAGE: assembling parts ({correctCount} / {totalQuestions})</span>
          </div>
        )}

        {/* Beautiful Interactive Isometric house build stack */}
        <div className="w-44 bg-slate-950/85 p-4 rounded-3xl border border-dashed border-slate-800 flex flex-col gap-1 select-none min-h-[170px] max-h-[180px] justify-end animate-pulse mb-3 z-10 shadow-inner scale-100">
          {items.map((it, idx) => {
            const hasLayer = correctCount > idx;
            return (
              <div 
                key={idx}
                className={`w-full rounded-xl transition-all duration-500 border relative flex items-center justify-between px-2.5 ${
                  hasLayer 
                    ? `${it.color} font-black shadow-lg shadow-black/20 ring-1 ring-white/10` 
                    : 'bg-slate-900/10 border-slate-900 text-slate-700 line-through opacity-25'
                }`}
                style={{ height: `${22 + idx * 1.5}px` }}
                id={`house-layer-${idx}`}
              >
                {/* Highlight */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black/15"></div>
                
                {/* Name of finished block */}
                <span className="text-[8px] font-sans uppercase block tracking-tight leading-none">
                  {it.icon} {it.name[currentLanguage]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getActiveSceneRenderer = () => {
    switch (sceneType) {
      case 'wall':
        return render3DWall();
      case 'crane':
        return render3DCrane();
      case 'mixer':
        return render3DMixer();
      case 'bridge':
        return render3DBridge();
      case 'skyscraper':
        return render3DSkyscraper();
      case 'finishing':
        return render3DFinishing();
      default:
        return render3DWall();
    }
  };

  const hasIrregularity = answeredCount > correctCount;

  return (
    <div 
      className="p-4 bg-white rounded-2xl border-2 border-slate-300 shadow-[6px_6px_0px_#94a3b8] min-h-[220px] max-h-[260px] flex flex-col justify-between relative text-slate-800"
      id="isometric-visuals-panel"
    >
      {/* Top HUD bar with simplified game progress and beautiful lights */}
      <div className="flex items-center justify-between border-b pb-2 border-slate-200 select-none">
        <span className="text-[10px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping duration-1000 border border-amber-500" />
          {dictionary.progress[currentLanguage]} {answeredCount} / {totalQuestions}
        </span>
        <div 
          className={`px-3 py-0.5 rounded-lg text-[9px] font-black border uppercase flex items-center gap-1.5 ${
            hasIrregularity 
              ? 'bg-red-50 border-red-300 text-red-600 shadow shadow-red-100' 
              : 'bg-emerald-50 border-emerald-300 text-emerald-600 shadow shadow-emerald-100'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${hasIrregularity ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
          {hasIrregularity ? dictionary.statusDanger[currentLanguage] : dictionary.statusStable[currentLanguage]}
        </div>
      </div>

      {/* Main 3D graphic stage canvas */}
      <div className="flex-1 w-full bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden relative mt-2 min-h-[140px] flex items-center justify-center shadow-inner">
        {getActiveSceneRenderer()}
      </div>
    </div>
  );
}

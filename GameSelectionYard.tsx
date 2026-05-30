/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GameMode, Language, UserStats } from './types';
import { HardHat, Hammer, HelpCircle, Layers, CheckCircle, Flame, Target } from 'lucide-react';

interface GameSelectionYardProps {
  games: GameMode[];
  currentLanguage: Language;
  stats: UserStats;
  onSelectGame: (gameId: string) => void;
  onSelectBlueprint: (game: GameMode) => void;
}

export default function GameSelectionYard({
  games,
  currentLanguage,
  stats,
  onSelectGame,
  onSelectBlueprint,
}: GameSelectionYardProps) {

  const dictionary = {
    title: {
      hy: 'ԻՍՊԱՆԵՐԵՆԻ ՔԱՂԱՔԱՇԻՆԱԿԱՆ ՇԻՆՀՐԱՊԱՐԱԿ',
      es: 'SITIO DE CONSTRUCCIÓN DE GRAMÁTICA ESPAÑOLA',
      en: 'SPANISH GRAMMAR URBAN DEVELOPMENT PROJECT SITE',
    },
    subtitle: {
      hy: 'Ընտրեք 6 ակտիվ շինարարական նախագծերից մեկը՝ հիմքը դնելու և կանոնները սովորելու համար․',
      es: 'Seleccione uno de los 6 sectores de construcción activos para comenzar a estructurar los cimientos y dominar las reglas:',
      en: 'Select one of the 6 active construction sector lots to begin framing foundations and master grammar rules:',
    },
    blueprintBtn: {
      hy: '📐 Տեսնել Գծագիրը',
      es: '📐 Ver Plano',
      en: '📐 Read Blueprint',
    },
    buildBtn: {
      hy: '🏗️ Սկսել Կառուցումը',
      es: '🏗️ Comenzar Edificio',
      en: '🏗️ Start Framing',
    },
    completedLabel: {
      hy: 'Ավարտվա՛ծ է',
      es: '¡Completado!',
      en: 'Completed!',
    },
    progressLabel: {
      hy: 'Նախագծի կարգավիճակը',
      es: 'Estado del proyecto',
      en: 'Project Status',
    }
  };

  // Helper colors for project lots
  const sectorColors = [
    { border: 'border-orange-500 shadow-[6px_6px_0px_#ea580c]', header: 'bg-orange-500/10 text-orange-600 border-orange-500/30', label: 'SECTOR A: MASONRY' },
    { border: 'border-amber-500 shadow-[6px_6px_0px_#d97706]', header: 'bg-amber-500/10 text-amber-600 border-amber-500/30', label: 'SECTOR B: CARGO TOWER' },
    { border: 'border-emerald-500 shadow-[6px_6px_0px_#059669]', header: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30', label: 'SECTOR C: REINFORCED MIX' },
    { border: 'border-cyan-500 shadow-[6px_6px_0px_#0891b2]', header: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30', label: 'SECTOR D: STEEL SPAN' },
    { border: 'border-blue-500 shadow-[6px_6px_0px_#2563eb]', header: 'bg-blue-500/10 text-blue-600 border-blue-500/30', label: 'SECTOR E: HIGH RISE FRAME' },
    { border: 'border-pink-500 shadow-[6px_6px_0px_#db2777]', header: 'bg-pink-500/10 text-pink-600 border-pink-500/30', label: 'SECTOR F: FINISHING' },
  ];

  return (
    <div className="w-full" id="selection-yard-panel">
      {/* Visual warning border bar */}
      <div className="w-full h-4 bg-stripes-warning my-2 rounded-md" />

      {/* Main headings */}
      <div className="text-center py-6 select-none bg-slate-900 rounded-3xl p-6 border-b-4 border-orange-500 mb-8 shadow-lg text-white">
        <h2 className="text-sm md:text-md font-black font-mono tracking-widest text-orange-400 flex items-center justify-center gap-2 mb-2">
          <HardHat className="w-5 h-5 animate-bounce" />
          {dictionary.title[currentLanguage]}
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          {dictionary.subtitle[currentLanguage]}
        </p>
      </div>

      {/* 6 Lots Grid resembling 3D perspective lots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
        {games.map((game, index) => {
          const statsPercent = stats.completedGames[game.id] || 0;
          const isCompleted = statsPercent === 100;
          const lotStyle = sectorColors[index % sectorColors.length];

          return (
            <div
              key={game.id}
              className={`bg-white rounded-2xl p-5 border-2 transition-all duration-200 transform hover:-translate-y-1.5 flex flex-col justify-between min-h-[300px] h-full relative ${lotStyle.border}`}
              id={`project-lot-${game.id}`}
            >
              {/* Lot top metadata tag */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[9px] font-mono font-bold px-2.5 rounded-md border uppercase tracking-wider py-1 ${lotStyle.header}`}>
                  {lotStyle.label}
                </span>

                {isCompleted && (
                  <span className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold px-2.5 py-1 rounded-md uppercase animate-bounce">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {dictionary.completedLabel[currentLanguage]}
                  </span>
                )}
              </div>

              {/* Title & description as building plans */}
              <div className="flex-1 select-text">
                <h3 className="text-slate-900 text-base md:text-lg font-black tracking-tight mb-2 uppercase leading-tight font-sans">
                  {game.title[currentLanguage]}
                </h3>
                <p className="text-xs md:text-sm text-slate-700 font-semibold tracking-wide leading-relaxed mb-4">
                  {game.description[currentLanguage]}
                </p>
              </div>

              {/* Custom micro-progress bar styled as cement foundation filling */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4 select-none">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                  <span className="flex items-center gap-1 font-bold">
                    <Target className="w-3.5 h-3.5 text-orange-500" />
                    {dictionary.progressLabel[currentLanguage]}
                  </span>
                  <span className="font-extrabold text-slate-800">{statsPercent}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300 p-0.5">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${statsPercent}%` }}
                  />
                </div>
              </div>

              {/* Action buttons inside the lot */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Blueprint read triggers the pre-level explanation rules */}
                <button
                  onClick={() => onSelectBlueprint(game)}
                  className="bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border-2 border-slate-200 rounded-xl py-2.5 text-[11px] font-mono font-bold text-slate-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  id={`blueprint-btn-${game.id}`}
                >
                  {dictionary.blueprintBtn[currentLanguage]}
                </button>

                {/* Frame triggers interactive gameplay screen */}
                <button
                  onClick={() => onSelectGame(game.id)}
                  className="bg-orange-500 hover:bg-orange-600 active:translate-y-0.5 text-white rounded-xl py-2.5 text-[11px] font-sans font-black tracking-tight transition-all flex items-center justify-center gap-1 cursor-pointer border-b-4 border-orange-700 shadow-[0_2px_0_#c2410c]"
                  id={`build-btn-${game.id}`}
                >
                  {dictionary.buildBtn[currentLanguage]}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HardHat, Compass, Globe, HelpCircle, RefreshCw, Layers } from 'lucide-react';
import { Language, UserStats } from './types';

interface HeaderProps {
  currentLanguage: Language;
  onChangeLanguage: (lang: Language) => void;
  stats: UserStats;
  onResetStats: () => void;
  activeGameId: string | null;
  onBackToYard: () => void;
}

export default function Header({
  currentLanguage,
  onChangeLanguage,
  stats,
  onResetStats,
  activeGameId,
  onBackToYard,
}: HeaderProps) {
  const dictionary = {
    title: {
      hy: 'Իսպաներեն Կառուցող 3D',
      es: 'Constructor de Español 3D',
      en: 'Spanish Builder 3D',
    },
    subtitle: {
      hy: 'Սովորեք իսպաներեն քերականություն՝ կառուցելով 3D օբյեկտներ',
      es: 'Aprende gramática española construyendo objetos 3D',
      en: 'Learn Spanish grammar by constructing 3D structures',
    },
    scoreLabel: {
      hy: 'Միավորներ',
      es: 'Puntos',
      en: 'Score',
    },
    bricksLabel: {
      hy: 'Տեղադրված բլոկներ',
      es: 'Bloques colocados',
      en: 'Bricks Laid',
    },
    backButton: {
      hy: '← Վերադառնալ հարթակ',
      es: '← Volver al patio',
      en: '← Back to Yardsite',
    },
    architectBtn: {
      hy: 'ԱԲ Օգնական',
      es: 'Asistente IA',
      en: 'AI Assistant',
    },
    resetConfirm: {
      hy: 'Ջնջե՞լ ամբողջ առաջընթացը:',
      es: '¿Reiniciar progreso?',
      en: 'Reset Progress?',
    }
  };

  const handleResetClick = () => {
    if (window.confirm(dictionary.resetConfirm[currentLanguage])) {
      onResetStats();
    }
  };

  return (
    <header className="w-full bg-slate-900 text-white border-b-4 border-orange-500 shadow-lg px-6 py-4 md:py-0 md:h-20 flex items-center relative z-50 shrink-0">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Title / Logo */}
        <div 
          onClick={onBackToYard}
          className="flex items-center gap-3.5 cursor-pointer group"
          id="header-logo"
        >
          <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center font-bold text-2xl shadow-[2px_2px_0px_#fff] group-hover:scale-105 transition-transform shrink-0">
            E
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight uppercase flex items-center gap-2 font-sans">
              {dictionary.title[currentLanguage]}
              <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">
                v1.2
              </span>
            </h1>
            <p className="text-[10px] text-orange-400 font-mono tracking-widest uppercase font-black leading-none">
              Academia de Construcción Lingüística
            </p>
          </div>
        </div>

        {/* Real-time stats block */}
        <div className="flex items-center flex-wrap justify-center gap-3 bg-slate-800/90 p-2 rounded-xl border border-slate-700 font-mono text-xs shadow-inner">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/70 rounded-lg border border-slate-800">
            <Layers className="w-4 h-4 text-orange-400" />
            <span className="text-slate-400 text-[11px]">{dictionary.bricksLabel[currentLanguage]}:</span>
            <span className="text-emerald-400 font-black text-sm tracking-wide">{stats.bricksLaid}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/70 rounded-lg border border-slate-800">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400 text-[11px]">{dictionary.scoreLabel[currentLanguage]}:</span>
            <span className="text-yellow-400 font-black text-sm tracking-wide">{stats.score}</span>
          </div>

          <button
            onClick={handleResetClick}
            className="p-1 hover:text-red-400 text-slate-400 rounded transition-colors"
            title="Ջնջել առաջընթացը / Reset Progress"
            id="reset-stats-btn"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-3 flex-wrap justify-center" id="global-controls">
          {activeGameId && (
            <button
              onClick={onBackToYard}
              className="bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs px-3.5 py-2.5 rounded-lg border border-slate-705 shadow-[2px_2px_0px_#1e293b] active:translate-y-0.5 transition-all cursor-pointer"
              id="back-to-yard-btn"
            >
              {dictionary.backButton[currentLanguage]}
            </button>
          )}

          {/* Multi-language Selector */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800" id="lang-selector">
            {(['hy', 'es', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onChangeLanguage(lang)}
                className={`px-3 py-1 rounded font-bold text-xs uppercase tracking-wider transition-all duration-150 ${
                  currentLanguage === lang
                    ? 'bg-orange-500 text-white font-black shadow'
                    : 'text-slate-400 hover:text-slate-250'
                }`}
                id={`lang-btn-${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

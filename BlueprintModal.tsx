/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, FileText, CheckCircle } from 'lucide-react';
import { Language } from './types';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  blueprintContent: string;
  currentLanguage: Language;
}

export default function BlueprintModal({
  isOpen,
  onClose,
  title,
  blueprintContent,
  currentLanguage,
}: BlueprintModalProps) {
  if (!isOpen) return null;

  const labels = {
    startBuilding: {
      hy: 'Սկսել կառուցումը',
      es: 'Comenzar Construcción',
      en: 'Begin Construction',
    },
    blueprintTitle: {
      hy: 'Քերականության ճարտարագիտական գծագիր',
      es: 'Plano de ingeniería gramatical',
      en: 'Grammar Engineering Blueprint',
    },
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      id="blueprint-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white text-slate-800 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_#94a3b8] overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        id="blueprint-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration as blueprint rule paper */}
        <div className="bg-[#1e40af] p-5 border-b-4 border-dashed border-[#3b82f6] flex items-center justify-between relative text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl">
              <FileText className="w-6 h-6 text-orange-450" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-blue-200 uppercase block font-bold">
                {labels.blueprintTitle[currentLanguage]}
              </span>
              <h2 className="text-lg md:text-xl font-black font-sans leading-tight text-white uppercase">
                {title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-slate-300 bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all cursor-pointer"
            id="close-blueprint-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body showing Spanish building formulas */}
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto bg-slate-50 font-sans text-slate-850 space-y-4">
          <div className="p-4 bg-orange-55 border-l-4 border-orange-500 rounded-r-lg text-sm leading-relaxed text-orange-950 shadow-sm font-sans font-medium">
            <p className="font-extrabold mb-1">📐 {currentLanguage === 'es' ? 'CONSEJO DEL INGENIERO JEFE' : currentLanguage === 'en' ? 'CHIEF ENGINEER ADVICE' : 'ԳԼԽԱՎՈՐ ՃԱՐՏԱՐԱԳԵՏԻ ԽՈՐՀՈՒՐԴԸ'}</p>
            {currentLanguage === 'es'
              ? 'Comprender las reglas asegura que tu edificio no se derrumbe debido a terremotos o errores gramaticales. ¡Léelas con atención!'
              : currentLanguage === 'en'
              ? 'Fully mastering this blueprint prevents support pillars collapse during testing. Inspect closely!'
              : 'Գծագրի մանրամասն ուսումնասիրությունը կկանխի հենարանների փլուզումը թեստավորման ժամանակ:'}
          </div>

          <div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base text-slate-850 font-sans p-5 md:p-6 bg-white rounded-xl border border-slate-250 shadow-md font-medium" id="blueprint-rules-text">
            {blueprintContent}
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-5 bg-slate-100 border-t border-slate-250 flex justify-end">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-3 rounded-xl flex items-center gap-2 border-b-4 border-orange-700 shadow-[0_3px_0_#c2410c] transition-all font-sans cursor-pointer text-sm"
            id="start-building-confirm-btn"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{labels.startBuilding[currentLanguage]}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

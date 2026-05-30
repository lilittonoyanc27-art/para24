/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, CornerDownRight, MessageSquare, AlertTriangle } from 'lucide-react';
import { QuizQuestion, Language } from './types';

interface QuestionBoxProps {
  question: QuizQuestion;
  currentLanguage: Language;
  onAnswerSelected: (selected: string, isCorrect: boolean) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  gameId: string;
}

export default function QuestionBox({
  question,
  currentLanguage,
  onAnswerSelected,
  onNextQuestion,
  isLastQuestion,
  gameId,
}: QuestionBoxProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [explanationText, setExplanationText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dictionary = {
    testTitle: {
      hy: 'Ճարտարագիտական առաջադրանք',
      es: 'Desafío de ingeniería',
      en: 'Engineering Challenge',
    },
    hintLabel: {
      hy: 'Նախադասության թարգմանությունը․',
      es: 'Traducción de la oración:',
      en: 'Bilingual Translation:',
    },
    verifyBtn: {
      hy: 'Տեղադրել բլոկը',
      es: 'Colocar bloque',
      en: 'Lay Down Block',
    },
    nextBtn: {
      hy: 'Առաջ →',
      es: 'Siguiente →',
      en: 'Proceed →',
    },
    explanationHeader: {
      hy: '📐 ԱԲ Օգնականի բացատրությունը․',
      es: '📐 Explicación del Asistente IA:',
      en: '📐 AI Assistant\'s Explanation:',
    },
    connectingTutor: {
      hy: 'Հարցում ԱԲ Օգնականին...',
      es: 'Consultando al Asistente IA...',
      en: 'Calling AI Assistant...',
    }
  };

  const handleOptionClick = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleVerify = async () => {
    if (!selectedOption || isSubmitted) return;

    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setIsSubmitted(true);
    onAnswerSelected(selectedOption, correct);

    // Call the backend to get a rich Spanish learning explanation in Russian/Armenian/English
    setIsLoading(true);
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: gameId,
          sentence: question.sentence,
          selectedOption: selectedOption,
          correctOption: question.correctAnswer,
          isCorrect: correct,
          language: currentLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error('API failed');
      }

      const data = await response.json();
      setExplanationText(data.text);
    } catch (err) {
      console.error('Error fetching dynamic explanation:', err);
      // Fallback local explanation
      setExplanationText(question.explanation[currentLanguage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setExplanationText(null);
    onNextQuestion();
  };

  const formattedSentence = question.sentence.replace('___', '______');

  return (
    <div
      className="bg-white border-2 border-slate-300 rounded-2xl p-5 md:p-6 shadow-[6px_6px_0px_#94a3b8] flex flex-col justify-between h-full space-y-4 text-slate-800"
      id={`question-box-${question.id}`}
    >
      {/* Title head */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5">
        <div className="bg-orange-500/10 p-1.5 rounded-lg border border-orange-500/30">
          <HelpCircle className="w-4 h-4 text-orange-600" />
        </div>
        <span className="text-[11px] font-mono tracking-widest text-orange-600 uppercase font-black">
          {dictionary.testTitle[currentLanguage]}
        </span>
      </div>

      {/* Spanish sentence display with big letters */}
      <div className="py-2.5">
        <h3 className="text-slate-900 text-xl md:text-3xl font-black font-sans tracking-tight text-center leading-relaxed">
          {isSubmitted ? (
            <span className="text-emerald-800 font-black bg-emerald-50/90 px-3.5 py-1.5 rounded border-2 border-emerald-400 block md:inline-block shadow-sm">
              {question.sentence.replace('___', ` ${question.correctAnswer} `)}
            </span>
          ) : (
            <span className="text-orange-600 font-black">
              {formattedSentence}
            </span>
          )}
        </h3>

        {/* Translation tag */}
        <div className="mt-4 bg-orange-50/80 border-l-4 border-orange-500 rounded-r-xl p-4 flex items-start gap-3 text-sm text-slate-800 shadow-sm">
          <CornerDownRight className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-black block text-[11px] text-orange-700 uppercase tracking-wider mb-1 font-mono">
              {dictionary.hintLabel[currentLanguage]}
            </span>
            <p className="text-slate-900 font-bold text-sm md:text-base font-sans leading-normal">
              {question.translation[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

      {/* Grid of answer options */}
      <div className="grid grid-cols-2 gap-3 pb-1" id="answers-grid">
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt;
          let optStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-850 border-2 border-slate-350 hover:border-slate-500 font-extrabold shadow-[2px_2px_0px_#94a3b8] hover:shadow-[3px_3px_0px_#64748b]';

          if (isSelected) {
            optStyle = 'bg-orange-50 border-2 border-orange-500 text-orange-850 font-black shadow-[3px_3px_0px_#c2410c]';
          }

          if (isSubmitted) {
            if (opt === question.correctAnswer) {
              optStyle = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900 font-black shadow-[3px_3px_0px_#047857]';
            } else if (isSelected) {
              optStyle = 'bg-rose-50 border-2 border-rose-550 text-rose-800 line-through font-black shadow-[2px_2px_0px_#be123c]';
            } else {
              optStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-55 shadow-none pointer-events-none';
            }
          }

          return (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              disabled={isSubmitted}
              className={`py-4 px-4 rounded-xl border-2 text-center transition-all duration-150 cursor-pointer text-sm md:text-base font-bold flex items-center justify-center relative ${optStyle}`}
              id={`option-btn-${opt}`}
            >
              {/* Brick grid design accent */}
              <div className="absolute top-1 left-1.5 text-[7px] font-mono opacity-30 select-none text-slate-450 font-bold">BLOCK</div>
              <span className="block truncate">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation output & Engineer response tips */}
      {(isSubmitted || isLoading) && (
        <div
          className={`p-4 rounded-xl border-2 font-mono text-xs leading-relaxed max-h-[160px] overflow-y-auto ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-500/40 text-emerald-900' 
              : 'bg-rose-50 border-rose-500/40 text-rose-900'
          }`}
          id="grammar-explanation-result"
        >
          <div className="flex items-center gap-1.5 font-black mb-1.5 border-b pb-1 border-slate-200 uppercase text-[10px] tracking-wider text-slate-600">
            <MessageSquare className="w-4 h-4 text-orange-500 shrink-0" />
            <span>{dictionary.explanationHeader[currentLanguage]}</span>
          </div>

          {isLoading ? (
            <span className="italic block animate-pulse font-sans text-sm">{dictionary.connectingTutor[currentLanguage]}</span>
          ) : (
            <p className="whitespace-pre-wrap font-sans text-xs md:text-sm font-semibold">{explanationText}</p>
          )}
        </div>
      )}

      {/* Bottom control button: Verification or next stage */}
      <div className="pt-2">
        {!isSubmitted ? (
          <button
            onClick={handleVerify}
            disabled={!selectedOption}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-100 text-white font-black py-4 px-6 rounded-xl transition-all cursor-pointer text-sm flex items-center justify-center gap-2 disabled:text-slate-400 border-b-4 border-orange-700 disabled:border-slate-300 shadow-[0_3px_0_#c2410c] disabled:shadow-none"
            id="verify-cement-brick-btn"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{dictionary.verifyBtn[currentLanguage]}</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 px-6 rounded-xl transition-all cursor-pointer text-sm flex items-center justify-center gap-2 border-b-4 border-emerald-700 shadow-[0_3px_0_#047857]"
            id="next-construction-step-btn"
          >
            <span>{dictionary.nextBtn[currentLanguage]}</span>
            <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
          </button>
        )}
      </div>
    </div>
  );
}

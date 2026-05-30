/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, HardHat, Sparkles, MessageSquare, BookOpen } from 'lucide-react';
import { Language } from './types';

interface AIArchitectProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export default function AIArchitect({ isOpen, onClose, currentLanguage }: AIArchitectProps) {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([]);
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Suggested questions in three languages
  const suggestions = {
    hy: [
      'Ինչու՞ է "el mapa"-ն արական սեռի, իսկ "la mano"-ն՝ իգական:',
      'Ո՞րն է Perfecto-ի և Imperfecto-ի հիմնական տարբերությունը:',
      'Ո՞րն է "escribir" բայի դերբայը Pretérito Perfecto-ում:',
      'Ինչպե՞ս է ճիշտ ասել՝ "voy en carro" թե՞ "voy con carro":',
    ],
    es: [
      '¿Por qué "el mapa" es masculino y "la mano" es femenina?',
      '¿Cuál es la diferencia clave entre Perfecto e Imperfecto?',
      '¿Cuál es el participio de "escribir" en Pretérito Perfecto?',
      '¿Cómo se dice correctamente: "voy en coche" o "voy con coche"?',
    ],
    en: [
      'Why is "el mapa" masculine while "la mano" is feminine?',
      'What is the core difference between Perfecto and Imperfecto tenses?',
      'What is the past participle of "escribir" in Spanish?',
      'Is it correct to say "voy en tren" or "voy por tren"?',
    ],
  };

  const dictionary = {
    title: {
      hy: 'ԱԲ Օգնական և Խորհրդատու',
      es: 'Asistente y Asesor IA',
      en: 'AI Assistant & Advisor',
    },
    subtitle: {
      hy: 'Իսպաներենի ձեր անձնական օգնականը։ Հարցրեք կանոնների, բացառությունների կամ թարգմանությունների մասին։',
      es: 'Tu asistente personal de español. Pregunta sobre las reglas, excepciones o traducciones.',
      en: 'Your personal Spanish grammar assistant. Ask about any rule, exception, or structure.',
    },
    placeholder: {
      hy: 'Օրինակ՝ Բացատրիր, թե երբ է օգտագործվում por-ը, և երբ՝ para-ն...',
      es: 'Ej: Explica exactamente cuándo se usa por y para...',
      en: 'E.g., Explain the exact difference between "por" and "para"...',
    },
    welcome: {
      hy: 'Ողջու՛յն։ Ես ձեր իսպաներենի ԱԲ օգնականն եմ։ Տվեք ինձ ցանկացած հարց իսպաներենի քերականության, նախդիրների կամ ժամանակաձևերի մասին, և ես կտամ պարզ ու մանրամասն պատասխան:',
      es: '¡Hola! Soy tu Asistente de IA para español. Hazme cualquier pregunta sobre gramática, preposiciones o tiempos verbales y te daré una respuesta clara.',
      en: 'Greetings! I am your Spanish AI Assistant. Ask me any question about prepositions, past tenses, or gender rules, and I will hand over a clear, friendly grammatical review!',
    },
    suggestedLabel: {
      hy: 'Սեղմեք հարցնելու համար․',
      es: 'Haz clic para preguntar:',
      en: 'Click a suggested question:',
    },
    waiting: {
      hy: 'ԱԲ օգնականը մտածում է...',
      es: 'El asistente de IA está pensando...',
      en: 'AI Assistant is thinking...',
    }
  };

  // Set initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: 'ai',
          text: dictionary.welcome[currentLanguage],
        },
      ]);
    }
  }, [currentLanguage]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isGenerating) return;

    const userMsg = textToSend.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');
    setIsGenerating(true);

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuestion: userMsg,
          language: currentLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'ai', text: data.text }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text:
            currentLanguage === 'es'
              ? '⚠️ Desafortunadamente, se ha producido un error de conexión. Inténtalo de nuevo.'
              : currentLanguage === 'en'
              ? '⚠️ Connection failed. Please check your credentials and try again.'
              : '⚠️ Կապի ընդհատում ԱԲ Օգնականի հետ։ Խնդրում ենք փորձել մի փոքր ուշ:',
        },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300"
      id="ai-architect-sidebar-backdrop"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg md:max-w-xl h-full bg-white shadow-2xl border-l-4 border-orange-500 flex flex-col justify-between"
        id="ai-architect-sidebar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="bg-slate-900 p-4 border-b border-slate-200 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="bg-orange-500 text-white p-2 rounded-lg shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-base md:text-lg flex items-center gap-1.5 font-sans uppercase">
                {dictionary.title[currentLanguage]}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium leading-tight max-w-sm">
                {dictionary.subtitle[currentLanguage]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-lg transition-colors cursor-pointer border border-slate-705"
            id="close-sidebar-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Chat Box */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm flex flex-col justify-start bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 max-w-[85%] ${
                msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
              }`}
            >
              <div
                className={`p-2 rounded-lg text-[10px] font-mono font-extrabold ${
                  msg.sender === 'user' ? 'bg-[#0f172a] text-white' : 'bg-orange-500 text-white'
                }`}
              >
                {msg.sender === 'user' ? 'USR' : 'ARC'}
              </div>
              <div
                className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap text-xs md:text-sm ${
                  msg.sender === 'user'
                    ? 'bg-orange-100/40 text-slate-800 border border-orange-200 shadow-sm'
                    : 'bg-white text-slate-850 border border-slate-200 shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="flex items-start gap-2.5 max-w-[85%] self-start">
              <div className="p-2 rounded-lg text-[10px] font-mono font-extrabold bg-orange-500 text-white animate-bounce-horizontal">
                ARC
              </div>
              <div className="p-3.5 rounded-2xl bg-white text-slate-450 italic border border-slate-250 animate-pulse text-xs">
                {dictionary.waiting[currentLanguage]}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestions & Input Controls Area */}
        <div className="p-4 bg-slate-100 border-t border-slate-250">
          {/* Suggested Prompts Grid */}
          <div className="mb-3.5">
            <span className="text-[11px] text-slate-500 font-mono font-bold flex items-center gap-1 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-orange-500" />
              {dictionary.suggestedLabel[currentLanguage]}
            </span>
            <div className="grid grid-cols-1 gap-1.5 max-h-[140px] overflow-y-auto select-none p-0.5">
              {suggestions[currentLanguage].map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isGenerating}
                  className="bg-white hover:bg-slate-50 active:bg-slate-100 text-left text-[11px] text-slate-700 py-2 px-3 rounded-lg border-2 border-slate-200 hover:border-slate-350 font-bold transition-all cursor-pointer truncate shadow-sm"
                  id={`ai-suggestion-${index}`}
                >
                  💡 {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Form input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={dictionary.placeholder[currentLanguage]}
              disabled={isGenerating}
              className="flex-1 bg-white text-slate-850 rounded-xl px-4 py-2.5 text-xs font-semibold border-2 border-slate-300 focus:outline-none focus:border-orange-500 disabled:opacity-50"
              id="ai-architect-input"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isGenerating}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-200 text-white p-2.5 rounded-xl border border-orange-600 disabled:border-slate-300 font-black transition-all disabled:opacity-40 cursor-pointer shadow-sm shadow-orange-500/10 shrink-0"
              id="ai-architect-send-btn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

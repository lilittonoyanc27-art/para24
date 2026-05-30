/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === 'MY_GEMINI_API_KEY') {
      console.warn('GEMINI_API_KEY is not configured or is placeholder. Server will fallback to rule-based explanations.');
      return null;
    }
    try {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (err) {
      console.error('Error initializing GoogleGenAI client:', err);
      return null;
    }
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// API route to explain a specific sentence or general grammar rule using Gemini
app.post('/api/explain', async (req, res) => {
  const { topic, sentence, selectedOption, correctOption, isCorrect, language, userQuestion } = req.body;
  const ai = getAIClient();

  const langCode = language || 'hy';
  let langLabel = 'Armenian';
  if (langCode === 'es') {
    langLabel = 'Spanish (Español)';
  } else if (langCode === 'en') {
    langLabel = 'English';
  }

  // If we have a custom user question from the AI Architect panel
  if (userQuestion) {
    if (!ai) {
      return res.json({
        text: langCode === 'es' 
          ? `⚠️ **Error de IA:** El asistente de IA Gemini no está activo. Compruebe la clave en Settings > Secrets. Esta es la regla básica para el tema **${topic || 'Gramática Española'}** - ¡consulta los Planos!` 
          : langCode === 'en'
          ? `⚠️ **AI Config Warning:** Gemini AI is not active. Make sure GEMINI_API_KEY is set in Settings > Secrets. Focus on the core building block: **${topic}**!`
          : `⚠️ **ԱԲ Ճարտարապետի սխալ․** Gemini API-ի գաղտնի բանալին կարգավորված չէ Settings > Secrets բաժնում։ Կենտրոնացեք թեմայի կանոնի վրա՝ **${topic || 'Իսպաներենի քերականություն'}**:`
      });
    }

    try {
      const prompt = `You are a helpful Spanish Grammar tutor for beginners. 
The student is asking a custom question about Spanish grammar.
Student's Question: "${userQuestion}"
Context: We are studying "${topic || 'General Grammar'}".
Please answer in ${langLabel} clearly, using warm, encouraging tones and practical everyday examples (food, travel, relationships). Keep it friendly, clear, and informative. Ensure all Spanish words have translation. Max 200 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });

      return res.json({ text: response.text });
    } catch (err: any) {
      console.error('Gemini custom question error:', err);
      return res.status(500).json({ error: err.message || 'AI calculation error' });
    }
  }

  // Automated exercise explanation
  if (!ai) {
    // Offline / fallback explanation (very nice bilingual message)
    const ruleText = langCode === 'es'
      ? `🛠️ **Consejo del constructor:** La respuesta correcta es \`${correctOption}\`. ¡Esto refuerza tu pared! Lee el Plano arriba para fortalecer tus cimientos.`
      : langCode === 'en'
      ? `🛠️ **Engineering Tip:** The correct anchor is \`${correctOption}\`. Check the topic's blueprint above to see how this building block locks together!`
      : `🛠️ **Ինժեներական խորհուրդ․** Ճիշտ պատասխանն է՝ \`${correctOption}\`։ Ծանոթացեք վերևում գտնվող կանոնների գծագրին՝ այս բլոկն ամուր ամրացնելու համար:`;
    return res.json({ text: ruleText });
  }

  try {
    const prompt = `You are "Architecto (Իսպաներենի Ուսուցիչ)", a fun, playful, and extremely energetic Spanish language tutor.
A student selected "${selectedOption}" for the sentence "${sentence}".
The correct option is "${correctOption}".
The user is ${isCorrect ? 'Correct! They successfully built a segment of their gorgeous 3D cartoon structure.' : 'Incorrect. That block is a little bit unsteady.'}
Provide a fun, friendly, and simple explanation in ${langLabel} using casual everyday scenarios (like friends, family, delicious food, pets, hobbies) and a playful mention of building their colourful structure.
Break it down into:
- Vibe check / Encouraging word (1 sentence)
- The grammar rule explained simply (bilingual examples if helpful, relating to simple everyday contexts)
Keep it conversational, warm, exciting, and under 130 words.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
    });

    res.json({ text: response.text });
  } catch (err: any) {
    console.error('Gemini exercise explanation error:', err);
    res.json({
      text: langCode === 'es'
        ? `⚠️ (La IA no está disponible temporalmente) La respuesta correcta es: \`${correctOption}\`.`
        : langCode === 'en'
        ? `⚠️ (AI is temporarily offline) The correct answer is: \`${correctOption}\`.`
        : `⚠️ (ԱԲ-ն ժամանակավորապես անհասանելի է) Ճիշտ պատասխանն է՝ \`${correctOption}\`։`
    });
  }
});

// Serve Vite dev server or static artifacts
const isProduction = process.env.NODE_ENV === 'production';

async function start() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server starting on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
});

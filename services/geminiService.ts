
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getMentorResponse = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are the UEW Innovation Hub AI Mentor. You help students at the University of Education, Winneba (Ghana) with project ideas, technical troubleshooting, and entrepreneurship guidance. You are encouraging, knowledgeable about local context, and professional. Keep responses concise and formatted in Markdown.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};

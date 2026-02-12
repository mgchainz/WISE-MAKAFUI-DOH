
import React, { useState, useRef, useEffect } from 'react';
import { getMentorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIMentor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your UEW Innovation Hub AI Mentor. How can I help with your project or research today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getMentorResponse(input, history);
    
    setMessages(prev => [...prev, {
      role: 'model',
      text: response || "I'm sorry, I couldn't process that.",
      timestamp: new Date()
    }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-fadeIn">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          AI Innovation Mentor 
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded uppercase tracking-wider">Beta</span>
        </h1>
        <p className="text-gray-500 mt-2">Get instant feedback, technical guidance, and project inspiration.</p>
      </header>

      <div className="flex-1 bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === 'user' 
                ? 'bg-uew-maroon text-white rounded-br-none' 
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-maroon-100' : 'text-gray-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your project idea..."
              className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-uew-maroon/20"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-uew-maroon text-white p-2 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-center">AI Mentor uses Gemini and may produce inaccurate results. Verify important info.</p>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;

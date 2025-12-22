
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { MessageSquare, X, Send, Loader2, Bot, User, CheckCircle2, Globe } from 'lucide-react';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      parts: [{ text: '¡Hola! Soy el asistente virtual de Pulse Agency. ¿Cómo puedo ayudarte hoy a automatizar tu negocio y escalar tus ventas?' }]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  // Define the tool for saving leads
  const saveLeadFunction: FunctionDeclaration = {
    name: 'saveLeadToGoogleSheets',
    description: 'Guarda la información de contacto del prospecto en la base de datos de Google Sheets de Pulse Agency.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        nombre: { type: Type.STRING, description: 'Nombre completo del contacto' },
        email: { type: Type.STRING, description: 'Correo electrónico' },
        mensaje: { type: Type.STRING, description: 'Resumen de su necesidad o interés' },
        prioridad: { type: Type.STRING, enum: ['ALTA', 'MEDIA', 'BAJA'], description: 'Prioridad detectada según su urgencia' }
      },
      required: ['nombre', 'email']
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // 1. Append user message to local state
    const currentHistory: ChatMessage[] = [
      ...messages,
      { role: 'user', parts: [{ text: userMessage }] }
    ];
    setMessages(currentHistory);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `Eres el Asistente AI de Pulse Agency.
          Ayudas a PYMES latinas en USA a escalar mediante automatización de IA y Growth Marketing.
          
          REGLA DE ORO: TUS RESPUESTAS DEBEN SER CORTAS, CONCRETAS Y AL GRANO (Máximo 2-3 oraciones).
          - No uses introducciones largas ni saludos repetitivos.
          - Elimina el "relleno" corporativo, sé directo.
          
          TUS SERVICIOS:
          1. Consultoría IA (Reducción de carga operativa).
          2. CRM Automatizado (Organización de leads).
          3. Ads Eficientes (Meta/Google).

          TIENES ACCESO A GOOGLE SEARCH. Úsalo solo si es estrictamente necesario para datos puntuales.

          OBJETIVO PRINCIPAL:
          Responder la duda puntual y CAPTURAR LEADS. 
          Si notas interés, pide: Nombre y Email. Luego usa la herramienta 'saveLeadToGoogleSheets' inmediatamente.`;

      const config = {
        systemInstruction,
        // Add Google Search to tools combined with function declarations
        tools: [
            { functionDeclarations: [saveLeadFunction] }, 
            { googleSearch: {} }
        ],
      };

      // 2. Call the model
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: currentHistory,
        config
      });

      const responseContent = response.candidates?.[0]?.content;
      const functionCalls = response.functionCalls;
      
      // 3. Handle Function Calls
      if (functionCalls && functionCalls.length > 0) {
        const fc = functionCalls[0]; 
        
        if (fc.name === 'saveLeadToGoogleSheets') {
            console.log('Ejecutando herramienta:', fc.name, fc.args);
            // Simulate saving data
            setLeadSaved(true);
            setTimeout(() => setLeadSaved(false), 5000);

            const toolResponseParts = [{
                functionResponse: {
                    name: fc.name,
                    response: { result: { success: true, message: "Lead saved successfully in CRM." } }
                }
            }];

            // Send tool response back to model for final confirmation
            const historyWithTool: ChatMessage[] = [
                ...currentHistory,
                { role: 'model', parts: responseContent?.parts || [] },
                { role: 'function', parts: toolResponseParts }
            ];

            const finalResponse = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: historyWithTool,
                config
            });
            
            const finalText = finalResponse.text || "Listo, datos guardados. Te contactaremos pronto.";

            setMessages([
                ...historyWithTool,
                { role: 'model', parts: [{ text: finalText }] }
            ]);
        }
      } else {
        // Standard text response (possibly grounded)
        const text = response.text || "Lo siento, no pude procesar tu solicitud.";
        setMessages(prev => [...prev, { role: 'model', parts: [{ text }] }]);
      }

    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: 'Lo siento, estoy teniendo problemas de conexión. Por favor revisa tu API Key o intenta más tarde.' }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to filter messages for rendering
  const renderMessage = (msg: ChatMessage, idx: number) => {
    const textPart = msg.parts.find(p => p.text);
    if (!textPart || (msg.role !== 'user' && msg.role !== 'model')) return null;

    return (
      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[85%] flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
            msg.role === 'user' ? 'bg-pulseMagenta/20 border border-pulseMagenta/30' : 'bg-white/5 border border-white/10'
          }`}>
            {msg.role === 'user' ? <User className="w-4 h-4 text-pulseMagenta" /> : <Bot className="w-4 h-4 text-pulseCyan" />}
          </div>
          <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
            msg.role === 'user' 
              ? 'bg-pulseMagenta text-white rounded-tr-none' 
              : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
          }`}>
            {textPart.text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-pulseDark border border-white/20 rotate-90' : 'bg-gradient-to-r from-pulseCyan to-pulsePurple shadow-neon-cyan hover:scale-110'
        }`}
      >
        {isOpen ? <X className="w-8 h-8 text-white" /> : <MessageSquare className="w-8 h-8 text-pulseDark fill-current" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pulseMagenta opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pulseMagenta"></span>
          </span>
        )}
      </button>

      <div
        className={`fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-pulseDark/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-pulseCyan/10 to-transparent flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-pulseCyan/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-pulseCyan" />
            </div>
            <div>
              <h3 className="font-black text-sm tracking-widest uppercase">Pulse Assistant</h3>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Gemini 3 Pro</span>
                </div>
                <div className="flex items-center text-[10px] text-pulseCyan border border-pulseCyan/30 px-1.5 rounded bg-pulseCyan/5">
                    <Globe className="w-2.5 h-2.5 mr-1" />
                    ONLINE
                </div>
              </div>
            </div>
          </div>
          {leadSaved && (
            <div className="bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center animate-bounce">
              <CheckCircle2 className="w-3 h-3 text-green-500 mr-2" />
              <span className="text-[10px] text-green-500 font-bold uppercase">Guardado</span>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg, idx) => renderMessage(msg, idx))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center space-x-3">
                <Loader2 className="w-4 h-4 text-pulseCyan animate-spin" />
                <span className="text-xs text-gray-500 font-medium">Procesando consulta...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10 rounded-b-[2rem]">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Pregunta o escribe tu nombre para agendar..."
              className="w-full bg-pulseDark border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm outline-none focus:border-pulseCyan transition-all placeholder:text-gray-600"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-pulseCyan rounded-lg flex items-center justify-center text-pulseDark hover:scale-105 transition-transform disabled:opacity-50 disabled:grayscale"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-3 text-[10px] text-center text-gray-600 font-bold uppercase tracking-widest">
            IA Potenciada por Gemini & Google Search
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;

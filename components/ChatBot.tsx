
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { MessageSquare, X, Send, Bot, User, CheckCircle2, Globe } from 'lucide-react';
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
    description: 'Guarda la información de contacto del prospecto en la base de datos de Pulse Agency cuando el usuario proporciona sus datos.',
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
          - Elimina el "relleno" corporativo, sé directo, profesional y empático.
          - Tu objetivo principal es calificar al usuario y obtener su Nombre y Email para que un consultor humano lo contacte.
          - Si el usuario muestra interés en precios o servicios, pídele sus datos para enviarle la información detallada.
          - Cuando tengas el nombre y el email, EJECUTA la función saveLeadToGoogleSheets.
          `;

      const model = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model,
        contents: currentHistory.map(m => ({
            role: m.role,
            parts: m.parts
        })),
        config: {
            systemInstruction,
            tools: [{ functionDeclarations: [saveLeadFunction] }],
        }
      });

      // Handle the response parts
      const responseParts = response.candidates?.[0]?.content?.parts || [];
      
      // Check for function calls
      const functionCalls = responseParts.filter(part => part.functionCall);
      const textParts = responseParts.filter(part => part.text);

      let finalText = "";

      if (textParts.length > 0) {
        finalText = textParts.map(p => p.text).join(' ');
      }

      if (functionCalls.length > 0) {
          for (const call of functionCalls) {
              const fc = call.functionCall;
              if (fc && fc.name === 'saveLeadToGoogleSheets') {
                  // Simulate saving data
                  console.log("Saving lead:", fc.args);
                  setLeadSaved(true);
                  
                  // In a real app, you would make an API call here.
                  // We simulate a successful function execution response to the model
                  
                  // Construct the history with the function call included
                  const historyWithFunctionCall = [
                      ...currentHistory,
                      { role: 'model', parts: [...responseParts] } // The model's request to call function
                  ];

                  // Send the function response back to the model
                  const functionResponsePart = {
                      functionResponse: {
                          name: fc.name,
                          response: { result: "success", message: "Lead saved successfully." }
                      }
                  };

                  const followUpResponse = await ai.models.generateContent({
                      model,
                      contents: [
                          ...historyWithFunctionCall.map(m => ({ role: m.role, parts: m.parts })),
                          { role: 'function', parts: [functionResponsePart] }
                      ],
                      config: { systemInstruction }
                  });

                  const followUpText = followUpResponse.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (followUpText) {
                      finalText = followUpText;
                  } else {
                      finalText = "¡Perfecto! He guardado tus datos. Un especialista de Pulse Agency te contactará pronto.";
                  }
              }
          }
      }

      // Append model response
      setMessages(prev => [
          ...prev, 
          { role: 'model', parts: [{ text: finalText }] }
      ]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [
        ...prev,
        { role: 'model', parts: [{ text: 'Lo siento, tuve un pequeño error de conexión. ¿Podrías repetirlo?' }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-pulseCyan text-pulseDark p-4 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:scale-110 transition-transform duration-300 group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        {!isOpen && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-pulseDark"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] bg-pulseCard/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-pulseDark to-[#050f1e] p-4 border-b border-white/10 flex items-center justify-between">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pulseCyan/20 rounded-full flex items-center justify-center border border-pulseCyan/30 relative">
                    <Bot className="w-6 h-6 text-pulseCyan" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-pulseDark"></div>
                </div>
                <div>
                    <h3 className="font-bold text-white">Pulse Assistant</h3>
                    <p className="text-xs text-green-400 flex items-center"><Globe className="w-3 h-3 mr-1" /> En línea ahora</p>
                </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
             </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
             {messages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} message-enter`}>
                     {msg.role === 'model' && (
                         <div className="w-8 h-8 bg-pulseCyan/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                             <Bot className="w-4 h-4 text-pulseCyan" />
                         </div>
                     )}
                     <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                         msg.role === 'user' 
                         ? 'bg-pulseCyan text-pulseDark font-medium rounded-tr-none' 
                         : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                     }`}>
                         {msg.parts[0].text}
                     </div>
                     {msg.role === 'user' && (
                         <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                             <User className="w-4 h-4 text-white" />
                         </div>
                     )}
                 </div>
             ))}
             
             {isLoading && (
                 <div className="flex justify-start message-enter">
                     <div className="w-8 h-8 bg-pulseCyan/10 rounded-full flex items-center justify-center mr-2">
                         <Bot className="w-4 h-4 text-pulseCyan" />
                     </div>
                     <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex space-x-1 items-center h-10">
                         <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                         <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                         <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                     </div>
                 </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Lead Capture Success Banner */}
          {leadSaved && (
              <div className="bg-green-500/10 border-y border-green-500/20 p-2 flex items-center justify-center text-green-400 text-xs font-bold animate-in fade-in slide-in-from-bottom-4">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Datos guardados correctamente
              </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-pulseDark border-t border-white/10">
             <div className="relative">
                 <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:border-pulseCyan outline-none transition-colors"
                 />
                 <button 
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-pulseCyan rounded-lg text-pulseDark hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                 >
                    <Send className="w-4 h-4" />
                 </button>
             </div>
             <div className="text-center mt-2">
                 <span className="text-[10px] text-gray-500">
                     Potenciado por Pulse IA • Respuestas en tiempo real
                 </span>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

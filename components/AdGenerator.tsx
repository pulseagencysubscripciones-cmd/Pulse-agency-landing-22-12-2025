
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Copy, RefreshCw, Wand2 } from 'lucide-react';

const niches = [
  "Roofing / Techos",
  "Real Estate / Inmobiliaria",
  "Restaurante Latino",
  "Clínica Dental",
  "Contractor / Construcción",
  "Abogado de Inmigración"
];

const AdGenerator: React.FC = () => {
  const [niche, setNiche] = useState(niches[0]);
  const [businessName, setBusinessName] = useState('');
  const [generatedAd, setGeneratedAd] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAd = async () => {
    if (!businessName) return;
    
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Actúa como un experto en copywriting de respuesta directa (Direct Response Marketing) especializado en el mercado latino en USA.
      
      Escribe un anuncio de Facebook corto, persuasivo y con emojis para un negocio de: ${niche}.
      Nombre del negocio: ${businessName}.
      
      Estructura:
      1. Gancho (Hook) doloroso o curioso.
      2. Cuerpo que agite el problema.
      3. Solución (El servicio).
      4. Llamado a la acción (CTA) claro.
      
      Usa español neutro pero persuasivo.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setGeneratedAd(response.text || "Hubo un error generando el anuncio. Intenta de nuevo.");
    } catch (error) {
      console.error(error);
      setGeneratedAd("Error de conexión con la IA. Por favor revisa tu API Key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-pulseCard/20 relative border-y border-white/5">
       <div className="absolute inset-0 bg-gradient-to-r from-pulseCyan/5 to-pulseMagenta/5 pointer-events-none"></div>
       
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             
             {/* Left: Input */}
             <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 bg-pulseCyan/10 border border-pulseCyan/30 rounded-full px-4 py-1 mb-6">
                   <Sparkles className="w-4 h-4 text-pulseCyan animate-spin-slow" />
                   <span className="text-xs font-bold text-pulseCyan uppercase tracking-wider">Demo en Vivo</span>
                </div>
                <h2 className="text-4xl font-black mb-6">Prueba el poder de <br /> <span className="text-gradient-cyan">Generación de Copy</span></h2>
                <p className="text-gray-400 text-lg mb-10">
                   No nos creas a nosotros. Deja que nuestra IA escriba tu primer anuncio ganador ahora mismo. Gratis.
                </p>

                <div className="space-y-6 bg-pulseDark p-8 rounded-3xl border border-white/10 shadow-xl">
                   <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">Tu Industria</label>
                      <select 
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-pulseCyan transition-colors"
                      >
                         {niches.map(n => <option key={n} value={n} className="bg-pulseDark">{n}</option>)}
                      </select>
                   </div>
                   
                   <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">Nombre de tu Negocio</label>
                      <input 
                        type="text" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Ej: Miami Fast Roofs"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-pulseCyan transition-colors"
                      />
                   </div>

                   <button 
                     onClick={generateAd}
                     disabled={isLoading || !businessName}
                     className="w-full bg-gradient-to-r from-pulseCyan to-blue-600 py-4 rounded-xl font-bold text-pulseDark text-lg shadow-neon-cyan hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center"
                   >
                      {isLoading ? (
                         <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                      ) : (
                         <Wand2 className="w-6 h-6 mr-2" />
                      )}
                      {isLoading ? 'Generando...' : 'Generar Anuncio Viral'}
                   </button>
                </div>
             </div>

             {/* Right: Output */}
             <div className="lg:w-1/2 w-full">
                <div className="relative group">
                   <div className="absolute -inset-1 bg-gradient-to-r from-pulseMagenta to-purple-600 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                   
                   <div className="relative bg-[#0A1322] border border-white/10 rounded-[2rem] p-8 min-h-[400px] flex flex-col">
                      <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                         <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         </div>
                         <span className="text-xs font-mono text-gray-500">AI_GENERATED_CONTENT_PREVIEW</span>
                      </div>

                      <div className="flex-1 font-mono text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                         {generatedAd ? (
                            <div className="animate-in fade-in duration-700">
                               {generatedAd}
                            </div>
                         ) : (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                               <Sparkles className="w-12 h-12 mb-4" />
                               <p>El resultado aparecerá aquí...</p>
                            </div>
                         )}
                      </div>

                      {generatedAd && (
                         <div className="mt-6 flex justify-end">
                            <button 
                              onClick={() => navigator.clipboard.writeText(generatedAd)}
                              className="flex items-center text-xs font-bold text-pulseCyan hover:text-white transition-colors"
                            >
                               <Copy className="w-4 h-4 mr-2" />
                               COPIAR TEXTO
                            </button>
                         </div>
                      )}
                   </div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default AdGenerator;

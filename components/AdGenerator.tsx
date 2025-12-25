
import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Wand2, Check } from 'lucide-react';

const niches = [
  "Roofing / Techos",
  "Real Estate / Inmobiliaria",
  "Restaurante Latino",
  "Clínica Dental",
  "Contractor / Construcción",
  "Abogado de Inmigración"
];

const adTemplates: Record<string, string[]> = {
  "Roofing / Techos": [
    "🏠 ¿Tu techo está pidiendo un respiro?\n\nNo esperes a que la próxima tormenta se convierta en una cascada dentro de tu sala. 🌧️ En [BUSINESS], somos especialistas en techos duraderos que protegen lo que más amas.\n\n✅ Inspección gratuita hoy mismo.\n✅ Materiales de alta resistencia.\n✅ Garantía certificada.\n\n¡Haz clic aquí y obtén tu presupuesto sin compromiso! 👇",
    "⚠️ ATENCIÓN MIAMI: ¿Goteras constantes?\n\nTu hogar merece la mejor protección. En [BUSINESS] no solo reparamos techos, te damos tranquilidad mental. 🛡️\n\n🚀 Respuesta en menos de 24 horas.\n🔨 Expertos en seguros.\n\n¡Toca el botón y asegura tu hogar hoy! 📲"
  ],
  "Real Estate / Inmobiliaria": [
    "🔑 Tu nueva vida comienza en una casa que ames.\n\nEn [BUSINESS], no buscamos propiedades, buscamos hogares. 🏡 Si estás listo para dar el paso, nuestro equipo de expertos en el mercado de USA te guiará en cada centímetro del camino.\n\n🌟 Listados exclusivos.\n🌟 Asesoría financiera.\n🌟 Transparencia total.\n\nAgenda una consulta gratuita aquí. 👇",
    "🏢 ¿Buscando invertir en el mercado con mayor crecimiento?\n\nOportunidades únicas de Real Estate con [BUSINESS]. 📈 Maximizamos tu retorno con propiedades seleccionadas bajo lupa.\n\n¡Contáctanos hoy y descubre tu próxima inversión! 📲"
  ],
  "Restaurante Latino": [
    "🔥 ¡El sabor que extrañas está aquí!\n\nEn [BUSINESS], cocinamos con el corazón para traerte el auténtico sazón de nuestra tierra. 🍲 Ven a disfrutar de una experiencia única con música, sabor y la mejor atención.\n\n📍 Ubicación: [Tu dirección aquí]\n🕒 ¡Te esperamos hoy mismo!\n\n¡Reserva tu mesa haciendo clic aquí! 🍴",
    "🥘 ¿Antojo de algo especial?\n\nNo es solo comida, es un viaje a tus raíces. 🌮 Prueba nuestra especialidad de la casa en [BUSINESS].\n\n¡Haz tu pedido ahora y disfruta del sabor real! 🛵"
  ],
  "Clínica Dental": [
    "😁 Una sonrisa sana es tu mejor carta de presentación.\n\nEn [BUSINESS], cuidamos cada detalle para que luzcas una sonrisa radiante y saludable. ✨ Tecnología de punta y atención humana en tu idioma.\n\n✅ Limpiezas profundas.\n✅ Ortodoncia invisible.\n✅ Financiamiento disponible.\n\n¡Agenda tu cita de evaluación hoy! 👇",
    "🦷 ¿Miedo al dentista? Con nosotros se te olvida.\n\nAmbiente relajado y profesionales que se preocupan por ti en [BUSINESS]. 💙\n\n¡Haz clic y recupera tu confianza al sonreír! 📲"
  ],
  "Contractor / Construcción": [
    "🏗️ ¿Tienes un proyecto en mente? Nosotros lo hacemos realidad.\n\nDe la idea al cimiento, en [BUSINESS] garantizamos calidad y cumplimiento en cada obra. 🔨 Ya sea remodelación o construcción desde cero, somos tus aliados de confianza.\n\n✅ Presupuestos honestos.\n✅ Mano de obra calificada.\n✅ Proyectos a tiempo.\n\n¡Solicita tu cotización gratuita hoy! 👇",
    "🔨 Remodelaciones que aumentan el valor de tu propiedad.\n\nModerniza tu espacio con los mejores. En [BUSINESS] nos encargamos de todo el proceso. 🏠\n\n¡Toca el botón y empieza tu transformación! 📲"
  ],
  "Abogado de Inmigración": [
    "⚖️ Tu futuro en USA merece estar en buenas manos.\n\nEn [BUSINESS], entendemos los desafíos de tu proceso migratorio. 🇺🇸 Protegemos tus sueños con experiencia legal y honestidad.\n\n✅ Visas de trabajo.\n✅ Residencias y Ciudadanía.\n✅ Defensa de deportación.\n\n¡Reserva tu consulta confidencial ahora! 👇",
    "📑 ¿Problemas con tus papeles?\n\nNo dejes tu futuro al azar. En [BUSINESS] hablamos tu idioma y luchamos por tus derechos. ⚖️\n\n¡Llámanos o escríbenos hoy mismo! 📲"
  ]
};

const AdGenerator: React.FC = () => {
  const [niche, setNiche] = useState(niches[0]);
  const [businessName, setBusinessName] = useState('');
  const [generatedAd, setGeneratedAd] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateAd = () => {
    if (!businessName) return;
    
    setIsLoading(true);
    
    // Simular procesamiento local rápido
    setTimeout(() => {
      const templates = adTemplates[niche] || adTemplates["Roofing / Techos"];
      const randomIndex = Math.floor(Math.random() * templates.length);
      const ad = templates[randomIndex].replace(/\[BUSINESS\]/g, businessName.toUpperCase());
      
      setGeneratedAd(ad);
      setIsLoading(false);
      setCopied(false);
    }, 800);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedAd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 bg-pulseCard/20 relative border-y border-white/5">
       <div className="absolute inset-0 bg-gradient-to-r from-pulseCyan/5 to-pulseMagenta/5 pointer-events-none"></div>
       
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             
             <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 bg-pulseCyan/10 border border-pulseCyan/30 rounded-full px-4 py-1 mb-6">
                   <Sparkles className="w-4 h-4 text-pulseCyan animate-pulse" />
                   <span className="text-xs font-bold text-pulseCyan uppercase tracking-wider">Motor IA Instantáneo</span>
                </div>
                <h2 className="text-4xl font-black mb-6">Prueba nuestro <br /> <span className="text-gradient-cyan">Copywriter Autónomo</span></h2>
                <p className="text-gray-400 text-lg mb-10">
                   Genera textos de alta conversión para tus redes sociales en segundos. Sin configurar APIs, sin esperas. 
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
                      {isLoading ? 'Optimizando...' : 'Generar Anuncio de Alta Conversión'}
                   </button>
                </div>
             </div>

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
                         <span className="text-xs font-mono text-gray-500">COPY_ENGINE_v4.0_OFFLINE</span>
                      </div>

                      <div className="flex-1 font-mono text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                         {generatedAd ? (
                            <div className="animate-in fade-in duration-500 slide-in-from-bottom-2">
                               {generatedAd}
                            </div>
                         ) : (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                               <Sparkles className="w-12 h-12 mb-4" />
                               <p>El anuncio optimizado aparecerá aquí...</p>
                            </div>
                         )}
                      </div>

                      {generatedAd && (
                         <div className="mt-6 flex justify-end">
                            <button 
                              onClick={copyToClipboard}
                              className={`flex items-center text-xs font-bold transition-colors ${copied ? 'text-green-400' : 'text-pulseCyan hover:text-white'}`}
                            >
                               {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                               {copied ? '¡COPIADO!' : 'COPIAR PARA FACEBOOK/INSTAGRAM'}
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

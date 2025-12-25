
import React, { useState } from 'react';
import { Play, CheckCircle, BarChart, ShieldCheck } from 'lucide-react';

const VideoManifesto: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Beneficios alineados con el mensaje de "Presión e Incertidumbre" del video
  const benefits = [
    "Claridad Estratégica: Disipa la niebla de la incertidumbre.",
    "Control Total: Elimina la presión operativa con automatización.",
    "Previsibilidad: Convierte un futuro incierto en proyecciones claras.",
    "Soporte 24/7: Tecnología que trabaja mientras tú descansas."
  ];

  return (
    <section className="py-24 bg-pulseDark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pulseCyan/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pulseMagenta/10 rounded-full blur-[100px]"></div>
          {/* Grid overlay subtly visible */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content - Sincronizado con el guion del video */}
            <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6 space-x-2">
                    <span className="h-px w-8 bg-pulseMagenta"></span>
                    <span className="text-pulseMagenta font-bold tracking-widest uppercase text-xs">
                        Mensaje a Fundadores
                    </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    "Las presiones son <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulseCyan to-white">Inmensas..."</span>
                </h2>
                
                <div className="bg-white/5 border-l-4 border-pulseCyan p-6 rounded-r-xl mb-8 backdrop-blur-sm">
                    <p className="text-xl text-gray-300 italic font-light leading-relaxed">
                        "...y el futuro es incierto. En <span className="text-white font-bold">Pulse Agency</span> entendemos que la duda es el costo más alto que paga un empresario hoy en día."
                    </p>
                </div>
                
                <p className="text-gray-400 mb-8 text-sm md:text-base">
                    No enfrentes el mercado solo. Nuestra infraestructura de IA está diseñada para absorber esa presión y darte la ventaja competitiva que necesitas para liderar.
                </p>
                
                <div className="grid sm:grid-cols-1 gap-4 mb-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-pulseCard/50 rounded-lg border border-white/5 hover:border-pulseCyan/30 transition-colors">
                            <div className="bg-pulseCyan/20 p-2 rounded-full mr-4">
                                {idx % 2 === 0 ? <BarChart className="w-4 h-4 text-pulseCyan" /> : <ShieldCheck className="w-4 h-4 text-pulseCyan" />}
                            </div>
                            <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>
                
                <button 
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-pulseCyan font-bold hover:text-white transition-colors flex items-center text-sm uppercase tracking-widest"
                >
                    Recuperar el control <span className="ml-2">→</span>
                </button>
            </div>

            {/* Video Player */}
            <div className="relative group order-1 lg:order-2">
                {/* Glow effect behind video */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-pulseCyan via-pulsePurple to-pulseMagenta rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl ring-1 ring-white/10">
                    {!isPlaying ? (
                    <>
                        <div className="absolute inset-0">
                            {/* Poster image */}
                            <img 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=90&w=1920&auto=format&fit=crop" 
                                alt="Director de Pulse Agency hablando en oficina moderna" 
                                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pulseDark via-pulseDark/40 to-transparent"></div>
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <button 
                                    onClick={() => setIsPlaying(true)}
                                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,242,255,0.2)] group-hover:bg-pulseCyan group-hover:border-transparent group-hover:shadow-[0_0_50px_rgba(0,242,255,0.5)]"
                                >
                                    <Play className="w-8 h-8 text-white group-hover:text-pulseDark fill-current ml-2" />
                                </button>
                                <span className="mt-4 text-white text-xs font-bold tracking-[0.2em] uppercase opacity-80">Ver Mensaje</span>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                                <span className="text-[10px] text-white font-bold uppercase">Video Exclusivo</span>
                            </div>
                        </div>
                    </>
                    ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center relative">
                        <video 
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            playsInline
                            src="/assets/video/pulse-manifesto.mp4"
                        >
                            <source src="/assets/video/pulse-manifesto.mp4" type="video/mp4" />
                            Tu navegador no soporta la etiqueta de video.
                        </video>
                    </div>
                    )}
                </div>
                
                {/* Decorative element under video */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pulseCyan/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoManifesto;

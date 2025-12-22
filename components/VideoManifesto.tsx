
import React, { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';

const VideoManifesto: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const benefits = [
    "Atención al cliente 24/7 en español e inglés sin personal extra.",
    "Automatización de citas y seguimiento de leads en segundos.",
    "Reducción de costos operativos hasta un 40%.",
    "Competitividad tecnológica frente a grandes corporaciones."
  ];

  return (
    <section className="py-24 bg-pulseDark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pulseCyan/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pulseMagenta/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
                <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
                    Video Explicativo
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Beneficios de la <span className="text-gradient-magenta">IA para PYMES Latinas</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Entiende en menos de 2 minutos cómo la Inteligencia Artificial está nivelando el campo de juego para los negocios hispanos en Estados Unidos. Automatiza lo aburrido, enfócate en crecer.
                </p>
                
                <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-pulseCyan mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-200">{benefit}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="flex items-center space-x-4">
                    <div className="h-px bg-white/20 flex-1"></div>
                    <span className="text-sm text-gray-500 font-mono">PULSE AGENCY EDUCATION</span>
                </div>
            </div>

            {/* Video Player */}
            <div className="relative group order-1 lg:order-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-pulseCyan to-pulseMagenta rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl">
                    {!isPlaying ? (
                    <>
                        <div className="absolute inset-0">
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1920&auto=format&fit=crop" 
                                alt="High tech data dashboard analysis" 
                                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-pulseDark/90 via-pulseDark/20 to-transparent"></div>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <button 
                                onClick={() => setIsPlaying(true)}
                                className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,242,255,0.3)] group-hover:bg-pulseCyan group-hover:border-transparent"
                            >
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-pulseDark fill-current ml-2" />
                            </button>
                            <p className="mt-6 text-white font-bold tracking-widest text-xs md:text-sm uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                Ver Video Explicativo
                            </p>
                        </div>
                    </>
                    ) : (
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/yQ_jY2e5e7k?autoplay=1" 
                        title="AI Automation Benefits for Latino Businesses"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoManifesto;

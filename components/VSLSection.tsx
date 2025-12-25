
import React from 'react';
import { Play, ShieldCheck, Zap, Star } from 'lucide-react';

const VSLSection: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pulseCyan/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pulseMagenta/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <span className="inline-flex items-center bg-pulseMagenta/10 border border-pulseMagenta/30 rounded-full px-4 py-1.5 mb-6 text-pulseMagenta text-xs font-bold tracking-widest uppercase">
                Presentación Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                El sistema que está <br/>
                <span className="text-gradient-cyan">escalando negocios en USA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Mira este video de 5 minutos para entender cómo la Inteligencia Artificial puede transformar tu flujo de ventas hoy mismo.
            </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pulseCyan via-pulsePurple to-pulseMagenta rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl">
                    <iframe 
                        src="https://player.vimeo.com/video/1148993755?h=88b06792f0&autoplay=0&title=0&byline=0&portrait=0" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        allowFullScreen
                        title="Netify VSL"
                    ></iframe>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <Zap className="w-6 h-6 text-pulseCyan mb-2" />
                    <span className="text-xs font-bold text-gray-300">Resultados Rápidos</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <ShieldCheck className="w-6 h-6 text-pulseCyan mb-2" />
                    <span className="text-xs font-bold text-gray-300">Sistema Seguro</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <Star className="w-6 h-6 text-pulseCyan mb-2" />
                    <span className="text-xs font-bold text-gray-300">Calidad Premium</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <Play className="w-6 h-6 text-pulseCyan mb-2" />
                    <span className="text-xs font-bold text-gray-300">Fácil de Escalar</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;

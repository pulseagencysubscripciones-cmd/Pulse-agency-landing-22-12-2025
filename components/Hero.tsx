
import React from 'react';
import { Rocket, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-pulseDark">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pulseCyan/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pulseMagenta/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">
              Actualizado: Noviembre 2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            DEJA DE PERDER <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulseCyan to-white">DINERO Y LLAMADAS.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            En 2025, el cliente compra al que responde primero. Instalamos un "empleado digital" que contesta mensajes, agenda citas y recupera clientes por ti, 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-pulseMagenta to-pulsePurple px-10 py-5 rounded-full font-bold text-xl shadow-neon-magenta hover:scale-105 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
            >
              QUIERO VENDER MÁS
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center sm:justify-start px-4">
              <p className="text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center">
                <span className="flex items-center mb-1 sm:mb-0">
                    <CheckCircle className="text-pulseCyan w-4 h-4 mr-1" /> Sin tecnicismos.
                </span>
                <span className="hidden sm:inline mx-2">•</span>
                <span className="flex items-center">
                    <CheckCircle className="text-pulseCyan w-4 h-4 mr-1" /> Resultados reales.
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 bg-pulseCard/50 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl transform hover:rotate-2 transition-transform duration-700 overflow-hidden group">
            <div className="aspect-video bg-pulseDark rounded-2xl relative overflow-hidden flex items-center justify-center border border-pulseCyan/20">
              {/* Optimized Hero Background with WebP support - High Quality 3D Abstract */}
              <div 
                className="absolute inset-0 bg-cover opacity-30 mix-blend-screen group-hover:scale-110 transition-transform duration-[20s]"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=90&w=1920&auto=format&fit=crop')` }}
                aria-hidden="true"
              ></div>
              
              <div className="text-center relative z-10 p-8 bg-pulseDark/90 rounded-2xl border border-pulseCyan/30 backdrop-blur-sm max-w-xs">
                <div className="w-16 h-16 bg-pulseCyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pulseCyan/50">
                  <TrendingUp className="w-8 h-8 text-pulseCyan animate-pulse" />
                </div>
                <h3 className="text-xl font-black mb-1 text-white">Tu Negocio Hoy</h3>
                <p className="text-gray-400 text-sm mb-4">Vs. Tu competencia manual</p>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Velocidad</span>
                    <span className="text-xs font-bold text-green-400">Inmediata (0s)</span>
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Atención</span>
                    <span className="text-xs font-bold text-green-400">24 horas / 7 días</span>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-pulseCyan/20 to-pulseMagenta/20 opacity-30 blur-3xl -z-10 rounded-full group-hover:opacity-50 transition-opacity"></div>
          </div>
          
          {/* Floating Element 1 */}
          <div className="absolute -top-6 -right-4 bg-pulseCard/90 p-4 rounded-xl border border-green-500/30 backdrop-blur-md shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                     <Rocket className="w-5 h-5 text-green-500" />
                 </div>
                 <div>
                    <div className="text-gray-400 text-xs font-bold uppercase">Crecimiento Q4</div>
                    <div className="text-lg font-black text-white">+32% Ventas</div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

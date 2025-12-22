
import React from 'react';
import { Rocket, ArrowRight, CheckCircle } from 'lucide-react';

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
          <span className="inline-block bg-pulseCyan/10 text-pulseCyan px-4 py-2 rounded-full text-xs font-bold mb-6 border border-pulseCyan/30 tracking-widest uppercase">
            Tecnología y Estrategia 2025
          </span>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            AUTOMATIZACIÓN <br /> 
            INTELIGENTE PARA
            <span className="block text-gradient-cyan mt-2">TU NEGOCIO.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            Ayudamos a PYMES latinas en EE. UU. a integrar tecnología que optimiza procesos de ventas y atención al cliente. Moderniza tu operación hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-pulseMagenta to-pulsePurple px-10 py-5 rounded-full font-bold text-xl shadow-neon-magenta hover:scale-105 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
            >
              AGENDAR CONSULTORÍA
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center sm:justify-start">
              <p className="text-sm text-gray-500 flex items-center px-4">
                <CheckCircle className="text-pulseCyan w-5 h-5 mr-2" /> 
                Diagnóstico Inicial
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
              
              <div className="text-center relative z-10 p-8 bg-pulseDark/80 rounded-2xl border border-pulseCyan/30 backdrop-blur-sm">
                <div className="w-20 h-20 bg-pulseCyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-pulseCyan animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Sistema Pulse IA</h3>
                <p className="text-pulseCyan font-semibold tracking-wide">Optimización de Recursos</p>
                <div className="mt-6 flex justify-center space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-1.5 w-8 rounded-full ${i < 4 ? 'bg-pulseCyan' : 'bg-gray-700'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-pulseCyan/20 to-pulseMagenta/20 opacity-30 blur-3xl -z-10 rounded-full group-hover:opacity-50 transition-opacity"></div>
          </div>
          
          {/* Floating Element 1 */}
          <div className="absolute -top-10 -right-4 bg-pulseCard/80 p-4 rounded-xl border border-pulseMagenta/30 backdrop-blur-md shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
             <div className="text-pulseMagenta font-bold text-sm">Respuesta Rápida</div>
             <div className="text-lg font-black">24/7 Activo</div>
          </div>

          {/* Floating Element 2 */}
          <div className="absolute -bottom-6 -left-10 bg-pulseCard/80 p-4 rounded-xl border border-pulseCyan/30 backdrop-blur-md shadow-lg animate-pulse">
             <div className="text-pulseCyan font-bold text-sm">Eficiencia</div>
             <div className="text-lg font-black">Optimizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

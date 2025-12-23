
import React from 'react';
import { Rocket, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

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
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              Atención Dueños de Negocio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            ¿TU NEGOCIO DEBERÍA <br /> 
            ESTAR CRECIENDO, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulseCyan to-white">PERO NO SABES QUÉ ESTÁ FALLANDO?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Te ayudamos a identificar en <span className="text-pulseCyan font-bold">30 minutos</span> lo que está frenando tu marketing y tus ventas.
          </p>
          
          <p className="text-sm text-gray-500 mb-8 italic border-l-2 border-white/20 pl-4 max-w-lg mx-auto lg:mx-0">
            "La mayoría de los dueños pierden dinero por no saber en qué enfocarse. Nosotros te mostramos con claridad qué hacer (y qué no hacer)."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-pulseMagenta to-pulsePurple px-10 py-5 rounded-full font-bold text-xl shadow-neon-magenta hover:scale-105 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
            >
              QUIERO CLARIDAD AHORA
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
             <span className="flex items-center"><CheckCircle className="w-4 h-4 text-pulseCyan mr-2"/> Sin humo</span>
             <span className="hidden sm:inline">•</span>
             <span className="flex items-center"><CheckCircle className="w-4 h-4 text-pulseCyan mr-2"/> Sin promesas mágicas</span>
             <span className="hidden sm:inline">•</span>
             <span className="flex items-center"><CheckCircle className="w-4 h-4 text-pulseCyan mr-2"/> IA Real Aplicada</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 bg-pulseCard/50 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl transform hover:rotate-2 transition-transform duration-700 overflow-hidden group">
            <div className="aspect-video bg-pulseDark rounded-2xl relative overflow-hidden flex items-center justify-center border border-pulseCyan/20">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1920&auto=format&fit=crop"
                alt="Análisis de datos de negocio"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pulseDark via-transparent to-transparent"></div>
              
              <div className="text-center relative z-10 p-8 bg-pulseDark/90 rounded-2xl border border-pulseCyan/30 backdrop-blur-sm max-w-xs shadow-2xl">
                <h3 className="text-xl font-black mb-1 text-white">Diagnóstico Gratuito</h3>
                <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">Valorado en $500 USD</p>
                <div className="h-px w-full bg-white/10 mb-4"></div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Análisis Web</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Auditoría Ads</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Plan de Acción</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-pulseCyan/20 to-pulseMagenta/20 opacity-30 blur-3xl -z-10 rounded-full group-hover:opacity-50 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-pulseDark">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pulseCyan/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pulseMagenta/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="w-3 h-3 text-red-500 mr-2" />
            <span className="text-red-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Atención Dueños de Negocio
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
            ¿TU NEGOCIO DEBERÍA <br /> 
            ESTAR CRECIENDO, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulseCyan to-white">PERO NO SABES QUÉ ESTÁ FALLANDO?</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Mira este video corto para identificar en <span className="text-pulseCyan font-bold">5 minutos</span> lo que está frenando tu marketing y tus ventas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-pulseMagenta to-pulsePurple px-8 py-4 rounded-full font-bold text-lg shadow-neon-magenta hover:scale-105 transition-all active:scale-95 flex items-center justify-center group cursor-pointer"
            >
              QUIERO CLARIDAD AHORA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-400">
             <span className="flex items-center"><CheckCircle className="w-3 h-3 text-pulseCyan mr-2"/> Sin humo</span>
             <span className="hidden sm:inline">•</span>
             <span className="flex items-center"><CheckCircle className="w-3 h-3 text-pulseCyan mr-2"/> Sin promesas mágicas</span>
             <span className="hidden sm:inline">•</span>
             <span className="flex items-center"><CheckCircle className="w-3 h-3 text-pulseCyan mr-2"/> IA Real Aplicada</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full relative">
          <div className="relative z-10 bg-black border border-pulsePurple/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(106,0,255,0.2)] aspect-video group">
             {/* VSL Iframe */}
             <iframe 
                src="https://player.vimeo.com/video/1148993755?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=88b06792f0&s=25b1c4e2ce8c4bff42a9939efb5e961cab4251b3_1766619267" 
                className="absolute inset-0 w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="VSL Netify"
             ></iframe>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-gradient-to-r from-pulsePurple/30 to-pulseMagenta/30 opacity-40 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

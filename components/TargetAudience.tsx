
import React from 'react';
import { CheckCircle, Ban, Briefcase, UserX, Clock } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pulseDark to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="bg-pulseCard/50 border border-white/5 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4">Perfil del Cliente Ideal</span>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
              Esto es para ti si...
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                    <Clock className="w-5 h-5 text-pulseCyan" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Estás cansado de ser "esclavo" del teléfono.</h4>
                    <p className="text-gray-400 text-sm mt-1">Sientes que si no contestas tú, pierdes la venta.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                    <UserX className="w-5 h-5 text-pulseCyan" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Tus empleados olvidan dar seguimiento.</h4>
                    <p className="text-gray-400 text-sm mt-1">Gastas dinero en publicidad (Ads) pero nadie llama a los interesados rápido.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                    <Briefcase className="w-5 h-5 text-pulseCyan" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Tienes un buen servicio, pero te falta orden.</h4>
                    <p className="text-gray-400 text-sm mt-1">Usas cuadernos, notas o Excel, y sabes que en 2025 eso ya no funciona.</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 pt-10 border-t border-white/10">
               <div className="flex items-start bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
                  <Ban className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-red-400 font-bold text-lg mb-1">
                        Esto NO es para ti si:
                    </p>
                    <p className="text-gray-400 text-sm">
                        Buscas "dinero fácil" sin tener un negocio real, o si no estás dispuesto a invertir en el crecimiento de tu empresa.
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[500px]">
             {/* High Quality Image representing a stressed vs relaxed business owner context */}
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=90&w=1920&auto=format&fit=crop" 
               alt="Empresario tranquilo revisando resultados en tablet" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-pulseDark via-pulseDark/50 to-transparent"></div>
             
             {/* Overlay Text - 2025 Context */}
             <div className="absolute bottom-12 left-12 right-12 p-8 bg-pulseDark/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Dato de Mercado 2025</span>
                    <span className="bg-pulseCyan/20 text-pulseCyan px-2 py-1 rounded text-xs font-bold">Fuente: Forbes</span>
                </div>
                <p className="text-white font-bold text-xl italic leading-relaxed mb-4">
                  "El 72% de los consumidores latinos en EE.UU. dicen que la <span className="text-pulseCyan">velocidad de respuesta</span> es el factor #1 para confiar en un negocio local."
                </p>
                <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pulseCyan w-[72%] h-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;


import React from 'react';
import { CheckCircle, Ban } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pulseDark to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="bg-pulseCard/50 border border-white/5 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
              ¿Para quién es <br /> <span className="text-gradient-cyan">Pulse Agency IA?</span>
            </h2>
            
            <ul className="space-y-6">
              {[
                'Negocios latinos establecidos en USA',
                'Empresas que buscan organizar sus procesos',
                'Marcas que necesitan datos claros para decidir',
                'Fundadores que valoran la eficiencia operativa'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-10 border-t border-white/10">
               <div className="flex items-start bg-pulseMagenta/5 p-6 rounded-2xl border border-pulseMagenta/20">
                  <Ban className="w-6 h-6 text-pulseMagenta mr-4 mt-1 flex-shrink-0" />
                  <p className="text-pulseMagenta font-bold text-lg">
                    No ofrecemos esquemas de enriquecimiento rápido. Trabajamos con negocios reales que buscan mejora continua.
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
             {/* High Quality Miami Skyline Image */}
             <img 
               src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=90&w=1920&auto=format&fit=crop" 
               alt="Vista nocturna del Skyline de Miami representando el crecimiento empresarial" 
               className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-all duration-1000"
               loading="lazy"
               width="1000"
               height="600"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-pulseDark via-transparent to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-pulseDark to-transparent"></div>
             
             {/* Overlay Text */}
             <div className="absolute bottom-12 left-12 right-12 p-8 bg-pulseDark/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-pulseCyan font-black text-xl italic leading-relaxed">
                  "Estudios del sector indican que la automatización puede liberar hasta el 30% del tiempo dedicado a tareas administrativas en PYMES."
                </p>
                <p className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-widest">- Datos de Industria</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

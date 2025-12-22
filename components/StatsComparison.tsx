
import React from 'react';
import { TrendingUp, AlertCircle, Zap } from 'lucide-react';

const StatsComparison: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tendencias de Mercado <span className="text-gradient-cyan">2025</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La adopción de tecnología marca la diferencia en la eficiencia operativa de los negocios modernos.
          </p>
        </div>

        {/* Interactive Growth Graph */}
        <div className="mb-20 bg-pulseCard/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-6 opacity-50">
              <div className="flex items-center space-x-4 text-sm font-bold">
                 <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-pulseCyan mr-2"></span> Con Automatización</div>
                 <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Gestión Manual</div>
              </div>
           </div>
           
           <h3 className="text-xl font-bold mb-8">Proyección de Eficiencia Operativa</h3>
           
           <div className="h-[300px] w-full relative">
              <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible">
                 {/* Grid Lines */}
                 <line x1="0" y1="250" x2="1000" y2="250" stroke="#333" strokeWidth="1" />
                 <line x1="0" y1="150" x2="1000" y2="150" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />
                 <line x1="0" y1="50" x2="1000" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />

                 {/* Traditional Curve (Flat/Decline) */}
                 <path 
                    d="M0,250 C200,240 500,260 1000,270" 
                    fill="none" 
                    stroke="#EF4444" 
                    strokeWidth="3" 
                    className="opacity-50"
                 />
                 
                 {/* AI Pulse Curve (Linear Growth) */}
                 <path 
                    d="M0,250 C200,240 400,150 1000,80" 
                    fill="none" 
                    stroke="#00F2FF" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw-path"
                    style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                 />
                 
                 {/* Animated Points */}
                 <circle cx="0" cy="250" r="6" fill="#00F2FF" className="animate-ping" style={{animationDuration: '3s'}} />
                 <circle cx="1000" cy="80" r="8" fill="#00F2FF" className="shadow-[0_0_20px_#00F2FF]" />
                 
                 {/* Tooltip Overlay (Static for Visual) */}
                 <g transform="translate(850, 100)">
                    <rect width="140" height="60" rx="10" fill="#0A1322" stroke="#00F2FF" strokeOpacity="0.5" />
                    <text x="70" y="25" textAnchor="middle" fill="#00F2FF" fontSize="14" fontWeight="bold">Escalabilidad</text>
                    <text x="70" y="45" textAnchor="middle" fill="#9CA3AF" fontSize="12">Sostenible</text>
                 </g>
              </svg>
           </div>
           
           <style>{`
             @keyframes drawPath {
               to { stroke-dashoffset: 0; }
             }
             .animate-draw-path {
               animation: drawPath 3s ease-out forwards;
             }
           `}</style>
           <p className="text-xs text-gray-600 mt-4 italic text-center">* Gráfica ilustrativa con fines conceptuales. No representa datos financieros específicos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Failure Case */}
          <div className="bg-pulseCard/30 border border-red-500/20 rounded-[2.5rem] p-10 relative group hover:border-red-500/40 transition-all">
            <div className="absolute -top-6 left-10 bg-red-600 p-4 rounded-2xl shadow-lg">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-2 text-red-400">Procesos Manuales</h3>
            <p className="text-gray-500 mb-10">Dependencia intensiva de horas hombre para tareas repetitivas.</p>
            
            <div className="text-center mb-10">
              <span className="block text-4xl font-black text-red-500">Limitado</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Capacidad de Respuesta</span>
            </div>
            
            <div className="w-full bg-gray-900 h-8 rounded-full overflow-hidden border border-white/5">
              <div className="bg-red-600 h-full w-[35%] transition-all duration-1000"></div>
            </div>
            <p className="text-right mt-4 font-bold text-red-400 text-lg">Crecimiento Lineal</p>
          </div>

          {/* Success Case */}
          <div className="bg-pulseCard/50 border border-pulseCyan/30 rounded-[2.5rem] p-10 relative group hover:border-pulseCyan transition-all shadow-neon-cyan lg:scale-105 z-10 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pulseCyan/5 to-transparent"></div>
            
            <div className="absolute -top-6 left-10 bg-pulseCyan p-4 rounded-2xl shadow-lg shadow-pulseCyan/50">
              <Zap className="w-8 h-8 text-pulseDark fill-current" />
            </div>
            
            <h3 className="text-2xl font-bold mt-6 mb-2 text-pulseCyan">Con Tecnología Pulse</h3>
            <p className="text-gray-400 mb-10">Automatización de tareas clave para liberar tiempo estratégico.</p>
            
            <div className="text-center mb-10 relative">
              <TrendingUp className="absolute -right-6 top-0 w-20 h-20 text-pulseCyan opacity-10" />
              <span className="block text-4xl font-black text-pulseCyan">Optimizado</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Capacidad de Respuesta</span>
            </div>
            
            <div className="w-full bg-gray-900 h-8 rounded-full overflow-hidden border border-white/5 relative">
              <div className="bg-pulseCyan h-full w-[85%] shadow-[0_0_20px_#00F2FF] animate-pulse"></div>
            </div>
            <p className="text-right mt-4 font-bold text-pulseCyan text-2xl">Crecimiento Escalable</p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-pulseDark/50 border border-white/10 rounded-xl">
            <p className="text-xs text-gray-500 text-justify">
                <strong>Aviso Legal:</strong> Las comparaciones mostradas representan modelos teóricos de gestión empresarial (Manual vs. Automatizado). Los resultados individuales pueden variar significativamente dependiendo de la industria, el mercado, la gestión del negocio y otros factores económicos. Pulse Agency no garantiza ningún nivel específico de ingresos o crecimiento.
            </p>
        </div>
      </div>
    </section>
  );
};

export default StatsComparison;

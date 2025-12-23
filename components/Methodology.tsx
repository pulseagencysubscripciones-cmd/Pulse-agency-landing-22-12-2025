
import React from 'react';
import { Search, MonitorPlay, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    num: '1',
    title: 'Encontramos tu dinero perdido',
    desc: 'Analizamos por qué no vendes más. Generalmente es porque no contestas rápido o no sigues a los interesados.'
  },
  {
    icon: MonitorPlay,
    num: '2',
    title: 'Instalamos el "Robot"',
    desc: 'Conectamos nuestro software a tu teléfono y redes. A partir de ahora, nadie se queda sin respuesta.'
  },
  {
    icon: Zap,
    num: '3',
    title: 'Encendemos el piloto automático',
    desc: 'El sistema empieza a contestar, filtrar curiosos y agendar citas reales en tu calendario.'
  },
  {
    icon: TrendingUp,
    num: '4',
    title: 'Disfrutas los resultados',
    desc: 'Tú te dedicas a dar servicio a clientes pagados, nosotros nos encargamos de traértelos.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block">Proceso Simple</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">¿Cómo funciona?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No necesitas saber de informática. Nosotros lo hacemos todo. <br/>
            <span className="text-pulseCyan italic">Tu única tarea es atender a los clientes que te enviamos.</span>
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-pulseDark via-pulsePurple/30 to-pulseDark hidden md:block z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-pulseDark border-4 border-pulsePurple rounded-full flex items-center justify-center mb-6 shadow-lg shadow-pulsePurple/20 group-hover:scale-110 group-hover:border-pulseCyan group-hover:shadow-pulseCyan/30 transition-all duration-300 relative z-10">
                  <step.icon className="w-10 h-10 text-white group-hover:text-pulseCyan transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pulsePurple rounded-full flex items-center justify-center text-sm font-bold border-2 border-pulseDark group-hover:bg-pulseCyan group-hover:text-pulseDark transition-colors">
                      {step.num}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pulseCyan transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

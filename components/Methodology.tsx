
import React from 'react';

const steps = [
  {
    num: '1',
    title: 'Diagnóstico',
    desc: 'Entendemos tus números actuales y detectamos fugas de capital en tus campañas actuales.'
  },
  {
    num: '2',
    title: 'Implementación',
    desc: 'Instalamos el sistema Pulse IA + Datos en tu infraestructura digital de forma transparente.'
  },
  {
    num: '3',
    title: 'Optimización',
    desc: 'Ajustamos las campañas basándonos en datos reales diarios del mercado y algoritmos.'
  },
  {
    num: '4',
    title: 'Escalado',
    desc: 'Aumentamos el presupuesto solo en lo que garantiza retorno positivo comprobado.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block">Metodología</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Nuestro sistema en 4 pasos</h2>
          <p className="text-xl text-pulseCyan font-semibold italic">📌 Todo medido. Todo documentado. Todo optimizado.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pulseCyan/30 to-transparent hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pulsePurple rounded-full flex items-center justify-center text-2xl font-black mb-8 shadow-lg shadow-pulsePurple/30 border-4 border-pulseDark group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
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

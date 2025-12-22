
import React from 'react';
import { Cpu, Users, BarChart3, Layers } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-pulseCyan" />,
    title: 'Consultoría IA',
    description: 'Análisis de tus procesos actuales para identificar dónde la inteligencia artificial puede reducir carga operativa.',
    color: 'pulseCyan',
    // Custom hover classes for specific neon glow
    hoverClass: 'hover:border-pulseCyan/50 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]'
  },
  {
    icon: <Layers className="w-8 h-8 text-pulseMagenta" />,
    title: 'CRM Automatizado',
    description: 'Implementación de sistemas para seguimiento de prospectos. Organización automática de tu base de datos.',
    color: 'pulseMagenta',
    hoverClass: 'hover:border-pulseMagenta/50 hover:shadow-[0_0_30px_rgba(188,0,109,0.15)]'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
    title: 'Ads Eficientes',
    description: 'Gestión de campañas en Meta & Google enfocadas en métricas de calidad y no solo en volumen de clics.',
    color: 'pulsePurple',
    hoverClass: 'hover:border-pulsePurple/50 hover:shadow-[0_0_30px_rgba(106,0,255,0.15)]'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pulseDark to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block">Servicios Profesionales</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Marketing <br /> Estratégico & <span className="text-gradient-cyan">Tecnología</span></h2>
            <p className="text-xl text-gray-400">
              Construimos ecosistemas digitales diseñados para la sostenibilidad y el orden de tu negocio a largo plazo.
            </p>
          </div>
          <div className="bg-pulseCard border border-white/10 p-8 rounded-3xl backdrop-blur-md hidden lg:block">
             <div className="text-4xl font-black text-pulseCyan mb-1">KPIs</div>
             <div className="text-sm text-gray-500 leading-tight">Enfoque total en métricas<br /> claves de rendimiento.</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-pulseCard/50 p-10 rounded-3xl border border-white/5 transition-all duration-500 hover:scale-[1.02] group hover:bg-pulseCard/70 relative overflow-hidden ${service.hoverClass}`}
            >
              {/* Subtle accent glow on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-pulseDark border border-white/10 group-hover:border-${service.color}/50 transition-all duration-500 group-hover:scale-110 group-hover:animate-scale-pulse shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className={`h-1 w-12 bg-gray-800 rounded-full group-hover:w-full transition-all duration-700 bg-gradient-to-r from-${service.color} to-transparent`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

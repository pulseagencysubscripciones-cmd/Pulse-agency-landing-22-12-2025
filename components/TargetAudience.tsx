
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pulseDark to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* YES Column */}
            <div className="bg-pulseCard/50 border border-green-500/20 rounded-[2rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                <h3 className="text-2xl font-black text-white mb-8 flex items-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mr-3" />
                    Este diagnóstico ES para ti si:
                </h3>
                <ul className="space-y-6">
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div></div>
                        <p className="text-gray-300">Tienes un negocio en USA y estás <strong>confundido</strong> con tu marketing actual.</p>
                    </li>
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div></div>
                        <p className="text-gray-300">Sientes que estás gastando dinero en Ads o Agencias <strong>sin tener resultados reales</strong>.</p>
                    </li>
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div></div>
                        <p className="text-gray-300"><strong>No eres técnico</strong>, pero quieres entender qué está pasando con tus ventas.</p>
                    </li>
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div></div>
                        <p className="text-gray-300">Quieres escalar sin depender de terceros o tener todo desordenado.</p>
                    </li>
                </ul>
            </div>

            {/* NO Column */}
            <div className="bg-pulseCard/30 border border-red-500/20 rounded-[2rem] p-10 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-700"></div>
                <h3 className="text-2xl font-black text-white mb-8 flex items-center">
                    <XCircle className="w-8 h-8 text-red-500 mr-3" />
                    NO es para ti si:
                </h3>
                <ul className="space-y-6">
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div></div>
                        <p className="text-gray-400">Solo buscas "hacer publicaciones bonitas" o "ganar seguidores" por vanidad.</p>
                    </li>
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div></div>
                        <p className="text-gray-400">No tienes intención real de <strong>invertir en una solución</strong> para tu negocio.</p>
                    </li>
                    <li className="flex items-start">
                        <div className="min-w-[24px] pt-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div></div>
                        <p className="text-gray-400">No estás dispuesto a delegar o implementar mejoras tecnológicas.</p>
                    </li>
                </ul>
                <div className="mt-8 p-4 bg-red-500/5 rounded-xl border border-red-500/10 text-center">
                    <p className="text-xs text-red-400 font-bold uppercase tracking-wide">
                        ⚠️ Buscamos casos de éxito, no curiosos.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

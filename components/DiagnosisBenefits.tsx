
import React from 'react';
import { ScanSearch, FileWarning, Lightbulb, Workflow } from 'lucide-react';

const DiagnosisBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-pulseDark relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-pulseCyan/10 border border-pulseCyan/20 text-pulseCyan font-bold text-xs tracking-widest uppercase mb-4">
                Transparencia Total
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿Qué incluye tu <span className="text-gradient-cyan">Diagnóstico Gratuito?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                No es una llamada de ventas agresiva. Es una sesión de consultoría real donde te llevas valor, trabajes con nosotros o no.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-pulseCyan/30 transition-colors group">
                <div className="w-14 h-14 bg-pulseCyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ScanSearch className="w-7 h-7 text-pulseCyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Análisis de Presencia</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Revisamos tus redes, tu web y tus embudos actuales (si existen) para ver la "foto completa" de cómo te ve el mercado.
                </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-red-400/30 transition-colors group">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileWarning className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Errores Invisibles</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Detectamos las fugas de dinero exactas. Esas pequeñas configuraciones o fallos de proceso que te están costando clientes cada día.
                </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-colors group">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Recomendaciones Reales</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Nada de teoría de libro. Te damos pasos prácticos aplicados a TU negocio específico, no plantillas genéricas.
                </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-pulseMagenta/30 transition-colors group">
                <div className="w-14 h-14 bg-pulseMagenta/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Workflow className="w-7 h-7 text-pulseMagenta" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visualización IA</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Te mostramos cómo la automatización y la Inteligencia Artificial pueden integrarse en tu flujo de trabajo sin complicarte la vida.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisBenefits;

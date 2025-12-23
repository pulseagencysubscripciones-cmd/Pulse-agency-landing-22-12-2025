
import React from 'react';
import { MessageSquare, CalendarClock, Database, Star, PhoneMissed, Zap, ArrowRight, LayoutDashboard } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark relative border-t border-white/5">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pulseCyan/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        
        {/* PART 1: SIMPLE EXPLANATION (BACK TO BASICS) */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-pulseCyan font-bold text-xs tracking-widest uppercase mb-4">
                    ¿Qué hacemos realmente?
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Tecnología compleja, <br/>
                    <span className="text-gradient-cyan">explicada fácil.</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Olvídate de términos complicados como "Algoritmos" o "API". 
                    Lo que ofrecemos es simple: <strong>Orden y Velocidad.</strong>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Analogy Card */}
                <div className="bg-pulseCard/50 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-pulseCyan/30 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap className="w-24 h-24 text-pulseCyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <span className="bg-pulseCyan text-pulseDark rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">A</span>
                        La Analogía de la "Recepcionista Infinita"
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Imagina contratar a una asistente estrella que:
                    </p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start"><CheckSimple /> Trabaja las 24 horas, los 7 días de la semana.</li>
                        <li className="flex items-start"><CheckSimple /> Contesta a cada cliente en menos de 5 segundos.</li>
                        <li className="flex items-start"><CheckSimple /> Nunca olvida agendar una cita.</li>
                        <li className="flex items-start"><CheckSimple /> No cobra horas extras ni pide vacaciones.</li>
                    </ul>
                    <div className="mt-6 p-4 bg-pulseCyan/10 rounded-xl border border-pulseCyan/20">
                        <p className="text-pulseCyan font-bold text-sm">
                            Eso es exactamente lo que nuestro software hace por tu negocio.
                        </p>
                    </div>
                </div>

                {/* The "Why" Card */}
                <div className="bg-pulseCard/50 p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-pulseMagenta/30 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <LayoutDashboard className="w-24 h-24 text-pulseMagenta" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <span className="bg-pulseMagenta text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">B</span>
                        El Problema que Solucionamos
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        La mayoría de negocios pierden dinero por <strong>desorganización</strong>, no por falta de clientes.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start"><CrossSimple /> Llamadas perdidas que nunca se devuelven.</li>
                        <li className="flex items-start"><CrossSimple /> Notas escritas en servilletas o cuadernos perdidos.</li>
                        <li className="flex items-start"><CrossSimple /> Clientes que preguntan precio y se les responde 5 horas tarde.</li>
                    </ul>
                    <div className="mt-6 p-4 bg-pulseMagenta/10 rounded-xl border border-pulseMagenta/20">
                        <p className="text-pulseMagenta font-bold text-sm">
                            Nosotros instalamos un "Cerebro Digital" que elimina este caos para siempre.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* PART 2: DETAILED SERVICES & IMPACT */}
        <div>
            <div className="flex items-center space-x-4 mb-10">
                <div className="h-px bg-white/20 flex-1"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Nuestros Servicios al Detalle</h3>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Service 1: Missed Call Text Back */}
                <div className="group bg-[#050f1e] p-8 rounded-2xl border border-white/5 hover:border-pulseCyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                    <div className="w-12 h-12 bg-pulseCyan/10 rounded-lg flex items-center justify-center mb-6 text-pulseCyan group-hover:scale-110 transition-transform">
                        <PhoneMissed className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-3">El "Salva-Ventas" (SMS Automático)</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Si te llaman y estás ocupado (en un techo, en una consulta o en una reunión), nuestro sistema detecta la llamada perdida y le envía automáticamente un SMS al cliente: <em>"Hola, vi que llamaste. Estoy con un cliente, ¿en qué puedo ayudarte?"</em>.
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl border-l-2 border-pulseCyan">
                        <span className="text-xs font-bold text-pulseCyan uppercase block mb-1">Impacto Hoy en Día:</span>
                        <p className="text-xs text-gray-300">
                            El 60% de los clientes contratan al <strong>primero que les responde</strong>. Si no contestas al instante, llaman a tu competencia. Esta herramienta evita que pierdas ese cliente.
                        </p>
                    </div>
                </div>

                {/* Service 2: Unified Inbox / CRM */}
                <div className="group bg-[#050f1e] p-8 rounded-2xl border border-white/5 hover:border-pulseMagenta/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(188,0,109,0.1)]">
                    <div className="w-12 h-12 bg-pulseMagenta/10 rounded-lg flex items-center justify-center mb-6 text-pulseMagenta group-hover:scale-110 transition-transform">
                        <Database className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-3">CRM: Tu Segundo Cerebro</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Unifica WhatsApp, Facebook Messenger, Instagram, SMS y Correos en una sola pantalla. Además, organiza a tus clientes en columnas: "Nuevo", "Interesado", "Cita Agendada", "Vendido".
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl border-l-2 border-pulseMagenta">
                        <span className="text-xs font-bold text-pulseMagenta uppercase block mb-1">Impacto Hoy en Día:</span>
                        <p className="text-xs text-gray-300">
                            Dejas de depender de tu memoria. Sabes exactamente cuánto dinero hay "sobre la mesa" y a quién debes llamar hoy para cerrar la venta.
                        </p>
                    </div>
                </div>

                {/* Service 3: Reputation Management */}
                <div className="group bg-[#050f1e] p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                        <Star className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-3">Generador de Confianza (Reviews)</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Automatizamos la solicitud de reseñas en Google. Cuando terminas un trabajo, el sistema le envía un mensaje al cliente feliz pidiéndole 5 estrellas con un solo clic.
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl border-l-2 border-yellow-500">
                        <span className="text-xs font-bold text-yellow-500 uppercase block mb-1">Impacto Hoy en Día:</span>
                        <p className="text-xs text-gray-300">
                            En 2025, nadie compra sin leer reseñas. Tener más de 50 reseñas positivas te permite cobrar más caro que tu competencia y cerrar ventas más fácil.
                        </p>
                    </div>
                </div>

                {/* Service 4: AI Booking */}
                <div className="group bg-[#050f1e] p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                        <CalendarClock className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-3">Agendamiento Automático</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Nuestro sistema califica al cliente mediante chat. Si califica, le muestra tu calendario disponible y le hace agendar la cita por sí mismo, enviándole recordatorios para que no falte.
                    </p>
                    <div className="bg-white/5 p-4 rounded-xl border-l-2 border-purple-500">
                        <span className="text-xs font-bold text-purple-500 uppercase block mb-1">Impacto Hoy en Día:</span>
                        <p className="text-xs text-gray-300">
                            Elimina el eterno "ping-pong" de mensajes para coordinar una hora. Te levantas por la mañana y tu calendario ya tiene citas de venta confirmadas.
                        </p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

// Helper Components for clean code
const CheckSimple = () => (
    <div className="min-w-[20px] h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
        <ArrowRight className="w-3 h-3 text-green-500" />
    </div>
);

const CrossSimple = () => (
    <div className="min-w-[20px] h-5 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5">
        <div className="w-2 h-0.5 bg-red-500 rotate-45 absolute"></div>
        <div className="w-2 h-0.5 bg-red-500 -rotate-45 absolute"></div>
    </div>
);

export default Services;


import React, { useState, useEffect, useRef } from 'react';
import { Search, Settings, RefreshCw, UserCheck, Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { Lead } from '../types';

const mockLeads: Lead[] = [
  { id: '1', name: 'Carlos Mendez', email: 'carlos@techlead.com', message: 'Quiere escalar tienda Shopify', interest: 'ALTO', date: '2025-05-12' },
  { id: '2', name: 'Elena Vasquez', email: 'elena@v-consulting.net', message: 'Necesita CRM para abogados', interest: 'MEDIO', date: '2025-05-11' },
  { id: '3', name: 'Jorge Diaz', email: 'jorge@roofing-miami.co', message: 'Busca leads calificados roofing', interest: 'ALTO', date: '2025-05-11' },
  { id: '4', name: 'Sofia Ruíz', email: 'sofia@beauty-expert.com', message: 'Automatización de agendamiento', interest: 'BAJO', date: '2025-05-10' },
  { id: '5', name: 'Marcos P.', email: 'm.perez@realestate.com', message: 'Integración GPT Action', interest: 'ALTO', date: '2025-05-10' },
];

const CRMDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    leads: 0,
    revenue: 0,
    progress: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate Leads to 1248
      const leadInterval = setInterval(() => {
        setStats(prev => {
          if (prev.leads >= 1248) {
            clearInterval(leadInterval);
            return prev;
          }
          return { ...prev, leads: prev.leads + 24 }; // Increment speed
        });
      }, 30);

      // Animate Revenue to 84500
      const revenueInterval = setInterval(() => {
        setStats(prev => {
          if (prev.revenue >= 84500) {
            clearInterval(revenueInterval);
            return prev;
          }
          return { ...prev, revenue: prev.revenue + 1690 }; // Increment speed
        });
      }, 30);

      // Animate Progress to 72%
      const progressInterval = setInterval(() => {
        setStats(prev => {
          if (prev.progress >= 72) {
            clearInterval(progressInterval);
            return prev;
          }
          return { ...prev, progress: prev.progress + 1 };
        });
      }, 20);

      return () => {
        clearInterval(leadInterval);
        clearInterval(revenueInterval);
        clearInterval(progressInterval);
      };
    }
  }, [isVisible]);

  return (
    <section id="dashboard" ref={sectionRef} className="py-24 bg-pulseDark overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <span className="text-pulseMagenta font-bold tracking-widest uppercase text-xs mb-2 block">Administración</span>
            <h2 className="text-4xl md:text-5xl font-black">CRM IA Dashboard</h2>
            <p className="text-gray-400 mt-2">Tus leads de Google Sheets en tiempo real.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="bg-pulsePurple/10 text-pulsePurple border border-pulsePurple/20 px-4 py-2 rounded-full text-xs font-bold flex items-center">
                <div className="w-2 h-2 bg-pulsePurple rounded-full mr-2 animate-ping"></div>
                SINCRONIZADO
             </div>
             <button className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition">
                <RefreshCw className="w-5 h-5 text-gray-400" />
             </button>
          </div>
        </div>

        {/* Animated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Total Leads */}
          <div className="bg-pulseCard/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-pulseCyan/30 transition-all duration-500 group">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-pulseCyan/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                   <Users className="w-6 h-6 text-pulseCyan" />
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">+12% vs mes anterior</span>
             </div>
             <div className="text-gray-400 text-sm font-medium mb-1">Total Leads Capturados</div>
             <div className="text-4xl font-black text-white group-hover:text-pulseCyan transition-colors">
                {stats.leads.toLocaleString()}
             </div>
          </div>

          {/* Card 2: Revenue Pipeline */}
          <div className="bg-pulseCard/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-pulseMagenta/30 transition-all duration-500 group">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-pulseMagenta/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                   <DollarSign className="w-6 h-6 text-pulseMagenta" />
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">+8.4% vs mes anterior</span>
             </div>
             <div className="text-gray-400 text-sm font-medium mb-1">Pipeline Proyectado</div>
             <div className="text-4xl font-black text-white group-hover:text-pulseMagenta transition-colors">
                ${stats.revenue.toLocaleString()}
             </div>
          </div>

          {/* Card 3: Sales Goal Progress */}
          <div className="bg-pulseCard/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                   <Activity className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs font-bold text-gray-400">Meta Mensual</span>
             </div>
             <div className="flex justify-between items-end mb-2">
                <div className="text-gray-400 text-sm font-medium">Progreso de Ventas</div>
                <div className="text-xl font-bold text-purple-400">{stats.progress}%</div>
             </div>
             
             {/* Animated Progress Bar */}
             <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                <div 
                   className="h-full bg-gradient-to-r from-purple-500 to-pulseMagenta rounded-full transition-all duration-100 ease-out relative"
                   style={{ width: `${stats.progress}%` }}
                >
                   <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
             </div>
             <div className="mt-2 text-xs text-gray-500 text-right">Faltan $15,500 para el objetivo</div>
          </div>
        </div>

        <div className="bg-pulseCard/40 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-2xl relative">
          <div className="p-6 border-b border-white/5 flex flex-wrap gap-4 items-center justify-between bg-white/5">
             <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Buscar prospecto..." 
                  className="w-full bg-pulseDark border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-pulseCyan outline-none transition"
                />
             </div>
             <div className="flex space-x-2">
                <button className="bg-pulseDark border border-white/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/5">Filtros</button>
                <button className="bg-pulseDark border border-white/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/5">Exportar</button>
             </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-xs font-bold tracking-widest uppercase bg-pulseDark/30">
                  <th className="px-8 py-5">Prospecto</th>
                  <th className="px-8 py-5">Mensaje / Consulta</th>
                  <th className="px-8 py-5">Interés</th>
                  <th className="px-8 py-5">Fecha</th>
                  <th className="px-8 py-5">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockLeads.map((lead) => (
                  <tr key={lead.id} className="group transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_3px_0_0_0_#00F2FF]">
                    <td className="px-8 py-6">
                      <div className="font-bold text-white group-hover:text-pulseCyan transition-colors duration-300">{lead.name}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{lead.email}</div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400 italic group-hover:text-gray-300 transition-colors">
                      "{lead.message}"
                    </td>
                    <td className="px-8 py-6">
                      <span className={`
                        px-3 py-1 rounded-full text-[10px] font-black tracking-widest transition-transform duration-300 group-hover:scale-105
                        ${lead.interest === 'ALTO' ? 'bg-green-500/10 text-green-500 border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]' : ''}
                        ${lead.interest === 'MEDIO' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30' : ''}
                        ${lead.interest === 'BAJO' ? 'bg-gray-500/10 text-gray-500 border border-gray-500/30' : ''}
                      `}>
                        {lead.interest}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {lead.date}
                    </td>
                    <td className="px-8 py-6">
                       <button className="p-2 rounded-lg transition-all duration-300 bg-white/5 text-gray-500 group-hover:bg-pulseCyan/10 group-hover:text-pulseCyan group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] hover:!bg-pulseCyan hover:!text-pulseDark hover:!scale-110">
                          <UserCheck className="w-4 h-4" />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-pulseDark/30 border-t border-white/5 flex justify-between items-center">
             <span className="text-xs text-gray-500">Mostrando {mockLeads.length} leads calificados recientemente</span>
             <div className="flex space-x-1">
                {[1, 2, 3].map(p => (
                   <button key={p} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition ${p === 1 ? 'bg-pulseCyan text-pulseDark' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>
                      {p}
                   </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMDashboard;

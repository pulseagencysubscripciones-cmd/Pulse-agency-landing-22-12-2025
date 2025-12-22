
import React from 'react';
import { Search, Settings, RefreshCw, UserCheck } from 'lucide-react';
import { Lead } from '../types';

const mockLeads: Lead[] = [
  { id: '1', name: 'Carlos Mendez', email: 'carlos@techlead.com', message: 'Quiere escalar tienda Shopify', interest: 'ALTO', date: '2025-05-12' },
  { id: '2', name: 'Elena Vasquez', email: 'elena@v-consulting.net', message: 'Necesita CRM para abogados', interest: 'MEDIO', date: '2025-05-11' },
  { id: '3', name: 'Jorge Diaz', email: 'jorge@roofing-miami.co', message: 'Busca leads calificados roofing', interest: 'ALTO', date: '2025-05-11' },
  { id: '4', name: 'Sofia Ruíz', email: 'sofia@beauty-expert.com', message: 'Automatización de agendamiento', interest: 'BAJO', date: '2025-05-10' },
  { id: '5', name: 'Marcos P.', email: 'm.perez@realestate.com', message: 'Integración GPT Action', interest: 'ALTO', date: '2025-05-10' },
];

const CRMDashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 bg-pulseDark overflow-hidden">
      <div className="container mx-auto px-6">
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

        <div className="bg-pulseCard/40 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-2xl">
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
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="font-bold text-white group-hover:text-pulseCyan transition-colors">{lead.name}</div>
                      <div className="text-xs text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400 italic">
                      "{lead.message}"
                    </td>
                    <td className="px-8 py-6">
                      <span className={`
                        px-3 py-1 rounded-full text-[10px] font-black tracking-widest
                        ${lead.interest === 'ALTO' ? 'bg-green-500/10 text-green-500 border border-green-500/30' : ''}
                        ${lead.interest === 'MEDIO' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30' : ''}
                        ${lead.interest === 'BAJO' ? 'bg-gray-500/10 text-gray-500 border border-gray-500/30' : ''}
                      `}>
                        {lead.interest}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-500">
                      {lead.date}
                    </td>
                    <td className="px-8 py-6">
                       <button className="p-2 bg-pulseCyan/10 rounded-lg text-pulseCyan hover:bg-pulseCyan hover:text-pulseDark transition-colors">
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

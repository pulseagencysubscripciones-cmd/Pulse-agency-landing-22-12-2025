
import React, { useState, useEffect } from 'react';
import { ROIResult } from '../types';

const ROICalculator: React.FC = () => {
  // BENCHMARKS REALES NOV 2025 - MERCADO HISPANO USA (Servicios/Home Improvement/Professional)
  // Inflación publicitaria Q4 2025 considerada.
  const [investment, setInvestment] = useState(3500); // Presupuesto estándar para PYME seria en USA ($3k-$5k)
  const [closingRate, setClosingRate] = useState(8.5);  // Tasa mejorada por Nutrición AI (Benchmark Pulse: 8-12%)
  const [cpl, setCpl] = useState(75);                 // CPL Realista Nov 2025 (Meta/Google blended para servicios: $60-$90)
  const [avgTicket, setAvgTicket] = useState(4500);   // Ticket Promedio (Ej. Techos, AC, Casos Legales, Remodelación)
  const [results, setResults] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    // Protección contra valores cero/negativos
    const safeCpl = cpl <= 0 ? 1 : cpl;
    
    // Cálculos
    const monthlyLeads = Math.floor(investment / safeCpl);
    const monthlySales = Math.floor(monthlyLeads * (closingRate / 100)); // Pisos conservadores
    const monthlyRevenue = monthlySales * avgTicket;
    const netProfit = monthlyRevenue - investment;
    
    // ROI Calculation
    const roi = investment > 0 ? (netProfit / investment) * 100 : 0;

    setResults({
      monthlyLeads,
      monthlySales,
      monthlyRevenue,
      roi,
      netProfit
    });
  };

  useEffect(() => {
    calculateROI();
  }, [investment, closingRate, cpl, avgTicket]);

  return (
    <section className="py-24 bg-gradient-to-t from-pulseDark to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">
             Datos de Mercado Actualizados: Noviembre 2025
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient-magenta">Calculadora de Proyección</h2>
          <p className="text-xl text-gray-400">Escenarios financieros basados en costos publicitarios (CPM/CPL) del Q4 2025.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-10">
            <div className="bg-pulseCard/50 p-8 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Investment */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    💰 Presupuesto Ads (Mensual)
                  </label>
                  <div className="flex items-center bg-pulseDark border border-white/10 rounded-2xl p-4 focus-within:border-pulseMagenta transition">
                    <span className="text-gray-500 mr-2">$</span>
                    <input 
                        type="number" 
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className="w-full bg-transparent text-2xl font-black outline-none text-white"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$1k (Min)</span>
                    <span>$50k (Scale)</span>
                  </div>
                </div>

                {/* Closing Rate */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    ⚙️ Tasa de Cierre c/ IA (%)
                  </label>
                  <div className="flex items-center bg-pulseDark border border-white/10 rounded-2xl p-4 focus-within:border-pulseMagenta transition">
                    <input 
                        type="number" 
                        value={closingRate}
                        onChange={(e) => setClosingRate(Number(e.target.value))}
                        className="w-full bg-transparent text-2xl font-black outline-none text-white"
                    />
                    <span className="text-gray-500 ml-2">%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="25" 
                    step="0.1"
                    value={closingRate}
                    onChange={(e) => setClosingRate(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1% (Frío)</span>
                    <span>25% (Referido/IA)</span>
                  </div>
                </div>

                {/* Cost Per Lead */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    🎯 Costo por Lead (CPL 2025)
                  </label>
                  <div className="flex items-center bg-pulseDark border border-white/10 rounded-2xl p-4 focus-within:border-pulseMagenta transition">
                    <span className="text-gray-500 mr-2">$</span>
                    <input 
                        type="number" 
                        value={cpl}
                        onChange={(e) => setCpl(Number(e.target.value))}
                        className="w-full bg-transparent text-2xl font-black outline-none text-white"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="250" 
                    step="5"
                    value={cpl}
                    onChange={(e) => setCpl(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$20 (Baja Comp)</span>
                    <span>$250 (Legal/Solar)</span>
                  </div>
                </div>

                {/* Average Ticket */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    📦 Valor Promedio Venta
                  </label>
                  <div className="flex items-center bg-pulseDark border border-white/10 rounded-2xl p-4 focus-within:border-pulseMagenta transition">
                    <span className="text-gray-500 mr-2">$</span>
                    <input 
                        type="number" 
                        value={avgTicket}
                        onChange={(e) => setAvgTicket(Number(e.target.value))}
                        className="w-full bg-transparent text-2xl font-black outline-none text-white"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="25000" 
                    step="100"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$500</span>
                    <span>$25k (High Ticket)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-pulseMagenta to-pulsePurple p-1 rounded-3xl h-full shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
              <div className="bg-pulseDark h-full rounded-[1.4rem] p-8 md:p-10 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4 flex justify-between items-center">
                    <span>Resultados Proyectados</span>
                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400 font-normal">Mensual</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center group hover:bg-white/5 p-2 rounded-lg transition">
                      <span className="text-gray-400 text-sm">Leads Calificados</span>
                      <span className="text-2xl font-black text-pulseCyan">{results?.monthlyLeads}</span>
                    </div>
                    <div className="flex justify-between items-center group hover:bg-white/5 p-2 rounded-lg transition">
                      <span className="text-gray-400 text-sm">Cierres Estimados</span>
                      <span className="text-2xl font-black text-pulseCyan">{results?.monthlySales}</span>
                    </div>
                    <div className="flex justify-between items-center group hover:bg-white/5 p-2 rounded-lg transition">
                      <span className="text-gray-400 text-sm">Facturación Bruta</span>
                      <span className="text-2xl font-black text-white">${results?.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                      <span className="text-base font-bold text-pulseMagenta">Beneficio Neto (Est.)</span>
                      <span className="text-3xl font-black text-pulseMagenta">${results?.netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                   <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Retorno de Inversión (ROI)</div>
                   <div className={`text-5xl font-black transition-colors ${results?.roi && results.roi > 0 ? 'text-green-400' : 'text-gray-500'}`}>
                     {results?.roi.toFixed(0)}%
                   </div>
                   
                   <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/5">
                        <p className="text-[9px] text-gray-500 leading-relaxed text-justify">
                            * NOTA: Cálculos basados en métricas promedio de industrias de servicios (Construcción, Salud, Legal) en Q4 2025. Los resultados varían según la estacionalidad y el ciclo de ventas. Pulse Agency utiliza IA para intentar maximizar la tasa de cierre, pero no garantiza ingresos específicos.
                        </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;

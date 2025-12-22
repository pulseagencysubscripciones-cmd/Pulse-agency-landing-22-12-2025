
import React, { useState, useEffect } from 'react';
import { ROIResult } from '../types';

const ROICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(3000);
  const [closingRate, setClosingRate] = useState(10);
  const [cpl, setCpl] = useState(25);
  const [avgTicket, setAvgTicket] = useState(1200);
  const [results, setResults] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    const monthlyLeads = Math.floor(investment / cpl);
    const monthlySales = Math.floor(monthlyLeads * (closingRate / 100));
    const monthlyRevenue = monthlySales * avgTicket;
    const netProfit = monthlyRevenue - investment;
    const roi = (netProfit / investment) * 100;

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
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient-magenta">Calculadora de Proyección</h2>
          <p className="text-xl text-gray-400">Simula escenarios matemáticos basados en tus métricas actuales.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-10">
            <div className="bg-pulseCard/50 p-8 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Investment */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    💰 Presupuesto Ads (Ejemplo)
                  </label>
                  <input 
                    type="number" 
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full bg-pulseDark border border-white/10 rounded-2xl p-4 text-2xl font-black outline-none focus:border-pulseMagenta transition"
                  />
                  <input 
                    type="range" 
                    min="500" 
                    max="50000" 
                    step="500"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta"
                  />
                </div>

                {/* Closing Rate */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    ⚙️ Tasa de Cierre (%)
                  </label>
                  <input 
                    type="number" 
                    value={closingRate}
                    onChange={(e) => setClosingRate(Number(e.target.value))}
                    className="w-full bg-pulseDark border border-white/10 rounded-2xl p-4 text-2xl font-black outline-none focus:border-pulseMagenta transition"
                  />
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    step="1"
                    value={closingRate}
                    onChange={(e) => setClosingRate(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta"
                  />
                </div>

                {/* Cost Per Lead */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    🎯 Costo por Lead (USD)
                  </label>
                  <input 
                    type="number" 
                    value={cpl}
                    onChange={(e) => setCpl(Number(e.target.value))}
                    className="w-full bg-pulseDark border border-white/10 rounded-2xl p-4 text-2xl font-black outline-none focus:border-pulseMagenta transition"
                  />
                  <input 
                    type="range" 
                    min="5" 
                    max="200" 
                    step="5"
                    value={cpl}
                    onChange={(e) => setCpl(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta"
                  />
                </div>

                {/* Average Ticket */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center">
                    📦 Valor Promedio Venta (USD)
                  </label>
                  <input 
                    type="number" 
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full bg-pulseDark border border-white/10 rounded-2xl p-4 text-2xl font-black outline-none focus:border-pulseMagenta transition"
                  />
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full mt-6 accent-pulseMagenta"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-pulseMagenta to-pulsePurple p-1 rounded-3xl h-full shadow-2xl">
              <div className="bg-pulseDark h-full rounded-[1.4rem] p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Escenario Simulado</h3>
                  
                  <div className="space-y-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Leads Estimados</span>
                      <span className="text-2xl font-black text-pulseCyan">{results?.monthlyLeads}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ventas Proyectadas</span>
                      <span className="text-2xl font-black text-pulseCyan">{results?.monthlySales}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ingreso Bruto (Est.)</span>
                      <span className="text-2xl font-black text-white">${results?.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                      <span className="text-lg font-bold text-pulseMagenta">Margen Bruto (Est.)</span>
                      <span className="text-3xl font-black text-pulseMagenta">${results?.netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                   <div className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-bold">Retorno Matemático</div>
                   <div className="text-6xl font-black text-white">{results?.roi.toFixed(0)}%</div>
                   <p className="mt-4 text-[10px] text-gray-400 leading-relaxed italic text-justify">
                     * AVISO IMPORTANTE: Esta calculadora es una herramienta de simulación matemática simple. Los resultados presentados son hipotéticos y se basan exclusivamente en las cifras ingresadas por el usuario. No constituyen una promesa, garantía o predicción de resultados financieros futuros. El rendimiento de las campañas publicitarias varía según el mercado, la oferta y factores externos.
                   </p>
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

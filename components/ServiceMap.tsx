
import React, { useState } from 'react';
import { MapPin, Users, TrendingUp, Building2 } from 'lucide-react';

interface Location {
  id: string;
  city: string;
  state: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  marketSize: string; // Real market data approx
  growth: string;
}

// Datos basados en proyecciones demográficas de negocios hispanos Nov 2025 (Stanford LBAN / US Census)
const locations: Location[] = [
  { 
    id: 'fl', 
    city: 'Miami/SoFlo', 
    state: 'FL', 
    x: 82, 
    y: 85, 
    marketSize: '680k+ Biz', 
    growth: '+14% YoY' 
  },
  { 
    id: 'ny', 
    city: 'Tri-State Area', 
    state: 'NY/NJ', 
    x: 87, 
    y: 28, 
    marketSize: '520k+ Biz', 
    growth: '+9% YoY' 
  },
  { 
    id: 'tx', 
    city: 'Houston/Dallas', 
    state: 'TX', 
    x: 48, 
    y: 78, 
    marketSize: '890k+ Biz', 
    growth: '+16% YoY' 
  },
  { 
    id: 'ca', 
    city: 'SoCal/LA', 
    state: 'CA', 
    x: 8, 
    y: 55, 
    marketSize: '1.2M+ Biz', 
    growth: '+11% YoY' 
  },
  { 
    id: 'il', 
    city: 'Chicago Area', 
    state: 'IL', 
    x: 65, 
    y: 35, 
    marketSize: '150k+ Biz', 
    growth: '+8% YoY' 
  }
];

const ServiceMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <section className="py-24 bg-pulseDark relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <span className="text-pulseCyan font-bold tracking-widest uppercase text-xs mb-4 block">
              Ecosistema Latino 2025
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              El motor de la economía <br />
              <span className="text-gradient-cyan">de EE.UU.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              El PIB Latino en USA superó los <strong>$3.6 Trillones</strong> en 2025. Somos el segmento de crecimiento más rápido, pero también el que enfrenta mayores desafíos de digitalización.
            </p>

            <div className="space-y-4">
              {locations.map((loc) => (
                <div 
                  key={loc.id}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                    activeLocation?.id === loc.id 
                      ? 'bg-pulseCard border-pulseCyan/50 shadow-[0_0_15px_rgba(0,242,255,0.1)]' 
                      : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                  onMouseEnter={() => setActiveLocation(loc)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <div className="flex items-center">
                    <MapPin className={`w-5 h-5 mr-3 ${activeLocation?.id === loc.id ? 'text-pulseCyan' : 'text-gray-500'}`} />
                    <div>
                      <h4 className="font-bold text-white">{loc.city}</h4>
                      <p className="text-xs text-gray-500">Hub Estratégico</p>
                    </div>
                  </div>
                  {activeLocation?.id === loc.id && (
                    <div className="text-right animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="text-xs font-bold text-pulseCyan flex items-center justify-end">
                        <Building2 className="w-3 h-3 mr-1" /> {loc.marketSize}
                      </div>
                      <div className="text-xs font-bold text-green-400 flex items-center justify-end">
                        <TrendingUp className="w-3 h-3 mr-1" /> {loc.growth}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-600 mt-6 italic">
                * Datos estimados SLEI 2025 State of Latino Entrepreneurship & US Census Bureau projections Nov 2025.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="lg:w-2/3 w-full relative">
            <div className="aspect-[5/3] w-full relative">
              {/* Map SVG Silhouette */}
              <svg 
                viewBox="0 0 960 600" 
                className="w-full h-full drop-shadow-2xl filter"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 242, 255, 0.1))' }}
              >
                <path 
                  d="M932.7,243.6l-5.6-13.6l-9.9,1.7l-4.5-5.6l-2.3-10.7l-9-7.3l2.8-6.2l-3.4-6.8l2.8-5.1l-10.7-14.7l0.6-5.6
                  l-6.8-6.8l-15.8,1.7l-6.2-7.3l-10.7-3.4l-6.2-7.9l-19.8-1.1l-0.6,3.4l-7.3-1.1l-2.3-7.9l-9-0.6l-2.8,4l-4.5-2.8l-2.3-9
                  l-6.2-1.7l-5.1,3.4l-9,1.1l-4-4l-6.8-0.6l-4,3.4l-6.8-1.7l-7.9,2.8l-1.1,5.6l-9,2.8l-0.6,5.6l-10.2,4.5l-6.2,12.4
                  l-10.7,0.6l-11.9-4l-9-9l-11.3,0.6l-3.4-4.5l-14.1,2.8l-2.8-2.8l-15.2,1.7l-6.2-3.4l-7.9,1.7l-15.8-2.3l-10.7,2.3
                  l-4-5.1l-5.6,2.3l-13.6-4l-11.9,1.1l-3.4-3.4l-7.9,1.1l-2.8-5.1l-12.4-0.6l-1.1-6.8l-14.7-1.1l-24.3,6.2l-7.3-4.5
                  l-16.9,4l-12.4-4.5l-11.3,4l-0.6,5.1l-13.6,1.7l-9,6.2l-16.4-1.7l-5.1,3.4l-18.1-2.8l-4,2.8l-7.9-1.1l-10.7,2.8
                  l-16.9-3.4l-20.9,4l-6.2,6.8l2.3,4.5l-6.2,14.7l-16.9,1.1l-5.1,6.8l-4,14.1l-10.7,4.5l-2.3,10.2l-6.8,5.1l1.1,10.7
                  l-4.5,13l5.6,13.6l10.2,13l-1.1,16.4l6.8,16.4l-2.8,5.6l5.1,9l1.7,11.3l8.5,10.2l-2.3,6.8l7.9,15.8l6.2,4l1.1,6.2
                  l8.5,8.5l-1.1,6.2l5.1,5.1l11.9,7.9l-1.1,6.8l6.2,4l12.4,24.3l9,7.3l12.4,0.6l4,5.1l7.9-0.6l7.3,7.9l16.9,6.2l5.1,6.8
                  l13.6,2.3l5.1,4.5l11.9,3.4l11.3-4l6.2,3.4l16.9-4.5l37.3,1.1l15.2,4.5l22,10.7l13.6-2.3l7.9,2.8l9.6-4l6.2-5.6l7.9-2.3
                  l4-4l14.1,2.8l4.5-4.5l14.7-2.3l4.5,2.3l13-2.3l6.2,4.5l2.3,6.2l12.4,3.4l11.3-4.5l0.6-5.1l6.8-4l0.6-9.6l6.8-6.2
                  l14.7,2.3l6.8-3.4l16.4,2.3l5.1-4l11.3,0.6l5.6-5.6l9.6-1.7l9-8.5l9-15.8l2.8-13l5.1-6.8l10.2,1.7l5.1-5.1l16.4-1.7
                  l1.7-6.2l14.7-6.8l4.5,1.7l7.3-6.2l3.4-6.8l10.2-2.3l7.9,5.1l9.6-1.1l7.3,6.8l5.6-2.8l7.3,6.2l4.5-2.8l7.9,7.9l3.4,0.6
                  l2.3-5.6l9-2.8l16.9,11.3l16.4,26.5l1.1,13l8.5,7.3l2.8,5.6l10.2,3.4l13.6-4.5l5.1-5.6l0.6-5.6l-5.6-7.3l-3.4-7.3
                  l5.6-5.6l-2.3-9l-6.8-7.9l-1.1-13l3.4-8.5l-4-9l-9-9.6l-0.6-7.9l4.5-9l7.3-4l6.2-7.9l1.1-9.6l5.1-7.9l5.6-2.8l5.1-9.6
                  l9-4l0.6-7.3l5.6-11.9l-3.4-6.2l-9.6-4l-1.1-5.6l3.4-12.4l-4-2.8l-1.7-5.1l-6.2-5.6L932.7,243.6z" 
                  fill="#0A1322" 
                  stroke="#1f2937"
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
              </svg>

              {/* Location Dots & Effects */}
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="absolute group"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onMouseEnter={() => setActiveLocation(loc)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Pulse Effect */}
                  <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-${
                    activeLocation?.id === loc.id ? 'pulseMagenta' : 'pulseCyan'
                  } opacity-20 animate-ping duration-1000`}></div>
                  
                  {/* Core Dot */}
                  <div className={`relative -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-pulseDark transition-all duration-300 ${
                    activeLocation?.id === loc.id 
                      ? 'bg-pulseMagenta scale-150 shadow-[0_0_15px_#BC006D]' 
                      : 'bg-pulseCyan hover:scale-125'
                  }`}></div>

                  {/* Tooltip on Map */}
                  <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-48 z-20 pointer-events-none transition-all duration-300 ${
                    activeLocation?.id === loc.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                  }`}>
                    <div className="bg-pulseDark/90 backdrop-blur-md border border-pulseCyan/30 p-3 rounded-xl shadow-2xl relative">
                      {/* Connector Line */}
                      <div className="absolute top-1/2 -left-2 w-2 h-px bg-pulseCyan/50"></div>
                      
                      <h4 className="font-bold text-white text-sm mb-1">{loc.city}</h4>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="bg-white/5 rounded p-1">
                          <span className="block text-gray-400">Total PYMES</span>
                          <span className="font-bold text-pulseCyan">{loc.marketSize}</span>
                        </div>
                        <div className="bg-white/5 rounded p-1">
                          <span className="block text-gray-400">Crecimiento</span>
                          <span className="font-bold text-green-400">{loc.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Grid Overlay on Map */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;

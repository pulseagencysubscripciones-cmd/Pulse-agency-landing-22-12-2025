
import React from 'react';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: "Roberto Garcia",
    company: "Miami Roofing Pro",
    review: "Nuestra organización interna mejoró drásticamente. Ahora tenemos visibilidad de los clientes interesados y no perdemos mensajes.",
    platform: "google",
    stars: 5,
    date: "Hace 2 días"
  },
  {
    name: "Ana Maria Torres",
    company: "Dental Spa TX",
    review: "Implementar un CRM ordenado nos ayudó a entender mejor de dónde vienen nuestros pacientes. Excelente servicio de consultoría.",
    platform: "trustpilot",
    stars: 5,
    date: "Hace 1 semana"
  },
  {
    name: "Carlos Velasco",
    company: "Velasco Logistics",
    review: "Poder responder consultas básicas de forma automática nos ahorra horas a la semana que dedicamos a operar el negocio.",
    platform: "google",
    stars: 5,
    date: "Hace 3 días"
  },
  {
    name: "Sofía Mendez",
    company: "E-commerce Beauty",
    review: "El equipo entiende el mercado latino. Nos ayudaron a profesionalizar nuestras campañas publicitarias.",
    platform: "trustpilot",
    stars: 5,
    date: "Hace 2 semanas"
  },
  {
    name: "Jorge P.",
    company: "Real Estate Florida",
    review: "Dejamos de depender de hojas de cálculo desordenadas. La digitalización fue un paso necesario para nuestra agencia.",
    platform: "google",
    stars: 5,
    date: "Ayer"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros <span className="text-gradient-cyan">Clientes</span></h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8">
           {/* Google Reviews Link */}
           <a 
             href="https://share.google/0lRmnIiHvaioq6sJz" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center group bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
           >
              <span className="font-bold text-xl mr-3 text-white">4.9/5</span>
              <div className="flex text-yellow-400 mr-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-left">
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">Google Reviews</span>
                  <span className="text-[10px] text-gray-500 flex items-center">Ver reseñas reales <ExternalLink className="w-2 h-2 ml-1" /></span>
              </div>
           </a>

           {/* Divider */}
           <div className="hidden md:block h-8 w-px bg-white/10"></div>

           {/* Trustpilot Link */}
           <a 
             href="https://www.trustpilot.com/review/pulseagencyusa.com"
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center group bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
           >
              <span className="font-bold text-xl mr-3 text-white">4.8/5</span>
              <div className="flex text-[#00b67a] mr-3">
                {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 bg-[#00b67a] mr-0.5 flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                </div>)}
              </div>
              <div className="text-left">
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">Trustpilot</span>
                  <span className="text-[10px] text-gray-500 flex items-center">Ver reseñas reales <ExternalLink className="w-2 h-2 ml-1" /></span>
              </div>
           </a>
        </div>
      </div>

      {/* Marquee Effect Container */}
      <div className="relative w-full mt-16">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pulseDark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pulseDark to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex space-x-6 animate-scroll w-max hover:pause-animation">
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="w-[350px] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-pulseCyan/50 transition-colors group">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-sm">
                        {review.name.charAt(0)}
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-white">{review.name}</h4>
                        <p className="text-xs text-gray-400">{review.company}</p>
                     </div>
                  </div>
                  {review.platform === 'google' ? (
                     <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        <span className="font-bold text-blue-500 text-xs">G</span>
                     </div>
                  ) : (
                     <div className="bg-[#00b67a] p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                     </div>
                  )}
               </div>
               
               <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => (
                     <Star key={i} className={`w-4 h-4 ${review.platform === 'google' ? 'text-yellow-400 fill-current' : 'text-[#00b67a] fill-current'}`} />
                  ))}
               </div>

               <p className="text-gray-300 text-sm leading-relaxed mb-4">"{review.review}"</p>
               
               <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500">{review.date}</span>
                  <div className="flex items-center text-pulseCyan text-xs">
                     <CheckCircle2 className="w-3 h-3 mr-1" /> Cliente Verificado
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

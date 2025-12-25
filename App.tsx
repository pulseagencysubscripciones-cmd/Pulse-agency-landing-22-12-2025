
import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Users,
  ClipboardList,
  CalendarClock
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiagnosisBenefits from './components/DiagnosisBenefits';
import StatsComparison from './components/StatsComparison';
import Services from './components/Services';
import CRMDashboard from './components/CRMDashboard';
import ROICalculator from './components/ROICalculator';
import Methodology from './components/Methodology';
import TargetAudience from './components/TargetAudience';
import ServiceMap from './components/ServiceMap';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AdGenerator from './components/AdGenerator';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pulseDark text-white selection:bg-pulseCyan selection:text-pulseDark">
      <Header />
      
      <main>
        <Hero />
        
        <DiagnosisBenefits />

        <StatsComparison />
        
        <div id="servicios">
          <Services />
        </div>
        
        <Testimonials />
        
        <CRMDashboard />

        <AdGenerator />
        
        <ROICalculator />
        
        <Methodology />
        
        <TargetAudience />
        
        <ServiceMap />

        <section id="agenda" className="py-24 relative overflow-hidden bg-gradient-to-b from-pulseDark to-indigo-950/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pulseMagenta to-transparent opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div className="lg:pr-8">
                   <div className="inline-flex items-center space-x-2 bg-pulseMagenta/10 border border-pulseMagenta/30 rounded-full px-4 py-1 mb-6">
                        <ClipboardList className="w-4 h-4 text-pulseMagenta" />
                        <span className="text-xs font-bold text-pulseMagenta uppercase tracking-wider">Último Paso</span>
                   </div>
                   
                   <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        Agenda tu diagnóstico gratuito y descubre <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulseMagenta to-white">qué está frenando tu crecimiento.</span>
                   </h2>
                   
                   <p className="text-xl text-gray-300 mb-8">
                        Para asegurarnos de que podemos ayudarte, por favor confirma lo siguiente antes de agendar:
                   </p>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 mb-8">
                        <div className="flex items-start">
                            <div className="bg-pulseCyan/20 p-1 rounded mr-3 mt-1">
                                <CheckCircle className="w-4 h-4 text-pulseCyan" />
                            </div>
                            <p className="text-sm text-gray-300">¿Tienes un negocio en funcionamiento actualmente?</p>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-pulseCyan/20 p-1 rounded mr-3 mt-1">
                                <CheckCircle className="w-4 h-4 text-pulseCyan" />
                            </div>
                            <p className="text-sm text-gray-300">¿Estás dispuesto a invertir si encontramos una solución aplicable?</p>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-pulseCyan/20 p-1 rounded mr-3 mt-1">
                                <CheckCircle className="w-4 h-4 text-pulseCyan" />
                            </div>
                            <p className="text-sm text-gray-300">¿Tienes poder de decisión sobre el marketing de la empresa?</p>
                        </div>
                   </div>

                   <button 
                     onClick={() => window.open('https://calendly.com/pulseagencyllc/30min', '_blank')}
                     className="w-full lg:hidden mb-8 bg-gradient-to-r from-pulseMagenta to-pulsePurple py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center"
                   >
                       Quiero claridad en mi negocio <ArrowRight className="ml-2 w-5 h-5" />
                   </button>

                   <div className="hidden lg:block">
                       <div className="flex items-center text-gray-500 text-sm mb-2">
                           <Users className="w-4 h-4 mr-2" /> 2 espacios disponibles para esta semana
                       </div>
                       <div className="h-1 w-64 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-red-500 w-[85%] animate-pulse"></div>
                       </div>
                   </div>
                </div>

                <div className="w-full">
                    <div className="bg-pulseCard/50 border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm relative group hover:border-pulseCyan/50 transition-all duration-500 min-h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-pulseCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        
                        <div className="relative z-10">
                            <div className="w-32 h-32 bg-pulseCyan/10 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 border border-pulseCyan/20 shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                                <CalendarClock className="w-16 h-16 text-pulseCyan animate-bounce-slow" />
                            </div>
                            
                            <h3 className="text-3xl font-black text-white mb-4">
                                Tu Agenda Estratégica
                            </h3>
                            
                            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                                Selecciona el horario que mejor se adapte a ti para tu sesión de diagnóstico gratuita de 30 minutos.
                            </p>
                            
                            <a 
                                href="https://calendly.com/pulseagencyllc/30min" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-pulseMagenta to-pulsePurple rounded-xl font-bold text-xl text-white shadow-neon-magenta hover:scale-105 transition-all group-hover:shadow-[0_0_30px_rgba(188,0,109,0.5)]"
                            >
                                <CalendarClock className="w-6 h-6 mr-3" />
                                Reservar Mi Espacio Ahora
                            </a>
                            
                            <p className="mt-6 text-xs text-gray-500">
                                * Se abrirá en una nueva pestaña segura
                            </p>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default App;

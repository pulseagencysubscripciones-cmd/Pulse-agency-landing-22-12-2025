
import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Cpu, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap,
  TrendingUp,
  AlertCircle,
  Users,
  Calendar,
  Layers,
  Search,
  Settings,
  ClipboardList
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
import VideoManifesto from './components/VideoManifesto';
import AdGenerator from './components/AdGenerator';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Inject Calendly script for the widget to function correctly
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', 'true');
    head?.appendChild(script);

    return () => {
      // Cleanup if necessary, though usually not needed for external widgets in this context
      if (head && head.contains(script)) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-pulseDark text-white selection:bg-pulseCyan selection:text-pulseDark">
      <Header />
      
      <main>
        <Hero />
        
        <DiagnosisBenefits />

        <StatsComparison />
        
        <VideoManifesto />

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

        {/* Final CTA Section / Booking Widget with Qualifier Context */}
        <section id="agenda" className="py-24 relative overflow-hidden bg-gradient-to-b from-pulseDark to-indigo-950/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pulseMagenta to-transparent opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: CTA & Qualifier */}
                <div className="lg:sticky lg:top-24">
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
                     onClick={() => document.querySelector('.calendly-inline-widget')?.scrollIntoView({behavior: 'smooth'})}
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

                {/* Right Column: Calendly */}
                <div className="w-full bg-pulseCard/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm relative">
                    <div className="p-4 bg-pulseDark border-b border-white/5 text-center">
                        <p className="text-sm font-bold text-gray-300">Selecciona tu horario a continuación</p>
                    </div>
                    {/* Loader Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pulseCyan"></div>
                    </div>
                    
                    <div 
                    className="calendly-inline-widget w-full h-[700px]" 
                    data-url="https://calendly.com/pulseagencyllc/30min?hide_gdpr_banner=1&background_color=020b1a&text_color=ffffff&primary_color=00f2ff" 
                    ></div>
                </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Buttons */}
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default App;

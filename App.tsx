
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
  Settings
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsComparison from './components/StatsComparison';
import Services from './components/Services';
import CRMDashboard from './components/CRMDashboard';
import ROICalculator from './components/ROICalculator';
import Methodology from './components/Methodology';
import TargetAudience from './components/TargetAudience';
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
        
        <Testimonials />

        <StatsComparison />
        
        <VideoManifesto />

        <div id="servicios">
          <Services />
        </div>
        
        <CRMDashboard />

        <AdGenerator />
        
        <ROICalculator />
        
        <Methodology />
        
        <TargetAudience />

        {/* Final CTA Section / Booking Widget */}
        <section id="agenda" className="py-24 relative overflow-hidden bg-gradient-to-b from-pulseDark to-indigo-950/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pulseMagenta to-transparent opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              ¿Listo para crecer <br /> 
              <span className="text-gradient-magenta">de verdad?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Selecciona un horario a continuación. Tu sesión de estrategia es gratuita y 100% accionable.
            </p>
            
            {/* Calendly Inline Widget Container */}
            <div className="w-full max-w-4xl mx-auto bg-pulseCard/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm relative">
                {/* Loader Placeholder (visible if script takes time) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pulseCyan"></div>
                </div>
                
                {/* 
                   Calendly Link Options:
                   - background_color: 020B1A (Matches pulseDark)
                   - text_color: FFFFFF (White)
                   - primary_color: 00F2FF (Pulse Cyan)
                */}
                <div 
                  className="calendly-inline-widget w-full h-[750px] md:h-[700px]" 
                  data-url="https://calendly.com/pulseagencyllc/30min?hide_gdpr_banner=1&background_color=020b1a&text_color=ffffff&primary_color=00f2ff" 
                ></div>
            </div>

            <div className="flex flex-col items-center mt-8 space-y-2">
              <p className="text-sm text-gray-400 flex items-center">
                <CheckCircle className="w-4 h-4 text-pulseCyan mr-2" />
                Cupos limitados por capacidad operativa
              </p>
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

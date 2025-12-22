
import React from 'react';
import { Mail, Phone, MapPin, Share2, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 py-20 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-20">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-pulseCyan">
                <span className="font-bold text-xl text-white">P</span>
              </div>
              <span className="text-xl font-bold tracking-wider">PULSE AGENCY IA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Marketing impulsado por IA y Datos para el mercado latino en Estados Unidos. El futuro del marketing es autónomo y nosotros lo construimos para ti.
            </p>
            <div className="flex space-x-4">
               <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pulseCyan hover:text-pulseDark transition-all">
                  <Globe className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pulseCyan hover:text-pulseDark transition-all">
                  <Share2 className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-pulseCyan hover:text-pulseDark transition-all">
                  <Github className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-pulseDark border border-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:border-pulseCyan transition-colors">
                  <Mail className="w-5 h-5 text-pulseCyan" />
                </div>
                <a href="mailto:info@pulseagencyusa.com" className="text-gray-400 hover:text-white transition-colors">info@pulseagencyusa.com</a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-pulseDark border border-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:border-pulseCyan transition-colors">
                  <Globe className="w-5 h-5 text-pulseCyan" />
                </div>
                <a href="https://www.pulseagencyusa.com" className="text-gray-400 hover:text-white transition-colors">www.pulseagencyusa.com</a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 bg-pulseDark border border-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:border-pulseCyan transition-colors">
                  <Phone className="w-5 h-5 text-pulseCyan" />
                </div>
                <a href="tel:+13074293264" className="text-gray-400 hover:text-white transition-colors">+1 (307) 4293264</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Oficina</h4>
            <div className="flex items-start group">
              <div className="w-10 h-10 bg-pulseDark border border-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:border-pulseCyan transition-colors mt-1">
                <MapPin className="w-5 h-5 text-pulseCyan" />
              </div>
              <div className="text-gray-400">
                <p className="font-bold text-white mb-1">Pulse Agency LLC</p>
                <p>Digital Growth HQ</p>
                <p>7950 NW 53rd St Ste 337,</p>
                <p>Miami, Florida, USA.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Legal</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
                 <li><a href="#" className="hover:text-pulseCyan transition-colors">Política de Privacidad</a></li>
                 <li><a href="#" className="hover:text-pulseCyan transition-colors">Términos y Condiciones</a></li>
                 <li><a href="#" className="hover:text-pulseCyan transition-colors">Cookies</a></li>
             </ul>
             <p className="mt-12 text-gray-600 text-xs">
                © 2025 Pulse Agency LLC. <br /> Todos los derechos reservados.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

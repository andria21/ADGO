"use client";

import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FooterProps {
  language: 'ka' | 'en';
}

const translations = {
  ka: {
    description: 'ADGO - თქვენი ბრენდის ხილვადობის პარტნიორი. ვქმნით ინოვაციურ ტაქსი რეკლამის გადაწყვეტილებებს.',
    quickLinks: 'სწრაფი ლინკები',
    services: 'სერვისები',
    pricing: 'ფასები',
    about: 'ჩვენს შესახებ',
    contact: 'კონტაქტი',
    followUs: 'გაგვყევით',
    rights: '© 2025 ADGO. ყველა უფლება დაცულია.',
    privacy: 'კონფიდენციალურობის პოლიტიკა',
    terms: 'მომსახურების პირობები'
  },
  en: {
    description: 'ADGO - Your brand visibility partner. We create innovative taxi advertising solutions.',
    quickLinks: 'Quick Links',
    services: 'Services',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    followUs: 'Follow Us',
    rights: '© 2025 ADGO. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  }
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#75604B]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-in"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <a href="/" className="text-2xl font-bold text-white mb-4 block hover:text-[#75604B] transition-colors duration-300 hover:scale-105 transform inline-block">
              ADGO
            </a>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed hover:text-gray-300 transition-colors duration-300">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#75604B] hover:to-[#8B7355] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#75604B] hover:to-[#8B7355] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#75604B] hover:to-[#8B7355] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#75604B] hover:to-[#8B7355] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-right animate-stagger-1">
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-x-2 block"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-x-2 block"
                >
                  {t.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-x-2 block"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-x-2 block"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-slide-in-right animate-stagger-2">
            <h3 className="text-lg font-semibold mb-4">{t.followUs}</h3>
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              {language === 'ka' 
                ? 'გაეცანით ჩვენს უახლეს პროექტებს და სიახლეებს სოციალურ მედიაში.'
                : 'Stay updated with our latest projects and news on social media.'
              }
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">{t.rights}</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-y-1">
                {t.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#75604B] transition-all duration-300 hover:translate-y-1">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
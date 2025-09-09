"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'ka' | 'en';
  setLanguage: (lang: 'ka' | 'en') => void;
}

const translations = {
  ka: {
    services: 'სერვისები',
    pricing: 'ფასები',
    about: 'ჩვენს შესახებ',
    contact: 'კონტაქტი',
  },
  en: {
    services: 'Services',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
  }
};

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={`font-bold text-[#75604B] hover:text-[#8B7355] transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              ADGO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="relative text-gray-700 hover:text-[#75604B] px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{t.services}</span>
                <div className="absolute inset-0 bg-[#75604B]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="relative text-gray-700 hover:text-[#75604B] px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{t.pricing}</span>
                <div className="absolute inset-0 bg-[#75604B]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-gray-700 hover:text-[#75604B] px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{t.about}</span>
                <div className="absolute inset-0 bg-[#75604B]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative text-gray-700 hover:text-[#75604B] px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{t.contact}</span>
                <div className="absolute inset-0 bg-[#75604B]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100/80 backdrop-blur-sm rounded-full p-1 hover:bg-gray-200/80 transition-all duration-300">
              <button
                onClick={() => setLanguage('ka')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                  language === 'ka'
                    ? 'bg-[#75604B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-[#75604B]'
                }`}
              >
                ქა
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-[#75604B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-[#75604B]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#75604B] p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#75604B] hover:bg-[#75604B]/10 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#75604B] hover:bg-[#75604B]/10 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
            >
              {t.pricing}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#75604B] hover:bg-[#75604B]/10 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#75604B] hover:bg-[#75604B]/10 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
            >
              {t.contact}
            </button>
        </div>
      </div>
    </nav>
  );
}
"use client";

import { ArrowRight, Sparkles, Play, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  language: 'ka' | 'en';
}

const translations = {
  ka: {
    title: 'დროა, თქვენი ბრენდი ამოძრაოთ!',
    subtitle: 'ჩვენ ვიყენებთ ტაქსებს, როგორც მოძრავ რეკლამის პლატფორმას. ციფრული ეკრანები ტაქსების თავზე - თქვენი ბრენდის ხილვადობა მთელ ქალაქში.',
    cta: 'დაიწყეთ პროექტი',
    experience: 'აქტიური ტაქსი',
    projects: 'რეკლამის კამპანია',
    clients: 'კმაყოფილი კლიენტი'
  },
  en: {
    title: 'Time to Elevate Your Brand!',
    subtitle: 'We use taxis as moving advertising platforms. Digital displays on taxi rooftops - your brand visibility across the entire city.',
    cta: 'Start Your Project',
    experience: 'Active Taxis',
    projects: 'Ad Campaigns',
    clients: 'Happy Clients'
  }
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setTypingComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#75604B]/5 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[#75604B]/10 to-[#8B7355]/10 text-[#75604B] px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-[#75604B]/20 hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            <Sparkles size={16} />
            <span>Taxi Advertising</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-[#75604B] to-gray-900 bg-clip-text text-transparent mb-6 leading-tight ${isVisible ? 'animate-slide-up animate-stagger-1' : 'opacity-0'}`}>
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-slide-up animate-stagger-2' : 'opacity-0'}`}>
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isVisible ? 'animate-slide-up animate-stagger-3' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-500 animate-gradient overflow-hidden"
            >
              <div className="absolute -inset-2 bg-white/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
              <div className="absolute -inset-1 bg-white/15 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out delay-75"></div>
              <span className="relative z-10">{t.cta}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-[#75604B] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#75604B]/20 hover:border-[#75604B] hover:bg-[#75604B]/5 transform hover:scale-105 transition-all duration-300">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>{language === 'ka' ? 'ვიდეო ნახვა' : 'Watch Demo'}</span>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 ${isVisible ? 'animate-slide-up animate-stagger-4' : 'opacity-0'}`}>
            <div className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-[#75604B] mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'ka' ? 'მაღალი ROI' : 'High ROI'}</h3>
              <p className="text-sm text-gray-600">{language === 'ka' ? 'გაზომვადი შედეგები' : 'Measurable Results'}</p>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Zap className="w-8 h-8 text-[#75604B] mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'ka' ? 'სწრაფი დაწყება' : 'Quick Start'}</h3>
              <p className="text-sm text-gray-600">{language === 'ka' ? '24 საათში' : 'Within 24 Hours'}</p>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-[#75604B] mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'ka' ? 'ციფრული ეკრანები' : 'Digital Displays'}</h3>
              <p className="text-sm text-gray-600">{language === 'ka' ? 'HD ხარისხი' : 'HD Quality'}</p>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-20 border-t border-gray-200/50 ${isVisible ? 'animate-slide-up animate-stagger-5' : 'opacity-0'}`}>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#75604B] to-[#8B7355] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-gray-600 font-medium">{t.experience}</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#75604B] to-[#8B7355] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-600 font-medium">{t.projects}</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#75604B] to-[#8B7355] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-gray-600 font-medium">{t.clients}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Code, Smartphone, Search, Palette, Globe, Zap, Target, Award, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface ServicesProps {
  language: 'ka' | 'en';
}

const translations = {
  ka: {
    title: 'ჩვენი სერვისები',
    subtitle: 'ვთავაზობთ ინოვაციურ ტაქსი რეკლამის გადაწყვეტილებებს',
    services: [
      {
        icon: Globe,
        title: 'ციფრული ეკრანები',
        description: 'მაღალი რეზოლუციის LED ეკრანები ტაქსების თავზე'
      },
      {
        icon: Smartphone,
        title: 'რეალ-დროის მონიტორინგი',
        description: 'GPS ტრეკინგი და რეკლამის ეფექტურობის ანალიზი'
      },
      {
        icon: Award,
        title: 'ანალიტიკა',
        description: 'დეტალური რეპორტები და ROI გაზომვა'
      }
    ]
  },
  en: {
    title: 'Our Services',
    subtitle: 'We offer innovative taxi advertising solutions',
    services: [
      {
        icon: Globe,
        title: 'Digital Displays',
        description: 'High-resolution LED screens mounted on taxi rooftops'
      },
      {
        icon: Smartphone,
        title: 'Real-time Monitoring',
        description: 'GPS tracking and advertising effectiveness analysis'
      },
      {
        icon: Target,
        title: 'Geo-targeting',
        description: 'Display your ads in specific neighborhoods and areas'
      },
      {
        icon: Palette,
        title: 'Creative Design',
        description: 'Professional advertising design and animation services'
      },
      {
        icon: Zap,
        title: 'Quick Deployment',
        description: 'Your ads on the streets within 24 hours'
      },
      {
        icon: Award,
        title: 'Analytics',
        description: 'Detailed reports and ROI measurement'
      }
    ]
  }
};

export default function Services({ language }: ServicesProps) {
  const t = translations[language];
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items with staggered delay
            t.services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [t.services]);

  return (
    <section ref={sectionRef} id="services" className="py-20 md:pt-0 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#75604B]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#75604B] to-gray-900 bg-clip-text text-transparent mb-2 animate-slide-up leading-none pb-2">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up animate-stagger-1">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-1 group border border-white/20 relative overflow-hidden ${
                  isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#75604B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-float">
                    <IconComponent className="w-8 h-8 text-[#75604B] group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#75604B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 relative z-10">
          <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-pulse-glow">
            <span>{language === 'ka' ? 'ყველა სერვისი' : 'All Services'}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Users, Award, Target, Heart } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface AboutProps {
  language: 'ka' | 'en';
}

const translations = {
  ka: {
    title: 'ჩვენს შესახებ',
    subtitle: 'ჩვენ ვართ ტაქსი რეკლამის ინოვაციური გადაწყვეტილებების ლიდერები',
    description: 'ADGO არის რევოლუციური კომპანია, რომელიც გარდაქმნის ტაქსებს მოძრავ რეკლამის პლატფორმებად. ჩვენი ციფრული ეკრანები ტაქსების თავზე უზრუნველყოფს თქვენი ბრენდის მაქსიმალურ ხილვადობას მთელ ქალაქში.',
    values: [
      {
        icon: Users,
        title: 'ინოვაცია',
        description: 'ვიყენებთ უახლეს ტექნოლოგიებს მოძრავი რეკლამისთვის'
      },
      {
        icon: Award,
        title: 'ეფექტურობა',
        description: 'მაღალი ROI და გაზომვადი შედეგები ყველა კამპანიისთვის'
      },
      {
        icon: Target,
        title: 'გეო-ზუსტობა',
        description: 'სწორედ იქ, სადაც თქვენი მომხმარებლები არიან'
      },
      {
        icon: Heart,
        title: '24/7 მუშაობა',
        description: 'თქვენი რეკლამა მუშაობს დღე-ღამე, ყოველ დღე'
      }
    ]
  },
  en: {
    title: 'About Us',
    subtitle: 'We are the leaders in innovative taxi advertising solutions',
    description: 'ADGO is a revolutionary company that transforms taxis into moving advertising platforms. Our digital displays on taxi rooftops ensure maximum visibility for your brand throughout the entire city.',
    values: [
      {
        icon: Users,
        title: 'Innovation',
        description: 'We use cutting-edge technology for mobile advertising'
      },
      {
        icon: Award,
        title: 'Effectiveness',
        description: 'High ROI and measurable results for every campaign'
      },
      {
        icon: Target,
        title: 'Geo-Precision',
        description: 'Right where your customers are located'
      },
      {
        icon: Heart,
        title: '24/7 Operation',
        description: 'Your ads work day and night, every single day'
      }
    ]
  }
};

export default function About({ language }: AboutProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate values with staggered delay
            t.values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleValues(prev => [...prev, index]);
              }, index * 200);
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
  }, [t.values]);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-[#75604B]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#75604B] to-gray-900 bg-clip-text text-transparent mb-2 leading-none pb-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {t.title}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-8 ${isVisible ? 'animate-slide-up animate-stagger-1' : 'opacity-0'}`}>
            {t.subtitle}
          </p>
          <p className={`text-gray-600 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-slide-up animate-stagger-2' : 'opacity-0'}`}>
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {t.values.map((value, index) => {
            const IconComponent = value.icon;
            const isValueVisible = visibleValues.includes(index);
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-4 hover:rotate-1 group relative overflow-hidden ${
                  isValueVisible ? 'animate-bounce-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#75604B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-float">
                    <IconComponent className="w-10 h-10 text-[#75604B] group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#75604B] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Content */}
        <div className={`mt-20 text-center relative z-10 ${isVisible ? 'animate-slide-up animate-stagger-6' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#75604B]/5 to-[#8B7355]/5 rounded-3xl p-8 backdrop-blur-sm border border-[#75604B]/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'ka' ? 'რატომ ADGO?' : 'Why Choose ADGO?'}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ka' 
                ? 'ჩვენ ვართ პირველები საქართველოში, ვინც დავნერგეთ ციფრული ეკრანები ტაქსების თავზე. ჩვენი ინოვაციური მიდგომა და ტექნოლოგიური გადაწყვეტილებები უზრუნველყოფს თქვენი ბრენდის მაქსიმალურ ხილვადობას.'
                : 'We are the first in Georgia to implement digital displays on taxi rooftops. Our innovative approach and technological solutions ensure maximum visibility for your brand.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
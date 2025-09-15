"use client";

import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ContactProps {
  language: 'ka' | 'en';
}

const translations = {
  ka: {
    title: 'კონტაქტი',
    subtitle: 'მზად ვართ დავიწყოთ თქვენი რეკლამის კამპანია',
    form: {
      name: 'სახელი',
      namePlaceholder: 'თქვენი სახელი',
      email: 'ელ. ფოსტა',
      emailPlaceholder: 'your@email.com',
      subject: 'კამპანიის ტიპი',
      subjectPlaceholder: 'რეკლამის კამპანიის ტიპი',
      message: 'შეტყობინება',
      messagePlaceholder: 'გვიწერეთ თქვენი რეკლამის კამპანიის შესახებ...',
      send: 'გაგზავნა'
    },
    info: {
      email: 'sales@adgo.ge',
      phone: '+995 597 14 11 99 | 593 68 42 68',
      address: 'თბილისი, საქართველო'
    }
  },
  en: {
    title: 'Contact',
    subtitle: 'Ready to start your advertising campaign',
    form: {
      name: 'Name',
      namePlaceholder: 'Your Name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Campaign Type',
      subjectPlaceholder: 'Advertising Campaign Type',
      message: 'Message',
      messagePlaceholder: 'Tell us about your advertising campaign...',
      send: 'Send Message'
    },
    info: {
      email: 'sales@adgo.ge',
      phone: '+995 597 14 11 99 | 593 68 42 68',
      address: 'Tbilisi, Georgia'
    }
  }
};

export default function Contact({ language }: ContactProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
    
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#75604B]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#75604B] to-gray-900 bg-clip-text text-transparent mb-2 leading-none pb-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {t.title}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up animate-stagger-1' : 'opacity-0'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20 group">
              <div className="flex items-start space-x-4 mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] transition-all duration-500 animate-float">
                  <Mail className="w-7 h-7 text-[#75604B] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#75604B] transition-colors duration-300">Email</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.info.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] transition-all duration-500 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Phone className="w-7 h-7 text-[#75604B] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#75604B] transition-colors duration-300">Phone</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.info.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
                  <MapPin className="w-7 h-7 text-[#75604B] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#75604B] transition-colors duration-300">Location</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.info.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20 relative overflow-hidden ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-green-50/95 backdrop-blur-sm flex items-center justify-center z-20 rounded-2xl animate-scale-in">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-in" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {language === 'ka' ? 'წარმატებით გაიგზავნა!' : 'Successfully Sent!'}
                  </h3>
                  <p className="text-green-600">
                    {language === 'ka' ? 'მალე დაგიკავშირდებით' : 'We\'ll contact you soon'}
                  </p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75604B] focus:border-transparent transition-all duration-300 hover:border-[#75604B]/50 bg-white/50 backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75604B] focus:border-transparent transition-all duration-300 hover:border-[#75604B]/50 bg-white/50 backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.form.subjectPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75604B] focus:border-transparent transition-all duration-300 hover:border-[#75604B]/50 bg-white/50 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75604B] focus:border-transparent transition-all duration-300 hover:border-[#75604B]/50 bg-white/50 backdrop-blur-sm resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-2 relative overflow-hidden group ${
                  isSubmitting ? 'cursor-not-allowed opacity-75' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{language === 'ka' ? 'იგზავნება...' : 'Sending...'}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t.form.send}</span>
                    <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#75604B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
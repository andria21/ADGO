"use client";

import { Check, Star, Zap, Crown, Target, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface PricingProps {
  language: "ka" | "en";
}

const translations = {
  ka: {
    title: "ფასები",
    subtitle: "აირჩიეთ თქვენთვის შესაფერისი პაკეტი",
    popular: "პოპულარული",
    premium: "პრემიუმი",
    getStarted: "დაიწყეთ",
    contactUs: "დაგვიკავშირდით",
    packages: [
      {
        name: "სტანდარტული 1 საათი",
        price: "1500$",
        duration: "1 თვე",
        description: "5 მანქანაზე სტანდარტული პაკეტი, 4k რეზოლუცია",
        features: [
          "5 აქტიური ტაქსი",
          "1 საათი ჩვენება",
          "Display 960x320 ხილვადობა 3-20 მეტრი",
          "HD ხარისხის ეკრანები",
          "რეალ-დროის მონიტორინგი",
          "ძირითადი ანალიტიკა",
        ],
        icon: Target,
        popular: false,
      },
      {
        name: "სტანდარტული 2 საათი",
        price: "2300$",
        duration: "1 თვე",
        description: "5 მანქანაზე სტანდარტული პაკეტი, 4k რეზოლუცია",
        features: [
          "5 აქტიური ტაქსი",
          "2 საათი ჩვენება",
          "Display 960x320 ხილვადობა 3-20 მეტრი",
          "HD ხარისხის ეკრანები",
          "რეალ-დროის მონიტორინგი",
          "დეტალური ანალიტიკა",
          "გეო-ტარგეტინგი",
        ],
        icon: Star,
        popular: true,
      },
      {
        name: "ივენთ პაკეტი",
        price: "600$",
        duration: "კვირაში",
        description:
          "ორშაბათიდან კვირამდე 1 კვირა, დღეში 1 საათი, 4k რეზოლუცია",
        features: [
          "კვირის განმავლობაში",
          "ორშაბათიდან კვირამდე",
          "დღეში 1 საათი ჩვენება",
          "Display 960x320 ხილვადობა 3-20 მეტრი",
          "ივენთებისთვის იდეალური",
          "ფლექსიბილური განრიგი",
        ],
        icon: Zap,
        popular: false,
      },
    ],
    eventPackages: [],
    premiumPackages: [
      {
        name: "ივენთ პაკეტი",
        price: "1000$",
        duration: "კვირაში",
        description:
          "ორშაბათიდან კვირამდე 1 კვირა, დღეში 2 საათი, 4k რეზოლუცია",
        features: [
          "კვირის განმავლობაში",
          "ორშაბათიდან კვირამდე",
          "დღეში 2 საათი ჩვენება",
          "Display 960x320 ხილვადობა 3-20 მეტრი",
          "გაფართოებული ივენთ პაკეტი",
          "მაქსიმალური ეფექტურობა",
        ],
        icon: Calendar,
      },
      {
        name: "ინდივიდუალური პაკეტი",
        price: "",
        duration: "",
        description: "4k რეზოლუცია",
        features: [
          "Display 960x320 ხილვადობა 3-20 მეტრი",
          "პრემიუმ ხარისხი",
          "მაქსიმალური ხილვადობა",
          "ინდივიდუალური მხარდაჭერა",
          "დეტალური რეპორტები",
        ],
        icon: Crown,
      },
    ],
  },
  en: {
    title: "Pricing",
    subtitle: "Choose the perfect package for your needs",
    popular: "Popular",
    premium: "Premium",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    packages: [
      {
        name: "Standard 1 Month",
        price: "$1500",
        duration: "1 Hour",
        description: "Standard package on 5 cars, 4k resolution",
        features: [
          "5 Active Taxis",
          "1 Hour Display",
          "Display 960x320 Visibility 3-20 meters",
          "HD Quality Screens",
          "Real-time Monitoring",
          "Basic Analytics",
        ],
        icon: Target,
        popular: false,
      },
      {
        name: "Standard 2 Month",
        price: "$2300",
        duration: "2 Hours",
        description: "Standard package on 5 cars, 4k resolution",
        features: [
          "5 Active Taxis",
          "2 Hours Display",
          "Display 960x320 Visibility 3-20 meters",
          "HD Quality Screens",
          "Real-time Monitoring",
          "Detailed Analytics",
          "Geo-targeting",
        ],
        icon: Star,
        popular: true,
      },
      {
        name: "Event Package",
        price: "$600",
        duration: "Per Week",
        description: "Monday to Sunday, 1 hour daily in Tbilisi, 4k resolution",
        features: [
          "Full Week Coverage",
          "Monday to Sunday",
          "1 Hour Daily in Tbilisi",
          "Display 960x320 Visibility 3-20 meters",
          "Perfect for Events",
          "Flexible Schedule",
        ],
        icon: Zap,
        popular: false,
      },
    ],
    eventPackages: [],
    premiumPackages: [
      {
        name: "Event Package",
        price: "$1000",
        duration: "Per Week",
        description: "Monday to Sunday, 2 hours daily, 4k resolution",
        features: [
          "Full Week Coverage",
          "Monday to Sunday",
          "2 Hours Daily Display",
          "Display 960x320 Visibility 3-20 meters",
          "Extended Event Package",
          "Maximum Efficiency",
        ],
        icon: Calendar,
      },
      {
        name: "Individual Package",
        price: "",
        duration: "",
        description: "4k resolution",
        features: [
          "Display 960x320 Visibility 3-20 meters",
          "Premium Quality",
          "Maximum Visibility",
          "Individual Support",
          "Detailed Reports",
        ],
        icon: Crown,
      },
    ],
  },
};

export default function Pricing({ language }: PricingProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards with staggered delay
            [...t.packages, ...t.premiumPackages].forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
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
  }, [t.packages, t.premiumPackages]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#75604B]/5 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2
            className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#75604B] to-gray-900 bg-clip-text text-transparent mb-2 leading-none pb-2 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${
              isVisible ? "animate-slide-up animate-stagger-1" : "opacity-0"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Standard Packages - Now showing 4 packages in a 2x2 grid on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10 pt-8">
          {t.packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const isCardVisible = visibleCards.includes(index);
            const isPopular = pkg.popular;

            return (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden group  ${
                  isPopular
                    ? "transform scale-105 border-[#75604B]/30 shadow-xl"
                    : "hover:transform hover:-translate-y-2"
                } ${
                  isCardVisible ? "animate-scale-in opacity-100" : "opacity-0"
                } overflow-visible`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse-glow whitespace-nowrap">
                      <Star className="w-4 h-4 inline mr-2" />
                      {t.popular}
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isPopular
                      ? "from-[#75604B]/5 to-[#8B7355]/5"
                      : "from-gray-50/50 to-transparent"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div
                  className={`relative z-10 ${
                    isPopular ? "pt-12 px-6 pb-6" : "p-6"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 animate-float ${
                      isPopular
                        ? "bg-gradient-to-br from-[#75604B] to-[#8B7355] text-white"
                        : "bg-gradient-to-br from-[#75604B]/10 to-[#8B7355]/10 text-[#75604B] group-hover:bg-gradient-to-br group-hover:from-[#75604B] group-hover:to-[#8B7355] group-hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-7 h-7 transition-all duration-500" />
                  </div>

                  {/* Package Name */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      isPopular
                        ? "text-[#75604B]"
                        : "text-gray-900 group-hover:text-[#75604B]"
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-3">
                    <span
                      className={`text-3xl font-bold ${
                        isPopular ? "text-[#75604B]" : "text-gray-900"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-1 text-sm">
                      / {pkg.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isPopular ? "text-[#75604B]" : "text-green-500"
                          }`}
                        />
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 ">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                      isPopular
                        ? "bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white hover:shadow-2xl animate-pulse-glow"
                        : "bg-gray-100 text-gray-900 hover:bg-[#75604B] hover:text-white hover:shadow-xl"
                    }`}
                  >
                    {t.getStarted}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {t.premiumPackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const cardIndex = t.packages.length + index;
            const isCardVisible = visibleCards.includes(cardIndex);

            return (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border overflow-hidden group hover:transform hover:-translate-y-2 border-[#75604B]/30 bg-gradient-to-br from-[#75604B]/5 to-[#8B7355]/5 ${
                  isCardVisible ? "animate-scale-in opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${cardIndex * 0.1}s` }}
              >
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 animate-float bg-gradient-to-br from-[#75604B] to-[#8B7355] text-white">
                    <IconComponent className="w-10 h-10 transition-all duration-500" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 text-[#75604B]">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                    <div className={`mb-${index === 0 ? "4" : "0"}`}>
                    <span className="text-4xl font-bold text-[#75604B]">
                      {pkg.price}
                    </span>
                    <div className="mb-1"></div>
                    </div>

                  {/* Description */}
                  <p className={`text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg ${pkg.price ? 'mb-6' : 'mb-6'}`}>
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className={`space-y-4 ${pkg.price ? 'mb-8' : 'mb-6'}`}>
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <Check className="w-5 h-5 flex-shrink-0 text-[#75604B]" />
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg bg-gradient-to-r from-[#75604B] to-[#8B7355] text-white hover:shadow-2xl animate-pulse-glow"
                  >
                    {t.contactUs}
                  </button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

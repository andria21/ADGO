"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<'ka' | 'en'>('ka');

  return (
    <main className="min-h-screen bg-white">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Pricing language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}
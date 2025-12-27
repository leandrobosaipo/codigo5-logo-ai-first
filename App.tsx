
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Symbolism from './components/Symbolism';
import Pillars from './components/Pillars';
import VisualSystem from './components/VisualSystem';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Section tracker for nav
    const handleScroll = () => {
      const sections = ['hero', 'manifesto', 'symbolism', 'pillars', 'visual'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="manifesto" className="reveal">
          <Manifesto />
        </section>

        <section id="symbolism" className="reveal">
          <Symbolism />
        </section>

        <section id="pillars" className="reveal">
          <Pillars />
        </section>

        <section id="visual" className="reveal">
          <VisualSystem />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

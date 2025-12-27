
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'manifesto', label: 'Manifesto', purpose: 'Nossa Alma' },
    { id: 'symbolism', label: 'Simbologia', purpose: 'O Número 5' },
    { id: 'pillars', label: 'Estratégia', purpose: 'AI First' },
    { id: 'visual', label: 'Identidade', purpose: 'Sistema' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="text-xl font-mono font-bold tracking-tighter transition-all group-hover:tracking-normal">
            CÓDIGO<span className="text-white/50 group-hover:text-white transition-colors">&gt;</span>5
          </div>
        </a>

        <nav className="hidden lg:flex space-x-10">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative group py-2 transition-all duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              <div className="flex flex-col items-start">
                <span className="text-[8px] font-mono tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-none mb-1">
                  {item.purpose}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="opacity-30 mr-1">0{idx + 1}.</span> {item.label}
                </span>
              </div>
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-500 origin-left ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </a>
          ))}
        </nav>

        <div className="flex items-center group cursor-pointer bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all">
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse mr-3" />
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 leading-none">Status</span>
            <span className="text-[10px] font-bold uppercase tracking-tight text-white/80">AI First Ready</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

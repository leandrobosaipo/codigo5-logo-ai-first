
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden gradient-bg">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-white/[0.03] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-white/[0.03] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="z-10 text-center px-6 animate-float">
        <div className="mb-12 inline-block scale-75 md:scale-100 transition-transform duration-1000 hover:scale-105 group cursor-default">
           {/* Pure CSS Logo Construction */}
           <div className="relative flex items-center">
              <div className="border-[6px] border-white rounded-[24px] px-12 py-6 bg-black shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all duration-500">
                <h1 className="text-7xl md:text-8xl font-mono font-bold tracking-tighter transition-all group-hover:tracking-[-0.05em]">
                  Código5
                </h1>
              </div>
              <div className="ml-[-6px] w-0 h-0 border-y-[60px] border-y-transparent border-l-[50px] border-l-white transition-all group-hover:translate-x-2" />
           </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white/40 font-mono tracking-[0.4em] text-xs uppercase animate-pulse">
            V 3.0 — A Inteligência no centro de tudo
          </p>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-none py-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            A Quintessência da sua operação.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <button className="group relative px-10 py-6 bg-white text-black font-bold uppercase overflow-hidden transition-all active:scale-95">
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[8px] tracking-[0.3em] mb-1 opacity-50 group-hover:opacity-100 transition-opacity">Ativar Propósito</span>
                <span className="tracking-widest text-xs">Materializar Futuro</span>
              </div>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group px-10 py-6 border border-white/10 text-white font-bold uppercase transition-all hover:border-white/40 active:scale-95">
              <div className="flex flex-col items-center">
                <span className="text-[8px] tracking-[0.3em] mb-1 text-white/30 group-hover:text-white/60 transition-colors">Conhecimento</span>
                <span className="tracking-widest text-xs">Acessar Inteligência</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase opacity-50">Explorar Versão 3.0</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

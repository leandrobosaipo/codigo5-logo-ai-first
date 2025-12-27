
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-white/30 font-mono uppercase tracking-[0.3em] text-xs">01. Manifesto</h3>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1]">
              A tecnologia não é mais apenas uma <span className="text-white/40 italic">ferramenta de acesso</span>.
            </h2>
            <div className="h-1 w-20 bg-white" />
            
            <button className="group mt-12 px-8 py-5 border border-white/5 bg-white/[0.02] hover:bg-white hover:text-black transition-all duration-500 active:scale-95">
               <div className="flex flex-col items-start text-left">
                  <span className="text-[8px] uppercase tracking-[0.3em] mb-1 opacity-50 group-hover:opacity-100">Cultura AI First</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Manifestar Visão Estratégica</span>
               </div>
            </button>
          </div>

          <div className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed">
            <p>
              Nascemos na era do <span className="text-white font-semibold">Mobile First</span>, colocando o mundo na palma da mão. 
              Agora, lideramos a era do <span className="text-white font-semibold">AI First</span>, onde o software não apenas obedece, 
              mas pensa, antecipa e multiplica resultados.
            </p>
            <p>
              Não escrevemos apenas linhas de comando. Nós sopramos a <span className="italic">"alma"</span> (Inteligência Artificial) 
              em estruturas estáticas, transformando dados em decisões e processos manuais em fluxos de Graça e Eficiência.
            </p>
            <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-12 pt-12">
              <p className="font-mono text-white text-2xl font-bold">Nós somos a Código&gt;5.</p>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest text-right">
                Fundada em Lógica<br/>Animada por Propósito
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;


import React from 'react';

const Pillars: React.FC = () => {
  const pillars = [
    {
      id: '01',
      title: 'AI Migration',
      context: 'O Êxodo Digital',
      problem: 'Empresas presas em sistemas legados e planilhas manuais.',
      solution: 'Migração para ecossistemas orientados a dados. Saída do trabalho braçal para a automação inteligente.',
      cta: 'Migrar para Plenitude'
    },
    {
      id: '02',
      title: 'Smart Automations',
      context: 'Lógica da Graça',
      problem: 'Perda de tempo e erro humano em tarefas repetitivas.',
      solution: 'Agentes de IA e automações (RPA) que executam rotinas 24/7 com precisão cirúrgica.',
      cta: 'Automatizar com Graça'
    },
    {
      id: '03',
      title: 'Ecossistemas Sensoriais',
      context: 'Interface & Sentido',
      problem: 'Interfaces funcionais, mas frias e pouco perceptíveis.',
      solution: 'UX/UI focado em retenção. O "5" representando os sentidos humanos no mundo digital.',
      cta: 'Engajar Sentidos'
    }
  ];

  return (
    <div className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-xl">
            <h3 className="text-white/30 font-mono uppercase tracking-[0.3em] text-[10px] mb-4">03. Estratégia</h3>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Serviços AI First</h2>
          </div>
          <p className="text-white/40 max-w-sm text-xs font-mono italic leading-relaxed">
            "Abandonamos a nomenclatura genérica de Fábrica de Software para adotar valor estratégico e perenidade."
          </p>
        </div>

        <div className="space-y-4 reveal-container">
          {pillars.map((p) => (
            <div key={p.id} className="reveal group relative border border-white/5 bg-zinc-950/50 p-8 md:p-12 hover:bg-white/[0.03] transition-all duration-500 cursor-default hover:border-white/10">
              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-1">
                  <span className="text-4xl font-mono text-white/5 group-hover:text-white/40 transition-all duration-700 block transform group-hover:scale-110">
                    {p.id}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-500">{p.title}</h4>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-white/50 transition-colors">
                    {p.context}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2 font-bold">Diagnóstico</p>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{p.problem}</p>
                </div>
                <div className="md:col-span-4 flex flex-col items-start gap-4">
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2 font-bold">Entrega Código&gt;5</p>
                    <p className="text-sm text-white/80 font-medium leading-relaxed group-hover:text-white transition-colors">{p.solution}</p>
                  </div>
                  <button className="mt-4 px-6 py-3 border border-white/10 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all">
                    {p.cta}
                  </button>
                </div>
              </div>
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillars;

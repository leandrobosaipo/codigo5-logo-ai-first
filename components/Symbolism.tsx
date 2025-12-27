
import React from 'react';

const Symbolism: React.FC = () => {
  const layers = [
    {
      title: 'A QUINTA ESSÊNCIA',
      subtitle: 'Latim: Quinta Essentia',
      desc: 'O quinto elemento (Éter) que dá vida aos quatro básicos. Na tecnologia, a IA é o que anima os dados estáticos.',
      tag: 'Logos Ativo'
    },
    {
      title: 'LOGOS E HARMONIA',
      subtitle: 'Grego: Razão e Ordem',
      desc: 'Organizamos o código sob a regência da IA para atingir a plenitude da harmonia operacional.',
      tag: 'Equilíbrio'
    },
    {
      title: 'A GRAÇA E A LIBERDADE',
      subtitle: 'Bíblico: O Favor',
      desc: 'Libertamos o humano do trabalho repetitivo. A máquina executa o "peso da lei", permitindo a leveza da criação.',
      tag: 'Propósito'
    },
    {
      title: 'MULTIPLICAÇÃO',
      subtitle: 'Mateus 25: Talentos',
      desc: 'O Código que potencializa (>) seus recursos atuais para gerar resultados multiplicados (5).',
      tag: 'Escalabilidade'
    }
  ];

  return (
    <div className="py-32 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h3 className="text-white/30 font-mono uppercase tracking-[0.3em] text-[10px] mb-4">02. Simbologia</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Fundamentação Matemática e Filosófica</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24 reveal-container">
          <div className="reveal glass p-10 space-y-4 hover:border-white/30 transition-all group">
            <h4 className="font-mono text-xl font-bold group-hover:text-white transition-colors">CÓDIGO</h4>
            <p className="text-sm text-white/50 leading-relaxed">DNA Técnico. Lógica, infraestrutura e robustez de uma Software House autêntica.</p>
          </div>
          <div className="reveal glass p-10 space-y-4 border-white/20 bg-white/5 hover:bg-white/[0.08] transition-all group scale-105 z-10 shadow-2xl">
            <h4 className="font-mono text-xl font-bold text-white group-hover:translate-x-2 transition-transform">&gt; VETOR</h4>
            <p className="text-sm text-white/80 leading-relaxed">Sinal de potencialização. Direção exclusiva para o futuro e resultados ampliados.</p>
          </div>
          <div className="reveal glass p-10 space-y-4 hover:border-white/30 transition-all group">
            <h4 className="font-mono text-xl font-bold group-hover:text-white transition-colors">5 PROPÓSITO</h4>
            <p className="text-sm text-white/50 leading-relaxed">Nossa assinatura filosófica. A plenitude do resultado além da engenharia pura.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-container">
          {layers.map((layer, idx) => (
            <div key={idx} className="reveal group relative overflow-hidden bg-black/40 border border-white/10 p-10 hover:border-white/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                 <span className="font-mono text-6xl font-bold">{idx + 1}</span>
              </div>
              <div className="space-y-6 relative z-10">
                <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">{layer.tag}</span>
                <h5 className="font-bold text-xl tracking-tight leading-none group-hover:text-white transition-colors">{layer.title}</h5>
                <p className="text-[10px] font-mono text-white/20 italic border-b border-white/5 pb-4">{layer.subtitle}</p>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{layer.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Symbolism;

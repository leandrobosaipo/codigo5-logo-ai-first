
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-24">
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">Cultura e Valores</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold">Cristocêntrico</p>
                <p className="text-xs text-white/40">Excelência como se fosse para o próprio Criador.</p>
              </div>
              <div>
                <p className="text-sm font-bold">Visionário</p>
                <p className="text-xs text-white/40">Se não usa IA, já nasceu velho.</p>
              </div>
              <div>
                <p className="text-sm font-bold">Resolvedor</p>
                <p className="text-xs text-white/40">O código é o meio, a solução é o fim.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">Taglines Oficiais</h4>
            <div className="space-y-8">
               <p className="text-2xl md:text-3xl font-light tracking-tight italic text-white/80">
                 "Do Mobile First ao AI First: A evolução é o nosso código."
               </p>
               <p className="text-2xl md:text-3xl font-light tracking-tight italic text-white/80">
                 "Transformando esforço manual em inteligência automática."
               </p>
               <p className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                 Tecnologia que faz sentido.
               </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono font-bold tracking-tighter text-lg">
            CÓDIGO<span className="text-white/30">&gt;</span>5
          </div>
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] text-center md:text-right">
            Documento Mestre para Diretoria, Marketing e Produto<br />
            © Dezembro 2025 — Versão Definitiva
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const VisualSystem: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center reveal">
          <h3 className="text-white/30 font-mono uppercase tracking-[0.3em] text-[10px] mb-4">04. Identidade Visual</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Aplicação da Marca</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed font-light">
            Uma refatoração semiótica para eliminar retrocessos. 
            Remoção do "&lt;" e foco total no "&gt;" (futuro/resultado), representando o vetor de aceleração que a IA impõe aos negócios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 reveal-container">
          {/* Main Logo Specs */}
          <div className="reveal bg-black p-12 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h4 className="text-xl font-bold font-mono">Arquitetura da Logo</h4>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Spec 03.0</span>
              </div>
              <div className="mb-12 flex justify-center py-10">
                <div className="relative inline-flex items-center scale-75 md:scale-100 transition-transform group-hover:scale-110 duration-700">
                    <div className="border-[4px] border-white rounded-[18px] px-8 py-3 bg-black shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      <span className="text-4xl font-mono font-bold">Código5</span>
                    </div>
                    <div className="ml-[-4px] w-0 h-0 border-y-[28px] border-y-transparent border-l-[24px] border-l-white" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 text-[10px] text-white/40 font-mono uppercase tracking-widest">
                <div>
                  <p className="text-white mb-2">TIPOGRAFIA</p>
                  <p>JetBrains Mono / Inter</p>
                  <p className="opacity-50 mt-1">Raiz de engenharia</p>
                </div>
                <div>
                  <p className="text-white mb-2">SIMBOLOGIA</p>
                  <p>Prompt Right (&gt;)</p>
                  <p className="opacity-50 mt-1">Vetor de Futuro</p>
                </div>
              </div>
              <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-zinc-200 transition-all active:scale-95">
                Baixar Brandbook Completo
              </button>
            </div>
          </div>

          {/* Tag System */}
          <div className="reveal space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold font-mono">Sistema de Tags</h4>
              <button className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">Ver Guia de Estilo</button>
            </div>
            
            <div className="bg-red-600/10 border border-red-600/30 p-8 rounded-2xl group hover:bg-red-600/20 transition-all cursor-default">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h5 className="text-red-500 font-bold font-mono tracking-widest text-lg">FINANCEIRO</h5>
                  <p className="text-[10px] text-red-500/60 font-mono">TAG CRÍTICA</p>
                </div>
                <div className="h-6 w-12 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Representa Atenção e o "Sangue" da operação. 
                Aplicada onde a precisão é a única regra aceitável.
              </p>
              <button className="px-5 py-2 border border-red-600/40 text-[9px] font-bold text-red-500 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                Explorar Módulo
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center group hover:border-white/30 transition-all">
              <div className="flex-1">
                <h5 className="font-bold font-mono mb-2 group-hover:text-white transition-colors">MODULARIDADE PLENA</h5>
                <p className="text-sm text-white/50 leading-relaxed">
                  A marca se adapta para identificar cada sentido da operação. 
                  O sistema de tags é a linguagem visual do nosso propósito.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-500 shadow-lg hover:scale-125 transition-transform" title="Tech" />
                <div className="h-4 w-4 rounded-full bg-green-500 shadow-lg hover:scale-125 transition-transform" title="Growth" />
                <div className="h-4 w-4 rounded-full bg-orange-500 shadow-lg hover:scale-125 transition-transform" title="Operation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualSystem;

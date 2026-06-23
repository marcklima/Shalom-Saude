
"use client";

import { Play } from "lucide-react";

export function VideoPresentation() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-watermark-medical opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Play className="w-4 h-4 fill-current" />
            Demonstração Shalom Saúde
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-6">
            Veja como é simples <br />
            <span className="text-accent italic font-light">cuidar de quem você ama</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            Entenda por que milhares de famílias já escolheram a Shalom Saúde para sua proteção diária através do nosso aplicativo.
          </p>
        </div>

        {/* Container do Vídeo com Máscara para ocultar UI do Google Drive e simular Autoplay */}
        <div className="max-w-[320px] mx-auto bg-slate-900 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden border-[10px] border-slate-900 relative aspect-[9/16] group">
          
          {/* Iframe do Google Drive com deslocamento para esconder controles e ativar autoplay (onde suportado) */}
          <div className="absolute inset-0 w-full h-[115%] -top-[7.5%] scale-[1.05]">
             <iframe 
                src="https://drive.google.com/file/d/1wJkohD1qcZgYPIIQqq3vISvqMBKVHgFq/preview?autoplay=1&mute=1" 
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              ></iframe>
          </div>
          
          {/* Overlay Invisível: Impede cliques que redirecionariam o usuário, mantendo-o na LP */}
          <div className="absolute inset-0 bg-transparent cursor-default z-30" />
          
          {/* Mockup de Hardware Detail */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-slate-900 rounded-b-2xl z-40" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-800 rounded-full z-40" />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border border-success/20 shadow-sm animate-pulse">
             <span className="w-2 h-2 bg-success rounded-full" />
             Atendimento via App em Tempo Real
          </div>
        </div>
      </div>
      
      {/* Marcas d'água extras para profundidade */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-watermark-plus opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-watermark-dna opacity-5 pointer-events-none" />
    </section>
  );
}


"use client";

import { Play } from "lucide-react";

export function VideoPresentation() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
            Entenda por que milhares de famílias já escolheram a Shalom Saúde para sua proteção diária.
          </p>
        </div>

        {/* Container do Vídeo com Máscara de Engenharia para Ocultar Branding */}
        <div className="max-w-[360px] mx-auto bg-slate-900 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden border-[12px] border-slate-900 relative aspect-[9/16] group">
          {/* Oculta os elementos de interface do Instagram com deslocamento e escala */}
          <div className="absolute inset-0 w-full h-[140%] -top-[20%] scale-[1.1]">
             <iframe 
                src="https://www.instagram.com/p/DY4b-zzRyJH/embed" 
                className="w-full h-full border-none pointer-events-none"
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
          </div>
          
          {/* Overlay Transparente de Bloqueio: Impede cliques que levariam ao Instagram */}
          <div className="absolute inset-0 bg-transparent cursor-default z-30" />
          
          {/* Design de Hardware Mockup */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-40" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-800 rounded-full z-40" />
        </div>
        
        <div className="mt-16 text-center animate-pulse">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-success/20">
             <span className="w-2 h-2 bg-success rounded-full" />
             Atendimento via App em Tempo Real
          </div>
        </div>
      </div>
      
      {/* Marcas d'água sutis */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-watermark-plus opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-watermark-medical opacity-10 pointer-events-none" />
    </section>
  );
}

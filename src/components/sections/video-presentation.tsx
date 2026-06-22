
"use client";

import { Play } from "lucide-react";

export function VideoPresentation() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Play className="w-4 h-4 fill-current" />
            Demonstração Shalom Saúde
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-6">
            Veja como é simples <br />
            <span className="text-accent italic font-light">cuidar de quem você ama</span>
          </h2>
        </div>

        {/* Container do Vídeo com Hack de Crop para esconder perfil/links */}
        <div className="max-w-[400px] mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white relative aspect-[9/16] group">
          <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <iframe 
                src="https://www.instagram.com/p/DY4b-zzRyJH/embed" 
                className="w-full h-full border-none pointer-events-none"
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
          </div>
          
          {/* Overlay para bloquear cliques e manter o usuário na página */}
          <div className="absolute inset-0 bg-transparent cursor-default z-20" />
          
          {/* Decoração Visual */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-200 rounded-full z-30" />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-medium">
            Entenda por que milhares de famílias já escolheram a Shalom Saúde.
          </p>
        </div>
      </div>
      
      {/* Marcas d'água sutis */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-watermark-plus opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-watermark-medical opacity-10 pointer-events-none" />
    </section>
  );
}

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

        <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white aspect-[9/16] md:aspect-video relative">
          <iframe 
            src="https://www.instagram.com/p/DY4b-zzRyJH/embed" 
            className="absolute inset-0 w-full h-full"
            frameBorder="0" 
            scrolling="no" 
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-medium">
            Entenda por que milhares de famílias já escolheram a Shalom Saúde.
          </p>
        </div>
      </div>
    </section>
  );
}

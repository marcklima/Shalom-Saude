
"use client";

import { CheckCircle2, Play, Activity } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");
  const mockupImg = PlaceHolderImages.find(img => img.id === "telemedicine-user");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bullets = [
    "Telemedicina 24h sem carência.",
    "Saúde Mental imediata (Psicólogos).",
    "Assistência Funeral inclusa.",
    "Cadastro 100% Digital e Seguro."
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-16 pb-24 bg-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={heroImg?.imageUrl || ""} 
          alt="Modern Health Environment" 
          fill 
          className="object-cover opacity-5"
          priority
          data-ai-hint="modern hospital"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-accent/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-success/20">
              <Activity className="w-4 h-4 animate-pulse" />
              Saúde Imediata, Sem Burocracia
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-primary mb-6 leading-[0.9] tracking-tighter">
              A saúde que você merece, <br />
              <span className="text-accent italic font-light">pelo preço que você pode.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium">
              A SHALOM une tecnologia de ponta com atendimento humanizado para garantir paz de espírito 24h por dia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-accent/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-bold text-primary/80">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <CtaButton className="w-full sm:w-auto text-xl py-8 px-10 shadow-2xl">
                Começar Cadastro Agora
              </CtaButton>
              <button className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all border border-slate-100">
                  <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                Ver como funciona
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white">
              <Image 
                src={mockupImg?.imageUrl || ""} 
                alt="Telemedicine Service" 
                width={700} 
                height={700} 
                className="object-cover w-full aspect-square"
                data-ai-hint="happy patient"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/50">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-1">Status do Sistema</p>
                    <p className="text-lg font-black text-primary leading-none">Médicos Online Agora</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

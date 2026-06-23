
"use client";

import { CheckCircle2, Activity, Clock } from "lucide-react";
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
    "Telemedicina Ilimitada pelo App",
    "Central de Atendimento 24h",
    "Cobertura em todo o Brasil",
    "Assistência Familiar Completa"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-24 bg-white">
      {/* Background with Overlay e Watermark */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={heroImg?.imageUrl || ""} 
          alt="Modern Health Environment" 
          fill 
          className="object-cover opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-accent/5"></div>
        <div className="absolute inset-0 bg-watermark-medical opacity-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-success/20">
                <Activity className="w-4 h-4 animate-pulse" />
                Assistência Familiar Shalom
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-500/20 animate-tag-pulse">
                <Clock className="w-4 h-4" />
                Preços de Tabela 2024 - Tempo Limitado
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-6 leading-[0.9] tracking-tighter">
              Cuidado que conecta, <br />
              <span className="text-accent italic font-light">Proteção que acompanha.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl font-medium">
              Economia e qualidade para cuidar do que mais importa: sua família. Tenha telemedicina ilimitada e atendimento 24h na palma da mão, <span className="text-primary font-bold">sem carência.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-accent/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm font-bold text-primary/80">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CtaButton className="w-full sm:w-auto text-xl py-7 px-10 shadow-xl">
                Começar Cadastro Agora
              </CtaButton>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest italic text-center sm:text-left">
                * Atendimento imediato <br className="hidden sm:block" /> em todo o Brasil
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <Image 
                src={mockupImg?.imageUrl || ""} 
                alt="Telemedicine Service" 
                width={600} 
                height={600} 
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Status da Rede</p>
                    <p className="text-base font-black text-primary leading-none">Cobertura Nacional Ativa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-success/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

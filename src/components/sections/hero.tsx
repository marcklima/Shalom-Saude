"use client";

import { CheckCircle2, Play } from "lucide-react";
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
    "Cadastro 100% digital e sem papel.",
    "Identidade validada e revisada com segurança.",
    "Termo digital pronto para download imediato.",
    "Gestão e inclusão simplificada de dependentes."
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 pb-24 bg-watermark-medical bg-repeat">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={heroImg?.imageUrl || ""} 
          alt="Shalom Saúde Environment" 
          fill 
          className="object-cover opacity-10"
          priority
          data-ai-hint="hospital lobby"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Tecnologia a serviço da vida
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
              Sua Saúde Completa, <br />
              <span className="text-accent italic font-light">Agora ao Seu Alcance.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Dê adeus às filas e à burocracia. A Shalom Saúde une telemedicina de ponta, assistência funeral e saúde mental em um só lugar.
            </p>

            <div className="space-y-4 mb-10">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 transition-transform hover:translate-x-2 duration-300">
                  <div className="bg-success/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-sm font-medium text-primary/80">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CtaButton className="w-full sm:w-auto">
                Começar Cadastro Agora
              </CtaButton>
              <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Como Funciona
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={mockupImg?.imageUrl || ""} 
                alt="Telemedicine Mockup" 
                width={600} 
                height={600} 
                className="object-cover w-full h-full"
                data-ai-hint="telemedicine patient"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Atendimento Real</p>
                    <p className="text-sm font-bold text-primary">Conexão imediata com especialistas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-grid-subtle text-primary/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

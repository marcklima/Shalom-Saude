
"use client";

import { Brain, Heart, ShieldCheck, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useRef, useState } from "react";

export function MentalHealth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const docImg = PlaceHolderImages.find(img => img.id === "doctor-authority");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-watermark-medical opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            Exclusivo Shalom Saúde
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">
            Saúde Mental sem barreiras. <br/>
            <span className="text-accent italic font-light">Cuidado imediato para sua mente.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Entendemos que a mente não espera. Nossa plataforma conecta você a psicólogos e psiquiatras qualificados com agilidade e total sigilo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="bg-white w-16 h-16 rounded-[1.5rem] shadow-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Psicologia 100% Digital</h4>
                  <p className="text-muted-foreground leading-relaxed">Sessões por vídeo no conforto da sua casa, com flexibilidade total de horários.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-white w-16 h-16 rounded-[1.5rem] shadow-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Acolhimento Humanizado</h4>
                  <p className="text-muted-foreground leading-relaxed">Profissionais treinados para ouvir e guiar você em momentos de ansiedade, estresse ou depressão.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-white w-16 h-16 rounded-[1.5rem] shadow-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Sigilo e Segurança</h4>
                  <p className="text-muted-foreground leading-relaxed">Seus dados e consultas são protegidos por criptografia de nível bancário.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image 
                  src={docImg?.imageUrl || ""} 
                  width={600} 
                  height={800} 
                  alt="Mental Health Professional" 
                  className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-black uppercase tracking-widest mb-2">Rede Shalom Mental</p>
                  <p className="text-2xl font-bold leading-tight">Você nunca está sozinho <br/> em sua jornada.</p>
                </div>
             </div>
             {/* Stats overlap */}
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
                <p className="text-4xl font-black text-accent mb-1">+15k</p>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Vidas Transformadas</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldAlert, ShieldCheck, ArrowRight } from "lucide-react";

export function PainRelief() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Por que escolher a Shalom Saúde?
          </h2>
          <p className={`text-primary-foreground/70 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Entendemos suas frustrações e criamos a solução definitiva para o seu cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* O Problema */}
          <div className={`bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex items-center gap-3 mb-6 text-red-400">
              <ShieldAlert className="w-8 h-8" />
              <h3 className="text-xl font-bold">O Cenário Comum</h3>
            </div>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                Filas intermináveis em prontos-socorros.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                Dificuldade em agendar especialistas no SUS.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                Planos de saúde tradicionais com preços abusivos.
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-center text-accent animate-pulse">
            <ArrowRight className="w-12 h-12" />
          </div>

          {/* A Solução */}
          <div className={`bg-white p-8 rounded-3xl shadow-2xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="flex items-center gap-3 mb-6 text-success">
              <ShieldCheck className="w-8 h-8" />
              <h3 className="text-xl font-bold text-primary">A Experiência Shalom</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0"></span>
                Atendimento médico por vídeo em minutos.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0"></span>
                Especialistas qualificados ao alcance de um clique.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0"></span>
                Custo acessível que cabe no orçamento familiar.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}

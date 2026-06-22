
"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldAlert, ShieldCheck, ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

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

  const pains = [
    "Horas de espera em prontos-socorros lotados.",
    "Meses para conseguir uma consulta com especialista.",
    "Custos astronômicos de planos de saúde tradicionais.",
    "Burocracia infinita para um simples atendimento."
  ];

  const solutions = [
    "Atendimento imediato via vídeo, de onde você estiver.",
    "Agendamento simplificado e rede de apoio ágil.",
    "Preço justo que cabe no seu planejamento mensal.",
    "Processo 100% digital, sem papelada ou espera."
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Contraste de Realidade</span>
          <h2 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Chega de sofrer com o <br/><span className="text-red-400">sistema tradicional</span>
          </h2>
          <p className={`text-primary-foreground/60 text-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Nós transformamos o caos em cuidado. Veja a diferença entre o que você tem hoje e o que a Shalom oferece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto relative">
          {/* O Problema - Redesign com visual "estressante" */}
          <div className={`group relative bg-white/5 border border-white/10 p-10 rounded-[3rem] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} hover:bg-white/10`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/20 p-3 rounded-2xl">
                <ShieldAlert className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-red-400">O Cenário Comum</h3>
            </div>
            <ul className="space-y-6">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-4 text-primary-foreground/50 group-hover:text-primary-foreground/70 transition-colors">
                  <XCircle className="w-5 h-5 text-red-500/50 mt-1 shrink-0" />
                  <span className="text-base font-medium leading-relaxed">{pain}</span>
                </li>
              ))}
            </ul>
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldAlert className="w-32 h-32" />
            </div>
          </div>

          {/* Seta de Transição Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-accent p-4 rounded-full shadow-[0_0_50px_rgba(20,121,165,0.5)] animate-bounce-horizontal">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* A Solução - Redesign com visual "alívio" */}
          <div className={`group relative bg-white p-10 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'} hover:scale-[1.02]`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-success/10 p-3 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-primary">A Experiência Shalom</h3>
            </div>
            <ul className="space-y-6">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-4 text-muted-foreground group-hover:text-primary transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 shrink-0" />
                  <span className="text-base font-bold leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-success/5 rounded-2xl border border-success/10">
               <p className="text-success text-sm font-black uppercase tracking-widest text-center">Tranquilidade Garantida 24h</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translate(-50%, -50%) translateX(-10px); }
          50% { transform: translate(-50%, -50%) translateX(10px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

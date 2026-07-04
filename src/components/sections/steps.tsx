
"use client";

import { useState, useEffect } from "react";
import { Check, ClipboardList, MapPin, Users, FileText, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Steps() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    { title: "Dados Pessoais", desc: "Nome, CPF, email e telefone", icon: <ClipboardList className="w-6 h-6" /> },
    { title: "Endereço", desc: "Informe seu endereço completo", icon: <MapPin className="w-6 h-6" /> },
    { title: "Dependentes", desc: "Adicione familiares se houver", icon: <Users className="w-6 h-6" /> },
    { title: "Termo", desc: "Revise o termo de adesão", icon: <FileText className="w-6 h-6" /> },
    { title: "Confirmação", desc: "Confirme e finalize o cadastro", icon: <Send className="w-6 h-6" /> }
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, steps.length]);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-watermark-medical opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-watermark-dna opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-[10px] mb-4 block">Eficiência Digital</span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mt-4 mb-6 tracking-tight">Sua jornada em minutos</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Eliminamos cada segundo de burocracia. O cadastro é intuitivo, seguro e 100% otimizado para sua conveniência.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Progress Line Desktop */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-primary/5 hidden lg:block">
            <div 
              className="h-full bg-success transition-all duration-700 ease-in-out" 
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {steps.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = activeStep === i;

              return (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "relative z-10 flex flex-col items-center text-center group cursor-pointer transition-all duration-500",
                    isCurrent && "scale-105"
                  )}
                >
                  <div className={cn(
                    "w-16 md:w-20 h-16 md:h-20 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 flex items-center justify-center mb-6 md:mb-8 shadow-xl border-4 relative overflow-hidden",
                    isActive ? "bg-success border-success text-white" : "bg-white border-primary/5 text-primary/40",
                    isCurrent && "rotate-3 shadow-success/20 ring-4 ring-success/20"
                  )}>
                    {isActive ? <Check className="w-6 md:w-8 h-6 md:h-8 animate-in zoom-in duration-300" /> : step.icon}
                    
                    <div className={cn(
                      "absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 h-6 md:w-7 md:h-7 rounded-lg md:rounded-xl flex items-center justify-center text-[10px] font-black transition-colors shadow-lg",
                      isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    )}>
                      {i + 1}
                    </div>
                  </div>

                  <h4 className={cn(
                    "text-lg md:text-xl font-black mb-2 md:mb-3 transition-colors duration-300",
                    isActive ? "text-primary" : "text-primary/40"
                  )}>
                    {step.title}
                  </h4>
                  <p className={cn(
                    "text-xs md:text-sm font-medium leading-relaxed transition-opacity duration-300",
                    isActive ? "text-muted-foreground" : "text-muted-foreground/30"
                  )}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full text-primary font-bold text-xs md:text-sm border border-primary/10">
             <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
             Narrativa automatizada para facilitar sua visualização.
           </div>
        </div>
      </div>
    </section>
  );
}

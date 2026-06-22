"use client";

import { useState } from "react";
import { Check, ClipboardList, MapPin, Users, FileText, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Steps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { title: "Dados Pessoais", desc: "Nome, CPF, email e telefone", icon: <ClipboardList className="w-6 h-6" /> },
    { title: "Endereço", desc: "Informe seu endereço completo", icon: <MapPin className="w-6 h-6" /> },
    { title: "Dependentes", desc: "Adicione familiares se houver", icon: <Users className="w-6 h-6" /> },
    { title: "Termo", desc: "Revise o termo de adesão", icon: <FileText className="w-6 h-6" /> },
    { title: "Confirmação", desc: "Confirme e finalize o cadastro", icon: <Send className="w-6 h-6" /> }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Subtle Watermark for Step Section */}
      <div className="absolute inset-0 bg-watermark-medical opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-[10px] mb-4 block">Eficiência Digital</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mt-4 mb-6 tracking-tight">Sua jornada em minutos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminamos cada segundo de burocracia. O cadastro é intuitivo, seguro e 100% otimizado para sua conveniência.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Progress Line (Desktop) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-primary/5 hidden lg:block">
            <div 
              className="h-full bg-success transition-all duration-700 ease-in-out" 
              style={{ width: hoveredStep !== null ? `${((hoveredStep + 1) / steps.length) * 100}%` : '0%' }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const isActive = hoveredStep !== null && i <= hoveredStep;
              const isCurrent = hoveredStep === i;

              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={cn(
                    "relative z-10 flex flex-col items-center text-center group cursor-pointer transition-all duration-500",
                    isCurrent && "scale-105"
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-[2rem] transition-all duration-500 flex items-center justify-center mb-8 shadow-xl border-4 relative overflow-hidden",
                    isActive ? "bg-success border-success text-white" : "bg-white border-primary/5 text-primary/40",
                    isCurrent && "rotate-3 shadow-success/20"
                  )}>
                    {isActive ? <Check className="w-8 h-8 animate-in zoom-in duration-300" /> : step.icon}
                    
                    {/* Index Badge */}
                    <div className={cn(
                      "absolute -top-2 -right-2 w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-black transition-colors shadow-lg",
                      isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    )}>
                      {i + 1}
                    </div>

                    {/* Progress Fill Background Effect */}
                    <div className={cn(
                      "absolute inset-0 bg-white/20 -translate-x-full transition-transform duration-500",
                      isCurrent && "translate-x-0"
                    )} />
                  </div>

                  <h4 className={cn(
                    "text-xl font-black mb-3 transition-colors duration-300",
                    isActive ? "text-primary" : "text-primary/40"
                  )}>
                    {step.title}
                  </h4>
                  <p className={cn(
                    "text-sm font-medium leading-relaxed transition-opacity duration-300",
                    isActive ? "text-muted-foreground" : "text-muted-foreground/30"
                  )}>
                    {step.desc}
                  </p>

                  {/* Desktop Connecting Arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 translate-x-1/2 z-0 opacity-10">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Suggestion */}
        <div className="mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full text-primary font-bold text-sm border border-primary/10">
             <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
             Você pode parar e continuar de onde parou a qualquer momento.
           </div>
        </div>
      </div>
    </section>
  );
}

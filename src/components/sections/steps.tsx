
"use client";

import { useState } from "react";
import { Check, ClipboardList, MapPin, Users, FileText, Send } from "lucide-react";

export function Steps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { title: "Dados Pessoais", desc: "Nome, CPF, email e telefone", icon: <ClipboardList className="w-6 h-6" /> },
    { title: "Endereço", desc: "Informe seu endereço completo", icon: <MapPin className="w-6 h-6" /> },
    { title: "Dependentes", desc: "Adicione familiares se houver", icon: <Users className="w-6 h-6" /> },
    { title: "Termo", desc: "Revise o termo de adesão", icon: <FileText className="w-6 h-6" /> },
    { title: "Confirmação", desc: "Confirme e finalize o cadastro", icon: <Send className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">Jornada do Cliente</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-4 mb-6">Simples como deve ser</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Processo 100% otimizado. Do início à conclusão em menos de 10 minutos.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline bar (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/5 -translate-y-1/2 hidden lg:block rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                className={`
                  relative z-10 flex flex-col items-center text-center group cursor-default transition-all duration-500
                  ${activeStep === i ? 'scale-110' : 'scale-100'}
                `}
              >
                <div className={`
                  w-20 h-20 rounded-3xl transition-all duration-500 flex items-center justify-center mb-8 shadow-2xl relative
                  ${activeStep === i ? 'bg-success text-white rotate-6' : 'bg-accent text-white'}
                `}>
                  {activeStep === i ? <Check className="w-8 h-8 animate-bounce" /> : step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-xs font-black shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h4 className={`text-xl font-black mb-3 transition-colors ${activeStep === i ? 'text-success' : 'text-primary'}`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Visual connection dot for active state */}
                {activeStep === i && (
                  <div className="absolute -bottom-8 w-2 h-2 bg-success rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

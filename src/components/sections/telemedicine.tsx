
"use client";

import { PhoneCall, FileText, ClipboardCheck, Activity, Stethoscope, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Telemedicine() {
  const features = [
    { 
      icon: <PhoneCall className="w-8 h-8" />, 
      title: "Teleconsulta Ilimitada", 
      desc: "Acesso a médicos de plantão via vídeo ou chat pelo app, sem limites de uso." 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: "Receita Digital", 
      desc: "Prescrições e atestados enviados diretamente para o seu celular com validade nacional." 
    },
    { 
      icon: <ClipboardCheck className="w-8 h-8" />, 
      title: "Central 24h", 
      desc: "Suporte clínico gratuito 24h por dia, todos os dias da semana para sua família." 
    }
  ];

  const specialties = [
    "Clínico Geral", "Neurologia", "Otorrinolaringologia", 
    "Cardiologia", "Psiquiatria", "Dermatologia", 
    "Psicologia", "Ortopedia", "Urologia", 
    "Pediatria", "Traumatologia", "Endocrinologia", 
    "Ginecologia", "Nutrição", "Geriatria"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Activity className="w-4 h-4" />
            Rede de Especialidades
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Nossas Especialidades <br />
            <span className="text-accent italic font-light">Médicas Disponíveis</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Assistência familiar completa com os melhores especialistas do Brasil, prontos para atender você com tecnologia e economia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-block text-accent bg-white p-4 rounded-2xl shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-primary mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Especialidades - Design Moderno, Nítido e Legível */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-accent" />
                <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Especialistas Shalom</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                Consulte-se com Especialistas <br />
                <span className="text-accent italic font-light">Sem sair de casa</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-success uppercase tracking-widest">Atendimento 24h Disponível</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specialties.map((spec, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:bg-primary hover:border-primary cursor-default shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-white tracking-tight transition-colors">
                    {spec}
                  </span>
                  <ChevronRight className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em]">
              Telemedicina 100% Gratuita para assinantes
            </p>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-watermark-medical opacity-10 -rotate-12 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { PhoneCall, FileText, ClipboardCheck, Activity, Stethoscope, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Telemedicine() {
  const features = [
    { 
      icon: <PhoneCall className="w-8 h-8" />, 
      title: "Teleconsulta 24h", 
      desc: "Acesso a médicos de plantão via vídeo ou chat, sem agendamento prévio." 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: "Receita Digital", 
      desc: "Prescrições enviadas diretamente para o seu celular, válidas em todo o Brasil." 
    },
    { 
      icon: <ClipboardCheck className="w-8 h-8" />, 
      title: "Orientação Médica", 
      desc: "Suporte clínico especializado para dúvidas e triagem imediata de saúde." 
    }
  ];

  const specialties = [
    "Cardiologia", "Ortopedia", "Otorrino", "Neurologia", 
    "Psiquiatria", "Traumatologia", "Urologia", "Nutrição", 
    "Dermatologia", "Psicologia", "Geriatria", "Endocrino", 
    "Ginecologia", "Pediatria"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Activity className="w-4 h-4" />
            Saúde Conectada
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Telemedicina que <br />
            <span className="text-accent italic font-light">funciona onde você estiver.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unimos tecnologia e atendimento humanizado para garantir assistência médica ágil e segura para você e sua família.
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

        {/* Especialidades - Design Moderno e Legível */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-accent" />
                <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Cuidado Especializado</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                Principais Especialidades <br />
                <span className="text-accent italic font-light">Disponíveis na Rede Shalom</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full border border-success/20">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-success uppercase tracking-widest">Especialistas Disponíveis</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {specialties.map((spec, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-5 rounded-2xl border border-slate-200 transition-all duration-300 hover:bg-primary hover:border-primary cursor-default shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-white tracking-tight transition-colors">
                    {spec}
                  </span>
                  <ChevronRight className="w-4 h-4 text-accent/40 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              +500 especialistas prontos para atender você via vídeo ou chat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

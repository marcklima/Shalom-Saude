"use client";

import { PhoneCall, FileText, ClipboardCheck, ArrowUpRight, Activity, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

export function Telemedicine() {
  const features = [
    { 
      icon: <PhoneCall className="w-8 h-8" />, 
      title: "Atendimento 24h", 
      desc: "Sem hora marcada, 365 dias por ano com médicos de plantão." 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: "Receita Digital", 
      desc: "Prescrições válidas em todo o território nacional via SMS ou E-mail." 
    },
    { 
      icon: <ClipboardCheck className="w-8 h-8" />, 
      title: "Atestado Digital", 
      desc: "Documentação com validade jurídica e assinatura digital certificada." 
    }
  ];

  const specialties = [
    "Cardiologia", "Ortopedia", "Otorrino", "Neurologia", 
    "Psiquiatria", "Traumatologia", "Urologia", "Nutrição", 
    "Dermatologia", "Psicologia", "Geriatria", "Endocrino", 
    "Ginecologia", "Pediatria"
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Elementos Decorativos de Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Activity className="w-4 h-4" />
            Saúde na palma da mão
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            O futuro da medicina <br />
            <span className="text-accent italic font-light underline decoration-accent/30 underline-offset-8">conectado a você.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unimos tecnologia de ponta com atendimento humanizado para garantir que sua única preocupação seja o seu bem-estar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden"
            >
              <div className="mb-8 inline-block text-accent bg-white p-5 rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Specialties - Modern & Clean Redesign */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-primary/5 relative overflow-hidden">
          {/* Subtle Watermark Pattern */}
          <div className="absolute inset-0 bg-watermark-medical opacity-[0.03] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-5 h-5 text-accent" />
                <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">Cuidados Especializados</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tighter leading-tight">
                Especialidades Clínicas <br />
                <span className="text-accent italic font-light">Disponíveis Agora</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-3 bg-success/5 px-6 py-3 rounded-2xl border border-success/10">
              <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
              <span className="text-xs font-black text-success uppercase tracking-widest">Especialistas Online</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
            {specialties.map((spec, i) => (
              <div 
                key={i} 
                className={cn(
                  "group relative bg-white p-6 rounded-[2rem] border border-slate-100 transition-all duration-300",
                  "hover:bg-primary hover:border-primary hover:shadow-xl hover:-translate-y-1 cursor-default"
                )}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-white tracking-tight transition-colors">
                    {spec}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(n => (
                  <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/doc_med_${n}/100/100`} alt="Doctor" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">+500 Especialistas Prontos para Atender</p>
            </div>
            
            <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] bg-accent/5 px-4 py-2 rounded-full">
              Atendimento via Chat ou Vídeo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

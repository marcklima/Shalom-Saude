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
    <section className="py-32 bg-white relative overflow-hidden bg-watermark-dna">
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
              className="group relative p-10 rounded-[2.5rem] bg-background border border-border/50 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,59,119,0.15)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="mb-8 inline-block text-accent bg-accent/10 p-5 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="w-20 h-20 border-4 border-accent rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Specialties Redesign - Dashboard Style */}
        <div className="relative">
          <div className="bg-primary p-1 md:p-1.5 rounded-[4rem] shadow-2xl overflow-hidden group">
            <div className="bg-white rounded-[3.8rem] p-8 md:p-16 relative overflow-hidden">
              {/* Watermark Pattern */}
              <div className="absolute inset-0 bg-watermark-plus opacity-[0.04] pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 relative z-10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="w-5 h-5 text-accent" />
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Rede de Excelência Shalom</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-primary tracking-tighter leading-none">
                    Especialidades Clínicas <br />
                    <span className="text-accent italic font-light">Disponíveis em Segundos</span>
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-3 bg-success/10 px-6 py-3 rounded-2xl border border-success/20">
                    <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.5)]" />
                    <span className="text-xs font-black text-success uppercase tracking-widest">Especialistas Online 24/7</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 relative z-10">
                {specialties.map((spec, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "group relative bg-slate-50 p-6 rounded-[2rem] border border-transparent transition-all duration-500",
                      "hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 cursor-default"
                    )}
                  >
                    <div className="flex flex-col h-full items-center text-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:rotate-12 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-white" />
                      </div>
                      <span className="text-sm font-black text-primary group-hover:text-white tracking-tight transition-colors">
                        {spec}
                      </span>
                    </div>
                    
                    {/* Hover Decoration Glow */}
                    <div className="absolute -inset-2 bg-accent/0 rounded-[2.5rem] -z-10 blur-xl group-hover:bg-accent/10 transition-all duration-500" />
                  </div>
                ))}
              </div>

              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(n => (
                      <div key={n} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                        <img src={`https://picsum.photos/seed/doc_spec_v2_${n}/100/100`} alt="Specialist" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] text-white font-black shadow-sm">
                      +500
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black text-primary uppercase tracking-widest">Equipe Multidisciplinar</p>
                    <p className="text-xs text-muted-foreground">Prontos para seu atendimento imediato</p>
                  </div>
                </div>

                <div className="bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100 italic text-muted-foreground text-xs font-medium max-w-md text-center md:text-right">
                  "O atendimento que você espera, com a tecnologia que você precisa. Agende agora e fale com um especialista em minutos."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
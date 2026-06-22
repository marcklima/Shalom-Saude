
import { PhoneCall, FileText, ClipboardCheck } from "lucide-react";

export function Telemedicine() {
  const features = [
    { icon: <PhoneCall className="w-8 h-8" />, title: "Atendimento 24h", desc: "Sem hora marcada, 365 dias por ano" },
    { icon: <FileText className="w-8 h-8" />, title: "Receita Digital", desc: "Aceita em farmácias de todo o Brasil" },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: "Atestado Digital", desc: "Validade jurídica garantida" }
  ];

  const specialties = [
    "Cardiologia", "Ortopedia", "Otorrinolaringologia", "Neurologia", 
    "Psiquiatria", "Traumatologia", "Urologia", "Nutrição", 
    "Dermatologia", "Psicologia", "Geriatria", "Endocrinologia", 
    "Ginecologia", "Pediatria"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="text-accent font-bold uppercase tracking-widest text-sm">Praticidade Total</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">O futuro da saúde é hoje</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          É simples, rápido e prático para você e sua família. Sem filas, sem burocracia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-2xl bg-background border border-border/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 text-accent bg-accent/10 p-4 rounded-full">{f.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 p-8 md:p-12 rounded-[2rem]">
          <h3 className="text-2xl font-bold text-primary mb-10">Especialidades Clínicas Disponíveis</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {specialties.map((spec, i) => (
              <div key={i} className="bg-white p-4 rounded-xl text-sm font-semibold text-primary/70 shadow-sm border border-primary/5 transition-all hover:bg-accent hover:text-white cursor-default group">
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

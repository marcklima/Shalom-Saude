
"use client";

import { Check, Heart, Users, Briefcase } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { useState } from "react";

export function Pricing() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const plans = [
    {
      name: "Plano Individual",
      price: "29,90",
      icon: <Heart className="w-6 h-6" />,
      features: ["Telemedicina 24h", "Saúde Mental Digital", "Assistência Funerária", "Rede de Descontos", "Sem Carência"],
      color: "border-slate-200",
      accent: "bg-slate-500",
      highlight: false
    },
    {
      name: "Plano Familiar",
      price: "24,90",
      icon: <Users className="w-6 h-6" />,
      subtitle: "Mínimo 03 vidas • por vida",
      features: ["Todos os benefícios Individual", "Até 5 Dependentes", "Gestão Simplificada", "+ R$ 24,90 por vida extra", "Melhor Custo-Benefício"],
      color: "border-accent",
      accent: "bg-accent",
      highlight: true
    },
    {
      name: "Plano Empresarial",
      price: "21,90",
      icon: <Briefcase className="w-6 h-6" />,
      subtitle: "Mínimo 10 vidas • por vida",
      features: ["Faturamento via Boleto", "Gestor de Conta Exclusivo", "Dashboards de Saúde", "Inclusão via Planilha", "Upgrade Imediato"],
      color: "border-primary",
      accent: "bg-primary",
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-background overflow-hidden relative bg-watermark-dna">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Invista em Você</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">Planos que cabem no bolso, <br/> <span className="text-accent">proteção que abraça a vida.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Sem letras miúdas. Sem multas abusivas. Apenas a liberdade de cuidar da sua saúde com transparência total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`
                relative bg-white rounded-[3rem] p-10 transition-all duration-500 flex flex-col border-4
                ${plan.highlight ? `${plan.color} shadow-2xl z-20 md:scale-105` : 'border-transparent shadow-xl z-10'}
                ${hoveredIdx !== null && hoveredIdx !== i ? 'opacity-40 scale-[0.97] grayscale' : 'opacity-100'}
                hover:-translate-y-4 hover:shadow-accent/20 group
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-success text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] animate-pulse shadow-xl whitespace-nowrap">
                  🔥 O MAIS ESCOLHIDO Pelas Famílias
                </div>
              )}
              
              <div className="mb-10 text-center">
                <div className={`w-14 h-14 rounded-2xl ${plan.accent} text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  {plan.icon}
                </div>
                <h3 className={`text-2xl font-black mb-6 ${plan.highlight ? 'text-accent' : 'text-primary'}`}>{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-muted-foreground">R$</span>
                  <span className="text-7xl font-black text-primary tracking-tighter">{plan.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/mês</span>
                </div>
                {plan.subtitle && <p className="text-[10px] text-accent font-black mt-4 uppercase bg-accent/5 py-2 rounded-full tracking-widest">{plan.subtitle}</p>}
              </div>

              <div className="space-y-6 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="bg-success/10 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground font-bold">{f}</span>
                  </div>
                ))}
              </div>

              <CtaButton 
                className={`w-full text-lg py-8 rounded-[1.5rem] shadow-xl ${plan.highlight ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`} 
                pulse={plan.highlight}
              >
                Aderir {plan.name}
              </CtaButton>
              
              <p className="text-[9px] text-center text-muted-foreground mt-6 font-black uppercase tracking-[0.2em] opacity-50">
                Cancelamento grátis via WhatsApp
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

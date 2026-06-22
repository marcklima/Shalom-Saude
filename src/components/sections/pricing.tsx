
"use client";

import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { useState } from "react";

export function Pricing() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const plans = [
    {
      name: "Plano Individual",
      price: "29,90",
      features: ["Telemedicina 24h", "Assistência Funerária", "Não permite dependentes"],
      highlight: false
    },
    {
      name: "Plano Familiar",
      price: "24,90",
      subtitle: "Mínimo 03 vidas • por vida",
      features: ["Telemedicina 24h", "Assistência Funerária", "Dependentes (3 a 5 pessoas)", "+ R$ 24,90 por vida extra"],
      highlight: true
    },
    {
      name: "Plano Empresarial",
      price: "21,90",
      subtitle: "Mínimo 10 vidas • por vida",
      features: ["Telemedicina 24h", "Assistência Funerária", "Permite dependentes", "+ R$ 21,90 por vida extra"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Investimento em Vida</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6 tracking-tight">Escolha Seu Caminho</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Transparência total. Sem letras miúdas, apenas o cuidado que você merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`
                relative bg-white rounded-[2.5rem] p-10 transition-all duration-500 flex flex-col border-2
                ${plan.highlight ? 'border-accent shadow-2xl z-20 md:scale-105' : 'border-transparent shadow-xl z-10'}
                ${hoveredIdx !== null && hoveredIdx !== i ? 'opacity-50 scale-[0.98] grayscale-[0.2]' : 'opacity-100'}
                hover:-translate-y-4 hover:shadow-accent/10
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-success text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] animate-tag-pulse shadow-lg whitespace-nowrap">
                  O MAIS ESCOLHIDO Pelas Famílias
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className={`text-2xl font-black mb-6 ${plan.highlight ? 'text-accent' : 'text-primary'}`}>{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-muted-foreground">R$</span>
                  <span className="text-6xl font-black text-primary tracking-tighter">{plan.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/mês</span>
                </div>
                {plan.subtitle && <p className="text-[10px] text-accent font-black mt-4 uppercase bg-accent/5 py-1.5 rounded-full">{plan.subtitle}</p>}
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-4 group/item">
                    <div className="bg-success/10 p-1.5 rounded-full transition-colors group-hover/item:bg-success group-hover/item:text-white">
                      <Check className="w-4 h-4 text-success group-hover/item:text-inherit" />
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">{f}</span>
                  </div>
                ))}
              </div>

              <CtaButton 
                className={`w-full text-lg py-7 rounded-2xl ${plan.highlight ? 'bg-accent' : 'bg-primary'}`} 
                pulse={plan.highlight}
              >
                Aderir Agora
              </CtaButton>
              
              <p className="text-[10px] text-center text-muted-foreground mt-4 font-bold uppercase tracking-widest">
                Cancelamento grátis a qualquer momento
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

export function Pricing() {
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Planos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Escolha a melhor opção para você, sua família ou sua empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-[2rem] p-8 shadow-xl border-2 flex flex-col ${plan.highlight ? 'border-accent scale-105 z-10' : 'border-transparent'}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-muted-foreground">R$</span>
                  <span className="text-5xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/mês</span>
                </div>
                {plan.subtitle && <p className="text-xs text-accent font-bold mt-2 uppercase">{plan.subtitle}</p>}
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <CtaButton className="w-full text-base py-4" pulse={plan.highlight}>
                Escolher Plano
              </CtaButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

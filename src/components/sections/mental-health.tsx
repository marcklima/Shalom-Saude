
import { Brain, Heart, ShieldCheck, Lock } from "lucide-react";

export function MentalHealth() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent/5 p-10 rounded-[2rem] border border-accent/10">
            <div className="bg-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Saúde Mental</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acesso rápido e ilimitado a psicólogos, reduzindo o estresse e aumentando a performance. Investir em saúde mental é investir em resultados reais para sua vida.
            </p>
          </div>

          <div className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10">
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Assistência Funeral (Grupo Zelo)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Suporte especializado para sua família em momentos sensíveis. Cobertura completa com a segurança de um dos maiores grupos de assistência do Brasil.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-muted-foreground font-semibold">
            <ShieldCheck className="w-6 h-6 text-success" />
            <span>LGPD Compliance</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground font-semibold">
            <Lock className="w-6 h-6 text-success" />
            <span>Criptografia SSL (256-bit)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

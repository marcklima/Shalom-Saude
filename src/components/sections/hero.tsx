
import { CheckCircle2 } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

export function Hero() {
  const bullets = [
    "Cadastro 100% digital e sem papel.",
    "Identidade validada e revisada com segurança.",
    "Termo digital pronto para download imediato.",
    "Gestão e inclusão simplificada de dependentes."
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
            Sua Saúde Completa e Segura. <br />
            <span className="text-accent italic">Seja bem-vindo.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Cadastre-se para obter acesso total aos nossos serviços digitais de excelência. 
            Processo de adesão rápido, seguro e sem papel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-primary/5">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-primary/80">{bullet}</span>
              </div>
            ))}
          </div>

          <CtaButton>
            Começar Cadastro Agora
          </CtaButton>
          
          <p className="mt-6 text-xs text-muted-foreground font-medium flex items-center justify-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-success"></span>
            Acesso imediato após confirmação
          </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

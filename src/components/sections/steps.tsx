
export function Steps() {
  const steps = [
    { title: "Dados Pessoais", desc: "Nome, CPF, email e telefone" },
    { title: "Endereço", desc: "Informe seu endereço completo" },
    { title: "Dependentes", desc: "Adicione familiares se houver" },
    { title: "Termo", desc: "Revise o termo de adesão" },
    { title: "Confirmação", desc: "Confirme e finalize o cadastro" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Processo simples em 5 etapas</h2>
          <p className="text-muted-foreground">O cadastro leva menos de 10 minutos para ser concluído.</p>
        </div>

        <div className="relative">
          {/* Timeline bar (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

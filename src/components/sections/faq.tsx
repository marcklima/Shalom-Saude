
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function Faq() {
  const faqs = [
    {
      question: "O plano tem carência?",
      answer: "Não! Na Shalom Saúde você tem acesso imediato à telemedicina e todos os benefícios logo após a confirmação do pagamento. Sem filas e sem esperas."
    },
    {
      question: "Atende crianças e idosos?",
      answer: "Sim! Nosso plano individual ou familiar atende todas as idades. No plano familiar, você pode adicionar dependentes de qualquer idade com a mesma qualidade de atendimento."
    },
    {
      question: "Como funciona a receita digital?",
      answer: "Após a consulta via vídeo, o médico envia a receita, atestado ou pedido de exame diretamente para o seu WhatsApp ou E-mail com assinatura digital válida em todo o Brasil."
    },
    {
      question: "Quais são os descontos em farmácias?",
      answer: "Nossos assinantes contam com uma rede de mais de 30.000 farmácias parceiras em todo o Brasil, com descontos que podem chegar a 70% em medicamentos genéricos e de referência."
    },
    {
      question: "Como faço para cancelar?",
      answer: "O cancelamento é simples, sem multas abusivas e pode ser solicitado diretamente pelo nosso suporte via WhatsApp. Queremos que você fique conosco pela qualidade, não por contrato."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-watermark-plus opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Perguntas <span className="text-accent italic font-light">Comuns</span>
          </h2>
          <p className="text-muted-foreground font-medium">
            Tudo o que você precisa saber para cuidar da sua saúde com total tranquilidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-slate-50/50 hover:bg-white transition-colors">
                <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

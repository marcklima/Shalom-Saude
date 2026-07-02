
"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Mãe de 2 filhos",
      text: "O atendimento 24h salvou minha noite quando meu filho teve febre. Em 5 minutos o médico já estava na tela nos orientando. Incrível!",
      img: PlaceHolderImages.find(i => i.id === "testimonial-1")?.imageUrl
    },
    {
      name: "Ricardo Mendes",
      role: "Empresário",
      text: "A seção de saúde mental é excelente. Ter um psicólogo disponível sem burocracia mudou meu rendimento no trabalho e minha paz.",
      img: PlaceHolderImages.find(i => i.id === "testimonial-2")?.imageUrl
    },
    {
      name: "Família Oliveira",
      role: "Plano Familiar",
      text: "Economizamos mais de 60% comparado ao plano antigo e o atendimento é muito mais humano e rápido. Super recomendo!",
      img: PlaceHolderImages.find(i => i.id === "testimonial-3")?.imageUrl
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden bg-watermark-plus">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-success font-black uppercase tracking-widest text-xs">Prova Real</span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mt-4 mb-6 tracking-tight">Quem usa, confia e recomenda.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <Quote className="w-10 h-10 text-accent/10 mb-4" />
              <p className="text-muted-foreground italic mb-8 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                  <Image src={t.img || ""} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

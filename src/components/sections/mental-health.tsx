"use client";

import { Brain, Heart, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useRef, useState } from "react";

export function MentalHealth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const docImg = PlaceHolderImages.find(img => img.id === "doctor-authority");
  const familyImg = PlaceHolderImages.find(img => img.id === "happy-family");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden relative bg-watermark-plus">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-accent/5 p-10 rounded-[3rem] border border-accent/10 relative overflow-hidden group hover-lift">
              <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Brain className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Saúde Mental Prioritária</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Acesso imediato a psicólogos e psiquiatras. Nossa abordagem humanizada foca no seu equilíbrio emocional, essencial para uma vida produtiva e feliz.
              </p>
              <div className="flex -space-x-4 mb-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} width={100} height={100} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-accent flex items-center justify-center text-[10px] text-white font-bold">
                  +10k
                </div>
              </div>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">Vida com propósito e equilíbrio</p>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-80 relative group">
              <Image src={docImg?.imageUrl || ""} fill alt="Doctor" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-bold">Especialistas prontos para ouvir você.</p>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-80 relative group mt-12 sm:mt-0">
              <Image src={familyImg?.imageUrl || ""} fill alt="Happy Family" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-bold">Tranquilidade para quem você ama.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 border-t">
          <div className="flex items-center gap-3 text-muted-foreground font-black uppercase tracking-widest text-xs">
            <ShieldCheck className="w-6 h-6 text-success" />
            <span>LGPD Compliance</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground font-black uppercase tracking-widest text-xs">
            <Lock className="w-6 h-6 text-success" />
            <span>Criptografia 256-bit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
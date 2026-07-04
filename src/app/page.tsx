
import { Suspense } from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Telemedicine } from "@/components/sections/telemedicine";
import { PainRelief } from "@/components/sections/pain-relief";
import { MentalHealth } from "@/components/sections/mental-health";
import { VideoPresentation } from "@/components/sections/video-presentation";
import { Pricing } from "@/components/sections/pricing";
import { Steps } from "@/components/sections/steps";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { ReferralManager } from "@/components/referral-manager";
import { CtaButton } from "@/components/cta-button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body antialiased">
      <Suspense fallback={null}>
        <ReferralManager />
      </Suspense>
      <Header />
      
      <Hero />
      
      <div className="py-10 flex justify-center bg-white border-y">
        <CtaButton className="scale-105">Garantir Meu Acesso Agora <ArrowRight className="ml-2 w-5 h-5" /></CtaButton>
      </div>

      <PainRelief />

      <div className="py-10 flex justify-center bg-primary border-y border-white/10">
        <CtaButton className="bg-accent hover:bg-white hover:text-accent shadow-accent/20">Quero Telemedicina 24h</CtaButton>
      </div>

      <Telemedicine />

      <div className="py-10 flex justify-center bg-white border-y">
        <CtaButton variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">Ver Todas Especialidades</CtaButton>
      </div>

      <VideoPresentation />

      <MentalHealth />

      <div className="py-10 flex justify-center bg-white border-y">
        <CtaButton className="bg-success">Cuidar da Minha Saúde Mental</CtaButton>
      </div>

      <Testimonials />

      <div className="py-10 flex justify-center bg-background border-y">
        <CtaButton>Conhecer Planos e Preços</CtaButton>
      </div>

      <Pricing />

      <div className="py-10 flex justify-center bg-white border-y">
        <CtaButton pulse={false}>Escolher Meu Plano</CtaButton>
      </div>

      <Steps />

      <Faq />

      {/* Seção Final de Conversão */}
      <section className="py-32 md:py-48 bg-accent text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-10 backdrop-blur-sm border border-white/20">
            Acesso Vitalício à Plataforma
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Sua nova jornada de <br/> <span className="text-primary italic">saúde começa agora.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Leve menos de 10 minutos para garantir assistência de saúde premium para quem você mais ama.
          </p>
          <div className="flex flex-col items-center gap-8">
            <CtaButton className="bg-primary hover:bg-white hover:text-primary py-8 px-12 text-xl shadow-2xl scale-110">
              Quero Me Cadastrar Agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </CtaButton>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-5 h-5 text-success" />
                Ambiente 100% Seguro
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-grid-subtle text-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  );
}

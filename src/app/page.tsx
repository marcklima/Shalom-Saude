
import { Suspense } from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Telemedicine } from "@/components/sections/telemedicine";
import { PainRelief } from "@/components/sections/pain-relief";
import { HealthOrientation } from "@/components/sections/health-orientation";
import { MentalHealth } from "@/components/sections/mental-health";
import { Pricing } from "@/components/sections/pricing";
import { Steps } from "@/components/sections/steps";
import { Footer } from "@/components/sections/footer";
import { ReferralManager } from "@/components/referral-manager";
import { CtaButton } from "@/components/cta-button";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <ReferralManager />
      </Suspense>
      <Header />
      <Hero />
      <PainRelief />
      <Telemedicine />
      <HealthOrientation />
      <MentalHealth />
      <Pricing />
      <Steps />
      
      {/* Final CTA Section - Separated with high impact */}
      <section className="py-40 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-sm border border-accent/20">
            Acesso Vitalício à Plataforma
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Sua nova jornada de <br/> <span className="text-accent">saúde começa agora.</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-70 mb-16 max-w-2xl mx-auto leading-relaxed">
            Menos de 10 minutos para garantir a paz de espírito vitalícia para você e quem você mais ama.
          </p>
          <div className="flex flex-col items-center gap-10">
            <CtaButton className="bg-accent hover:bg-white hover:text-accent py-10 px-16 text-2xl shadow-[0_20px_60px_rgba(20,121,165,0.4)] scale-110">
              Quero Me Cadastrar Agora
            </CtaButton>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-5 h-5 text-success" />
                Ambiente 100% Criptografado
              </div>
              <p className="text-white/40 text-xs font-medium italic">
                * Sem carência para consultas via telemedicina
              </p>
            </div>
          </div>
        </div>
        
        {/* Professional Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      </section>

      {/* Added breathing space before footer */}
      <div className="h-20 bg-primary border-t border-white/5" />
      <Footer />
    </main>
  );
}

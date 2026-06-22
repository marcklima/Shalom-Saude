
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
      
      {/* Final CTA Section */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Sua nova jornada de <br/> saúde começa agora.</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Menos de 10 minutos para garantir a paz de espírito para você e seus dependentes.
          </p>
          <div className="flex flex-col items-center gap-8">
            <CtaButton className="bg-accent hover:bg-white hover:text-accent py-8 px-12 text-xl shadow-2xl scale-110">
              Quero Me Cadastrar Agora
            </CtaButton>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] bg-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-success" />
              Ambiente 100% Criptografado e Seguro
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      </section>

      <Footer />
    </main>
  );
}

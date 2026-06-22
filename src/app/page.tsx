
import { Suspense } from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Telemedicine } from "@/components/sections/telemedicine";
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
      <Telemedicine />
      <HealthOrientation />
      <MentalHealth />
      <Pricing />
      <Steps />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-accent text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para se cadastrar?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Leva menos de 10 minutos para completar o processo. Garanta agora sua tranquilidade.
          </p>
          <div className="flex flex-col items-center gap-6">
            <CtaButton className="bg-white text-accent hover:bg-white/90 shadow-2xl">
              Começar Cadastro Agora
            </CtaButton>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-black/10 px-4 py-2 rounded-full">
              <ShieldCheck className="w-5 h-5 text-success" />
              Sistema de cadastro digital seguro
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

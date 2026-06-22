
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold mb-6">SHALOM <span className="text-accent">SAÚDE</span></div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Sua plataforma completa de saúde e assistência. Cuidando de você e sua família com tecnologia e segurança.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-accent">Links Úteis</h5>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">Admin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-accent">Contato</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent" />
                <span>suporte@shalom.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent" />
                <span>+55 (11) 3000-0000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-xs text-primary-foreground/40 font-medium uppercase tracking-widest">
          © 2026 SHALOM Saúde. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

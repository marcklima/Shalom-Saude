
import { ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary font-bold text-2xl tracking-tight">
            SHALOM <span className="text-accent">SAÚDE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Selo Telemedicina
          </div>
        </div>
      </div>
    </header>
  );
}

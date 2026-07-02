
"use client";

import { useState } from "react";
import { orientToSpecialty, AiHealthOrientationToolOutput } from "@/ai/flows/ai-health-orientation-tool";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, Stethoscope } from "lucide-react";

export function HealthOrientation() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiHealthOrientationToolOutput | null>(null);

  const handleOrient = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    try {
      const res = await orientToSpecialty({ symptoms });
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-white">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Assistente IA Shalom</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Não sabe qual médico procurar?</h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Descreva seus sintomas e nossa inteligência artificial irá orientar você para a especialidade mais adequada.
              </p>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Ex: Estou com uma dor de cabeça constante há 3 dias..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-32 focus-visible:ring-accent"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <Button 
                  onClick={handleOrient} 
                  disabled={loading || !symptoms.trim()}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Stethoscope className="w-4 h-4 mr-2" />}
                  Obter Orientação Agora
                </Button>
              </div>
            </div>

            <div className="p-8 md:p-12 flex items-center justify-center bg-accent/5">
              {!result && !loading && (
                <div className="text-center text-muted-foreground">
                  <Stethoscope className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p className="text-sm">Preencha seus sintomas ao lado para ver a recomendação.</p>
                </div>
              )}

              {loading && (
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-accent" />
                  <p className="font-medium animate-pulse">Analisando seus sintomas...</p>
                </div>
              )}

              {result && !loading && (
                <div className="w-full animate-in fade-in slide-in-from-bottom-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-accent/20">
                    <span className="text-[10px] font-bold uppercase bg-accent text-white px-2 py-1 rounded mb-4 inline-block">Recomendação Shalom</span>
                    <h4 className="text-2xl font-bold text-primary mb-2">{result.recommendedSpecialty}</h4>
                    <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      &ldquo;{result.reasoning}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

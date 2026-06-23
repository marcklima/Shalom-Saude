
"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CtaButtonProps extends ButtonProps {
  pulse?: boolean;
}

export function CtaButton({ className, children, pulse = true, ...props }: CtaButtonProps) {
  // Sua URL de afiliado personalizada e obrigatória
  const affiliateUrl = "https://shalon-saude.vercel.app/cadastro?ref=MARCELO-LIMA";

  return (
    <Button
      asChild
      className={cn(
        "bg-success hover:bg-success/90 text-white font-bold text-lg px-8 py-6 h-auto transition-all shadow-lg hover:shadow-success/20 hover:-translate-y-1 active:scale-95",
        pulse && "animate-pulse-slow",
        className
      )}
      {...props}
    >
      <Link href={affiliateUrl}>
        {children}
      </Link>
    </Button>
  );
}

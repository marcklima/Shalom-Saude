
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  pulse?: boolean;
}

export function CtaButton({ className, children, pulse = true, ...props }: CtaButtonProps) {
  return (
    <Button
      className={cn(
        "bg-success hover:bg-success/90 text-white font-bold text-lg px-8 py-6 h-auto transition-all shadow-lg hover:shadow-success/20",
        pulse && "animate-pulse-slow",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

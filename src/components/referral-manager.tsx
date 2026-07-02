
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ReferralManager() {
  const searchParams = useSearchParams();
  const [ref, setRef] = useState<string | null>(null);

  useEffect(() => {
    const referral = searchParams.get("ref");
    if (referral) {
      localStorage.setItem("shalom_ref", referral);
      setRef(referral);
    } else {
      setRef(localStorage.getItem("shalom_ref"));
    }
  }, [searchParams]);

  if (!ref) return null;

  return (
    <div className="bg-primary/5 py-1 px-4 text-center text-xs text-primary font-medium border-b border-primary/10">
      Consultor Parceiro: <span className="font-bold">{ref}</span>
    </div>
  );
}

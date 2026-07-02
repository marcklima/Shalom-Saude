
import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SHALOM Saúde | Telemedicina 24h e Plano de Saúde Digital Familiar',
  description: 'Proteja sua família com a SHALOM Saúde. Telemedicina ilimitada 24h, apoio à Saúde Mental e rede de descontos em farmácias. Cadastro 100% digital e sem carência.',
  keywords: 'plano de saúde digital, telemedicina 24 horas, saúde mental online, assistência familiar, descontos em farmácias, shalom saúde',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className="font-body antialiased selection:bg-success/30">
        {children}
      </body>
    </html>
  );
}

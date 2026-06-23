
import type {Metadata} from 'next';
import './globals.css';

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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-success/30">
        {children}
      </body>
    </html>
  );
}

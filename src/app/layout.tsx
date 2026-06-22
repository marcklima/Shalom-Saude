
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SHALOM Saúde | Sua Saúde Completa e Segura',
  description: 'Planos de saúde com Telemedicina, Assistência Funeral e Saúde Mental. Cadastro 100% digital.',
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

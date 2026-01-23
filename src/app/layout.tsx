import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Essa seria a descrição dessa pagína",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Titulo da Pagina</h1>
        </header>

        <div className="bg-blue-400">{children}</div>

        <footer>
          <h1>Este é o rodape da Pagina</h1>
        </footer>
      </body>
    </html>
  );
}

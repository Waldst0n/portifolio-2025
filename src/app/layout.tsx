import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/themeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://portifolio-2025.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Waldston Santana · Desenvolvedor Fullstack",
    template: "%s · Waldston Santana",
  },
  description:
    "Portfólio de Waldston Santana — Desenvolvedor Fullstack especializado em React, React Native, Next.js e Node.js.",
  keywords: [
    "Waldston Santana",
    "Desenvolvedor Fullstack",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfólio",
  ],
  authors: [{ name: "Waldston Santana", url: "https://github.com/Waldst0n" }],
  creator: "Waldston Santana",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Waldston Santana · Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack apaixonado por criar soluções escaláveis e de alto desempenho com React, Next.js e Node.js.",
    siteName: "Portfólio de Waldston Santana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waldston Santana · Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack — React, React Native, Next.js e Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

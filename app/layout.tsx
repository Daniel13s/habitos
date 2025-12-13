import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-book Hábitos Que Transformam | Mude sua rotina em 30 dias",
  description:
    "Aprenda hábitos simples e comprovados para transformar sua rotina, aumentar foco, disciplina e produtividade em apenas 30 dias.",
  keywords: [
    "hábitos",
    "hábitos positivos",
    "mudança de hábitos",
    "produtividade",
    "disciplina",
    "autodesenvolvimento",
    "ebook hábitos",
  ],
  openGraph: {
    title: "Hábitos Que Transformam",
    description:
      "Um guia prático para criar hábitos que mudam sua vida em 30 dias.",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

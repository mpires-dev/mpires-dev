import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matheus Pires | Fullstack Developer",
  description: "Fullstack Developer specialized in TypeScript and AI-first product delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} dark`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col font-body selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main className="flex-1 mt-16 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

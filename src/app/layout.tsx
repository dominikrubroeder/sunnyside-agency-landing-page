import "./globals.css";
import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const fraunces = Fraunces({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Sunnyside Agency landing page",
  description:
    "Frontend challenge by frontendmentor.io, developed by Dominik Rubröder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} ${fraunces.variable} text-lg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedStore - Online Pharmacy",
  description: "India's trusted online pharmacy for medicines and healthcare products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          {/* <TestimonialsSection/> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECE Engineer Portfolio | MERN & IoT Developer",
  description: "Portfolio showcasing expertise in MERN Stack, Embedded Systems, IoT (Arduino, ESP32, Raspberry Pi), and modern web development.",
  keywords: ["ECE Engineer", "MERN Stack", "IoT", "Embedded Systems", "Arduino", "ESP32", "Raspberry Pi", "Web Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

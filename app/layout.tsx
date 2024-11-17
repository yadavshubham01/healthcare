import type { Metadata } from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import React from "react";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weights: ['300',"400","600","500", "700"] ,variable: '--font-sans'});

export const metadata: Metadata = {
  title: "AppointMed",
  description: "Your medical companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-dark-400 font-sans antialiased ", fontSans.variable)}>{children}</body>
    </html>
  );
}

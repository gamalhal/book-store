import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/Navbar";
import ThemeDebug from "@/components/theme/ThemeDebug";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Store - متجر الكتب الإلكتروني",
  description: "متجر كتب إلكتروني حديث يقدم مجموعة واسعة من الكتب في مختلف المجالات - Book Store by Gamal Hal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <ThemeDebug />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

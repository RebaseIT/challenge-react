"use client"
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Roboto({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={inter.className} style={{backgroundColor: '#B0B0A0', minHeight: '100vh'}}>
      <div style={{
          height: '100%',
          padding: 16,
          paddingRight:24,
          paddingLeft:24
      }}>
        {children}
      </div>
    </main>
  );
}
import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from "@/app/components/header/NavBar";
import Footer from "@/app/components/footer/Footer";

import GoogleAnalytics from "@/app/components/analytics/GoogleAnalytics";

// rafce

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moravský webdesign',
  description: 'Moravský webdesign',
  authors: [ { name: 'David Kojecký', url: 'https://codefit.cz' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
        <GoogleAnalytics></GoogleAnalytics>
      <body className={inter.className} >
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

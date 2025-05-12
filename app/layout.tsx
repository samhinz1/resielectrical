import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TMES Electrical - Quality Home Electrical Solutions",
  description:
    "Tambourine Mountain Electrical Services",
  icons: {
    icon: '/tmes.png',
    apple: '/tmes.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tmes.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

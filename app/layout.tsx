import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Define basePath for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/lopeselectrical' : '';

export const metadata: Metadata = {
  title: "Lopes Electrical - Quality Home Electrical Solutions",
  description:
    "Lopes Electrical Services",
  icons: {
    icon: `${basePath}/zap.svg`,
    apple: `${basePath}/zap.svg`,
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
        <link rel="icon" href={`${basePath}/zap.svg`} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

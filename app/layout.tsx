import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Define basePath for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/vpowerelectrical' : '';

export const metadata: Metadata = {
  title: "VPOWER Electrical Services - Quality Home Electrical Solutions",
  description:
    "VPower Electrical Services",
  icons: {
    icon: `${basePath}/VPOWER ICON.svg`,
    apple: `${basePath}/VPOWER ICON.svg`,
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
        <link rel="icon" href={`${basePath}/VPOWER ICON.svg`} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

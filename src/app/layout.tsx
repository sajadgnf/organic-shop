import "./globals.css"
import Head from "@module/header-links"
import { Inika, Roboto } from "next/font/google"

const inika = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inika",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Organic shop",
  description: "organic shop for anyone how is looking for fresh fruits and juices ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-secondary-light ${inika.variable} ${roboto.variable}`}>
        <Head />
        {children}
      </body>
    </html>
  )
}

import "./globals.css"
import { Inika, Roboto } from "next/font/google"
import HeaderLink from "@components/module/header-links/page"

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
      <body className={`min-h-screen ${inika.variable} ${roboto.variable}`}>
        <HeaderLink />
        {children}
      </body>
    </html>
  )
}

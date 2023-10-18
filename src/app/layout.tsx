import "./globals.css"
import ReduxProvider from "./reduxProvider"
import { Inika, Roboto } from "next/font/google"
import ToastContainer from "../components/atom/toast"

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
  themeColor: "#FDBD43",
  manifest: "/manifest.json",
  description: "organic shop for anyone how is looking for fresh fruits and juices ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`body relative min-h-screen ${inika.variable} ${roboto.variable}`}>
        <ReduxProvider>
          <ToastContainer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}

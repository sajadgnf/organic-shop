import Typography from "@atom/typography/page"
import "./globals.css"
import { Inika, Roboto } from "next/font/google"
import Button from "@atom/button/page"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import Stack from "@atom/stack/page"
import Link from "next/link"

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
        <Stack
          variant="header"
          className="pt-3.5 px-28 bg-[url('/images/header-img.svg')] bg-cover bg-no-repeat bg-center h-screen items-start"
        >
          <Stack className="justify-between w-[100%]">
            <Stack className="space-x-10">
              <Stack variant="section">
                <img src="./images/orange.svg" />
                <Typography variant="h1" className="header-title !text-4xl">
                  rganic shop
                </Typography>
              </Stack>

              <Stack variant="section" className="space-x-10">
                <Link href="" className="font-inika font-normal	text-2xl">
                  Home
                </Link>
                <Link href="" className="font-inika font-normal	text-2xl">
                  Shop
                </Link>
                <Link href="" className="font-inika font-normal	text-2xl">
                  Contact
                </Link>
                <Link href="" className="font-inika font-normal	text-2xl">
                  Blog
                </Link>
              </Stack>
            </Stack>

            <Stack className="space-x-3">
              <Button variant="contained" className="font-inika ">
                Sign Up
              </Button>
              <Button variant="contained" size="small">
                <ShoppingBagIcon className="h-6 w-6" />
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {children}
      </body>
    </html>
  )
}

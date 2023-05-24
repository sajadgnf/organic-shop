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
          className="bg-[url('/images/header-img.svg')] bg-cover bg-no-repeat bg-center h-screen flex-col items-start font-inika pt-3.5 px-28"
        >
          <Stack className="justify-between w-full">
            <Stack className="space-x-10">
              <Stack variant="section">
                <img src="./images/orange.svg" />
                <Typography variant="h1" component="h4" className="header-title">
                  rganic shop
                </Typography>
              </Stack>

              <Stack variant="section" className="space-x-10 text-2xl">
                <Link href="">Home</Link>
                <Link href="">Shop</Link>
                <Link href="">Contact</Link>
                <Link href="">Blog</Link>
              </Stack>
            </Stack>

            <Stack className="space-x-3">
              <Button variant="contained">Sign Up</Button>
              <Button variant="contained" size="small">
                <ShoppingBagIcon className="h-8 w-8" />
              </Button>
            </Stack>
          </Stack>

          <Stack className="flex-1 flex-col items-start space-y-5 w-[40%]">
            <Typography component="h3" className="font-bold">
              Here are
            </Typography>
            <Typography component="h5">Organic products from the heart of nature</Typography>
            <Button variant="contained" size="large">
              Shop Now
            </Button>
          </Stack>
        </Stack>
        {children}
      </body>
    </html>
  )
}

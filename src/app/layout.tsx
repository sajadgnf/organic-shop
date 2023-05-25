import "./globals.css"
import Link from "next/link"
import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import { Inika, Roboto } from "next/font/google"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

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
        <Stack className="justify-between w-full fixed top-0 px-28">
          <Stack className="space-x-10">
            <Link href="/">
              <img src="./images/logo.svg" alt="organic shop لوگوی شاپ میباشد" />
            </Link>

            <Stack variant="section" className="space-x-10 text-2xl">
              <Link className={`header-link`} href="/">
                Home
              </Link>
              <Link className="header-link" href="store">
                Shop
              </Link>
              <Link className="header-link" href="contact">
                Contact
              </Link>
              <Link className="header-link" href="blog">
                Blog
              </Link>
            </Stack>
          </Stack>

          <Stack className="space-x-3">
            <Button variant="contained">Sign Up</Button>
            <Button variant="contained" size="small">
              <ShoppingBagIcon className="h-8 w-8" />
            </Button>
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

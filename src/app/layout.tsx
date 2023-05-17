import Typography from "@atom/typography/page"
import "./globals.css"
import { Inika, Roboto } from "next/font/google"
import Button from "@atom/button/page"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import Stack from "@atom/stack/page"

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
      <body className={`min-h-screen container mx-auto ${inika.variable} ${roboto.variable}`}>
        <Stack variant="header">
          <Stack>
            <img src="./images/orange.svg" />
            <Typography variant="h5" className="header-title">
              rganic shop
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">Shop</Typography>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="h6">Blog</Typography>
          </Stack>

          <Stack>
            <Button variant="contained" className="font-inika">
              Sing Up
            </Button>
            <Button variant="contained" size="small">
              <ShoppingBagIcon className="h-6 w-6" />
            </Button>
          </Stack>
        </Stack>
        {children}
      </body>
    </html>
  )
}

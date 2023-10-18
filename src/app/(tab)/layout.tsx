import Footer from "@module/footer"
import Head from "@module/header-links"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  )
}

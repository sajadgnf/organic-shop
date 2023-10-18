import Footer from "@module/footer"
import StackHead from "@module/header-links/stack-header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StackHead />
      {children}
      <Footer />
    </>
  )
}

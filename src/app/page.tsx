import Stack from "@atom/stack/page"
import Slider from "@hooks/slider/page"

const slides = ["/images/slide1.svg", "/images/slide2.svg",  "/images/slide3.svg"]

function Home() {
  return (
    <Stack variant="main" className="mt-28">
      <Slider slides={slides} />
    </Stack>
  )
}

export default Home

import Stack from "@atom/stack/page"
import Categories from "@organism/categories/page"
import Slider from "@hooks/slider/page"

const slides = ["/images/slide1.svg", "/images/slide2.svg", "/images/slide3.svg"]

function Home() {
  return (
    <Stack variant="main" className="mt-28 flex-col space-y-28">
      <Slider slides={slides} />

      <Stack className="container mx-auto flex-col items-start space-y-28 transition-all ease-out ">
        <Categories />
      </Stack>
    </Stack>
  )
}

export default Home

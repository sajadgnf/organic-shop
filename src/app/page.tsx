import Stack from "@atom/stack"
import Slider from "@hooks/slider"
import Categories from "@organism/categories"
import SpecialOffer from "@organism/special-offer"
import BestSellerProduct from "@organism/best-seller"

const slides = ["/images/slide1.svg", "/images/slide2.svg", "/images/slide3.svg"]

function Home() {
  return (
    <Stack variant="main" className="mt-28 flex-col space-y-28">
      <Slider slides={slides} />

      <Stack className="container mx-auto flex-col items-start space-y-28 transition-all ease-out">
        <Categories />
        <BestSellerProduct />
        <SpecialOffer />
      </Stack>
    </Stack>
  )
}

export default Home

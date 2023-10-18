import Stack from "@atom/stack"
import Slider from "@hooks/slider"
import Categories from "@organism/categories"
import TopHomeBlog from "@organism/top-home-blog"
import MidHomeBlog from "@organism/mid-home-blog"
import SpecialOffer from "@organism/special-offer"
import HomeComments from "@organism/home-comments"
import BestSellerProduct from "@organism/best-seller"
import BottomHomeBlog from "@organism/bottom-home-blog"

const slides = ["/images/slider/slide1.svg", "/images/slider/slide2.svg", "/images/slider/slide3.svg"]

function Home() {
  return (
    <Stack variant="main" className="sm:mt-8 lg:mt-26 mt-[3px] flex-col space-y-12 sm:space-y-28">
      <Slider slides={slides} />
      <Stack className="container flex-col items-start space-y-14 sm:space-y-28">
        <Categories />
        <BestSellerProduct />
        <SpecialOffer />
      </Stack>

      <TopHomeBlog />
      <MidHomeBlog />
      <BottomHomeBlog />

      <Stack className="container flex-col items-start space-y-28">
        <HomeComments />
      </Stack>
    </Stack>
  )
}

export default Home
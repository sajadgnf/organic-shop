import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import Slider from "@hooks/slider/page"
import Typography from "@atom/typography/page"

const slides = [
  {
    path: "/images/slide1.svg",
    content: (
      <Stack className="flex-1 flex-col space-y-5 w-[40%] p-28 mr-auto items-start">
        <Typography component="h3" className="font-bold">
          Here are
        </Typography>
        <Typography component="h5">Organic products from the heart of nature</Typography>
        <Button variant="contained" size="large">
          Shop Now
        </Button>
      </Stack>
    ),
  },
  {
    path: "/images/slide2.svg",
    content: (
      <Stack className="flex-1 flex-col space-y-5 w-[40%] p-28 mr-auto items-start">
        <Typography component="h3" className="font-bold">
          Here are
        </Typography>
        <Typography component="h5">Organic products from the heart of nature</Typography>
        <Button variant="contained" size="large">
          Shop Now
        </Button>
      </Stack>
    ),
  },
  {
    path: "/images/logo.svg",
  },
]

function Home() {
  return (
    <Stack variant="main" className="mt-28">
      <Slider slides={slides} />
    </Stack>
  )
}

export default Home

import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import Slider from "@/hooks/slider/page"
import Typography from "@atom/typography/page"

const images = [
  {
    path: "/images/header-img.svg",
    content: (
      <Stack className="flex-1 flex-col space-y-5 w-[40%] items-start">
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
]

function Home() {
  return (
    <main>
      <Slider images={images} />
    </main>
  )
}

export default Home

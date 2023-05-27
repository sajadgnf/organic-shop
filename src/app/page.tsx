import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import Typography from "@atom/typography/page"

function Home() {
  return (
    <main>
      <Stack className="bg-[url('/images/header-img.svg')] bg-cover bg-no-repeat bg-center h-screen flex-col items-start font-inika px-28">
        <Stack className="flex-1 flex-col space-y-5 w-[40%] items-start">
          <Typography component="h3" className="font-bold">
            Here are
          </Typography>
          <Typography component="h5">Organic products from the heart of nature</Typography>
          <Button variant="contained" size="large">
            Shop Now
          </Button>
        </Stack>
      </Stack>
    </main>
  )
}

export default Home

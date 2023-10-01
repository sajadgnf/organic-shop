import React from "react"
import Stack from "@atom/stack"
import Typography from "@atom/typography"

const FAQs = () => {
  return (
    <Stack className="container mx-auto mt-32 flex-col space-y-10 py-6 md:py-0 bg-white md:bg-inherit">
      <Typography variant="h3" className="text-center">Frequently Asked Questions</Typography>
      <Stack className="flex-col rounded-xl md:p-12 space-y-12 bg-white">
        <Stack className="w-full flex-col space-y-3 border-b pb-12 items-start">
          <Typography variant="h5">1. What is Organic Shop?</Typography>
          <Typography>
            Organic Shop is your go-to online store for the finest organic fruits. We are committed to providing you with
            top-quality, sustainably grown produce.
          </Typography>
        </Stack>

        <Stack className="w-full flex-col space-y-3 border-b pb-12 items-start">
          <Typography variant="h5">2. Are your fruits really organic?</Typography>
          <Typography>
            Absolutely! We work closely with organic farmers who follow strict organic farming practices, ensuring that our fruits
            are free from harmful chemicals and pesticides.
          </Typography>
        </Stack>

        <Stack className="w-full flex-col space-y-3 border-b pb-12 items-start">
          <Typography variant="h5">3. Do you offer delivery services?</Typography>
          <Typography>
            Yes, we provide fast and reliable delivery services to bring fresh organic fruits right to your doorstep.
          </Typography>
        </Stack>

        <Stack className="w-full flex-col space-y-3 border-b pb-12 items-start">
          <Typography variant="h5">4. What payment methods do you accept?</Typography>
          <Typography>
            We accept various payment methods, including credit cards, debit cards, and PayPal, to make your shopping experience
            convenient.
          </Typography>
        </Stack>

        <Stack className="w-full flex-col space-y-3 items-start">
          <Typography variant="h5">5. Can I return my order if I am not satisfied?</Typography>
          <Typography>
            Yes, we have a hassle-free return policy. If you are not satisfied with your order, please contact our customer
            support, and we will assist you with the return process.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FAQs

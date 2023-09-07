import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { CONTACT } from "routes"
import Typography from "@atom/typography"

const Cookies = () => {
  return (
    <Stack className="flex-col space-y-16 container mt-32 mx-auto">
      <Stack className="flex-col space-y-6 items-start w-full">
        <Typography variant="h3">Cookies Policy</Typography>
        <Typography>
          This website uses cookies to ensure you get the best experience on our site. By continuing to use our site, you consent
          to our use of cookies.
        </Typography>
      </Stack>

      <Stack className="flex-col space-y-6 items-start">
        <Typography variant="h4">What Are Cookies?</Typography>
        <Typography>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely
          used to make websites work efficiently, improve user experience, and provide information to website owners.
        </Typography>
      </Stack>

      <Stack className="flex-col space-y-6 items-start w-full">
        <Typography variant="h4">How We Use Cookies</Typography>
        <Typography>At Organic Shop, we use cookies for various purposes, including:</Typography>
        <Stack variant="ul" className="flex-col items-start">
          <li>Ensuring website functionality</li>
          <li>Analyzing website traffic and usage patterns</li>
          <li>Improving our services and user experience</li>
        </Stack>
      </Stack>

      <Stack className="flex-col space-y-6 items-start">
        <Typography variant="h4">Your Cookie Options</Typography>
        <Typography>
          You can choose to accept or decline cookies when you first visit our website. Most web browsers automatically accept
          cookies, but you can usually modify your browser settings to decline cookies if you prefer.
        </Typography>
      </Stack>

      <Stack className="flex-col space-y-6 items-start w-full">
        <Typography variant="h4">More Information</Typography>
        <Typography>
          If you would like to learn more about cookies and how to manage them, please refer to our <a href="#">Cookie Policy</a>.
        </Typography>
      </Stack>
      <Link href={CONTACT} className="w-full">
        <Stack className="flex-col space-y-6 items-start">
          <Stack className="flex-col space-y-6 items-start">
            <Typography variant="h4">Contact Us</Typography>
            <Typography>
              Have questions or need assistance? Our friendly customer support team is here to help. Feel free to contact us for
              any inquiries or feedback. Your satisfaction is our top priority.
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  )
}

export default Cookies

import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <Stack className="bg-secondary-main mt-24 pt-20">
      <Stack className="container items-start justify-between">
        <Image src="/images/logo.svg" alt="main logo image" width={258} height={80} />

        <table>
          <tbody>
            <tr className="[&>td]:pr-14 [&>td]:py-2">
              <td>Home</td>
              <td>Terms</td>
              <td>Contact us</td>
            </tr>
            <tr className="[&>td]:pr-14 [&>td]:py-2">
              <td>Shop</td>
              <td>privacy</td>
              <td>About us</td>
            </tr>
            <tr className="[&>td]:pr-14 [&>td]:py-2">
              <td>Blog</td>
              <td>Cookies</td>
              <td>FAQs</td>
            </tr>
          </tbody>
        </table>

        <Stack className="flex-col">
          <Typography variant="label" for="email">
            Do not miss the news
          </Typography>
          //TODO: develope custom Input component
          <input placeholder="Your e-mail address" name="email" id="email" />
          <Button variant="contained">Submit</Button>
        </Stack>
      </Stack>
      <hr />
      <Stack></Stack>
    </Stack>
  )
}

export default Footer

import Button from "@atom/button"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <Stack className="bg-secondary-main mt-24 flex-col">
      <Stack className=" max-w-[1830px] w-full items-start mt-24 mb-16 justify-between lg:px-32 pr-3">
        <Stack className="space-x-14">
          <Image src="/images/logo.svg" alt="main logo image" width={258} height={80} />

          <table>
            <tbody>
              <tr className="[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer font-bold">
                <td>Home</td>
                <td>Terms</td>
                <td>Contact us</td>
              </tr>
              <tr className="[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer font-bold">
                <td>Shop</td>
                <td>privacy</td>
                <td>About us</td>
              </tr>
              <tr className="[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer font-bold">
                <td>Blog</td>
                <td>Cookies</td>
                <td>FAQs</td>
              </tr>
            </tbody>
          </table>
        </Stack>

        <Input
          name="email"
          label=" Do not miss the news"
          placeholder="Your e-mail address"
          endIcon={<Button variant="contained">Submit</Button>}
        />
      </Stack>

      <Stack className="w-full border-t border-t-secondary-dark py-5">
        <Typography>© 2020 Lift Media. All rights reserved</Typography>
      </Stack>
    </Stack>
  )
}

export default Footer

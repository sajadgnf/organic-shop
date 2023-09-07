import React from "react"
import Image from "next/image"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import Link from "next/link"
import { ABOUT, BLOG, CONTACT, COOKIES, FAQS, HOME, PRIVACY, STORE, TERMS } from "routes"

const Footer = () => {
  return (
    <Stack className="bg-secondary-main mt-24 flex-col">
      <Stack className="flex-col md:flex-row space-y-10 max-w-[1830px] w-full lg:items-start my-2 md:mt-24 md:mb-16 justify-between lg:px-32 pr-3">
        <Stack className="flex-col space-y-10 md:space-y-0 lg:flex-row lg:space-x-14 md:items-start">
          <Image src="/images/logo.svg" alt="main logo image" width={258} height={80} className="w-[180px] sm:w-[258px]" />

          <table className="w-full md:ml-3 lg:ml-0">
            <tbody className="w-full">
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
                <td>
                  <Link href={HOME}>Home</Link>
                </td>
                <td>
                  <Link href={TERMS}>Terms</Link>
                </td>
                <td>
                  <Link href={CONTACT}>Contact us</Link>
                </td>
              </tr>
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
                <td>
                  <Link href={STORE}>Shop</Link>
                </td>
                <td>
                  <Link href={PRIVACY}> privacy</Link>
                </td>
                <td>
                  <Link href={ABOUT}>About us</Link>
                </td>
              </tr>
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-2 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
                <td>
                  <Link href={BLOG}>Blog</Link>
                </td>
                <td>
                  <Link href={COOKIES}>Cookies</Link>
                </td>
                <td>
                  <Link href={FAQS}>FAQs</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Stack>

        <Input
          name="email"
          className="w-[250px] xs:w-[360px] md:w-[450px]"
          label=" Do not miss the news"
          placeholder="Your e-mail address"
          endIcon={
            <Button variant="contained" size="small">
              Submit
            </Button>
          }
        />
      </Stack>

      <Stack className="w-full border-t border-t-secondary-dark py-5">
        <Typography>© 2020 Lift Media. All rights reserved</Typography>
      </Stack>
    </Stack>
  )
}

export default Footer

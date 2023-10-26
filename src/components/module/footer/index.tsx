import React from "react"
import Image from "next/image"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import Link from "next/link"
import { ABOUT, BLOG, CONTACT, COOKIES, FAQS, HOME, PRIVACY, STORE, TERMS } from "routes"
import NewsInput from "./newsInput"

const Footer = () => {
  return (
    <Stack className="bg-secondary-main w-full mt-24 mb-16 md:mb-0 flex-col">
      <Stack className="flex-col xmd:flex-row space-y-8 md:space-y-10 max-w-[1830px] w-full items-start my-2 md:mt-24 md:mb-16 justify-between lg:px-32 px-2 md:px-0">
        <Stack className="w-full justify-between lg:space-x-14 md:items-start">
          <Image
            src="/images/logo.svg"
            alt="main logo image"
            width={258}
            height={80}
            className="w-[120px] sm:w-[180px] md:w-[258px]"
          />

          <table className="w-1/2">
            <tbody className="w-full">
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-3 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
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
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-5 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
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
              <tr className="flex justify-between md:inline-block w-full md:[&>td]:pr-14 [&>td]:py-3 [&>td]:cursor-pointer text-[12px] sm:text-[16px] font-bold">
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

        <NewsInput />
      </Stack>

      <Stack className="w-full border-t border-t-secondary-dark py-5">
        <Typography>© 2020 Lift Media. All rights reserved</Typography>
      </Stack>
    </Stack>
  )
}

export default Footer

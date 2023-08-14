"use client"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import React, { ChangeEvent, useState } from "react"
import Image from "next/image"

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  return (
    <Stack className="container flex-col space-y-10 lg:flex-row mt-10 sm:mt-32 md:mt-36 w-full justify-between">
      <Stack className="flex-col items-start space-y-8 md:!w-[50%]">
        <Typography variant="h4">
          Love to hear from you, <br /> Get in touch
        </Typography>
        <Input label="Your name" name="name" className="w-full" value={info.name} onChange={onChangeHandler} />
        <Input label="Your email" name="email" type="email" className="w-full" value={info.email} onChange={onChangeHandler} />
        <Input
          label="Message"
          name="message"
          multiLine={true}
          rows={3}
          className="w-full"
          value={info.message}
          onChange={onChangeHandler}
        />
        <Button variant="contained" className="w-full">
          Send
        </Button>
      </Stack>

      <hr className="w-full lg:hidden"/>

      <Stack className="flex-col items-start space-y-8">
        <Typography variant="h5">Phone: 09120000000</Typography>
        <Typography variant="h5">Email: organic@example.com</Typography>

        <Stack className="space-x-4 [&>img]:cursor-pointer">
          <Image src="/images/telegram.svg" alt="telegram icon" width={40} height={40} />
          <Image src="/images/twitter.svg" alt="telegram icon" width={40} height={40} />
          <Image src="/images/instagram.svg" alt="telegram icon" width={40} height={40} />
          <Image src="/images/email.svg" alt="telegram icon" width={40} height={40} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Contact

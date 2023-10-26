"use client"
import React from "react"
import * as Yup from "yup"
import Image from "next/image"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import toast from "react-hot-toast"
import Typography from "@atom/typography"
import { FormikHelpers, useFormik } from "formik"

const validation = Yup.object().shape({
  name: Yup.string().trim().min(2, "Name should have at least two words").required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().trim().min(10, "Message content should have at least ten words").required("Message content is required"),
})

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const base_url = process.env.BASE_URL

  const onSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
    toast.success("Thank You for your message")
    resetForm()
  }

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema: validation,
  })

  return (
    <Stack className="container flex-col space-y-10 lg:flex-row mt-24 sm:mt-32 md:mt-36 w-full justify-between">
      <form onSubmit={formik.handleSubmit} className="flex-col items-start space-y-8 md:!w-[50%]">
        <Typography variant="h4">
          Love to hear from you, <br /> Get in touch
        </Typography>
        <Input label="Your name" name="name" className="w-full" formik={formik} />
        <Input label="Your email" name="email" type="email" className="w-full" formik={formik} />
        <Input label="Message" name="message" multiLine={true} rows={3} className="w-full" formik={formik} />
        <Button variant="contained" className="w-full">
          Send
        </Button>
      </form>

      <hr className="w-full lg:hidden" />

      <Stack className="flex-col items-start space-y-8">
        <Typography variant="h5">Phone: 09120000000</Typography>
        <Typography variant="h5">Email: organic@example.com</Typography>

        <Stack className="space-x-4 [&>img]:cursor-pointer">
          <Image src={`${base_url}/telegram.svg`} alt="telegram icon" width={40} height={40} />
          <Image src={`${base_url}/twitter.svg`} alt="telegram icon" width={40} height={40} />
          <Image src={`${base_url}/instagram.svg`} alt="telegram icon" width={40} height={40} />
          <Image src={`${base_url}/email.svg`} alt="telegram icon" width={40} height={40} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Contact

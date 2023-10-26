"use client"
import React from "react"
import * as Yup from "yup"
import Input from "@atom/input"
import Button from "@atom/button"
import { useFormik } from "formik"
import toast from "react-hot-toast"

const validation = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

const NewsInput = () => {
  const onSubmit = () => {
    toast.success("Subscription successful! Get ready for our latest news and updates")
  }

  const formik = useFormik({
    onSubmit,
    validationSchema: validation,
    initialValues: { email: "" },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        formik={formik}
        className=" xmd:!w-[450px]"
        label=" Do not miss the news"
        placeholder="Your e-mail address"
        endIcon={
          <Button variant="contained" size="small" type="submit">
            Submit
          </Button>
        }
      />
    </form>
  )
}

export default NewsInput

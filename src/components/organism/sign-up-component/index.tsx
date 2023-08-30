"use client"
import Image from "next/image"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import { SIGNIN, SIGNUP, SMSVERIFICATION } from "routes"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SignUpComponent = () => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const phoneParam = searchParams.get("phone")
  const [phone, setPhone] = useState(phoneParam || "")

  const title = pathName === SIGNIN ? "Sing in" : "Sign up"
  const subTitle = pathName === SIGNIN ? "New to Organic Shop?" : "Already have an account"
  const buttonText = pathName === SIGNIN ? "Create you Organic Shop account" : "Sign in"

  const navigationHandler = () => {
    router.push(pathName === SIGNIN ? SIGNUP : SIGNIN)
  }

  const singinHandler = (e: FormEvent) => {
    e.preventDefault()
    router.push(`${SMSVERIFICATION}?pathName=${pathName}&phone=${phone}`)
  }

  return (
    <Stack className="mt-4 sm:mt-32 flex-col space-y-4">
      <Image src="images/logo.svg" alt="organic shop logo" width={200} height={100} />

      <Stack
        variant="form"
        onSubmit={singinHandler}
        className="flex-col bg-white rounded-lg border px-10 py-8 items-start space-y-5"
      >
        <Typography variant="h5">{title}</Typography>
        <Input
          type="number"
          name="login"
          label="Mobile phone number"
          required
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
        <Button variant="contained" type="submit" className="w-full">
          Continue
        </Button>

        <Typography variant="caption" className="text-gray-900">
          By continuing, you agree to Organic Shop's Conditions of <br className="hidden xs:block" /> Use and Privacy Notice.
        </Typography>
      </Stack>

      <Stack className="flex-col space-y-2">
        <Typography variant="caption">{subTitle}</Typography>
        <Button variant="outlined" size="small" className="w-full" onClick={navigationHandler}>
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  )
}

export default SignUpComponent

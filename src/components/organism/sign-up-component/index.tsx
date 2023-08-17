import React from "react"
import Image from "next/image"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import SwitchSignupButton from "./switchSignupButton"

const SignUpComponent = () => {
  return (
    <Stack className="mt-4 sm:mt-32 flex-col space-y-4">
      <Image src="images/logo.svg" alt="organic shop logo" width={200} height={100} />

      <Stack className="flex-col bg-white rounded-lg border px-10 py-8 items-start space-y-5">
        <Typography variant="h5">Sign in</Typography>
        <Input type="number" name="login" label="Mobile phone number" />
        <Button variant="contained" className="w-full">
          Continue
        </Button>

        <Typography variant="caption" className="text-gray-900">
          By continuing, you agree to Organic Shop's Conditions of <br className="hidden xs:block" /> Use and Privacy Notice.
        </Typography>
      </Stack>

      <SwitchSignupButton />
    </Stack>
  )
}

export default SignUpComponent

"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import toast from "react-hot-toast"
import OTPInput from "react-otp-input"
import Typography from "@atom/typography"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { HOME } from "routes"

const SMSVerification = () => {
  const router = useRouter()
  const [otp, setOtp] = useState("")
  const searchParams = useSearchParams()
  const phone = searchParams.get("phone")
  const pathName = searchParams.get("pathName")

  const editNumberHandler = () => {
    router.push(`${pathName}?phone=${phone}`)
  }

  useEffect(() => {
    if (otp === "1111") {
      toast.success("welcome")
      router.push(HOME)
    } else if (otp.length === 4) {
      toast.error("wrong code, try again")
    }
  }, [otp])

  return (
    <Stack className="w-full">
      <Stack className="mt-4 sm:mt-32 flex-col bg-white rounded-lg border px-10 py-8 space-y-10">
        <Stack className="flex-col space-y-4">
          <Typography variant="h5">02:00</Typography>

          <Typography className="text-gray-400 text-center">
            Verification code has been sent, If you do not receive the code,
            <br /> <Button disabled>hit send again</Button>
          </Typography>
        </Stack>

        <OTPInput
          value={otp}
          numInputs={4}
          onChange={setOtp}
          shouldAutoFocus={true}
          containerStyle={{ gap: 15 }}
          inputStyle={{ height: 47, borderRadius: 8, border: `1px solid grey`, width: 47 }}
          renderInput={(props) => <input {...props} />}
        />

        <Button onClick={editNumberHandler} className="flex space-x-1 items-center">
          <Typography>on number: {phone}</Typography>
          <PencilSquareIcon className="text-primary-main" width={20} />
        </Button>
      </Stack>
    </Stack>
  )
}

export default SMSVerification

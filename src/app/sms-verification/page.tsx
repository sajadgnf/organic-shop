"use client"
import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import OTPInput from "react-otp-input"

const SMSVerification = () => {
  const searchParams = useSearchParams()
  const phone = searchParams.get("phone")
  const [otp, setOtp] = useState("")

  useEffect(() => {
    if (otp === "1111") {
      toast.success("welcome")
    }
    toast.error("wrong code, try again")
  }, [otp])

  return (
    <Stack className="w-full">
      <Stack className="mt-4 sm:mt-32 flex-col bg-white rounded-lg border px-10 py-8 space-y-10">
        <Stack className="flex-col space-y-4">
          <Typography variant="h5">02:00</Typography>

          <Typography className="text-gray-400">
            Verification code has been sent, If you do not receive the code, hit send again
          </Typography>

          <Button disabled>Resubmit the code</Button>
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

        <Stack className="space-x-1 items-start">
          <Typography>on number: {phone}</Typography>
          <PencilSquareIcon className="text-primary-main" width={20} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SMSVerification

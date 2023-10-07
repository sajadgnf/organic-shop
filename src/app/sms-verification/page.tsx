"use client"
import { HOME } from "routes"
import Stack from "@atom/stack"
import Button from "@atom/button"
import toast from "react-hot-toast"
import OTPInput from "react-otp-input"
import Typography from "@atom/typography"
import { useDispatch } from "react-redux"
import { login } from "@src/store/slice/loginSlice"
import React, { useEffect, useRef, useState } from "react"
import convertPersianToEnglishNumber from "@hooks/en-number"
import { useRouter, useSearchParams } from "next/navigation"
import { PencilSquareIcon } from "@heroicons/react/24/solid"

const SMSVerification = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const countdownRef = useRef(120)
  const [otp, setOtp] = useState("")
  const searchParams = useSearchParams()
  const phone = searchParams.get("phone")
  const pathName = searchParams.get("pathName")
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const countdownElementRef = useRef<HTMLParagraphElement | null>(null)

  const editNumberHandler = () => {
    router.push(`${pathName}?phone=${phone}`)
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0")
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0")
    return `${minutes}:${seconds}`
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdownRef.current > 0) {
        countdownRef.current -= 1
        countdownElementRef.current && (countdownElementRef.current.textContent = formatTime(countdownRef.current).toString())
      } else {
        clearInterval(countdownInterval)
        setIsButtonEnabled(true)
      }
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [countdownRef.current])

  const startCountdown = () => {
    countdownRef.current = 120
    setIsButtonEnabled(false)
  }

  useEffect(() => {
    if (otp === "1111") {
      dispatch(login(phone))
      toast.success("welcome")
      router.push(HOME)
    } else if (otp.length === 4) {
      toast.error("wrong code, try again")
    }
  }, [otp])

  return (
    <Stack className="w-full">
      <Stack className="mt-24 sm:mt-32 flex-col sm:bg-white rounded-lg border px-10 py-8 space-y-10">
        <Stack className="flex-col space-y-4">
          <p className="text-2xl" ref={countdownElementRef}>
            02:00
          </p>

          <Typography className="text-gray-400 text-center">
            Verification code has been sent, If you do not receive the code,
            <br />
            <Button onClick={startCountdown} disabled={!isButtonEnabled} className="text-black">
              please click to resend
            </Button>
          </Typography>
        </Stack>

        <Stack className="flex-col space-y-2">
          <OTPInput
            value={otp}
            numInputs={4}
            onChange={(otp: string) => setOtp(convertPersianToEnglishNumber(otp))}
            shouldAutoFocus={true}
            containerStyle={{ gap: 15 }}
            inputStyle={{
              height: 47,
              borderRadius: 8,
              border: `${!isButtonEnabled ? "1px solid grey" : "1px solid #e9e9e9"}`,
              pointerEvents: `${!isButtonEnabled ? "all" : "none"}`,
              width: 47,
            }}
            renderInput={(props) => <input {...props} />}
          />
          <Typography>code is: 1111</Typography>
        </Stack>

        <Button onClick={editNumberHandler} className="flex space-x-1 items-center">
          <Typography>on number: {phone}</Typography>
          <PencilSquareIcon className="text-primary-main" width={20} />
        </Button>
      </Stack>
    </Stack>
  )
}

export default SMSVerification

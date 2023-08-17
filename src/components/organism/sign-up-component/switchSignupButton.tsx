"use client"
import React from "react"
import Button from "@atom/button"
import { SIGNIN, SIGNUP } from "routes"
import Typography from "@atom/typography"
import { useRouter, useSelectedLayoutSegment } from "next/navigation"

// TODO: segment is returning null

const SwitchSignupButton = () => {
  const router = useRouter()
  const segment = useSelectedLayoutSegment()

  const title = segment === "sign-in" ? "New to Organic Shop?" : "Already have an account"
  const buttonText = segment === "sign-in" ? "Create you Organic Shop account" : "Sign in"

  const navigationHandler = () => {
    router.push(segment === "sign-in" ? SIGNUP : SIGNIN)
  }

  return (
    <>
      <Typography variant="caption">{title}</Typography>
      <Button variant="outlined" size="small" onClick={navigationHandler}>
        {buttonText}
      </Button>
    </>
  )
}

export default SwitchSignupButton

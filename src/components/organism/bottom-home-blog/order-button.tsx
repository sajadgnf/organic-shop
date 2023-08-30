"use client"
import React from "react"
import { STORE } from "routes"
import Button from "@atom/button"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const OrderButton = () => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push(STORE)} className="text-primary-dark flex-row flex items-center space-x-1">
      <Typography className="text-lg">Read More</Typography>
      <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-6" />
    </Button>
  )
}

export default OrderButton

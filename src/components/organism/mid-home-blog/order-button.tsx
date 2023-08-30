'use client'
import React from "react"
import { STORE } from "routes"
import Button from "@atom/button"
import { useRouter } from "next/navigation"

const OrderButton = () => {
  const router = useRouter()
 
  return (
    <Button variant="contained" size="large" onClick={() => router.push(STORE)}>
      Order Now
    </Button>
  )
}

export default OrderButton

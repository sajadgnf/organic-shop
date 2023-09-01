import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import { STORE } from "routes"

const EmptyCart = () => {
  return (
    <Stack className="flex-col">
      <Image src="/images/empty-cart.svg" alt="empty cart image" width={420} height={300} className="mr-8" />
      <Stack className="flex-col space-y-8">
        <Typography variant="h4">Your shopping cart is empty!</Typography>
        <Link href={STORE}>
          <Button variant="contained" size="large">
            Back to Shop
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}

export default EmptyCart

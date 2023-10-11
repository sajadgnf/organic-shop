"use client"
import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { useRouter } from "next/navigation"

const ComingSoon = () => {
  const router = useRouter()
  return (
    <Stack className="w-full flex-col space-y-6">
      <Image src="/images/coming-soon.svg" alt="coming soon banner" width={700} height={500} />
      <Button variant="contained" onClick={() => router.back()} className="w-84">
        Go Back
      </Button>
    </Stack>
  )
}

export default ComingSoon

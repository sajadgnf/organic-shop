"use client"
import Stack from "@atom/stack"
import ComingSoon from "@module/coming-soon"
import { RootState } from "@src/store"
import { useRouter } from "next/navigation"
import React from "react"
import { useSelector } from "react-redux"
import { SIGNIN } from "routes"

const Profile = () => {
  const router = useRouter()
  const { phoneNumber } = useSelector((state: RootState) => state.loginSlice)

  if (!phoneNumber) return router.push(SIGNIN)

  return (
    <Stack className="mt-16">
      <ComingSoon />
    </Stack>
  )
}

export default Profile

"use client"
import React from "react"
import Stack from "@atom/stack"
import { SIGNIN } from "routes"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import ComingSoon from "@module/coming-soon"
import { logout } from "@src/store/slice/loginSlice"
import { useDispatch, useSelector } from "react-redux"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"

const Profile = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { phoneNumber } = useSelector((state: RootState) => state.loginSlice)

  if (!phoneNumber) return router.push(SIGNIN)

  return (
    <Stack className="container mt-24 items-end md:mt-16 flex-col">
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        className="md:hidden flex justify-between items-center w-[120px]"
      >
        <Typography>log out</Typography>
        <ArrowRightOnRectangleIcon width={20} />
      </Button>
      <ComingSoon />
    </Stack>
  )
}

export default Profile

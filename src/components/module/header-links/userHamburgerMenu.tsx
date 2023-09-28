"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Dialog from "@module/dialog"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ArrowRightOnRectangleIcon, ChevronDownIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/solid"
import { logout } from "@src/store/slice/loginSlice"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import { PROFILE } from "routes"

const UserHamburgerMenu = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Dialog id="user-container" setOpen={setOpen}>
      <Stack onClick={()=>setOpen(false)} className={open ? "flex bg-white rounded-lg p-2 absolute top-10 right-[-45px] flex-col space-y-2" : "hidden"}>
        <Button onClick={() => router.push(PROFILE)} className="flex justify-between items-center w-[120px]">
          <Typography>Profile</Typography>
          <UserCircleIcon width={20} />
        </Button>

        <hr className="w-full" />

        <Button onClick={() => dispatch(logout())} className="flex justify-between items-center w-[120px]">
          <Typography>log out</Typography>
          <ArrowRightOnRectangleIcon width={20} />
        </Button>
      </Stack>

      <Button size="small" onClick={() => setOpen(!open)} className="flex justify-between items-center ">
        <UserIcon width={25} className=" text-gray-700" />
        <ChevronDownIcon width={15} />
      </Button>
    </Dialog>
  )
}

export default UserHamburgerMenu

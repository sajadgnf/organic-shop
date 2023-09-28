import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import { UserIcon } from "@heroicons/react/24/solid"

type PropsType = {
  src?: string
}

const Avatar = ({ src }: PropsType) => {
  return (
    <Stack className="bg-secondary-main w-[60px] h-[60px] rounded-full">
      {src ? (
        <Image src={src} width={80} height={80} alt="avatar" key="image" />
      ) : (
        <UserIcon className="text-secondary-dark w-[80%]" key="icon" />
      )}
    </Stack>
  )
}

export default Avatar

import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import { UserIcon } from "@heroicons/react/24/solid"

type PropsType = {
  src?: string
}

const Avatar = ({ src }: PropsType) => {
  return (
    <Stack className="bg-secondary-main w-[83px] h-[83px] rounded-full">
      {src ? (
        <Image src={src} width={83} height={83} alt="avatar" key="image" />
      ) : (
        <UserIcon className="text-secondary-dark w-[80%]" key="icon" />
      )}
    </Stack>
  )
}

export default Avatar

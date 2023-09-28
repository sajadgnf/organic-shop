import Stack from "@atom/stack"
import Image from "next/image"
import React from "react"

const ComingSoon = () => {
  return (
    <Stack className="w-full flex-col">
      <Image src="/images/coming-soon.svg" alt="coming soon banner" width={700} height={500} />
    </Stack>
  )
}

export default ComingSoon

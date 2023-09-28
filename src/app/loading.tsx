import Stack from "@atom/stack"
import Image from "next/image"
import React from "react"

const loading = () => {
  return (
    <Stack className="w-full mt-32">
      <Image src="/images/loading.svg" alt="loading gif" width={300} height={300}/>
    </Stack>
  )
}

export default loading

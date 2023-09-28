import React from "react"
import Stack from "@atom/stack"
import LeftSide from "./leftSide"
import RightSide from "./rightSide"
import Links from "./links"

const Head = () => {
  return (
    <>
      <Stack className="fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full md:shadow-lg">
        <Stack className=" sm:pr-3 max-w-[1830px] w-full justify-between">
          <LeftSide />
          <RightSide />
        </Stack>
      </Stack>

      <Stack
        variant="section"
        className="fixed container md:hidden z-40 bg-white rounded-lg py-3 justify-between bottom-0 left-0 right-0 w-full space-x-10"
      >
        <Links />
      </Stack>
    </>
  )
}

export default Head

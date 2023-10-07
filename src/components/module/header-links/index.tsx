import React from "react"
import Stack from "@atom/stack"
import LeftSide from "./leftSide"
import RightSide from "./rightSide"
import Links from "./links"
import SearchProduct from "@module/search-products"

const Head = () => {
  return (
    <>
      <Stack className="fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full md:shadow-lg">
        <Stack className="md:hidden w-full ">
          <SearchProduct id='stor-search'/>
        </Stack>

        <Stack className="hidden md:flex sm:pr-3 max-w-[1830px] w-full justify-between md:pt-1">
          <LeftSide />
          <RightSide />
        </Stack>
      </Stack>

      <Stack
        variant="section"
        className="fixed container md:hidden z-40 bg-white rounded-t-lg py-3 justify-between bottom-0 left-0 right-0 w-full space-x-10"
      >
        <Links />
      </Stack>
    </>
  )
}

export default Head

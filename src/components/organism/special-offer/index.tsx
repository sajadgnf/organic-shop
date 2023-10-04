import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { STORE } from "routes"
import Typography from "@atom/typography"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import SpecialOfferList from "@organism/special-offer/list"

const SpecialOffer = () => {
  return (
    <Stack className="w-full flex-col space-y-4 md:space-y-10">
      <Link href={`${STORE}?filter=special-offer`} className="w-full">
        <Stack className="items-center justify-between">
          <Typography variant="h5">Special Offers</Typography>

          <Stack className="space-x-2">
            <Typography variant="h6" className="text-primary-dark">
              See all
            </Typography>
            <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-3 sm:w-6" />
          </Stack>
        </Stack>
      </Link>

      <SpecialOfferList />
    </Stack>
  )
}

export default SpecialOffer
